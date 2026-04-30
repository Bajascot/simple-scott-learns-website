# Simple Scott Learns

A personal and professional website built with plain HTML, CSS, and JavaScript.
Managed via GitHub and hosted on GoDaddy.

---

## Live Site

> Add your domain here once live — e.g. `https://www.simplescottlearns.com`

---

## Project Structure

```
simple-scott-learns-website/
├── index.html            # Home page
├── about.html            # About Me
├── timeline.html         # Career history, oldest → newest
├── deeper-dive.html      # Detailed role progressions
├── projects.html         # Professional and personal projects
├── contact.html          # Contact form and social links
├── css/
│   └── style.css         # Shared styles for all pages
├── data/
│   ├── jobs.js           # All job and career progression data
│   └── projects.js       # All project data
├── images/               # Photos and image assets
└── README.md             # This file
```

---

## How to Update Content

All content is stored in the `data/` folder. You never need to edit the HTML
directly to update your career history or projects — just edit the data files.

### Updating career history (Timeline + Deeper Dive)

Open `data/jobs.js` and edit the `JOBS` array. Each job entry looks like this:

```javascript
{
  id: "unique-job-id",          // lowercase, no spaces, used as anchor
  company: "Company Name",
  location: "City, State",
  startYear: 2019,
  endYear: null,                // use null for current roles
  title: "Your Job Title",
  summary: "A one or two sentence overview of this role.",
  tags: ["leadership", "strategy"],
  progressions: [
    {
      start: "2019",
      end: "2022",
      title: "First Role Title",
      description: "What you did during this period.",
      tags: ["leadership", "product"]
    },
    {
      start: "2022",
      end: "Present",
      title: "Second Role Title",
      description: "What you did during this period.",
      tags: ["strategy", "engineering"]
    }
  ]
}
```

- Jobs with only one period still need a `progressions` array — just include one entry.
- Tags on the job level appear on the Timeline page.
- Tags on each progression appear on the Deeper Dive page.

---

### Updating projects

Open `data/projects.js` and edit the `PROJECTS` array. Each project looks like this:

```javascript
{
  id: "unique-project-id",
  type: "professional",         // "professional" or "personal"
  title: "Project Title",
  status: "completed",          // "completed" or "in-progress"
  year: "2024",
  summary: "A short description of the project and its outcome.",
  tags: ["product", "saas"],
  link: "https://..."           // optional — set to null if no link
}
```

---

### Updating your bio

Open `about.html` and edit the text inside the `about-card` sections. Look for
the placeholder text that says *"Replace this with your own bio"* and swap it
out with your own words.

---

### Adding a photo

In `about.html`, find the `photo-placeholder` div and replace it with:

```html
<img src="images/your-photo.jpg" alt="Scott" style="border-radius: 14px; width: 100%; margin-bottom: 24px;">
```

Place your photo file in the `images/` folder first.

---

### Updating social links (LinkedIn + GitHub)

Social links appear in the nav bar and on the About and Contact pages.
Search for `href="#"` in any HTML file and replace `#` with your actual URLs.

For LinkedIn:
```html
<a href="https://www.linkedin.com/in/YOUR-USERNAME" target="_blank" rel="noopener">
```

For GitHub:
```html
<a href="https://github.com/YOUR-USERNAME" target="_blank" rel="noopener">
```

---

## How to Deploy to GoDaddy

1. Make your changes locally in VS Code
2. Commit and push to GitHub
3. Download the updated files
4. Log in to GoDaddy → My Products → Manage Hosting → File Manager
5. Navigate to `public_html`
6. Upload changed files, maintaining the folder structure

---

## Tag System

Tags are the connective tissue of the site. They appear on every content entry
and in the sidebar on every page. Clicking a tag filters the current page to
show only matching content.

**Tips for tagging:**
- Use lowercase, hyphenated tags: `project-management` not `Project Management`
- Be consistent — `leadership` everywhere, not sometimes `leader` or `leading`
- Tags work across both jobs and projects, so shared tags create connections
- The sidebar tag cloud is sorted by frequency — common tags appear first

---

## Built With

- Plain HTML5, CSS3, JavaScript — no frameworks or build tools
- [DM Serif Display + DM Sans](https://fonts.google.com) via Google Fonts
- Hosted on GoDaddy shared hosting
- Version controlled via GitHub

---

## Roadmap

- [ ] Add real job history to `data/jobs.js`
- [ ] Add real projects to `data/projects.js`
- [ ] Replace bio placeholder in `about.html`
- [ ] Add profile photo to `images/`
- [ ] Update LinkedIn and GitHub links in all pages
- [ ] Wire up contact form to a form service (e.g. Formspree)
- [ ] Add YouTube channel integration

---

## Working with Claude

This site was designed and built iteratively with Claude (claude.ai).
To continue development, start a new conversation and share this README
as context. Claude can generate updated files for any page which you then
review in VS Code, commit, and push to this repo.
