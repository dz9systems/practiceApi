export type ItemRecord = {
  id: number;
  title: string;
  summary: string;
  body: string;
  userId: number;
};

export const itemRecords: ItemRecord[] = [
  {
    id: 201,
    title: "Quarterly roadmap update",
    summary: "We refreshed the roadmap to highlight reliability, onboarding, and design debt cleanup.",
    body: "We refreshed the roadmap to highlight reliability, onboarding, and design debt cleanup. Each team now has two top-level objectives with clear success metrics.",
    userId: 1
  },
  {
    id: 202,
    title: "Research synthesis notes",
    summary: "Themes from interviews include clearer setup steps and more confidence in first use.",
    body: "Themes from interviews include clearer setup steps and more confidence in first use. We plan to create a new onboarding checklist and reduce the number of required fields.",
    userId: 2
  },
  {
    id: 203,
    title: "Analytics improvements",
    summary: "The new analytics pipeline reduced processing time and improved alert accuracy.",
    body: "The new analytics pipeline reduced processing time and improved alert accuracy. The next milestone is a self-serve alert configuration experience.",
    userId: 3
  },
  {
    id: 204,
    title: "Team rituals refresh",
    summary: "We added async updates and simplified weekly syncs for better focus time.",
    body: "We added async updates and simplified weekly syncs for better focus time. The team is experimenting with shorter retros and shared decision logs.",
    userId: 1
  },
  {
    id: 205,
    title: "Infrastructure scaling plan",
    summary: "We outlined steps to handle traffic spikes and improve system resilience.",
    body: "We outlined steps to handle traffic spikes and improve system resilience. This includes container autoscaling, better monitoring, and failover strategies.",
    userId: 4
  },
  {
    id: 206,
    title: "Customer retention initiative",
    summary: "The focus is on improving onboarding and reducing churn in the first 30 days.",
    body: "The focus is on improving onboarding and reducing churn in the first 30 days. We are testing milestone-based emails and contextual product tips.",
    userId: 5
  },
  {
    id: 207,
    title: "Model retraining results",
    summary: "Retraining improved classification accuracy and reduced false positives.",
    body: "Retraining improved classification accuracy and reduced false positives. We are monitoring production metrics closely before rolling out globally.",
    userId: 6
  },
  {
    id: 208,
    title: "Design system expansion",
    summary: "New shared components were added to improve UI consistency.",
    body: "New shared components were added to improve UI consistency. We also introduced design tokens for spacing, color, and typography.",
    userId: 7
  },
  {
    id: 209,
    title: "Security review summary",
    summary: "Internal audit highlighted configuration gaps and monitoring improvements.",
    body: "Internal audit highlighted configuration gaps and monitoring improvements. We implemented stricter access controls and automated compliance checks.",
    userId: 8
  },
  {
    id: 210,
    title: "Observability upgrade",
    summary: "Enhanced logging and tracing improved debugging speed across services.",
    body: "Enhanced logging and tracing improved debugging speed across services. Engineers can now correlate logs with distributed traces in real time.",
    userId: 9
  }
];
