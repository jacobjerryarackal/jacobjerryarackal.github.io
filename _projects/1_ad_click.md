---
layout: page
title: "Ad-Click Prediction MLOps"
description: "Enterprise-grade pipeline for predicting real-time ad clicks."
importance: 1
category: MLOps
github: https://github.com/jacobjerryarackal/ad-click-prediction-mlops
---

## The Problem
Digital marketing teams often face waste in ad spend due to poor targeting. Predicting user click behavior in real-time is essential for optimizing bidding strategies and ensuring ads reach the most relevant users.

## Key Decisions
- **ZenML & MLflow:** I chose ZenML for pipeline orchestration and MLflow for experiment tracking to ensure a fully reproducible and versioned model lifecycle.
- **Evidently AI:** Integrated for data drift detection to trigger automated retraining, ensuring the model remains accurate as user behavior evolves.
- **FastAPI:** Selected for model serving to achieve the sub-50ms latency required for real-time bidding environments.

## Results
| Metric | Value |
| :--- | :--- |
| Accuracy | 83.4% |
| ROC-AUC | 0.88 |
| Serving Latency | < 50ms |

## What I Learned
Building this project emphasized that "Model is only 5% of the work"—the real challenge is the orchestration, monitoring, and automated retraining loops that keep the system alive in production.

---
*[Built as an MLOps showcase. Source code is public.]*
