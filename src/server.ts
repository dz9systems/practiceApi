import express from "express";
import cors from "cors";
import { users } from "./data/users.js";
import { posts } from "./data/posts.js";
import { itemRecords } from "./data/items.js";
import { tickets } from "./data/tickets.js";
import { comments } from "./data/comments.js";

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: /https:\/\/.*\.cdpad\.io$/
}));


// Enable JSON body parsing for all routes
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


// GET TICKETS
app.get("/api/tickets", async (_req, res) => {
  try {
    res.json({ tickets });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(502).json({ error: message });
  }
});

// GET TICKET BY ID
app.get("/api/tickets/:id", async (req, res) => {
  try {
    const ticketId = req.params.id;
    const ticket = tickets.find((t) => t.id === ticketId);
    if (!ticket) {
      res.status(404).json({ error: "Not found" });
      return;
    }
    res.json({ ticket });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(502).json({ error: message });
  }
});

// GET COMMENTS
app.get("/api/comments", async (_req, res) => {
  try {
    res.json({ comments });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(502).json({ error: message });
  }
});

// GET COMMENT BY ID
app.get("/api/comments/:id", async (req, res) => {
  try {
    const commentId = req.params.id;
    const comment = comments.find((c) => c.id === commentId);
    if (!comment) {
      res.status(404).json({ error: "Not found" });
      return;
    }
    res.json({ comment });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(502).json({ error: message });
  }
});

// GET COMMENTS BY TICKET ID
app.get("/api/tickets/:id/comments", async (req, res) => {
  try {
    const ticketId = req.params.id;
    const ticket = tickets.find((t) => t.id === ticketId);
    if (!ticket) {
      res.status(404).json({ error: "Not found" });
      return;
    }
    const ticketComments = comments.filter((c) => c.ticketId === ticketId);
    res.json({ comments: ticketComments });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(502).json({ error: message });
  }
});


const port = Number(process.env.PORT ?? 3001);
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
