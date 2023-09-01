# saschaklatt.dev

This repository contains the source code of my personal dev portfolio website [saschaklatt.dev](https://saschaklatt.dev).

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm build:noindex`           | Same `pnpm build` but adds `robots.txt` to disallow search engine crawling. Useful for Netlify branch deploys.    |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
