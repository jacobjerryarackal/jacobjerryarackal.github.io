---
layout: page
title: "MendCI"
description: "Self-healing CI/CD agent that autonomously repairs pipelines."
importance: 2
category: GenAI
github: https://github.com/jacobjerryarackal/mend-ci
---

## The Problem
CI/CD failures are expensive. Developers often spend hours context-switching just to triage a broken build, identify a missing dependency, or fix a minor syntax error in a configuration file.

## Key Decisions
- **Gemini 2.5 Pro:** Utilized for its massive context window, allowing the agent to parse multi-megabyte stack traces and identify root causes across the entire codebase.
- **Model Context Protocol (MCP):** Integrated to securely automate branch generation and commits, allowing the agent to actually *act* on its findings rather than just reporting them.
- **Human-in-the-Loop:** Designed a telemetry-driven dashboard so that while the diagnosis is autonomous, the final code patch always requires developer approval.

## Results
- **Triage Time:** Compressed from hours to seconds.
- **Outcome:** Automated Merge Requests containing actionable remediation patches.

## What I Learned
The power of MCP for giving LLMs agency within a secure developer environment. It transforms an LLM from a "chat box" into a "collaborator."

---
*[Built for autonomous DevOps. Source code is public.]*
