# Jacob Jerry Arackal — Portfolio

Production-focused AI Engineer portfolio built using al-folio, Jekyll, and GitHub Pages.

## Tech Stack

* Jekyll
* al-folio
* Ruby
* GitHub Pages
* Markdown
* SCSS

---

## Run Locally

Clone the repository:

```bash
git clone https://github.com/jacobjerryarackal/jacobjerryarackal.github.io.git
cd jacobjerryarackal.github.io
```

Install dependencies:

```bash
bundle install
```

Run locally:

```bash
bundle exec jekyll serve
```

Open:

```text
http://127.0.0.1:4000/al-folio/
```

---

## Portfolio Structure

```text
_config.yml           → Main portfolio configuration
_pages/about.md       → About page
_projects/            → Project pages
_posts/               → Blog posts
assets/img/           → Images and profile pictures
_data/                → Repository and metadata configuration
_sass/                → Theme and styling customization
```

---

## AI-Assisted Editing

This repository is structured for AI-assisted customization workflows.

You can:

* clone the repository
* open it inside Claude Desktop / Claude Code
* ask Claude to:

  * customize sections
  * update projects
  * modify styles
  * improve layouts
  * generate blog posts
  * optimize portfolio copy
  * create architecture diagrams

Example prompts:

```text
Update the About section to position me as an AI Systems Engineer.

Create a new featured project page for my MLOps pipeline.

Redesign the homepage hero section with a modern AI engineer aesthetic.

Improve typography and spacing for better readability.
```

---

## Deployment

The site is deployed using GitHub Pages and GitHub Actions.

After pushing changes:

```bash
git add .
git commit -m "Updated portfolio"
git push
```

GitHub automatically deploys the latest version.

---

## License

Based on the al-folio template:
https://github.com/alshedivat/al-folio
