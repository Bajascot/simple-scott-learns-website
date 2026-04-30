// ============================================================
// Simple Scott Learns — Jobs Data
// Edit this file to update Timeline and Deeper Dive pages.
// ============================================================

const JOBS = [
  {
    id: "acme-corp",
    company: "Acme Corporation",
    location: "Portland, OR",
    startYear: 2006,
    endYear: 2009,
    title: "Business Analyst",
    summary: "Joined as a junior analyst supporting cross-functional process improvement initiatives across operations and finance teams.",
    tags: ["analysis", "process-improvement", "finance"],
    progressions: [
      {
        start: "2006",
        end: "2009",
        title: "Business Analyst",
        description: "Responsible for gathering requirements, documenting workflows, and producing weekly reporting dashboards for executive leadership. Collaborated with IT to streamline data pipelines, reducing manual reporting time by 40%.",
        tags: ["analysis", "reporting", "excel", "process-improvement"]
      }
    ]
  },
  {
    id: "beta-inc",
    company: "Beta Inc",
    location: "Seattle, WA",
    startYear: 2009,
    endYear: 2014,
    title: "Senior Analyst → Team Lead",
    summary: "Progressed from senior analyst to leading a team of five, overseeing project delivery for enterprise clients in the healthcare and logistics sectors.",
    tags: ["leadership", "agile", "healthcare", "logistics", "sql"],
    progressions: [
      {
        start: "2009",
        end: "2011",
        title: "Senior Business Analyst",
        description: "Led requirements gathering and solution design for three concurrent enterprise client engagements. Introduced agile sprint planning to the team, improving on-time delivery rate from 62% to 88% within two quarters.",
        tags: ["analysis", "agile", "sql", "client-management"]
      },
      {
        start: "2011",
        end: "2014",
        title: "Team Lead, Analytics",
        description: "Managed a team of five analysts supporting logistics and healthcare clients. Responsible for hiring, performance reviews, and quarterly roadmap planning. Championed a self-service reporting platform that reduced ad-hoc requests by 60%.",
        tags: ["leadership", "management", "agile", "healthcare", "logistics"]
      }
    ]
  },
  {
    id: "gamma-llc",
    company: "Gamma LLC",
    location: "Remote",
    startYear: 2014,
    endYear: 2019,
    title: "Director of Operations",
    summary: "Joined as a team lead and was promoted to Director within two years, overseeing operations, technology, and a 12-person team.",
    tags: ["leadership", "operations", "strategy", "management"],
    progressions: [
      {
        start: "2014",
        end: "2016",
        title: "Senior Team Lead",
        description: "Took ownership of the operations practice, consolidating three separate teams into a unified delivery group. Built out a project management framework used across all client engagements.",
        tags: ["operations", "management", "project-management", "leadership"]
      },
      {
        start: "2016",
        end: "2019",
        title: "Director of Operations",
        description: "Full P&L responsibility for the operations division. Grew the team from 6 to 12. Launched a technology modernisation initiative that migrated core systems to cloud-based infrastructure, cutting overhead costs by 30%.",
        tags: ["leadership", "strategy", "cloud", "operations", "management"]
      }
    ]
  },
  {
    id: "delta-co",
    company: "Delta Co",
    location: "Portland, OR",
    startYear: 2019,
    endYear: null,
    title: "VP of Product & Technology",
    summary: "Currently serving as VP, leading product strategy and engineering for a SaaS platform with 50,000+ users.",
    tags: ["leadership", "product", "saas", "strategy", "engineering"],
    progressions: [
      {
        start: "2019",
        end: "2022",
        title: "Director of Product",
        description: "Established the product function from scratch. Hired the initial product and design team, defined the product roadmap, and launched two major platform features that drove a 35% increase in monthly active users.",
        tags: ["product", "leadership", "saas", "strategy", "hiring"]
      },
      {
        start: "2022",
        end: "Present",
        title: "VP of Product & Technology",
        description: "Expanded scope to include engineering. Responsible for a combined team of 18 across product, design, and engineering. Currently leading a platform re-architecture initiative and exploring AI integration across core workflows.",
        tags: ["leadership", "product", "engineering", "saas", "ai", "strategy"]
      }
    ]
  }
];

// ── Tag helpers ──────────────────────────────────────────────

function getAllTags() {
  const counts = {};
  JOBS.forEach(job => {
    job.progressions.forEach(p => {
      p.tags.forEach(tag => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });
  });
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => ({ tag, count }));
}

function filterByTag(tag) {
  if (!tag) return JOBS;
  return JOBS
    .map(job => ({
      ...job,
      progressions: job.progressions.filter(p => p.tags.includes(tag))
    }))
    .filter(job => job.progressions.length > 0);
}
