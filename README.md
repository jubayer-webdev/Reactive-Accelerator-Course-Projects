## Table of Contents

-   [Project's Live Link](#projects-live-link)
-   [Timestamp for 7.11 Project Tutorial - DocuCraft - Part 1](#timestamp-for-711-project-tutorial---docucraft---part-1)
-   [Timestamp for 7.12 Project Tutorial - DocuCraft - Part 2](#timestamp-for-7.12-project-tutorial---docuCraft---part-2)
-   [Necessary Commands](#necessary-commands)
-   [Dependencies for creating parser](#dependencies-for-creating-parser)

## Project's Live Link

## Timestamp for 7.11 Project Tutorial - DocuCraft - Part 1

```
05:00 - Introduction to the project
03:50 - Project setup
06:52 - Overall procedure
09:08 - markdown(.md) file's structure
16:06 - Creating Parser
17:40 - Parsing logic
32:00 - tailwind configuration
33:29 - modify RootLayout
46:00 - Sidebar implementation
01:06:00 - HOme or Landing Page implementation
01:09:25 - bug fix of tailwind.config.js
01:10:48 - Dynamic Routing
01:20:40 - implement getDocumentContent() in doc.js
01:25:50 - implement ContentDisplay.jsx
```

## Timestamp for 7.12 Project Tutorial - DocuCraft - Part 2

```
00:05 - implement authors, categories and tags segment
15:30 - bug fix: show the child label perfectly
21:10 - implement authors, categories and tags page content
```

## Necessary Commands

To create a next.js project

```
npx create-next-app@14
```

To install all the dependencies listed in the project's package.json file.

```
yarn install
```

Install dependencies of parser

```
yarn add gray-matter remark remark-html
```

Install Tailwind plugins

```
yarn add @tailwindcss/aspect-ratio @tailwindcss/typography
```

Run the project

```
yarn dev
```

## Dependencies for creating parser

-   [remark](https://www.npmjs.com/package/remark)
-   [remark-html](https://www.npmjs.com/package/remark-html)
-   [gray-matter](https://www.npmjs.com/package/gray-matter)
