module.exports = {
	root: true,
	env: {
	  browser: true,
	  node: true,
	},
	extends: [
	  'eslint:recommended',
	  'plugin:@typescript-eslint/recommended',
	  'plugin:angular/johnpapa', // You can choose a different Angular style guide preset
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
	  ecmaVersion: 2020,
	  sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'angular', 'html'],
	rules: {
	  // Customize rules based on your preferences
	  '@typescript-eslint/explicit-module-boundary-types': 'off', // Allow implicit return types in Angular
	  'angular/controller-as-vm': 'off', // Depends on your preferred coding style
	},
  };
  