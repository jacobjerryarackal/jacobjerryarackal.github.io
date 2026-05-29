---
layout: page
title: "Credit Card Fraud Detection"
description: "End-to-end MLOps pipeline for financial security."
importance: 3
category: MLOps
github: https://github.com/jacobjerryarackal/Credit-Card-Fraud-Detection-Project
---

## The Problem
Financial institutions lose billions to fraud annually. The challenge is balancing high recall (catching all fraud) with high precision (not blocking legitimate users).

## Key Decisions
- **ZenML for Orchestration:** Used to manage the end-to-end workflow, ensuring reproducibility from raw data to batch inference.
- **RobustScaler & OneHot Encoding:** Crucial preprocessing decisions to handle the heavy outliers and categorical variance typical in financial transaction data.
- **Streamlit Dashboard:** Built to provide human analysts with fraud probability scoring and risk classification, making the model's output actionable.

## Results
- **Outcome:** A deployable fraud detection system with real-time risk classification.
- **Actions:** Automated recommended business actions (Allow/Review/Block) based on score thresholds.

## What I Learned
Handling imbalanced datasets requires more than just a good model; it requires a robust preprocessing pipeline and a deep understanding of the business cost of false positives vs false negatives.

---
*[Built as an MLOps MVP. Source code is public.]*
