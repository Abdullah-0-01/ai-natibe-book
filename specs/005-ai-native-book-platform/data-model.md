# Data Model: AI-Native Book Platform

**Date**: 2025-12-10
**Status**: Initial Draft

This document describes the data model for the AI-Native Book Platform, focusing on the content structure and page types. As this is a static site, the data model primarily defines the structure of MDX files and static page content.

## 1. Book (Conceptual Entity)

Represents the entire "Physical AI & Humanoid Robotics" book.

## 2. Chapter

Represents a single chapter within the book.

- **Quantity**: 5 chapters.
- **Structure**:
    - `id`: Unique identifier (e.g., `01`, `02`, ... `05`).
    - `title`: Chapter title (e.g., "The Robotic Nervous System").
    - `topics`: An ordered list of `Topic` entities.
- **File Representation**: Chapters will correspond to directories within the Docusaurus `docs` content folder (e.g., `docs/01-the-robotic-nervous-system/`).

## 3. Topic

Represents a single topic within a chapter.

- **Quantity**: 2 topics per chapter (total 10 topics).
- **Structure**:
    - `id`: Unique identifier within a chapter (e.g., `01`, `02`).
    - `title`: Topic title.
    - `content`: The actual MDX content for the topic.
    - `slug`: URL-friendly identifier.
    - `frontMatter`: MDX front matter (e.g., `title`, `sidebar_label`, `slug`, `description`).
- **File Representation**: Topics will correspond to MDX files within their respective chapter directories (e.g., `docs/01-the-robotic-nervous-system/01-ros2-basics.mdx`).

## 4. Static Pages

Represents standalone pages outside the main book content.

### 4.1. Home Page

- **Content**: Hero section, book overview/preview, call-to-action.
- **File Representation**: `src/pages/index.tsx`.

### 4.2. About Page

- **Content**: Author information, book mission/overview.
- **File Representation**: `src/pages/about.tsx`.

### 4.3. Contact Page

- **Content**: Social media links (GitHub, Medium, LinkedIn, WhatsApp, Facebook).
- **File Representation**: `src/pages/contact.tsx`.

## 5. MDX Front Matter (Contract)

For `Topic` MDX files, the following front matter structure will be enforced:

```yaml
---
title: "Topic Title"
sidebar_label: "Topic Label" # Used in sidebar navigation
slug: "/chapter-slug/topic-slug"
description: "A brief description of the topic."
# Possibly more fields like `keywords`, `authors`, etc. if needed later.
---
```