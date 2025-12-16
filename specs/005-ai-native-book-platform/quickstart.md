# Quickstart Guide: AI-Native Book Platform

**Branch**: `005-ai-native-book-platform` | **Date**: 2025-12-10

This guide provides instructions for setting up the local development environment.

## Prerequisites

-   Node.js (v18 or higher)
-   npm (v9 or higher) or yarn
-   Git

## Local Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd ai-native-book
    ```

2.  **Checkout the feature branch:**
    ```bash
    git checkout 005-ai-native-book-platform
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```
    *or*
    ```bash
    yarn install
    ```

4.  **Run the development server:**
    ```bash
    npm run start
    ```
    *or*
    ```bash
    yarn start
    ```

5.  **Open the site:**
    The development server will be running at `http://localhost:3000`.

## Project Structure

-   **`/src/content/chapters`**: All book content is located here in MDX files.
-   **`/src/components`**: Reusable React components.
-   **`/docusaurus.config.ts`**: Main Docusaurus configuration file.
-   **`/sidebars.ts`**: Sidebar navigation configuration.
-   **`/tailwind.config.js`**: Tailwind CSS configuration.
