# Research: AI-Native Book Website

## Decisions

- **Framework**: Docusaurus 3
- **Styling**: Tailwind CSS
- **Content**: MDX
- **Deployment**: Vercel (or Netlify/GitHub Pages compatible)

## Rationale

- **Docusaurus 3**: Ideal for content-focused websites like books, leveraging markdown/MDX for easy content management. It provides out-of-the-box features like versioning, search, and a robust documentation framework. Its extensibility allows for integrating custom React components and styling.
- **Tailwind CSS**: Offers a utility-first CSS framework for rapid UI development. By excluding shadcn/ui, custom components will be built directly with Tailwind, maintaining full control over the styling and reducing external dependencies, aligning even more strictly with the "Zero External UI Libraries" principle.
- **MDX**: Allows for writing content in Markdown and embedding interactive React components directly within the content, which is ideal for a book website. It aligns with the "MDX for All Book Content" principle and is natively supported by Docusaurus.
- **Vercel (or compatible)**: Docusaurus generates static sites, making it highly compatible with static site hosting services like Vercel, Netlify, or GitHub Pages, offering seamless deployment and excellent performance.

## Alternatives Considered

- **Next.js 15**: Initially considered, but Docusaurus offers a more tailored solution for content-heavy, documentation-style websites with built-in features (sidebar, versioning) that would need to be custom-built in Next.js. The user's specific request to explain 5 chapters aligns well with Docusaurus's docs structure.
- **shadcn/ui**: Previously planned, but now explicitly excluded per user request. This decision simplifies the UI stack further by relying solely on Tailwind for styling and custom component development. This reinforces the project's principle of minimizing external UI library dependencies.
- **Gatsby**: Another powerful static site generator, but Docusaurus provides a more opinionated and streamlined experience specifically for documentation and content sites.
- **Astro**: Excellent for performance, but Docusaurus's features for structured content and documentation are a stronger fit for a book website.
