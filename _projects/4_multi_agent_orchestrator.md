---
layout: page
title: "Multi-Agent Workflow Orchestrator"
description: "Durable workflow runtime for deterministic and fault-tolerant multi-agent systems."
importance: 4
category: work
github: https://github.com/jacobjerryarackal/multi-agent-workflow-orchestrator
---

## The Problem

Naive procedural prompt chaining fails in production when tasks require branching topological dependencies, crash recovery for stuck tasks, atomic idempotency, human approval gates, or cryptographic integrity of passed artifacts.

## Key Decisions

- **Deterministic DAG Scheduling:** Implemented topological sort with Kahn's algorithm, strict cycle detection, parallel branch execution, and structured fan-in aggregation.
- **Durable Task Leases & Crash Recovery:** Designed database-backed task leases (`lease_until`, `heartbeat_at`) with background supervisor recovery for orphan tasks.
- **HITL & Artifact Integrity:** Built configurable human approval gates and SHA-256 cryptographic verification for all inter-agent artifacts.

## Results

- **Reliability:** 154/154 passing unit and integration tests with zero type errors in Pyright.
- **Fault Tolerance:** Guaranteed at-least-once task execution with atomic lease recovery and PostgreSQL idempotency keys.

## What I Learned

An AI model call is non-deterministic, ephemeral, and prone to failure; a workflow runtime must be deterministic, durable, and self-healing.

---

_[Built as a multi-agent workflow runtime. Source code is public.]_
