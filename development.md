# Development Documentation

> Last Updated: 2026-01-05 17:25:34

## Overview

This project is a micro-frontend architecture implementation using **Vite** and **Module Federation**. It consists of a `host` application and a `products` remote application.

## Concepts Used

- **Micro-Frontends**: Splitting a monolithic frontend into smaller, manageable, and independent applications.
- **Vite**: A fast build tool and development server.
- **Module Federation**: A JavaScript architecture invented by Zack Jackson that allows sharing code between multiple applications at runtime. We are using `@module-federation/vite` for this integration.
- **Shared State Management (Context API)**: The Host application exposes a `CartContext` which is consumed by remote applications (`products`, `cart`) to share state (cart items) across the micro-frontend ecosystem.

## Architecture

### Host Application

- **Path**: `/host`
- **Port**: `5174`
- **Role**: The main container that consumes remote modules and provides shared state.
- **Configuration**:
  - Consumes `products` remote from `http://localhost:5175/remoteEntry.js`.
  - Consumes `cart` remote from `http://localhost:5176/remoteEntry.js`.
  - Exposes `./cartStore` (`./src/hooks/cartContext.jsx`) for shared state.
  - Shared dependencies: `react`, `react-dom`.

### Products Application

- **Path**: `/products`
- **Port**: `5175`
- **Role**: A remote application that exposes components.
- **Configuration**:
  - Exposes `./Products` component (mapped to `./src/components/Products.jsx`).
  - Consumes `host` remote to access `CartContext`.
  - Shared dependencies: `react`, `react-dom`.

### Cart Application

- **Path**: `/cart`
- **Port**: `5176`
- **Role**: A remote application that exposes the Cart component.
- **Configuration**:
  - Exposes `./Cart`.
  - Consumes `host` remote to access `CartContext`.
  - Shared dependencies: `react`, `react-dom`.

## Setup Details

1. **Host Config**: Configured to load products and cart modules. Exposes cartStore.
2. **Products Config**: Configured to consume host for cartStore.
3. **Cart Config**: Configured to consume host for cartStore.

## Recent Updates (Auto-generated)

### Features Implemented

- **Shared State Management**: Implemented `CartContext` in Host and exposed it to remotes.
- **Refactored Data Flow**: Removed prop drilling. `Products` and `Cart` now access cart state directly via context.
- **Bidirectional Federation**: Host consumes UI from remotes; Remotes consume logic (Context) from Host.

### New Concepts Used

- **Context Sharing**: Sharing React Context providers and hooks across module federation boundaries.
- **Bidirectional Dependencies**: Host depends on Remotes (for UI), and Remotes depend on Host (for Logic/State).
