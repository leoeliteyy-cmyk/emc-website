# EMC Website

The official website for EMC, an early-stage programming language project focused on practical performance, strong memory safety, and adaptive performance.

## Project status

The website deliberately distinguishes project goals from implemented capabilities. Initial bootstrap infrastructure and source-validation tooling exist, but the full compiler is not implemented. Native code generation, a working lexer/parser, GPU execution, a production-ready runtime, and official downloads are not claimed.

## Stack and architecture

- Next.js App Router with React and TypeScript
- Tailwind CSS 4 for the utility layer, with a small global CSS design system for site components and responsive behavior
- Shared site shell in `src/components/site-shell.tsx`: wordmark, desktop/mobile navigation, footer, page-intro, and status tags
- Route pages in `src/app/`: home, language, technology, documentation, roadmap, development status, download, and contributing
- Metadata is defined in the root layout and per-page route metadata; `src/app/icon.svg` is the original favicon

## Development

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```sh
npm run lint
npm run typecheck
npm run build
```

## Links

The verified project repository is [leoeliteyy-cmyk/emc-website](https://github.com/leoeliteyy-cmyk/emc-website).
