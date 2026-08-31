<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=58A6FF&center=true&vCenter=true&width=700&lines=GenAI+%26+MLOps+Engineer;Building+Agentic+AI+Systems;Productionizing+Machine+Learning" alt="Typing SVG" />

### Jacob Jerry Arackal &nbsp;·&nbsp; AI Engineer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jacob-jerry-arackal-5a4596190/)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://jacobjerryarackal.github.io)
[![Dev.to](https://img.shields.io/badge/Dev.to-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white)](https://dev.to/jacobjerryarackal/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jacobjerryarackal123@gmail.com)

</div>

---

## About Me

I build production-focused AI systems that move beyond experimentation into real-world deployment. My work spans MLOps, machine learning, and emerging agentic workflows, with a strong focus on scalability, maintainability, and engineering best practices.

Rather than treating AI as a standalone model, I architect the entire ecosystem around it. From orchestrating multi-agent systems with LangGraph to optimizing end-to-end deployment infrastructure, I focus on delivering intelligent solutions that are reliable, measurable, and impactful at scale.

```text
Role     →  AI Engineer
Focus    →  MLOps, Agentic AI Workflows, Scalable AI Infrastructure
Open to  →  AI/MLOps Engineering Roles · Remote / Hybrid (IST / UTC+5:30)
```

## Highlights

- 🏢 **Led AI integration** at Techfriar Technologies, architecting RAG pipelines and LLM agents
- 📈 **Achieved 95% accuracy** on a deep learning model for automobile price prediction during my Microsoft internship
- 🎼 **Architected Harness Engineering**, an autonomous engineering harness and control plane for AI-native software development
- 🚀 **Shipped enterprise-grade MLOps pipelines** with automated drift detection and sub-50ms serving latency

## Featured Projects

### 🔹 [Harness Engineering](https://github.com/jacobjerryarackal/harness-engineering)

**The problem:** Bare LLMs and prompt loops fail when building complex software because they lack persistent organizational memory, deterministic verification gates, and domain isolation.

**What I shipped:** A model-agnostic engineering control plane coordinating specialized domain harnesses with deterministic quality gates, runtime telemetry capture, and semantic knowledge extraction.

**Key decisions:**

- **7 Domain Harnesses** — Isolated specifications, research, architecture, implementation, evaluation, deployment, and learning to prevent prompt dilution.
- **Deterministic Quality Gates** — Halt execution immediately upon assertion failure and capture verified artifacts into an immutable evidence store.
- **Closed-Loop Learning** — Runtime failures and crash logs are parsed into permanent RDF knowledge graph triples (_"Loss becomes Information"_).

`Python` `FastAPI` `Next.js 16` `React Flow` `Agentic AI` `Control Plane`

### 🔹 [MemoryOps AI](https://github.com/jacobjerryarackal/memoryops-ai)

**The problem:** Naive vector databases treat agent memory as an unmanaged embedding dump, causing memory staleness, conflicting facts, accidental PII leaks, and lack of provable audit trails.

**What I shipped:** A governed memory operating system and data governance control plane for AI agents with database-enforced multi-tenant isolation.

**Key decisions:**

- **PostgreSQL Row-Level Security (RLS)** — Enforced tenant and user isolation directly at the database engine level.
- **Deterministic Governance Policies** — Validates secrets, slot mutations, and utility filters before state touches disk.
- **Hybrid Retrieval & Context Admission** — Fused dense vector cosine similarity with lexical ranking, followed by context redaction and token budgeting.

`Python` `FastAPI` `PostgreSQL` `pgvector` `Gemini` `Context Engineering`

### 🔹 [EvalForge](https://github.com/jacobjerryarackal/evalforge)

**The problem:** Testing agentic AI systems purely by asserting final string outputs creates a dangerous false sense of reliability while masking tool misrouting, hallucinated parameters, and runaway token/latency costs.

**What I shipped:** An open-source, model-agnostic evaluation and observability platform engineered for autonomous, tool-calling AI agents.

**Key decisions:**

- **Full-Trajectory Observability** — Captured intermediate thoughts, tool calls, arguments, observations, token usage, latency, and cost per turn.
- **Dual-Pronged Evaluation** — Combined deterministic heuristics (token/latency ceilings, tool schema validation) with LLM judges for faithfulness and groundedness.
- **Experiment & Regression Tracking** — Automatic delta computation ($\Delta \text{Success Rate}$, $\Delta \text{Latency}$, $\Delta \text{Cost}$) against versioned golden datasets.

`Python` `FastAPI` `Next.js 14` `PostgreSQL` `Agent Evaluation` `Observability`

### 🔹 [Multi-Agent Workflow Orchestrator](https://github.com/jacobjerryarackal/multi-agent-workflow-orchestrator)

**The problem:** Multi-agent systems fail in production when tasks require branching topological dependencies, worker crash recovery, atomic idempotency, human approval gates, or cryptographic integrity of passed artifacts.

**What I shipped:** A production-oriented workflow runtime for executing, evaluating, observing, and recovering multi-agent workflows represented as deterministic DAGs.

**Key decisions:**

- **Deterministic DAG Scheduler** — Topological sort with Kahn's algorithm, cycle detection, parallel branch execution, and fan-in aggregation.
- **Durable Task Leases & Crash Recovery** — Database-backed atomic leases with background supervisor recovery for stuck/orphan tasks.
- **HITL & Artifact Integrity** — Configurable human approval gates and SHA-256 cryptographic verification for all inter-agent artifacts.

`Python` `FastAPI` `PostgreSQL 16` `Next.js 14` `TypeScript` `Multi-Agent Systems`

<details>
<summary>Other Projects</summary>

### 🔹 [Ad-Click Prediction MLOps](https://github.com/jacobjerryarackal/ad-click-prediction-mlops)

Enterprise-grade pipeline for predicting real-time ad clicks with ZenML, MLflow, Evidently, and FastAPI serving.
`Python` `MLOps` `ZenML` `MLflow` `XGBoost`

### 🔹 [Credit Card Fraud Detection](https://github.com/jacobjerryarackal/Credit-Card-Fraud-Detection-Project)

End-to-end MLOps pipeline for financial security with an interactive Streamlit dashboard.
`Python` `MLOps` `Fraud Detection` `Streamlit`

### 🔹 [Aura-AI](https://github.com/jacobjerryarackal/aura-ai)

Real-time AI communication analysis platform visualizing emotional traits using a reflex-agent architecture.
`TypeScript` `Python` `Llama 3.3` `Next.js` `FastAPI`

### 🔹 [MERN User CRUD](https://github.com/jacobjerryarackal/USER-CRUD-OPERATIONS-WITH-EXPRESS-MONGODB-NODE-JS)

Full-stack user management system showcasing core backend and database engineering.
`MERN` `Express` `MongoDB` `REST API`

</details>

## Tech Stack

**GenAI & Agentic AI**<br/>
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square) ![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white) ![RAG](https://img.shields.io/badge/RAG-000000?style=flat-square) ![Ollama](https://img.shields.io/badge/Ollama-FFFFFF?style=flat-square&logo=ollama&logoColor=black)

**Machine Learning**<br/>
![Scikit-learn](https://img.shields.io/badge/Scikit--learn-F7931E?style=flat-square&logo=scikit-learn&logoColor=white) ![XGBoost](https://img.shields.io/badge/XGBoost-000000?style=flat-square) ![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white) ![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)

**MLOps & Deployment**<br/>
![MLflow](https://img.shields.io/badge/MLflow-0194E2?style=flat-square&logo=mlflow&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white) ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)

**Backend & APIs**<br/>
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white) ![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white)

**Frontend**<br/>
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

**Databases & Storage**<br/>
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white) ![Pinecone](https://img.shields.io/badge/Pinecone-000000?style=flat-square) ![ChromaDB](https://img.shields.io/badge/ChromaDB-FF5722?style=flat-square)

**Cloud & Infrastructure**<br/>
![GCP](https://img.shields.io/badge/Google_Cloud-4285F4?style=flat-square&logo=google-cloud&logoColor=white) ![Azure](https://img.shields.io/badge/Azure-0089D6?style=flat-square&logo=microsoft-azure&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

## My Journey

My journey into AI started through machine learning and software engineering projects during my IT studies. As I built more applications, I became fascinated by what happens _after_ a model is trained—the deployment, monitoring, scalability, and automation required to keep systems alive. That curiosity drove me toward MLOps and systems engineering. Today, I focus on the complete lifecycle of intelligent systems, building AI solutions that are reliable, maintainable, and truly production-ready.

## Content & Community

- ✍️ [**Dev.to Articles**](https://dev.to/jacobjerryarackal/) — Writing about AI architecture, MLOps implementations, and lessons from building production-ready intelligent applications.
- 💻 [**Open Source**](https://github.com/jacobjerryarackal) — Building and sharing public repositories, technical documentation, and engineering breakdowns.

## GitHub Stats

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=jacobjerryarackal&show_icons=true&theme=github_dark&hide_border=true&count_private=true" height="165" alt="GitHub Stats"/>
&nbsp;
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=jacobjerryarackal&layout=compact&theme=github_dark&hide_border=true" height="165" alt="Top Languages"/>

<br/>

<img src="https://streak-stats.demolab.com/?user=jacobjerryarackal&theme=github-dark-blue&hide_border=true" height="165" alt="GitHub Streak"/>

</div>

<br/>

<div align="center">

Open to remote AI Engineering & MLOps roles (IST timezone flexibility). If you're building scalable AI systems or want to talk shop, feel free to reach out.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jacob-jerry-arackal-5a4596190/)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://jacobjerryarackal.github.io)
[![Dev.to](https://img.shields.io/badge/Dev.to-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white)](https://dev.to/jacobjerryarackal/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jacobjerryarackal123@gmail.com)

</div>
