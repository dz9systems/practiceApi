import express from "express";
import cors from "cors";
import { users } from "./data/users.js";
import { posts } from "./data/posts.js";
import { itemRecords } from "./data/items.js";

const app = express();
const allowedOrigins = new Set<string>([
  "https://znm3acxj.cdpad.io",
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

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});


// GET USERS
app.get("/api/users", async (_req, res) => {
  try {
    res.json({ users });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(502).json({ error: message });
  }
});


// GET POSTS
app.get("/api/posts", async (_req, res) => {
  try {
    res.json({ posts });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(502).json({ error: message });
  }
});

// GET POST BY ID
app.get("/api/posts/:id", async (req, res) => {
  try {
    const postId = Number(req.params.id);
    if (!Number.isFinite(postId)) {
      res.status(400).json({ error: "Invalid id" });
      return;
    }
    const post = posts.find((p) => p.id === postId);
    if (!post) {
      res.status(404).json({ error: "Not found" });
      return;
    }
    res.json({ post });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(502).json({ error: message });
  }
});


// GET ITEMS
app.get("/api/items", async (req, res) => {
  try {
    const items = itemRecords;

    res.json({
      total: items.length,
      items
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(502).json({ error: message });
  }
});

// GET ITEM BY ID
app.get("/api/items/:id", async (req, res) => {
  try {
    const itemId = Number(req.params.id);
    if (!Number.isFinite(itemId)) {
      res.status(400).json({ error: "Invalid id" });
      return;
    }

    const item = itemRecords.find((record) => record.id === itemId);
    if (!item) {
      res.status(404).json({ error: "Not found" });
      return;
    }

    res.json({ item });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(502).json({ error: message });
  }
});


const port = Number(process.env.PORT ?? 3001);
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
