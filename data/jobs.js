// ============================================================
// Simple Scott Learns — Jobs Data
// Edit this file to update Timeline and Deeper Dive pages.
// ============================================================

const JOBS = [
  {
    id: "market-contractors",
    company: "Market Contractors",
    location: "Portland, OR & Seattle, WA",
    startYear: 2002,
    endYear: 2009,
    title: "IT Director",
    summary: "Sole IT leader for a national commercial construction company with offices in Portland and Seattle. Owned all technology infrastructure — from an on-premise data center to field worker support across multiple remote job sites.",
    tags: ["it-infrastructure", "leadership", "erp", "networking", "construction"],
    progressions: [
      {
        start: "2002",
        end: "2009",
        title: "IT Director",
        description: "Served as the single IT resource for a national commercial construction company specializing in white shell build-outs. Managed an on-premise data center, all networking infrastructure, email systems, hardware, and phone systems. Supported multiple field supervisors and remote workers across Oregon and Washington job sites. Administered and maintained the company's ERP system, developing custom reports that gave leadership visibility into project and operational data — a skill that would shape the next chapter of my career.",
        tags: ["it-infrastructure", "erp", "networking", "leadership", "reporting", "construction", "hardware"]
      }
    ]
  },
  {
    id: "viewpoint-construction-software",
    company: "Viewpoint Construction Software",
    location: "Portland, OR",
    startYear: 2009,
    endYear: 2015,
    title: "Product Manager",
    summary: "Joined Viewpoint as their sole custom report support specialist and progressed through four distinct roles over six years — from report support to report design, scrum master, and ultimately product manager for a newly formed team.",
    tags: ["product-management", "agile", "scrum", "reporting", "construction-software", "leadership"],
    progressions: [
      {
        start: "2009",
        end: "2011",
        title: "Custom Report Support Specialist",
        description: "Joined Viewpoint as the sole support resource for custom reporting — leveraging hands-on ERP experience gained at Market Contractors. Helped Viewpoint customers design and troubleshoot their own custom reports against the platform, quickly becoming the go-to expert for complex reporting needs across the customer base.",
        tags: ["reporting", "customer-support", "erp", "construction-software", "sql"]
      },
      {
        start: "2011",
        end: "2011",
        title: "Report Designer",
        description: "Transitioned from customer-facing support into an internal product role designing reports for a new Viewpoint module under active development. Worked closely with engineering and product teams to define and build the reporting layer for the new product.",
        tags: ["reporting", "product-design", "construction-software", "sql"]
      },
      {
        start: "2011",
        end: "2013",
        title: "Report Designer & Scrum Master",
        description: "Took on the Scrum Master role in addition to report design responsibilities — growing into agile delivery leadership while continuing to contribute to the product. Facilitated sprint ceremonies, removed blockers, and coached the team on agile practices. Eventually expanded to serve as Scrum Master for a second development team, managing two teams concurrently.",
        tags: ["scrum", "agile", "leadership", "reporting", "construction-software", "facilitation"]
      },
      {
        start: "2013",
        end: "2015",
        title: "Product Manager",
        description: "Moved into a full Product Manager role for a newly formed team at Viewpoint. Responsible for defining the product roadmap, writing requirements, prioritizing the backlog, and working with engineering to deliver features. This role marked the formal beginning of a product management career built on a foundation of deep technical and customer knowledge.",
        tags: ["product-management", "agile", "scrum", "roadmap", "construction-software", "leadership"]
      }
    ]
  },
  {
    id: "tilson-technology",
    company: "Tilson Technology",
    location: "Portland, OR",
    startYear: 2015,
    endYear: 2015,
    title: "Software Developer / Implementation Consultant",
    summary: "Joined a consulting firm specializing in on-premise Viewpoint implementations, applying deep platform knowledge to both implement features for clients and manage concurrent project delivery.",
    tags: ["consulting", "viewpoint", "implementation", "project-management", "construction-software"],
    progressions: [
      {
        start: "Early 2015",
        end: "Mid 2015",
        title: "Software Developer / Implementation Consultant",
        description: "Applied hands-on Viewpoint expertise in a client-facing consulting capacity. Implemented Viewpoint features for customers transitioning to the platform and managed multiple concurrent implementation projects. Combined technical development skills with project management to deliver client engagements on time.",
        tags: ["consulting", "viewpoint", "implementation", "project-management", "construction-software"]
      }
    ]
  },
  {
    id: "tanger-guild",
    company: "Tanger Guild",
    location: "Portland, OR",
    startYear: 2015,
    endYear: 2016,
    title: "Scrum Master",
    summary: "Served as Scrum Master for a software development team building Caller Dashboard — an HP product designed to unify phone, email, and text conversations across laptop and mobile devices.",
    tags: ["scrum", "agile", "product-development", "hp", "leadership"],
    progressions: [
      {
        start: "Mid 2015",
        end: "2016",
        title: "Scrum Master",
        description: "Facilitated agile delivery for a team building Caller Dashboard — an HP-integrated product designed to be installed by default on HP laptops. The product unified communication channels (phone, email, and text) between laptop and mobile devices. Ran all sprint ceremonies, managed the team's delivery cadence, and worked with product leadership to keep the backlog prioritized and the team focused.",
        tags: ["scrum", "agile", "product-development", "facilitation", "hp", "leadership"]
      }
    ]
  },
  {
    id: "nike",
    company: "Nike",
    location: "Beaverton, OR (Remote)",
    startYear: 2016,
    endYear: null,
    title: "Senior Product Manager, Digital Payment Services",
    summary: "Ten-year Nike career spanning four major product domains — Search, SEO & Data Tagging, Digital Promotions, and Digital Payment Services. Progressed from Product Owner to Senior Product Manager, delivering globally scaled platforms and measurable business outcomes including a $37M incremental revenue result.",
    tags: ["product-management", "nike", "leadership", "agile", "ecommerce", "global", "saas"],
    progressions: [
      {
        start: "2016",
        end: "2018",
        title: "Product Owner, Search (Endeca)",
        description: "Joined Nike as a Product Owner on the Search team, responsible for Nike's legacy search platform built on Endeca technology. Created new search indexes and developed search strategies to improve product discoverability across Nike's digital properties. Onboarded new geographic markets onto the search platform, ensuring each geo's product catalog was correctly indexed and surfaced to consumers. Worked closely with engineering and geo teams to tune search relevance and expand platform coverage.",
        tags: ["product-management", "nike", "search", "endeca", "ecommerce", "global", "agile"]
      },
      {
        start: "2018",
        end: "2020",
        title: "Product Owner, SEO & Data Tagging",
        description: "Led a new team focused on on-premise services that powered Nike's SEO strategy and product data tagging. Built systems to help Nike better signal product data to search engines such as Google and Bing — ensuring that when consumers searched for Nike products, they found them. Worked across engineering, marketing, and geo teams to define tagging standards, implement structured data, and improve Nike's organic search presence globally.",
        tags: ["product-management", "nike", "seo", "data-tagging", "ecommerce", "global", "agile", "search"]
      },
      {
        start: "2020",
        end: "2024",
        title: "Senior Product Manager, Digital Promotions",
        description: "Primary PM for Nike's Digital Promotions platform — built the Promotion Admin Tool (PAT) from its first prototype to the globally deployed system of record used across every Nike geo. Ran the first live PAT demo in June 2020, led the ATG-to-PAT production data migration in 2021, and delivered new promotion types including tiered promotions, N-items-for-$X pricing, coupons outside PAT, and CRM-triggered targeted promotions. Led global rollout across NA, EMEA, Japan, Korea, Greater China, and Global Expansion. Promoted to Senior PM in 2022 and expanded scope to include a multi-phase Promotion Data Emission framework, a PAT security model overhaul, and an intern-led UI refresh proposal validated by Nike's design team. Concluded with a structured 3-session knowledge transfer series in December 2023.",
        tags: ["product-management", "nike", "promotions", "ecommerce", "agile", "global", "saas", "data", "leadership", "security"]
      },
      {
        start: "2024",
        end: "Present",
        title: "Senior Product Manager, Digital Payment Services",
        description: "Owns Nike's global payment product lifecycle across Nike.com, Nike App, SNKRS, and the global store network. Delivered the PayPal/Braintree rollout end-to-end — reinstating the project after it was cut from the AOP, running a 44-version A/B test, and launching in March 2026. Results: +71 bps Checkout Success Rate at 99% confidence, ~$37M annualized incremental demand globally. Led the Canada go-live payments track (April 29–30, 2026), resolving two critical payment blockers days before launch. Managed Nike Elite migration payment track across US, Japan, Australia, and Korea. Led the Japan High-Heat Launch Resilience program, the 3DS After Action Review, and the iDEAL 2.0 compliance migration. Currently scoping Google UCP agentic commerce integration and Stripe as both an agentic channel and Adyen business-continuity backup. Actively manages 13+ payment vendor relationships globally.",
        tags: ["product-management", "nike", "payments", "fintech", "paypal", "braintree", "adyen", "global", "leadership", "agile", "ecommerce", "ai", "a-b-testing", "saas"]
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
