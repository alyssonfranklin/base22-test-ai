# Base22 Portal Intranet

A modern horizontal portal intranet built with Next.js 14 and Radix UI.

## Features

- **Modern UI**: Built with Next.js 14 and Radix UI components
- **App Router**: Utilizing Next.js App Router for efficient routing
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Component Library**: Reusable UI components built with Radix UI
- **TypeScript Support**: Full TypeScript integration for better developer experience
- **CSS Modules**: Scoped styling for components

## Tech Stack

- **Next.js 14**: React framework for production
- **Radix UI**: Headless UI component library
- **TypeScript**: Static type checking
- **CSS Modules**: Scoped CSS styles
- **ESLint**: Code linting
- **Prettier**: Code formatting

## Project Structure

```
base22-portal/
├── public/
│   └── images/            # Static images
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/
│   │   ├── layout/        # Layout components (Header, Footer, Navigation)
│   │   ├── pages/         # Page-specific components
│   │   └── ui/            # Reusable UI components
│   ├── data/              # Mock data and content
│   ├── lib/               # Utility functions and helpers
│   └── types/             # TypeScript type definitions
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Color Scheme

- **Primary Blue**: #003087 (main branding and header)
- **Secondary Green**: #92c83e (navigation bar)
- **Light Gray**: #f5f5f5 (backgrounds)
- **White**: #ffffff (cards and content containers)

## Responsive Breakpoints

- **Mobile**: 480px
- **Tablet**: 768px
- **Desktop**: 1024px
- **Large Desktop**: 1200px

## License

This project is proprietary and confidential.