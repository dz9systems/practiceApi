export type Comment = {
  id: string;
  ticketId: string;
  author: string;
  body: string;
  createdAt: string; // ISO date string
};

export const comments: Comment[] = [
  {
    id: "c1",
    ticketId: "t1",
    author: "Jordan",
    body: "I can reproduce this on Safari 17.1.",
    createdAt: "2026-02-15T11:00:00Z"
  },
  {
    id: "c2",
    ticketId: "t1",
    author: "Isaiah",
    body: "Working on a fix related to the form event handler.",
    createdAt: "2026-02-15T12:15:00Z"
  },
  {
    id: "c3",
    ticketId: "t2",
    author: "Avery",
    body: "We should profile this using React DevTools.",
    createdAt: "2026-02-14T09:00:00Z"
  },
  {
    id: "c4",
    ticketId: "t3",
    author: "Jordan",
    body: "Verified the fix in staging.",
    createdAt: "2026-02-10T18:30:00Z"
  },
  {
    id: "c5",
    ticketId: "t5",
    author: "Isaiah",
    body: "Root cause appears to be payload size validation.",
    createdAt: "2026-02-13T15:00:00Z"
  },
  {
    id: "c6",
    ticketId: "t6",
    author: "Avery",
    body: "SMTP logs show no outgoing attempts.",
    createdAt: "2026-02-12T12:30:00Z"
  },
  {
    id: "c7",
    ticketId: "t7",
    author: "Jordan",
    body: "Refactor complete and tested.",
    createdAt: "2026-02-08T18:00:00Z"
  },
  {
    id: "c8",
    ticketId: "t8",
    author: "Isaiah",
    body: "CSS media query adjustment should resolve this.",
    createdAt: "2026-02-11T14:10:00Z"
  },
  {
    id: "c9",
    ticketId: "t9",
    author: "Avery",
    body: "We may need backend support for large exports.",
    createdAt: "2026-02-07T16:00:00Z"
  },
  {
    id: "c10",
    ticketId: "t10",
    author: "Jordan",
    body: "Audit table migration might have caused this.",
    createdAt: "2026-02-06T11:30:00Z"
  }
];
