# saschaklatt.dev

[![Netlify Status](https://api.netlify.com/api/v1/badges/9008f0b9-b681-42be-af32-19e2efb19170/deploy-status)](https://app.netlify.com/sites/saschaklatt/deploys)

This repository contains the source code of my personal dev portfolio website [saschaklatt.dev](https://saschaklatt.dev).

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                                                                         |
| :------------------------ | :------------------------------------------------------------------------------------------------------------- |
| `pnpm install`            | Installs dependencies                                                                                          |
| `pnpm dev`                | Starts local dev server at `localhost:4321`                                                                    |
| `pnpm build`              | Build your production site to `./dist/`                                                                        |
| `pnpm build:noindex`      | Same `pnpm build` but adds `robots.txt` to disallow search engine crawling. Useful for Netlify branch deploys. |
| `pnpm start`              | Runs your locally build (requires `pnpm build`)                                                                |
| `pnpm astro ...`          | Run CLI commands like `astro add`, `astro check`                                                               |
| `pnpm astro -- --help`    | Get help using the Astro CLI                                                                                   |

## TODOs

- [ ] Images
    - [ ] Import images from `src/` in content collections
    - [ ] Import SVG files as `.svg` – not `.astro`
    - [ ] Image sizes `x4` aren't useful
    - [ ] iPhone frame as separate asset so that users can just add a simple profile pic
    - [ ] Store illustrations as stylable SVGs (transparent + tailwind color scheme)
- [ ] Pages in Markdown
- [ ] Individual project pages
- [ ] CV / Resume section
- [x] Alias imports
- [ ] Cursor rules
- [ ] Documentation
    - [ ] astro.config.mjs
- [ ] Component Overview (Storybook)
- [ ] Fix line number position on empty lines in <Editor/> on Safari
- [ ] Project intro doc
- [ ] Easy-to-edit color scheme
- [ ] A11y review
- [ ] SEO review
