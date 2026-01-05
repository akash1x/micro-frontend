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
2. **Products Config**: Configured to build a `remoteEntry.js` file that the host can consume.
