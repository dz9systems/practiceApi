export type User = {
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

export const users: User[] = [
  {
    id: 1,
    name: "Avery Knox",
    username: "averyk",
    email: "avery.knox@example.com",
    company: {
      name: "Northwind Labs",
      catchPhrase: "Build fast, ship steady",
      bs: "product delivery"
    }
  },
  {
    id: 2,
    name: "Jordan Lee",
    username: "jlee",
    email: "jordan.lee@example.com",
    company: {
      name: "Cedar & Co",
      catchPhrase: "Design with intent",
      bs: "experience strategy"
    }
  },
  {
    id: 3,
    name: "Riley Patel",
    username: "rpatel",
    email: "riley.patel@example.com",
    company: {
      name: "Orbit Systems",
      catchPhrase: "Data that moves teams",
      bs: "analytics tooling"
    }
  },
  {
    id: 4,
    name: "Morgan Chen",
    username: "mchen",
    email: "morgan.chen@example.com",
    company: {
      name: "BluePeak Tech",
      catchPhrase: "Scaling with confidence",
      bs: "cloud infrastructure"
    }
  },
  {
    id: 5,
    name: "Taylor Brooks",
    username: "tbrooks",
    email: "taylor.brooks@example.com",
    company: {
      name: "Summit Works",
      catchPhrase: "Clarity in complexity",
      bs: "enterprise software"
    }
  },
  {
    id: 6,
    name: "Cameron Diaz",
    username: "cdiaz",
    email: "cameron.diaz@example.com",
    company: {
      name: "Vertex Labs",
      catchPhrase: "Innovate with purpose",
      bs: "ai research"
    }
  },
  {
    id: 7,
    name: "Jamie Nguyen",
    username: "jnguyen",
    email: "jamie.nguyen@example.com",
    company: {
      name: "BrightLayer",
      catchPhrase: "Interfaces that inspire",
      bs: "frontend systems"
    }
  },
  {
    id: 8,
    name: "Alex Romero",
    username: "aromero",
    email: "alex.romero@example.com",
    company: {
      name: "Nimbus Security",
      catchPhrase: "Security at scale",
      bs: "cyber defense"
    }
  },
  {
    id: 9,
    name: "Casey Morgan",
    username: "cmorgan",
    email: "casey.morgan@example.com",
    company: {
      name: "Pulse Analytics",
      catchPhrase: "Measure what matters",
      bs: "business intelligence"
    }
  },
  {
    id: 10,
    name: "Drew Thompson",
    username: "dthompson",
    email: "drew.thompson@example.com",
    company: {
      name: "Harbor Systems",
      catchPhrase: "Reliable by design",
      bs: "platform engineering"
    }
  }
];


