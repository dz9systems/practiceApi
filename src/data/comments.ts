export interface Comment {
  id: string;
  ticketId: string;
  author: string;
  description: string; // NEW
  body: string;
  createdAt: string;
}


export const comments: Comment[] = [
  {
    id: "c1",
    ticketId: "t1",
    author: "Jordan",
    description: "Safari-specific rendering issue",
    body: "Confirmed reproduction on Safari 17.1. The form submission button does not trigger the onSubmit handler. Likely related to event propagation differences in WebKit.",
    createdAt: "2026-02-15T11:00:00Z"
  },
  {
    id: "c2",
    ticketId: "t1",
    author: "Isaiah",
    description: "Investigating form event handling logic",
    body: "Currently debugging the form component. The issue appears to stem from preventDefault not being applied correctly inside the custom hook.",
    createdAt: "2026-02-15T12:15:00Z"
  },
  {
    id: "c3",
    ticketId: "t2",
    author: "Avery",
    description: "Performance profiling recommendation",
    body: "Suggest running performance profiling using React DevTools Profiler. Initial suspicion is unnecessary re-renders caused by unstable props.",
    createdAt: "2026-02-14T09:00:00Z"
  },
  {
    id: "c4",
    ticketId: "t3",
    author: "Jordan",
    description: "Fix verified in staging",
    body: "Validated the patch in staging environment. All regression tests passed and no console warnings detected.",
    createdAt: "2026-02-10T18:30:00Z"
  },
  {
    id: "c5",
    ticketId: "t5",
    author: "Isaiah",
    description: "Payload validation root cause identified",
    body: "The backend rejects requests exceeding 1MB. Client-side validation needs to enforce file size constraints before submission.",
    createdAt: "2026-02-13T15:00:00Z"
  },
  {
    id: "c6",
    ticketId: "t6",
    author: "Avery",
    description: "Email delivery failure investigation",
    body: "SMTP logs indicate no outbound requests were triggered. Likely failure occurs before mail service invocation in the notification service.",
    createdAt: "2026-02-12T12:30:00Z"
  },
  {
    id: "c7",
    ticketId: "t7",
    author: "Jordan",
    description: "Component refactor complete",
    body: "Refactored the legacy class component into a functional component using hooks. Verified no breaking changes via unit tests.",
    createdAt: "2026-02-08T18:00:00Z"
  },
  {
    id: "c8",
    ticketId: "t8",
    author: "Isaiah",
    description: "Responsive layout fix",
    body: "Adjusted CSS media queries to properly handle breakpoints below 768px. Confirmed layout consistency across Chrome and Safari.",
    createdAt: "2026-02-11T14:10:00Z"
  },
  {
    id: "c9",
    ticketId: "t9",
    author: "Avery",
    description: "Export scalability concern",
    body: "Large dataset exports (>50k rows) time out. Recommend implementing backend streaming or pagination-based export mechanism.",
    createdAt: "2026-02-07T16:00:00Z"
  },
  {
    id: "c10",
    ticketId: "t10",
    author: "Jordan",
    description: "Database migration side effect",
    body: "Recent audit table migration may have introduced indexing issues. Query performance degraded significantly after deployment.",
    createdAt: "2026-02-06T11:30:00Z"
  }
];


