import type { Config } from 'release-it'

export default {
  git: {
    requireCleanWorkingDir: true,
  },
  npm: {
    allowSameVersion: true,
  },
  plugins: {
    '@release-it/bumper': {
      in: 'package.json',
      out: ['package.json'],
    },
  },
} satisfies Config
