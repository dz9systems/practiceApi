export type Company = {
  name: string;
  industry: string;
  founded: number;
  employees: number;        // total employees
  annualRevenue: number;    // in USD
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  website: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  company: Company;
};


export const users: User[] = [
  {
    id: 1,
    name: "Avery Knox",
    username: "averyk",
    email: "avery.knox@example.com",
    company: {
      name: "Northwind Labs",
      industry: "SaaS",
      founded: 2016,
      employees: 145,
      annualRevenue: 18500000,
      address: {
        street: "240 Market Street",
        city: "San Francisco",
        state: "CA",
        zip: "94105",
        country: "USA"
      },
      website: "https://northwindlabs.com"
    }
  },
  {
    id: 2,
    name: "Jordan Lee",
    username: "jlee",
    email: "jordan.lee@example.com",
    company: {
      name: "Cedar & Co",
      industry: "Design Consultancy",
      founded: 2012,
      employees: 58,
      annualRevenue: 7200000,
      address: {
        street: "89 Madison Ave",
        city: "New York",
        state: "NY",
        zip: "10016",
        country: "USA"
      },
      website: "https://cedarco.design"
    }
  },
  {
    id: 3,
    name: "Riley Patel",
    username: "rpatel",
    email: "riley.patel@example.com",
    company: {
      name: "Orbit Systems",
      industry: "Data Analytics",
      founded: 2018,
      employees: 210,
      annualRevenue: 42000000,
      address: {
        street: "501 Congress Ave",
        city: "Austin",
        state: "TX",
        zip: "78701",
        country: "USA"
      },
      website: "https://orbitsystems.io"
    }
  },
  {
    id: 4,
    name: "Morgan Chen",
    username: "mchen",
    email: "morgan.chen@example.com",
    company: {
      name: "BluePeak Tech",
      industry: "Cloud Infrastructure",
      founded: 2014,
      employees: 380,
      annualRevenue: 96000000,
      address: {
        street: "1200 5th Ave",
        city: "Seattle",
        state: "WA",
        zip: "98101",
        country: "USA"
      },
      website: "https://bluepeaktech.com"
    }
  },
  {
    id: 5,
    name: "Taylor Brooks",
    username: "tbrooks",
    email: "taylor.brooks@example.com",
    company: {
      name: "Summit Works",
      industry: "Enterprise Software",
      founded: 2010,
      employees: 520,
      annualRevenue: 155000000,
      address: {
        street: "300 W Adams St",
        city: "Chicago",
        state: "IL",
        zip: "60606",
        country: "USA"
      },
      website: "https://summitworks.com"
    }
  },
  {
    id: 6,
    name: "Cameron Diaz",
    username: "cdiaz",
    email: "cameron.diaz@example.com",
    company: {
      name: "Vertex AI",
      industry: "Artificial Intelligence",
      founded: 2019,
      employees: 95,
      annualRevenue: 12500000,
      address: {
        street: "600 Montgomery St",
        city: "San Francisco",
        state: "CA",
        zip: "94111",
        country: "USA"
      },
      website: "https://vertexai.io"
    }
  },
  {
    id: 7,
    name: "Jamie Nguyen",
    username: "jnguyen",
    email: "jamie.nguyen@example.com",
    company: {
      name: "BrightLayer",
      industry: "Frontend Engineering",
      founded: 2015,
      employees: 72,
      annualRevenue: 9800000,
      address: {
        street: "410 Townsend St",
        city: "San Francisco",
        state: "CA",
        zip: "94107",
        country: "USA"
      },
      website: "https://brightlayer.dev"
    }
  },
  {
    id: 8,
    name: "Alex Romero",
    username: "aromero",
    email: "alex.romero@example.com",
    company: {
      name: "Nimbus Security",
      industry: "Cybersecurity",
      founded: 2013,
      employees: 640,
      annualRevenue: 210000000,
      address: {
        street: "77 K St NE",
        city: "Washington",
        state: "DC",
        zip: "20002",
        country: "USA"
      },
      website: "https://nimbussecurity.com"
    }
  },
  {
    id: 9,
    name: "Casey Morgan",
    username: "cmorgan",
    email: "casey.morgan@example.com",
    company: {
      name: "Pulse Analytics",
      industry: "Business Intelligence",
      founded: 2017,
      employees: 180,
      annualRevenue: 36000000,
      address: {
        street: "200 Peachtree St",
        city: "Atlanta",
        state: "GA",
        zip: "30303",
        country: "USA"
      },
      website: "https://pulseanalytics.io"
    }
  },
  {
    id: 10,
    name: "Drew Thompson",
    username: "dthompson",
    email: "drew.thompson@example.com",
    company: {
      name: "Harbor Systems",
      industry: "Platform Engineering",
      founded: 2011,
      employees: 410,
      annualRevenue: 88000000,
      address: {
        street: "150 King St",
        city: "Denver",
        state: "CO",
        zip: "80202",
        country: "USA"
      },
      website: "https://harborsystems.com"
    }
  }
];
