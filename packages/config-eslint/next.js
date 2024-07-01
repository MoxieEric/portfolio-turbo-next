const { resolve } = require('node:path')
const { overrides } = require('./react')

const project = resolve(process.cwd(), 'tsconfig.json')

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
	extends: [
		...[
			'@vercel/style-guide/eslint/node',
			'@vercel/style-guide/eslint/typescript',
			'@vercel/style-guide/eslint/browser',
			'@vercel/style-guide/eslint/react',
			'@vercel/style-guide/eslint/next',
		].map(require.resolve),
		'turbo',
	],
	parserOptions: {
		project,
	},
	globals: {
		React: true,
		JSX: true,
	},
	settings: {
		'import/resolver': {
			typescript: {
				project,
			},
			node: {
				extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	ignorePatterns: ['node_modules/', 'dist/'],
	rules: {
		'import/no-default-export': 'off',
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'function-expression',
			},
		],
		'unicorn/filename-case': [
			'warn',
			{
				cases: {
					kebabCase: true,
					camelCase: true,
					pascalCase: true,
				},
			},
		],
	},
	overrides: {
		rules: {
			'sort-imports': [
				'warn',
				{
					memberSyntaxSortOrder: [
						'none',
						'all',
						'multiple',
						'single',
					],
					allowSeparatedGroups: true,
				},
			],
		},
	},
}
