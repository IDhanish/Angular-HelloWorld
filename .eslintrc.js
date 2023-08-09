module.exports = {
	root: true,
	env: {
	  browser: true,
	  node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
	  ecmaVersion: 2020,
	  sourceType: 'module',
	  project: 'tsconfig.json', // Path to your tsconfig.json file
	},
	plugins: ['@typescript-eslint', 'angular'],
	extends: [
	  'eslint:recommended',
	  'plugin:@typescript-eslint/recommended',
	  'plugin:angular/recommended',
	],
	rules: {
	  // Add or customize rules as per your project's requirements
	  // For example, to allow console statements in development environment:
	  'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
  };
  