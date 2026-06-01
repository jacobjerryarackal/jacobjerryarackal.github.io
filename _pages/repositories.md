---
layout: default
permalink: /repositories/
title: repositories
nav: true
nav_order: 4
---

<div class="post">

  <div class="writing-header">
    <h1 class="post-title">Repositories</h1>
    <p class="writing-subtitle">Selected open source work on <a href="https://github.com/jacobjerryarackal" target="_blank" rel="noopener noreferrer">GitHub -></a></p>
  </div>

  <div class="repos-grid">
    {% for item in site.data.repositories.github_repos %}
    <div class="repo-card">
      <div class="repo-card-header">
        <a href="https://github.com/{{ item.repo }}" target="_blank" rel="noopener noreferrer">
          <svg class="repo-card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8Z"/></svg>
          <span class="repo-card-name">{{ item.name }}</span>
          <span class="repo-card-arrow">-></span>
        </a>
      </div>
      <p class="repo-card-desc">{{ item.description }}</p>
      <div class="repo-card-footer">
        <span class="repo-card-lang">
          <span class="repo-card-lang-dot"></span>{{ item.language }}
        </span>
        {% for topic in item.topics %}
          <span class="writing-tag">{{ topic }}</span>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>

</div>

<style>
  .writing-header {
    margin-bottom: 1.5rem;
  }

  .writing-subtitle {
    margin-bottom: 0;
  }

  .repos-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 25rem), 1fr));
  }

  .repo-card {
    display: flex;
    min-height: 13rem;
    flex-direction: column;
    padding: 1.25rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.65rem;
    background: var(--global-card-bg-color);
    transition:
      border-color 160ms ease,
      transform 160ms ease;
  }

  .repo-card:hover {
    border-color: var(--global-theme-color);
    transform: translateY(-0.2rem);
  }

  .repo-card-header a,
  .repo-card-footer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .repo-card-icon {
    width: 1rem;
    height: 1rem;
    fill: currentColor;
  }

  .repo-card-name {
    font-weight: 600;
  }

  .repo-card-arrow {
    margin-left: auto;
  }

  .repo-card-desc {
    flex: 1;
    margin: 0.9rem 0;
  }

  .repo-card-footer {
    flex-wrap: wrap;
    font-size: 0.85rem;
  }

  .repo-card-lang {
    margin-right: 0.25rem;
  }

  .repo-card-lang-dot {
    display: inline-block;
    width: 0.55rem;
    height: 0.55rem;
    margin-right: 0.35rem;
    border-radius: 50%;
    background: var(--global-theme-color);
  }

  .writing-tag {
    padding: 0.15rem 0.45rem;
    border-radius: 999px;
    background: var(--global-bg-color);
  }
</style>
