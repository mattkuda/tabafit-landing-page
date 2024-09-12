module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true, // Add this to enable Node.js global variables like 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // For TypeScript rules
  ],
  parser: '@typescript-eslint/parser', // Enables ESLint to understand TypeScript syntax
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'], // Only using basic TypeScript plugin
  rules: {
    // Basic formatting rules
    indent: ['error', 2], // 2-space indent
    quotes: ['error', 'single'], // Use single quotes
    semi: ['error', 'always'], // Enforce semicolons
    'no-trailing-spaces': 'error', // Remove trailing spaces
    'eol-last': ['error', 'always'], // Ensure there's a newline at the end of files
    'no-unused-vars': 'warn', // Warn about unused variables
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignore unused variables with underscore
  },
};
