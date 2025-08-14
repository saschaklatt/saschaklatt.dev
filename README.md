# saschaklatt.dev

[![Netlify Status](https://api.netlify.com/api/v1/badges/9008f0b9-b681-42be-af32-19e2efb19170/deploy-status)](https://app.netlify.com/sites/saschaklatt/deploys)

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

## Caveats

- Astro components can't be used inside a framework component (e.g. React component)
- Storybook can't render Astro components

## TODOs

- [x] Tailwind 4 upgrade
- [ ] Images
    - [x] Import images from `src/` in content collections
    - [x] Auto-generate responsive sizes
    - [x] Import SVG files as `.svg` – not `.astro`
    - [ ] iPhone frame as separate asset so that users can just add a simple profile pic
    - [ ] Store illustrations as stylable SVGs (transparent + Tailwind color scheme)
- [ ] CV / Resume section
- [x] Make testimonials CSS-only (or at least replace React with native JS)
- [ ] Individual project pages
- [ ] Bugs
    - [ ] Fix line number position on empty lines in <Editor/> on Safari
    - [ ] Fix line between waves
- [x] Alias imports
- [ ] Cursor rules
- [ ] Documentation
    - [ ] Project overview
    - [ ] astro.config.mjs
    - [ ] How to chage styling: tailwind, color scheme, fonts (incl. weights), ...
    - [ ] Component Overview (Storybook / [Astrobook](https://github.com/ocavue/astrobook))
- [ ] Pages in Markdown
    - [ ] Start page
    - [ ] Legal pages
- [ ] Reviews
    - [ ] A11y review
    - [ ] SEO review
    - [ ] Custom CSS class review
- [ ] Light mode / dark mode


## Template Improvements

- [ ] More Hero sections to choose from
- [ ] Remove app versioning
