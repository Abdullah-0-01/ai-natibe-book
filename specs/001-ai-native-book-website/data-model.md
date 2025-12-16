# Data Model: AI-Native Book Website

## Entities

### Book
Represents the entire book. It is a collection of chapters.

### Chapter
Represents a chapter of the book.
- **title**: `string` - The title of the chapter.
- **slug**: `string` - The URL-friendly slug for the chapter.
- **topics**: `Topic[]` - An array of topics within the chapter.

### Topic
Represents a topic within a chapter.
- **title**: `string` - The title of the topic.
- **slug**: `string` - The URL-friendly slug for the topic.
- **content**: `string` (MDX) - The content of the topic in MDX format.

### WaitlistEntry
Represents a user's entry in the waitlist.
- **name**: `string` - The user's name.
- **email**: `string` - The user's email address.

## Relationships
- A `Book` has many `Chapters`.
- A `Chapter` has many `Topics`.

## Data Flow
- Book, Chapter, and Topic data will be sourced from MDX files in the `/content/chapters` directory. A script in `/lib/mdx.ts` will parse these files and construct the data structures.
- `WaitlistEntry` data will be collected from the contact form and saved to the browser's `localStorage`.
