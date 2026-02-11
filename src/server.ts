import express from "express";
import cors from "cors";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
};

type Item = {
  id: number;
  title: string;
  summary: string;
  body: string;
  user: User | null;
};

const app = express();
const allowedOrigins = new Set<string>([
  "https://tyfnqczy.cdpad.io",
  "http://localhost:3000"
]);
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.has(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Access-Control-Request-Private-Network"]
  })
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Private-Network", "true");
  next();
});
app.use(express.json());

const API_BASE = "https://jsonplaceholder.typicode.com";
const CACHE_TTL_MS = 5 * 60 * 1000;

let cachedPosts: { data: Post[]; fetchedAt: number } | null = null;
let cachedUsers: { data: User[]; fetchedAt: number } | null = null;

async function fetchPosts(): Promise<Post[]> {
  if (cachedPosts && Date.now() - cachedPosts.fetchedAt < CACHE_TTL_MS) {
    return cachedPosts.data;
  }
  const res = await fetch(`${API_BASE}/posts`);
  if (!res.ok) {
    throw new Error(`Upstream posts error: ${res.status}`);
  }
  const data = (await res.json()) as Post[];
  cachedPosts = { data, fetchedAt: Date.now() };
  return data;
}

async function fetchUsers(): Promise<User[]> {
  if (cachedUsers && Date.now() - cachedUsers.fetchedAt < CACHE_TTL_MS) {
    return cachedUsers.data;
  }
  const res = await fetch(`${API_BASE}/users`);
  if (!res.ok) {
    throw new Error(`Upstream users error: ${res.status}`);
  }
  const data = (await res.json()) as User[];
  cachedUsers = { data, fetchedAt: Date.now() };
  return data;
}

function toItem(post: Post, usersById: Map<number, User>): Item {
  const summary = post.body.slice(0, 120).trim();
  return {
    id: post.id,
    title: post.title,
    summary: summary.length < post.body.length ? `${summary}...` : summary,
    body: post.body,
    user: usersById.get(post.userId) ?? null
  };
}

function sortItems(
  items: Item[],
  sortKey: string,
  order: "asc" | "desc"
): Item[] {
  const multiplier = order === "asc" ? 1 : -1;
  return [...items].sort((a, b) => {
    if (sortKey === "title") {
      return a.title.localeCompare(b.title) * multiplier;
    }
    if (sortKey === "userId") {
      const aId = a.user?.id ?? 0;
      const bId = b.user?.id ?? 0;
      return (aId - bId) * multiplier;
    }
    return (a.id - b.id) * multiplier;
  });
}

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/api/users", async (_req, res) => {
  try {
    const users = await fetchUsers();
    res.json({ users });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(502).json({ error: message });
  }
});

app.get("/api/items", async (req, res) => {
  try {
    const [posts, users] = await Promise.all([fetchPosts(), fetchUsers()]);
    const usersById = new Map(users.map((u) => [u.id, u]));

    const q = String(req.query.q ?? "").trim().toLowerCase();
    const userId = Number(req.query.userId ?? 0);
    const sort = String(req.query.sort ?? "id");
    const order = String(req.query.order ?? "asc") === "desc" ? "desc" : "asc";

    let items = posts.map((post) => toItem(post, usersById));

    if (userId > 0) {
      items = items.filter((item) => item.user?.id === userId);
    }

    if (q) {
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.body.toLowerCase().includes(q)
      );
    }

    items = sortItems(items, sort, order);

    res.json({
      total: items.length,
      items
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(502).json({ error: message });
  }
});

app.get("/api/items/:id", async (req, res) => {
  try {
    const itemId = Number(req.params.id);
    if (!Number.isFinite(itemId)) {
      res.status(400).json({ error: "Invalid id" });
      return;
    }

    const [posts, users] = await Promise.all([fetchPosts(), fetchUsers()]);
    const post = posts.find((p) => p.id === itemId);
    if (!post) {
      res.status(404).json({ error: "Not found" });
      return;
    }

    const usersById = new Map(users.map((u) => [u.id, u]));
    res.json({ item: toItem(post, usersById) });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(502).json({ error: message });
  }
});

const port = Number(process.env.PORT ?? 3001);
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
