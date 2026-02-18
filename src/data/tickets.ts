export type TicketStatus = "open" | "in_progress" | "done";
export type TicketPriority = "low" | "medium" | "high" | "urgent";

export type Ticket = {
  id: string;
  title: string;
  status: TicketStatus;
  priority: TicketPriority;
  assignee: string | null;
  createdAt: string; // ISO date string
  description: string;
};

export const tickets: Ticket[] = [
  {
    id: "t1",
    title: "Login page crashes on Safari",
    status: "open",
    priority: "high",
    assignee: "Isaiah",
    createdAt: "2026-02-15T10:30:00Z",
    description: "Users report the login page crashes on Safari 17 when submitting the form."
  },
  {
    id: "t2",
    title: "Improve dashboard performance",
    status: "in_progress",
    priority: "medium",
    assignee: "Jordan",
    createdAt: "2026-02-14T08:10:00Z",
    description: "Optimize rendering performance when displaying large ticket lists."
  },
  {
    id: "t3",
    title: "Fix password reset email link",
    status: "done",
    priority: "urgent",
    assignee: "Avery",
    createdAt: "2026-02-10T16:00:00Z",
    description: "Password reset links expire too quickly and sometimes redirect incorrectly."
  },
  {
    id: "t4",
    title: "Add dark mode support",
    status: "open",
    priority: "low",
    assignee: null,
    createdAt: "2026-02-09T09:45:00Z",
    description: "Users have requested a dark theme option in user settings."
  },
  {
    id: "t5",
    title: "API returns 500 on bulk update",
    status: "in_progress",
    priority: "urgent",
    assignee: "Isaiah",
    createdAt: "2026-02-13T14:20:00Z",
    description: "Bulk ticket update endpoint fails when updating more than 100 records."
  },
  {
    id: "t6",
    title: "Notifications not sent for comments",
    status: "open",
    priority: "high",
    assignee: "Jordan",
    createdAt: "2026-02-12T11:05:00Z",
    description: "Users are not receiving email notifications when comments are added."
  },
  {
    id: "t7",
    title: "Refactor ticket filtering logic",
    status: "done",
    priority: "medium",
    assignee: "Avery",
    createdAt: "2026-02-08T17:30:00Z",
    description: "Simplify and optimize filter utilities for maintainability."
  },
  {
    id: "t8",
    title: "Mobile layout breaks on iPhone SE",
    status: "open",
    priority: "high",
    assignee: null,
    createdAt: "2026-02-11T13:40:00Z",
    description: "Layout overflows horizontally on smaller mobile screens."
  },
  {
    id: "t9",
    title: "Export tickets to CSV",
    status: "in_progress",
    priority: "medium",
    assignee: "Isaiah",
    createdAt: "2026-02-07T15:15:00Z",
    description: "Allow users to export filtered ticket results to CSV format."
  },
  {
    id: "t10",
    title: "Audit log missing status changes",
    status: "done",
    priority: "low",
    assignee: "Jordan",
    createdAt: "2026-02-06T10:00:00Z",
    description: "Status transitions are not consistently logged in the audit table."
  }
];
