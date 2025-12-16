# Quickstart: AI-Native Book Website (Docusaurus)

## Prerequisites
- Node.js (v18 or later)
- npm or yarn

## Setup
1. Clone the repository.
2. Initialize Docusaurus project (if not already done, this command is for setting up a new docusaurus project):
   ```bash
   npx create-docusaurus@latest . classic --typescript
   ```
   **NOTE**: This project is assumed to be already initialized.
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```
4. Configure Tailwind CSS and PostCSS (Docusaurus integration).

## Running the Development Server
```bash
npm run start
```
or
```bash
yarn start
```
The application will be available at `http://localhost:3000`.

## Building for Production
```bash
npm run build
```
or
```bash
yarn build
```

## Running in Production Mode (serving static build)
```bash
npm install -g serve
serve -s build
```
The static site will be served, typically at `http://localhost:3000`.