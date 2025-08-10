# Rudram Software Solutions - Staff Augmentation Website

## Overview

This is a full-stack React application for Rudram Software Solutions, a staff augmentation company specializing in providing skilled developers across emerging and traditional technologies. The website serves as the primary marketing platform and lead generation tool, showcasing services in MERN + LLM integration, Java Full Stack development, Python + LLM development, DevOps, mobile app development, and AI/data science expertise.

The application features a modern, responsive design with dedicated pages for services, case studies, company information, contact forms, and quote requests. It's built to convert visitors into leads through strategically placed call-to-action elements and comprehensive service presentations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side is built with **React 18** using **TypeScript** and follows a modern component-based architecture. The application uses **Vite** as the build tool for fast development and optimized production builds. Routing is handled by **Wouter**, a lightweight client-side router that provides declarative routing without the complexity of React Router.

The UI framework is based on **shadcn/ui**, which provides a comprehensive set of accessible React components built on top of **Radix UI primitives**. This ensures consistent design patterns, accessibility compliance, and maintainable component architecture. The styling system uses **TailwindCSS** with custom CSS variables for theming, supporting both light and dark modes.

State management is handled through **TanStack Query (React Query)** for server state management, which provides caching, background updates, and optimistic updates for API interactions. Local state is managed using React's built-in hooks.

The application includes comprehensive form handling using **React Hook Form** with **Zod** validation schemas, ensuring type-safe form validation and error handling across contact and quote request forms.

### Backend Architecture
The server is built with **Express.js** using TypeScript and follows a RESTful API pattern. The architecture separates concerns with dedicated modules for routing, storage, and server configuration.

The storage layer uses an abstraction pattern with an `IStorage` interface, currently implemented with an in-memory storage solution but designed to easily swap to database implementations. This includes full CRUD operations for users, contacts, and quote requests.

API endpoints follow REST conventions with proper HTTP status codes and JSON responses. Error handling is centralized with structured error responses and validation using Zod schemas shared between frontend and backend.

### Data Storage Solutions
The application is configured to use **PostgreSQL** as the primary database with **Drizzle ORM** for type-safe database operations. The schema is defined using Drizzle's schema builder, providing strong typing and migration support.

Current data models include:
- **Users**: Basic user authentication structure
- **Contacts**: Contact form submissions with response tracking
- **Quotes**: Quote request forms with detailed project requirements and response tracking

Database schema includes proper indexing, foreign key relationships, and default values. The configuration supports **Neon Database** as the PostgreSQL provider through connection string configuration.

### Authentication and Authorization
The application includes basic user management infrastructure with password-based authentication. The current implementation supports user creation and retrieval, with session management handled through Express sessions using `connect-pg-simple` for PostgreSQL session storage.

### Development and Build Pipeline
The development environment uses **Vite** with hot module replacement for rapid development. The production build process uses **esbuild** for server bundling and Vite for client bundling, resulting in optimized output for deployment.

TypeScript configuration is shared across client, server, and shared modules with proper path mapping for clean imports. The build process includes type checking and produces both client and server bundles for deployment.

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database provider
- **Drizzle ORM**: Type-safe database toolkit and query builder
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI and Styling Framework
- **shadcn/ui**: Modern React component library
- **Radix UI**: Headless UI primitives for accessibility
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth transitions
- **Lucide React**: Modern icon library
- **React Icons**: Additional icon sets including tech stack icons

### State Management and API
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation library

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript/TypeScript bundler
- **PostCSS**: CSS processing with Autoprefixer

### External APIs and Integrations
The application is designed to integrate with email services for contact form notifications and quote request processing, though specific email service implementation is not yet configured. The architecture supports easy integration with services like SendGrid, Mailgun, or AWS SES for production email handling.

The database configuration supports connection to cloud PostgreSQL providers through standard connection strings, making it compatible with services like Neon, Supabase, or AWS RDS.