# Iubenda Consent Widget

This project is a Vue 3 application implementing the Iubenda consent widget, using Pinia for state management, Sass for styling, Stylelint for CSS/SCSS linting, and ESLint for JavaScript and Vue code quality.

## Requirements

* Node.js 20+ (LTS)
* npm 8+

## Project Structure

```
├─ legacy/                # Original HTML/CSS/JS reference implementation
├─ src/                   # Vue 3 application source
│  ├─ assets/            # Static assets (images, fonts)
│  ├─ components/        # Vue Single File Components
│  ├─ stores/            # Pinia stores
│  ├─ configDefault.js   # Default config object
│  └─ main.js            # App entry point (Vue + Pinia setup)
│
├─ .eslintrc.cjs         # ESLint configuration (flat-config may use eslint.config.js)
├─ .stylelintrc.cjs      # Stylelint configuration for Sass and Vue
├─ index.html            # HTML entry point for Vite
├─ package.json          # npm scripts & dependency listing
└─ vite.config.js        # Vite build configuration
```

## Install Dependencies

Install both runtime and development packages with:

```bash
npm install
```

This command installs:

* **vue**: Vue 3 framework
* **pinia**: State management library
* **axios**: Promise-based HTTP client
* **sass**: Dart Sass compiler for `.scss`
* **eslint** & **eslint-plugin-vue**: JavaScript/Vue linter
* **@eslint/js** & **globals**: Core ESLint rules and browser globals
* **stylelint**, **stylelint-config-standard-scss**, **stylelint-config-recommended-vue**, **stylelint-scss**, **postcss-scss**, **postcss-html**: Stylelint and plugins for SCSS and Vue SFCs

## Available Scripts

| Command                | Description                         |
| ---------------------- | ----------------------------------- |
| `npm run dev`          | Start development server (Vite)     |
| `npm run build`        | Build for production                |
| `npm run preview`      | Preview production build locally    |
| `npm run lint:js`      | Run ESLint on JS and Vue files      |
| `npm run lint:js:fix`  | Auto-fix ESLint issues              |
| `npm run lint:css`     | Run Stylelint on CSS/SCSS/Vue files |
| `npm run lint:css:fix` | Auto-fix Stylelint issues           |

## Start Development

After installing dependencies, launch the dev server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to view the app.

## CSS/SCSS Linting

This project uses **Stylelint** to lint Sass (`.scss`) and `<style>` blocks in Vue Single File Components:

* Configuration in `.stylelintrc.cjs` uses `postcss-scss` and `postcss-html` for parsing.
* Extends `stylelint-config-standard-scss` and `stylelint-config-recommended-vue`.

Run:

```bash
npm run lint:css
npm run lint:css:fix
```

## JavaScript & Vue Linting

**ESLint** configuration resides in **`eslint.config.js`** (flat config), built with `defineConfig`, extending `@eslint/js` recommended JS rules and Vue 3’s flat-recommended ruleset from `eslint-plugin-vue`, and using browser globals via `globals.browser`.

Run:

```bash
npm run lint
npm run lint:fix
```

## State Storage

The following Pinia stores are defined in `src/stores`:

* **`config.js`** (`useConfigStore`) – Manages the consent widget configuration, with the following methods:

  * `updateConfig(newConfig)` – Merge updates into the existing config object.
  * `resetConfig()` – Restore defaults from `configDefault.js`.
