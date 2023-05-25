# Template: Vite - React - TS (using styled-components and gh-pages)

## Setup

### Misc

- `App.tsx`
  - update `Wrapper` and `StyledApp`
    - need to add things such as `fontFamily`, `fontWeight`, `color`, etc.
- `package.json`
  - replace `template` in `name` with repo name
- `index.html`
  - favicon (should be all the same for FrontendMentor)
  - google font import(s)
  - title

### gh-pages (from [see comment section](https://dev.to/shashannkbawa/deploying-vite-app-to-github-pages-3ane))

- `vite.config.js`
  - replace `<repo>` in `base` with repo name
- `package.json`
  - replace `<repo>` in `homepage` with repo name

### Theme

- `themes.tsx`
  - add fonts used to `fontFamily`
  - remove unused font weights from `fontWeight`
  - add/update themes

## Development

## Deployment

- make sure all steps from 'Setup' is complete for 'gh-pages'
- run `npm run deploy` to update live site
