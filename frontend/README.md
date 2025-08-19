# Frontend (Nuxt.js) - Implementation Guide

<img src="./assets/nuxt-logo.png" alt="Nuxt Logo" width="100%" />

## Table of Contents

- [Installation & Setup](#installation--setup)
- [Pages Structure](#pages-structure)
- [Social Authentication Flow](#social-authentication-flow)
- [User & JWT Management](#user--jwt-management)
- [Testing & Customization](#testing--customization)

---

## Installation & Setup

1. Install Nuxt.js:
   ```bash
   npx nuxi init frontend
   cd frontend
   npm install
   ```
2. Start the server:
   ```bash
   npm run dev -- --port 3000
   ```
3. Go to [http://localhost:3000](http://localhost:3000).

---

## Pages Structure

- `pages/index.vue`: Main page and login access.
- `pages/login.vue`: Social login button (GitHub).
- `pages/connect/[provider].vue`: Handles OAuth callback and saves user/JWT.
- `pages/users/[id].vue`: Shows authenticated user data.

---

## Social Authentication Flow

1. User clicks "Login with GitHub".
2. Redirects to Strapi for authentication.
3. Strapi redirects back to Nuxt with the token.
4. Nuxt saves JWT and user in localStorage and redirects to user page.

---

## User & JWT Management

- JWT is stored in localStorage.
- You can use it to access protected endpoints from Nuxt.

---

## Customize the design and add more providers as needed.
