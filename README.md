# Resume and Portfolio 

Turborepo for simple resmue and portfolio site.

### Apps and Packages

- `web`: Next 14 app 
	- Deployed on Vercel: [ericnowels.me](https://ericnowels.me/)
- `ui`: Component library, built with Chakra UI 
- `types`: Shared Typescript types, interfaces and enums
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo


### Utilities

This Turborepo uses the following tools, packages and utilities

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Chakra UI](https://v2.chakra-ui.com/) components
- [Tailwind CSS](https://tailwindcss.com/) for custom styling


## Getting Started

**Set up environment**

```bash
vercel login
cd apps/web
vercel link
vercel env pull .env.development.local
```

**Start the development server**

```bash
pnpm dev
```

Open [http://localhost:3004](http://localhost:3004) with your browser to view the app.





