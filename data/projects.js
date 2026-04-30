// ============================================================
// Simple Scott Learns — Projects Data
// Edit this file to update the Projects page.
// ============================================================

const PROJECTS = [
  {
    id: "saas-platform-redesign",
    type: "professional",
    title: "SaaS Platform Redesign",
    status: "completed",
    year: "2023",
    summary: "Led a full redesign of our core SaaS platform UI, reducing onboarding time by 45% and improving NPS by 18 points.",
    tags: ["saas", "product", "ux", "leadership"],
    link: null
  },
  {
    id: "data-pipeline-automation",
    type: "professional",
    title: "Data Pipeline Automation",
    status: "completed",
    year: "2021",
    summary: "Architected and delivered an automated reporting pipeline that eliminated 20 hours of manual work per week across three teams.",
    tags: ["sql", "automation", "data", "process-improvement"],
    link: null
  },
  {
    id: "ai-workflow-integration",
    type: "professional",
    title: "AI Workflow Integration",
    status: "in-progress",
    year: "2024",
    summary: "Currently exploring how AI tools can be embedded into core product workflows to improve analyst productivity.",
    tags: ["ai", "product", "saas", "strategy"],
    link: null
  },
  {
    id: "woodworking-workbench",
    type: "personal",
    title: "Workshop Workbench Build",
    status: "completed",
    year: "2023",
    summary: "Designed and built a full-size woodworking workbench with a wagon vise and sliding deadmen. First major shop project.",
    tags: ["woodworking", "making", "design"],
    link: null
  },
  {
    id: "simple-scott-learns",
    type: "personal",
    title: "This Website",
    status: "in-progress",
    year: "2024",
    summary: "Designing and building this site from scratch using plain HTML, CSS, and JavaScript. Managed via GitHub.",
    tags: ["web", "javascript", "github", "learning"],
    link: null
  }
];

function getAllProjectTags() {
  const counts = {};
  PROJECTS.forEach(p => {
    p.tags.forEach(tag => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
  });
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => ({ tag, count }));
}

function filterProjectsByTag(tag) {
  if (!tag) return PROJECTS;
  return PROJECTS.filter(p => p.tags.includes(tag));
}
