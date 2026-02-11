export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const posts: Post[] = [
  {
    userId: 1,
    id: 101,
    title: "Planning the spring release",
    body: "We locked the release window and mapped out the remaining milestones. The focus is on performance and accessibility improvements across the dashboard."
  },
  {
    userId: 2,
    id: 102,
    title: "Customer research recap",
    body: "Interviews highlighted that teams want clearer onboarding flows. The next iteration should emphasize guided setup and better in-app tips."
  },
  {
    userId: 3,
    id: 103,
    title: "New metrics pipeline",
    body: "We shipped the first version of the metrics pipeline and reduced processing time by 40 percent. Next up is building a flexible alerting layer."
  },
  {
    userId: 4,
    id: 104,
    title: "Infrastructure upgrade",
    body: "We migrated core services to a container-based deployment model, improving scalability and reducing downtime during peak traffic."
  },
  {
    userId: 5,
    id: 105,
    title: "Quarterly roadmap update",
    body: "This quarter we are prioritizing customer retention features and performance optimization across all enterprise modules."
  },
  {
    userId: 6,
    id: 106,
    title: "Model evaluation results",
    body: "The latest AI model iteration improved prediction accuracy by 12 percent after retraining with a larger dataset."
  },
  {
    userId: 7,
    id: 107,
    title: "Design system refresh",
    body: "We introduced updated typography, refined spacing scales, and improved accessibility standards across shared components."
  },
  {
    userId: 8,
    id: 108,
    title: "Security audit findings",
    body: "The recent audit identified minor misconfigurations. All issues were resolved and automated monitoring rules were strengthened."
  },
  {
    userId: 9,
    id: 109,
    title: "Dashboard analytics launch",
    body: "The new analytics dashboard enables real-time tracking of key performance indicators with customizable reporting features."
  },
  {
    userId: 10,
    id: 110,
    title: "Platform stability improvements",
    body: "We reduced error rates by introducing better retry logic and enhancing observability across backend services."
  }
];