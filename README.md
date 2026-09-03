# Jacob Jerry Arackal - AI Engineering Portfolio

**A production-focused portfolio for my work in GenAI, Agentic AI, MLOps, and full-stack engineering.**

[![Deploy](https://github.com/jacobjerryarackal/jacobjerryarackal.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/jacobjerryarackal/jacobjerryarackal.github.io/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![al-folio](https://img.shields.io/badge/built%20on-al--folio-blue)](https://github.com/alshedivat/al-folio)

**[Live portfolio ->](https://jacobjerryarackal.github.io)**

---

## Overview

This repository contains the source code for my personal portfolio. It presents my engineering experience, technical writing, selected GitHub repositories, CV, and detailed project case studies.

The site is built with the pluginized al-folio v1 architecture. Jekyll generates a fast static website, GitHub Actions handles validation and deployment, and GitHub Pages hosts the production build.

## Portfolio Sections

| Page             | What it contains                                                                       |
| ---------------- | -------------------------------------------------------------------------------------- |
| **About**        | Professional summary, experience highlights, profile photo, and social links           |
| **Blog**         | Articles about AI systems, MLOps, machine learning, and engineering decisions          |
| **Projects**     | Detailed case studies with problems, technical decisions, results, and lessons learned |
| **Repositories** | Selected open source projects with concise descriptions and technology tags            |
| **CV**           | JSONResume-powered CV with a downloadable PDF                                          |

## Featured Projects

| Project                                                                                                     | Focus                                                                                                         |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [Harness Engineering](https://github.com/jacobjerryarackal/harness-engineering)                             | Model-agnostic engineering harness control plane with verification gates and closed-loop telemetry            |
| [MemoryOps AI](https://github.com/jacobjerryarackal/memoryops-ai)                                           | Governed agent memory infrastructure with policy checks, hybrid retrieval, and PostgreSQL RLS isolation       |
| [EvalForge](https://github.com/jacobjerryarackal/evalforge)                                                 | Benchmark-driven evaluation & observability platform with golden datasets, trajectory tracing, and LLM judges |
| [Multi-Agent Workflow Orchestrator](https://github.com/jacobjerryarackal/multi-agent-workflow-orchestrator) | Durable multi-agent workflow runtime with deterministic DAG scheduling, task leases, and crash recovery       |
| [Ad Click Prediction MLOps](https://github.com/jacobjerryarackal/ad-click-prediction-mlops)                 | ZenML, MLflow, Evidently, XGBoost, FastAPI, and Streamlit                                                     |
| [Credit Card Fraud Detection](https://github.com/jacobjerryarackal/Credit-Card-Fraud-Detection-Project)     | Production-oriented fraud detection MLOps pipeline                                                            |
| [Aura AI](https://github.com/jacobjerryarackal/aura-ai)                                                     | AI-powered communication analysis and visualization                                                           |

## Stack

- **Jekyll** - static site generation
- **al-folio v1 plugins** - layouts, CV rendering, search, icons, analytics, and supporting features
- **JSONResume** - structured CV content
- **Ruby and Bundler** - local and CI build environment
- **Node.js and Prettier** - formatting and validation
- **Playwright** - visual regression testing
- **GitHub Actions** - automated build and deployment
- **GitHub Pages** - production hosting

## Local Setup

Install Ruby, Bundler, and Node.js, then run:

```bash
git clone https://github.com/jacobjerryarackal/jacobjerryarackal.github.io.git
cd jacobjerryarackal.github.io

bundle install
npm ci
bundle exec jekyll serve
```

Open [http://127.0.0.1:4000](http://127.0.0.1:4000).

Docker is also supported:

```bash
docker compose up -d
```

Open [http://127.0.0.1:8080](http://127.0.0.1:8080).

## Content Guide

Most portfolio updates only require editing content files:

```text
_config.yml                  # Site metadata, feature flags, and integrations
_pages/about.md              # Homepage biography and positioning
_pages/projects.md           # Projects-page settings
_pages/repositories.md       # Repository-card page markup and scoped styling
_projects/*.md               # One detailed case study per project
_posts/*.md                  # Technical blog posts
_data/repositories.yml       # Selected GitHub repository cards
_data/socials.yml            # Social links
assets/json/resume.json      # CV content rendered on the website
assets/pdf/                  # Downloadable CV PDF
assets/img/logo.png          # Navbar, homepage, and browser-tab logo
assets/img/favicon.ico       # Alternate favicon asset
assets/img/                  # Additional profile and project assets
assets/js/branding.js        # Site-specific logo and profile presentation
```

Runtime and shared component behavior belongs in the owning al-folio plugin repositories. This starter repository intentionally stays focused on site wiring and personal content.

## Validation

Run the main local checks before publishing:

```bash
npm run lint:prettier
npm run lint:style-contract
bundle exec al-folio upgrade audit --no-fail
bundle exec al-folio upgrade overrides audit
bundle exec jekyll build
```

## Deployment

Pushing to `main` triggers the GitHub Actions deployment workflow:

```bash
git add .
git commit -m "chore: update portfolio"
git push origin main
```

The generated site is deployed to [jacobjerryarackal.github.io](https://jacobjerryarackal.github.io).

## Credits

This portfolio is built on [al-folio](https://github.com/alshedivat/al-folio) by [@alshedivat](https://github.com/alshedivat) and contributors.

## License

MIT - same as al-folio.

