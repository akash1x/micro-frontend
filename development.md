# Development Documentation

## Overview

This project is a micro-frontend architecture implementation using **Vite** and **Module Federation**. It consists of a `host` application and a `products` remote application.

## Concepts Used

- **Micro-Frontends**: Splitting a monolithic frontend into smaller, manageable, and independent applications.
- **Vite**: A fast build tool and development server.
- **Module Federation**: A JavaScript architecture invented by Zack Jackson that allows sharing code between multiple applications at runtime. We are using `@module-federation/vite` for this integration.

## Architecture

### Host Application

- **Path**: `/host`
- **Port**: `5174`
- **Role**: The main container that consumes remote modules.
- **Configuration**:
  - Consumes `products` remote from `http://localhost:5175/remoteEntry.js`.
  - Shared dependencies: `react`, `react-dom`.

### Products Application

- **Path**: `/products`
- **Port**: `5175`
- **Role**: A remote application that exposes components.
- **Configuration**:
  - Exposes `./Products` component (mapped to `./src/components/Products.jsx`).
  - Shared dependencies: `react`, `react-dom`.

## Setup Details

1. **Host Config**: Configured to load the `products` module asynchronously.
2. **Cart Config**: Configured to build a `remoteEntry.js` file for the cart component.

## Recent Updates (Auto-generated)

### Features Implemented

- **Cart Micro-Frontend**: Added a new `cart` remote application running on port `5176`.
- **Host Enhancements**:
  - Added `Header` and `Footer` components.
  - Configured navigation to include Cart.
  - Integrated `Cart` MFE into the Host.
- **Products Enhancements**:
  - Implemented `Product` component for individual item display.
  - Added API integration (dummyjson.com) to fetch real product data.
  - Styled product grid.

### New Concepts Used

- **Lazy Loading**: Used `React.lazy` and `Suspense` (implied with federation) to load remote components only when needed.
- **State Management & Effects**: Used `useState` and `useEffect` hooks for data fetching in the Products MFE.
- **Component Composition**: Composed the Host layout using local Header/Footer and remote Products/Cart components.

### Updated Architecture Details

- **Cart Application**:
  - **Path**: `/cart`
  - **Port**: `5176`
  - **Exposes**: `./Cart`
