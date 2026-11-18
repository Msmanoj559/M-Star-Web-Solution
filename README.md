# M-Star Web Solution

## Project Vision

M-Star Web Solution is a long-term, modular, multi-tenant, white-label SaaS platform designed to help different businesses create and manage their own branded digital platforms from one centralized ecosystem.

The platform will eventually support:
- Bakery and Food Businesses
- E-commerce Businesses
- Service and Appointment Businesses
- Travel Agencies
- Multi-vendor Marketplaces
- Other business categories in the future

### Core Components (planned)
1. Super Admin Portal
2. Merchant Portal
3. Customer Websites
4. Optional Agent/Delivery Portal
5. Future Mobile Applications

## Technology Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router
- **State**: Zustand
- **Validation**: Zod
- **Backend**: Supabase + PostgreSQL
- **Testing**: Vitest + Playwright
- **Linting**: ESLint + Prettier
- **Version Control**: Git + GitHub

## Directory Structure

```
M-Star-Web-Solution/
├── public/
├── src/
│   ├── app/
│   │   ├── routes/
│   │   └── providers/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   └── ui/
│   ├── features/
│   ├── layouts/
│   ├── hooks/
│   ├── lib/
│   ├── services/
│   ├── store/
│   ├── types/
│   ├── utils/
│   └── styles/
├── supabase/
│   ├── migrations/
│   └── seed.sql
├── tests/
│   ├── unit/
│   └── e2e/
├── docs/
│   ├── architecture/
│   ├── database/
│   └── development/
├── .env.example
├── .gitignore
├── README.md
├── package.json
└── vite.config.ts
```

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and configure environment variables
4. Run the development server: `npm run dev`

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build production bundle |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues automatically |
| `npm run test` | Run Vitest unit tests |
| `npm run test:watch` | Run Vitest in watch mode |
| `npm run typecheck` | Run TypeScript type checking |

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Supabase
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Application
VITE_APP_NAME=M-Star Web Solution
VITE_APP_URL=http://localhost:5173
```

⚠️ **Never expose Supabase service-role keys in frontend code.** Only use the anon key (`VITE_SUPABASE_ANON_KEY`).

## Future Development Roadmap

- Phase 1: Technical foundation (current) - React, TypeScript, Vite, Tailwind, Supabase setup
- Phase 2: Authentication & multi-tenant architecture
- Phase 3: Merchant portal with CRUD operations
- Phase 4: Customer-facing website templates
- Phase 5: Role-based access control
- Phase 6: Mobile application support

## Current Phase

**Phase 1: Technical Foundation** - Establishing the project structure, configuring dependencies, and building the welcome screen and core layout components.