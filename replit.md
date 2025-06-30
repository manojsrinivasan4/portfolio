# replit.md

## Overview

This is a professional portfolio website for Manoj Srinivasan, a Business Analyst and Data Expert. The application is built as a full-stack web application with a React frontend and Express backend, showcasing professional experience, skills, projects, and providing a contact form for potential collaborations.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Pattern**: REST API with JSON responses
- **Session Management**: Express sessions with PostgreSQL storage
- **Database ORM**: Drizzle ORM for type-safe database operations

### Design System
- **Component Library**: Shadcn/ui with "new-york" style variant
- **Color Scheme**: Neutral base with blue primary colors
- **Typography**: Inter font family
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scrolling navigation
2. **Hero Section**: Professional introduction with call-to-action buttons
3. **About Section**: Personal summary with key statistics and achievements
4. **Skills Section**: Technical and business skills with visual representations
5. **Experience Section**: Professional timeline with metrics and achievements
6. **Projects Section**: Portfolio showcase with impact metrics
7. **Certifications Section**: Professional certifications and awards
8. **Contact Section**: Interactive contact form with validation
9. **Footer**: Additional navigation and social links

### Backend Services
1. **Contact API**: Handles form submissions with validation
2. **Resume Download**: Serves resume file downloads
3. **Static File Serving**: Serves the built React application

### Database Schema
- **Users Table**: Basic user management (id, username, password)
- **Contact Messages Table**: Stores contact form submissions (id, firstName, lastName, email, subject, message, createdAt)

## Data Flow

1. **Client Request**: User interacts with React frontend
2. **API Communication**: Frontend makes requests to Express backend via TanStack Query
3. **Data Validation**: Backend validates requests using Zod schemas
4. **Database Operations**: Drizzle ORM handles database interactions
5. **Response Handling**: Backend returns JSON responses to frontend
6. **UI Updates**: React components update based on API responses

### Contact Form Flow
1. User fills out contact form
2. Form data validated on client-side
3. POST request sent to `/api/contact`
4. Backend validates data with Zod schema
5. Message stored in database via Drizzle ORM
6. Success/error response returned to client
7. Toast notification shown to user

## External Dependencies

### Database
- **Provider**: Neon Database (PostgreSQL-compatible)
- **Connection**: @neondatabase/serverless driver
- **Migrations**: Drizzle Kit for schema management

### UI Dependencies
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Lucide React**: Icon library for consistent iconography
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Date-fns**: Date manipulation utilities

### Development Tools
- **Vite**: Fast build tool with HMR support
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Tailwind CSS
- **TypeScript**: Type safety across the entire stack

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR
- **Backend**: TSX for TypeScript execution
- **Database**: Neon Database with environment-based configuration

### Production Build Process
1. Frontend built with Vite to `dist/public`
2. Backend bundled with ESBuild to `dist/index.js`
3. Static files served from Express in production
4. Database migrations applied via Drizzle Kit

### Environment Configuration
- **NODE_ENV**: Environment detection (development/production)
- **DATABASE_URL**: PostgreSQL connection string
- **Port Configuration**: Express server port management

## Changelog
- June 30, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.