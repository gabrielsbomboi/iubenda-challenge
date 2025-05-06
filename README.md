# Iubenda Consent Widget

This project is a Vue 3 application implementing the Iubenda consent widget, using Pinia for state management, Sass for styling, Stylelint for CSS/SCSS linting, and ESLint for JavaScript and Vue code quality. Karma and Jasmine are using for testing.

## Requirements

* Node.js 20+ (LTS)
* npm 8+

## Project Structure

```
├─ legacy/               # Original HTML/CSS/JS reference implementation
├─ src/                  # Vue 3 application source
│  ├─ assets/            # Static assets (images, fonts)
│  ├─ components/        # Vue Single File Components
│  ├─ stores/            # Pinia stores
│  ├─ configDefault.js   # Default config object
│  └─ main.js            # App entry point (Vue + Pinia setup)
│
├─ .eslintrc.cjs         # ESLint configuration (flat config)
├─ .stylelintrc.cjs      # Stylelint configuration for Sass and Vue
├─ index.html            # HTML entry point for Vite
├─ package.json          # npm scripts & dependency listing
└─ vite.config.js        # Vite build configuration
```

## Install Dependencies

```bash
npm install
```

## Set up and Run the Application

1. Install dependencies (`npm install`).
2. Start development server:

   ```bash
   npm run dev
   ```
3. Build for production:

   ```bash
   npm run build
   ```
4. Preview the optimized bundle:

   ```bash
   npm run preview
   ```

## Tests

This project uses **Karma** and **Jasmine** to run unit and integration tests on all `.spec.js` files under `tests/`.

Run:

```bash
# Run once in headless Chrome
npm run test

# Watch for changes and re-run tests automatically
npm run test:watch
```

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
| `npm run tests`        | Run Karma tests                     |

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

**ESLint** configuration resides in **`eslint.config.js`** (flat config), built with `defineConfig`, extending **`@eslint/js`** recommended JS rules and **Vue 3’s flat-recommended** ruleset from `eslint-plugin-vue`, and using browser globals via `globals.browser`.

Run:

```bash
npm run lint:js
npm run lint:js:fix
```

## State Storage

The following stores are defined in `src/stores`:

* **`config.js`** (`useConfigStore`) – Manages the consent widget configuration, with methods:
    * `resetConfig()` – Restore defaults from `configDefault.js`.
    * Getters: `isNonCompliantForItaly`, `isNonCompliantForFrance`, `isNonCompliantForItalyAndFrance` to detect legal compliance.

## Design Decisions

* **Vite** for fast dev server and optimized production bundles.
* **Pinia** as centralized state management with flat store actions and getters.
* **ESLint flat config** and **Stylelint** for code quality.
* **CSS custom properties** mixed with **Sass** for theming.

## Suggested Improvements

* Add **E2E tests** (Cypress).
* Fetch the default configuration from the backend.
* Improve **accessibility** (ARIA roles, focus management).
* Implement **internationalization** (i18n) for messages.
* Extract core application logic from `App.vue` into a standalone composable/s and/or components for better scalability and maintainability.
* Persist the configuration settings to `localStorage`.

## Time Spent & Future Work

I spent approximately **6 hours** building this assestment. Given more time, I would consider:

* Enhance the UI’s accessibility and better mobile responsiveness.
* Integrate a CI pipeline for linting, testing, and deployment.
* Extract core application logic from App.vue into a standalone composable/s and/or components for better scalability and maintainability.
