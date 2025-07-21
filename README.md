# ⚙️ Config

Presets for eslint, prettier and typescript.

## Usage

### Prettier

Add a `prettier.config.mjs` file to your root folder:

```js
// prettier.config.mjs
import { prettierPreset } from '@maas/config/prettier-preset.mjs'
export default prettierPreset
```

For projects without Tailwind CSS use:

```js
// prettier.config.mjs
import { prettierPlainPreset } from '@maas/config/prettier-plain-preset.mjs'
export default prettierPlainPreset
```

### Eslint

Add a `eslint.config.mjs` file to your root or project folder:

#### Typescript

```js
// eslint.config.mjs
import { typescriptPreset } from '@maas/config/eslint-typescript-preset.mjs'
export default typescriptPreset
```

#### Vue

```js
import { vuePreset } from '@maas/config/eslint-vue-preset.mjs'
export default vuePreset
```

#### Nuxt

```js
import { nuxtPreset } from '@maas/config/eslint-nuxt-preset.mjs'
export default nuxtPreset
```

### Typescript

Extend your `tsconfig.json`:

#### Vue

```json
{
  "extends": "@maas/config/tsconfig/vue-base.json"
}
```

#### Generic Package

```json
{
  "extends": "@maas/config/tsconfig/package-base.json"
}
```
