module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'xo',
        'xo-typescript',
		'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended'
	],
	plugins: [
		'react',
        'prettier',
        '@typescript-eslint'
	],
    'parser': '@typescript-eslint/parser',
	rules: {
		eqeqeq: 'error',
        'func-names': "off",
		'no-console': 'warn',
        "@typescript-eslint/object-curly-spacing": "off",
        "@typescript-eslint/indent": "off",
		'prettier/prettier': 'error',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/react-in-jsx-scope': 'off'
	},
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
				'.prettierrc.{js,cjs}',
				'vite.config.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		}
	],
	parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
		ecmaVersion: 'latest',
		sourceType: 'module',
        "ecmaFeatures": {
            "jsx": true
        }
	},
    settings: {
        react: {
          version: "detect"
        }
    },
	ignorePatterns: [
		'node_modules',
		'build',
		'dist',
		'public',
        '.eslintrc.cjs'
	]
};
