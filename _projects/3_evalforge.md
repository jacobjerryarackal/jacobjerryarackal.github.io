---
layout: page
title: "EvalForge"
description: "Benchmark-driven evaluation and observability platform for agentic AI."
importance: 3
category: work
github: https://github.com/jacobjerryarackal/evalforge
---

## The Problem

Testing agentic AI systems purely by asserting final string responses masks severe failure modes: tool misrouting, hallucinated parameters, unfaithful grounding, and explosive latency or token consumption across multi-turn decision loops.

## Key Decisions

- **Full-Trajectory Observability:** Captured granular intermediate execution traces (thoughts, tool invocations, arguments, observations, token usage, latency, and cost).
- **Dual-Pronged Evaluation Subsystem:** Paired deterministic heuristics (token budgets, latency ceilings, tool schema validation) with cognitive LLM-as-a-judge rubrics for faithfulness and groundedness.
- **Experiment & Regression Tracking:** Built automated comparative regression delta analysis against version-controlled golden datasets and experiment baselines.

## Results

- **Observability:** End-to-end trace waterfalls and per-step cost/latency breakdowns.
- **Repeatability:** Quantitative regression detection preventing silent degradation during prompt or model upgrades.

## What I Learned

Agent evaluation must transition from subjective manual inspection ("vibes-based testing") to a quantitative, repeatable engineering discipline backed by versioned benchmarks.

---

_[Built as an agent evaluation platform. Source code is public.]_
