# Freelancing Company

A professional Next.js application for managing freelancing services.

## Features

- Built with Next.js 16 and React 19
- TypeScript for type safety
- Tailwind CSS for styling
- ESLint for code linting
- Prettier for code formatting
- Jest for testing
- Husky and lint-staged for pre-commit hooks

## Project Structure

```
├── app/                 # Next.js app router pages
├── components/          # Reusable React components
├── hooks/               # Custom React hooks
├── lib/                 # Utility libraries and configurations
├── types/               # TypeScript type definitions
├── utils/               # Helper functions
├── public/              # Static assets
└── ...
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run type-check` - Run TypeScript type checking

## Development

### Code Quality

This project uses ESLint and Prettier to maintain code quality. Pre-commit hooks are set up with Husky and lint-staged to ensure code is formatted and linted before commits.

### Testing

Tests are written with Jest and React Testing Library. Run tests with:

```bash
npm run test
```

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is private.
