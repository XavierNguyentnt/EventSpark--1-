# CampusConnect

## Overview

CampusConnect is a full-stack campus event management platform built with React and Express. The application serves as a centralized hub for students and faculty to discover, explore, and interact with campus events. It features a modern responsive design using shadcn/ui components and provides comprehensive event listings, gallery functionality, feedback collection, and contact information management.

The platform is designed to enhance campus community engagement by providing an intuitive interface for browsing events across different categories (academic, cultural, sports, departmental), viewing photo galleries from past events, submitting feedback, and accessing important contact information for faculty and student coordinators.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming and dark mode support
- **State Management**: TanStack Query for server state management with custom hooks for data fetching
- **Form Handling**: React Hook Form with Zod validation schemas

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database Layer**: Drizzle ORM configured for PostgreSQL with Neon Database serverless connection
- **Storage Interface**: Abstracted storage layer with both in-memory and database implementations
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **Development Setup**: Hot module reloading with Vite integration in development mode

### Data Management
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Design**: User management schema with UUID primary keys and unique constraints
- **Data Sources**: Static JSON files for events, gallery items, and contact information during development
- **Validation**: Zod schemas for runtime type checking and data validation

### Component Architecture
- **Design System**: Consistent component library with shadcn/ui providing base components
- **Custom Components**: Event cards, gallery grids, filters, and layout components
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

### Development Workflow
- **Build System**: Vite for fast development builds and hot module reloading
- **TypeScript**: Strict type checking across client, server, and shared code
- **Code Organization**: Monorepo structure with shared schemas and utilities
- **Path Mapping**: Absolute imports using @ alias for cleaner import statements

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack Query
- **Backend Framework**: Express.js with TypeScript support via tsx
- **Build Tools**: Vite with React plugin, esbuild for production builds

### Database and ORM
- **Database**: Neon Database (PostgreSQL serverless)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Migrations**: Drizzle Kit for schema management and migrations
- **Session Storage**: connect-pg-simple for PostgreSQL session management

### UI and Design Libraries
- **Component Library**: Complete shadcn/ui component suite built on Radix UI
- **Icons**: Lucide React for consistent iconography
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Animations**: CSS transitions and Tailwind animations
- **Carousel**: Embla Carousel for image galleries

### Development and Tooling
- **TypeScript**: Full TypeScript support with strict configuration
- **Validation**: Zod for schema validation and type inference
- **Date Handling**: date-fns for date manipulation and formatting
- **Utilities**: clsx and tailwind-merge for conditional styling
- **Development**: Replit-specific plugins for enhanced development experience

### Third-party Integrations
- **Image Sources**: Unsplash for placeholder images and event photography
- **Social Media**: Placeholder links for Facebook, Twitter, Instagram, LinkedIn
- **Maps and Location**: Contact information setup for future Google Maps integration
- **External APIs**: Structure prepared for future integration with campus management systems