# FlowSnap Solutions - Business Automation Platform

## Overview

FlowSnap Solutions is a modern React-based web application designed for a consulting business that specializes in business automation for small service businesses. The platform showcases three core automation services: Smart Booking System Setup, Automated Quote & Follow-Up, and Client Feedback & Reviews. Built with React, TypeScript, and Express.js, the application features a clean, Web3-inspired design with glassmorphism effects and serves as both a marketing website and a contact management system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing across pages (Home, About, Services, Blog, Contact)
- **Styling**: Tailwind CSS with custom CSS variables for brand theming, featuring glassmorphism effects and geometric backgrounds
- **UI Components**: Radix UI primitives with custom shadcn/ui components for consistent design system
- **State Management**: TanStack Query for server state management and React hooks for local state
- **Theme System**: Custom theme provider supporting light/dark modes with brand-specific color scheme

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **API Design**: RESTful endpoints for contact form submissions and data retrieval
- **Data Storage**: In-memory storage implementation with interface abstraction for future database migration
- **Development**: Vite for fast development builds and hot module replacement
- **Production Build**: ESBuild for optimized server bundling

### Database Schema
- **Users Table**: Basic user authentication structure with username/password fields
- **Contacts Table**: Contact form submissions with fields for name, email, phone, business name, message, and timestamps
- **ORM**: Drizzle ORM configured for PostgreSQL with schema validation using Zod

### Authentication & Security
- **Validation**: Zod schemas for runtime type checking and form validation
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **CORS**: Express middleware for cross-origin resource sharing
- **Session Management**: Basic session handling configured for future authentication features

### Design System
- **Typography**: Inter and Sora fonts for modern, readable text hierarchy
- **Color Palette**: Brand-specific colors (Primary Blue #1E73BE, Secondary Green #6BBE92, Accent Orange #F28C28)
- **Visual Effects**: CSS-based glassmorphism, gradient overlays, and subtle animations
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Component Library**: Comprehensive UI component set based on Radix primitives

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form for form management
- **Routing**: Wouter for lightweight client-side navigation
- **State Management**: TanStack React Query for server state synchronization
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer for utility-first styling

### UI Component Libraries
- **Radix UI**: Complete set of accessible UI primitives (@radix-ui/react-*)
- **Icons**: Lucide React for consistent iconography
- **Utilities**: Class Variance Authority (CVA) for component variant management, clsx for conditional classes

### Backend Infrastructure
- **Server Framework**: Express.js for HTTP server and API endpoints
- **Database**: Drizzle ORM with @neondatabase/serverless for PostgreSQL connectivity
- **Development Tools**: TSX for TypeScript execution, Vite for frontend tooling

### Validation & Forms
- **Schema Validation**: Zod for runtime type checking and form validation
- **Form Handling**: React Hook Form with Hookform Resolvers for Zod integration
- **Error Handling**: Zod Validation Error for user-friendly error messages

### Development & Build Tools
- **TypeScript**: Full TypeScript configuration across client, server, and shared modules
- **Build System**: Vite for frontend, ESBuild for backend production builds
- **Development**: Replit-specific plugins for development environment integration
- **Session Storage**: Connect-pg-simple for PostgreSQL session storage