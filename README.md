# Simple Scott Learns

A personal and professional website built with plain HTML, CSS, and JavaScript.
Managed via GitHub and hosted on GoDaddy.

---

## Live Site

> https://www.simplescottlearns.com

---

## Project Structure

```
simple-scott-learns-website/
├── index.html                  # Main single-page site (Home, About, Timeline, Projects, Contact)
├── deeper-dive.html            # Standalone career progression detail page
├── css/
│   └── style.css               # Shared styles
├── data/
│   ├── jobs.js                 # All job, progression, and modal data
│   └── projects.js             # All project data
├── images/
│   ├── logo.png                # Site logo
│   └── projects/
│       └── the-shed/           # Photos for The Shed project
├── projects/
│   └── the-shed.html           # Standalone project page for The Shed
└── README.md                   # This file
```

**Note:** `about.html`, `timeline.html`, `projects.html`, and `contact.html` are legacy
files that still exist on GoDaddy but are no longer linked from the site. They can be
safely deleted from both the repo and GoDaddy.

---

## Site Architecture

The site is a **single scrolling page** (`index.html`) with anchor-based navigation:

| Nav link | Destination |
|---|---|
| Home | `index.html#hero` |
| About | `index.html#about` |
| Timeline | `index.html#timeline` |
| Deeper Dive | `deeper-dive.html` (separate page) |
| Projects | `index.html#projects` |
| Contact | `index.html#contact` |

---

## How to Update Content

### Career history — Timeline & Deeper Dive

Edit `data/jobs.js`. Each job entry supports five layers of content:

```javascript
{
  id: "unique-job-id",
  company: "Company Name",
  location: "City, State",
  startYear: 2016,
  endYear: 2026,            // use null for current roles
  title: "Final Job Title",
  summary: "1-2 sentence summary shown on the Timeline card.",
  modalDescription: "3-4 sentence description shown in the Timeline modal.",
  otherHalf: "The personal growth story shown in the modal under 'The Other Half of the Story'.",
  tags: ["tag-one", "tag-two"],
  progressions: [
    {
      start: "2016",
      end: "2020",
      title: "Role Title",
      description: "Full description shown in Deeper Dive.",
      tags: ["tag-one", "tag-two"]
    }
  ]
}
```

**Content layers:**
- `summary` → Timeline card (1-2 sentences)
- `modalDescription` → Timeline modal (3-4 sentences)
- `otherHalf` → Modal "The Other Half of the Story" section (personal growth narrative)
- `progressions[].description` → Deeper Dive full detail

---

### Projects

Edit `data/projects.js`. Professional and personal projects use different structures:

**Professional project:**
```javascript
{
  id: "unique-project-id",
  type: "professional",
  title: "Project Title",
  status: "completed",        // "completed" or "in-progress"
  year: "2020–2024",
  summary: "What was delivered and the outcome.",
  tags: ["tag-one", "tag-two"]
}
```

**Personal project** (supports modal + standalone page):
```javascript
{
  id: "unique-project-id",
  type: "personal",
  title: "Project Title",
  status: "completed",
  year: "2022",
  summary: "Short summary shown on the project card.",
  tags: ["tag-one", "tag-two"],
  whatWasTheNeed: "Why did this project exist?",
  whyTheSolution: "What was built, why that approach, what technology.",
  otherHalf: "The personal story behind the project.",
  images: [
    "images/projects/project-name/photo1.jpg",
    "images/projects/project-name/photo2.jpg"
  ],
  standaloneLink: "projects/project-name.html"
}
```

---

### Adding a personal project photo

1. Create a folder: `images/projects/your-project-name/`
2. Add photos to that folder
3. Reference them in `projects.js` under the `images` array
4. Update the standalone project page to use the real image paths

---

### Updating your bio

The About section bio lives directly in `index.html`. Search for the `about-text` div
and edit the paragraph text there.

---

### Social links

LinkedIn and GitHub links are already set throughout the site:
- LinkedIn: `https://www.linkedin.com/in/scottalvey/`
- GitHub: `https://github.com/Bajascot`

To update, search for these URLs across all HTML files and replace.

---

## How to Deploy to GoDaddy

1. Make changes locally in VS Code
2. Commit and push to GitHub (`simple-scott-learns-website`)
3. Open GoDaddy File Manager → `public_html`
4. Upload only the changed files, maintaining the folder structure

**For new project pages and images**, create the folder first in File Manager,
then upload the files into it.

---

## Tag System

Tags connect content across the site. Each job and project entry has tags.

**Timeline page** — top-level job tags shown on cards and filterable in sidebar
**Deeper Dive page** — progression-level tags shown on each role entry
**Projects page** — project tags shown on cards

**Tips:**
- Use lowercase hyphenated tags: `product-management` not `Product Management`
- Be consistent — pick one form and stick to it across all entries
- Tags on the Deeper Dive page only reflect progression tags, not top-level job tags

---

## Built With

- Plain HTML5, CSS3, JavaScript — no frameworks or build tools
- [DM Serif Display + DM Sans](https://fonts.google.com) via Google Fonts
- Hosted on GoDaddy shared hosting
- Version controlled via GitHub (`simple-scott-learns-website`)

---

## Roadmap

- [x] Single-page scrolling layout
- [x] Timeline with modal (summary + The Other Half of the Story)
- [x] Deeper Dive separate page with full progressions
- [x] Professional projects section
- [x] Personal projects with modal + standalone pages
- [x] The Shed project — complete with photos
- [x] LinkedIn and GitHub links wired up
- [x] Real job history and content in jobs.js
- [ ] Wire up contact form to Formspree
- [ ] Add second personal project
- [ ] Add third personal project
- [ ] Add YouTube channel integration
- [ ] Delete legacy standalone pages (about.html, timeline.html, projects.html, contact.html)

---

## Working with Claude

This site was designed and built iteratively with Claude (claude.ai).
To continue development, start a new conversation, share this README as context,
and Claude can generate updated files for any page which you then review in
VS Code, commit, and push to this repo.