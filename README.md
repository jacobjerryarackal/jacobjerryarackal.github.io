# Jacob Jerry Arackal — AI Systems & MLOps Engineering Portfolio

This repository contains the source code for my professional portfolio, engineered to highlight production-focused AI systems, scalable machine learning operations (MLOps), and robust infrastructure deployment. 

The platform is statically generated using **Jekyll** and the **al-folio** framework, chosen for its performance, modular architecture, and native integration with GitHub Pages CI/CD pipelines.

## Technical Architecture

* **Framework:** Jekyll (Static Site Generation)
* **Theme System:** al-folio (Modular, Component-Driven)
* **Runtime:** Ruby (Build process)
* **CI/CD:** GitHub Actions (Automated testing and deployment)
* **Hosting:** GitHub Pages (Edge-cached static delivery)
* **Styling:** SCSS (Scalable CSS architecture)

## Infrastructure Setup (Local Runtime)

To spin up the local development environment, clone the repository and install the required build dependencies:

```bash
git clone https://github.com/jacobjerryarackal/jacobjerryarackal.github.io.git
cd jacobjerryarackal.github.io

# Install Ruby dependencies via Bundler
bundle install
```

Initialize the local server with hot-reloading enabled for development:

```bash
bundle exec jekyll serve
```

Access the local instance at `http://127.0.0.1:4000/`.

## Repository Architecture

The project follows a decoupled directory structure, separating configuration, content, and static assets:

```text
├── _config.yml           # Core system configuration and routing
├── _pages/about.md       # Primary portfolio entrypoint / profile
├── _projects/            # Engineering project documentation
├── _posts/               # Technical blog (System design, MLOps insights)
├── assets/               # Static assets (Images, architectural diagrams)
├── _data/                # Structured YAML metadata for data-driven layouts
└── _sass/                # SCSS pipelines and theme overrides
```

## Continuous Deployment

This project utilizes a continuous deployment pipeline via GitHub Actions. Any code merged into the primary branch triggers a rebuild and deployment of the static assets to GitHub Pages.

```bash
git add .
git commit -m "chore: deploy latest portfolio iteration"
git push origin main
```

## License

Built upon the extensible [al-folio](https://github.com/alshedivat/al-folio) architecture.
