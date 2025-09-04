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

## SSR Mode (Recommended)

This Nuxt application is configured as SSR (Server-Side Rendering) by default, because it uses dynamic routes and authentication with Strapi, which requires server-side rendering to handle sessions and protected data.

You use authentication, dynamic routes (`users/[id].vue`), and depend on protected data—SSR is the recommended mode and the default for Nuxt.

---

## Deployment (Recommended: Vercel for SSR)

For SSR (Server-Side Rendering), which is ideal for authentication, protected routes, and SEO, deploy your Nuxt app on [Vercel](https://vercel.com/):

**Vercel (SSR):**

- Connect your GitHub repo to Vercel and import the project.
- Set the build command to `npm run build` and output directory to `.output/public`.
- Vercel will auto-detect SSR and deploy as a serverless app.

**Backend URL configuration:**

- Set the Strapi backend URL in your Nuxt config or as an environment variable (e.g. `STRAPI_URL`).
- Example: In `nuxt.config.ts`:
  ```ts
  runtimeConfig: {
    public: {
      strapi: {
        url: process.env.STRAPI_URL ||
          "https://your-strapi-backend.onrender.com";
      }
    }
  }
  ```

**Note:** Deploy your Strapi backend separately (e.g. Render, Heroku, Railway, Azure).

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
