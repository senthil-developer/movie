# 🎬 Movie Universe

A modern, responsive movie, television series, and celebrity discovery web application built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **The Movie Database (TMDB) API**.

---

## 🌐 Live Demo

- **Live Application:** [movie-universe-nextjs.netlify.app](https://movie-universe-nextjs.netlify.app)
- **Repository:** [github.com/senthil-karthikeyan/movie](https://github.com/senthil-karthikeyan/movie)

---

## 🚀 Features

### 🌟 Content Discovery & Trending

- **Dynamic Home Hero**: Displays a randomized backdrop banner featuring popular movies on each visit.
- **Trending Feeds**: Browse trending movies, TV series, and people with instant time-window filtering (**Day** vs. **Week**).
- **Infinite Scroll Exploration**: Browse extensive catalogs of movies (`/movie`), TV series (`/series`), and celebrities (`/person`) with smooth infinite-scroll pagination powered by `react-intersection-observer`.

### 🎥 Comprehensive Detail Pages

- **Movie Details (`/movie/[id]`)**: Hero backdrop banner, direct YouTube trailer/teaser links, release date, runtime (formatted to hours & minutes), box-office revenue, status, genre pills, backdrop gallery, top 20 cast carousel, and similar/recommended movie sliders.
- **TV Series Details (`/series/[id]`)**: Hero backdrop banner, trailer links, release date, total season count, status, genre pills, backdrop gallery, top 20 cast carousel, and similar/recommended series sliders.
- **Person / Actor Profiles (`/person/[id]`)**: High-resolution profile image, career department (Actor/Actress, Director, Writer, etc.), date of birth, expandable biography with a "Read More / Read Less" toggle, profile photo gallery, and a "Known For" combined credits carousel (`/combined_credits`).

### ⭐ Favorites & Watchlist System

- **Local Storage Persistence**: Bookmark favorite movies, TV series, and personalities with an interactive star toggle on any card.
- **Dedicated Favorites View (`/favorite`)**: Manage saved content in a responsive grid layout with empty state handling, persisted locally across sessions using Zustand.

### 🎨 UI, UX & Theming

- **Dark / Light Mode**: Seamless theme switching using `next-themes` with custom toggles and dark-mode styling.
- **Fluid Viewport Animations**: Smooth entrance transitions with blur removal and directional sliding powered by **Framer Motion**.
- **Responsive Navigation**: Adaptive dual navigation with a glassmorphic top navigation bar with active tab indicators for desktop and a dedicated bottom tab bar for mobile devices.
- **Custom Horizontal Sliders**: Touch-friendly horizontal carousels with desktop navigation buttons and hidden native scrollbars.
- **Skeleton Loading States**: Pulse skeleton loaders for sliders and grids during asynchronous data retrieval.

---

## 🛠️ Tech Stack

| Category                  | Technology                                                                                                                                      |
| :------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**             | [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components)                                                                      |
| **Language**              | [TypeScript 5](https://www.typescriptlang.org/)                                                                                                 |
| **Core Library**          | [React 18](https://react.dev/)                                                                                                                  |
| **Styling**               | [Tailwind CSS 3](https://tailwindcss.com/), [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge) |
| **State Management**      | [Zustand 4](https://github.com/pmndrs/zustand) (with `localStorage` persistence)                                                                |
| **Data Fetching & Cache** | [@tanstack/react-query 5](https://tanstack.com/query/latest)                                                                                    |
| **Animations**            | [Framer Motion 11](https://www.framer.com/motion/)                                                                                              |
| **Theming**               | [next-themes](https://github.com/pacocoursey/next-themes)                                                                                       |
| **Icons**                 | [React Icons](https://react-icons.github.io/react-icons/)                                                                                       |
| **Infinite Scrolling**    | [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer)                                                        |
| **Package Manager**       | [pnpm](https://pnpm.io/)                                                                                                                        |

---

## 📁 Project Structure

```text
movie-universe/
├── public/                     # Static assets (logo, placeholders)
├── src/
│   ├── app/                    # Next.js App Router routes & pages
│   │   ├── favorite/           # Favorites page (/favorite)
│   │   ├── movie/              # Movie explore (/movie) & dynamic details (/movie/[id])
│   │   ├── person/             # Person explore (/person) & dynamic profile (/person/[id])
│   │   ├── series/             # TV series explore (/series) & dynamic details (/series/[id])
│   │   ├── _banner.tsx         # Home page dynamic hero banner
│   │   ├── globals.css         # Global CSS & Tailwind layers
│   │   ├── layout.tsx          # Root layout with providers, SEO, and OpenGraph metadata
│   │   └── page.tsx            # Home landing page with trending tabs
│   ├── components/             # Reusable UI components
│   │   ├── cards/              # Media card & slider card container components
│   │   ├── detail-page/        # Detail page subcomponents (Banner, Cast, Images, Info)
│   │   ├── explore/            # Infinite scroll discovery grid component
│   │   ├── videos/             # Video & trailer player components
│   │   ├── animate.tsx         # Framer Motion scroll/in-view animation wrapper
│   │   ├── fetchData.ts        # Server-side / helper fetch utility for TMDB
│   │   ├── navbar.tsx          # Responsive desktop & mobile navigation bars
│   │   ├── Provider.tsx        # Context providers (React Query, next-themes, footer)
│   │   ├── slider.tsx          # Horizontal scroll carousel with navigation controls
│   │   └── theme-toggle.tsx    # Light/Dark mode switcher
│   ├── hooks/                  # Custom React hooks
│   │   ├── useFetch.tsx        # React Query TMDB data fetching hook
│   │   └── useStore.tsx        # Zustand store for favorites management
│   └── lib/
│       └── utils.ts            # Formatting helpers (images, currency, dates, runtime)
├── types.ts                    # TypeScript interfaces for TMDB data structures
├── next.config.mjs             # Next.js configuration (remote image patterns for TMDB & YouTube)
├── tailwind.config.ts          # Tailwind CSS theme configuration and custom utilities
├── tsconfig.json               # TypeScript compiler configuration
└── package.json                # Project dependencies and npm scripts
```

---

## 🔌 API & Data Sources

This application consumes [The Movie Database (TMDB) API v3](https://developer.themoviedb.org/docs) to fetch movie, television, and personality data.

### Endpoints Used

- `trending/{movie|tv|person}/{day|week}`: Trending content feeds for the home page.
- `discover/{movie|tv}`: Catalog discovery and infinite-scroll pagination.
- `person/popular`: Popular celebrities and actors list.
- `movie/{id}` & `tv/{id}`: Detailed metadata, status, runtime, and financial figures.
- `{movie|tv}/{id}/credits`: Cast and crew rosters.
- `{movie|tv}/{id}/videos`: Official YouTube trailers and teaser keys.
- `{movie|tv}/{id}/images` & `person/{id}/images`: High-resolution backdrops, posters, and profile stills.
- `{movie|tv}/{id}/similar` & `{movie|tv}/{id}/recommendations`: Content recommendation carousels.
- `person/{id}/combined_credits`: Complete filmography and TV appearances for actors/crew.

---

## 🚦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/) (or `npm` / `yarn`)
- A free [TMDB API Key](https://www.themoviedb.org/settings/api)

### 1. Clone the Repository

```bash
git clone https://github.com/senthil-karthikeyan/movie.git
cd movie
```

### 2. Install Dependencies

```bash
pnpm install
# or: npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory by copying the template:

```bash
cp .env.example .env.local
```

Open `.env.local` and add your TMDB API key:

```env
NEXT_PUBLIC_API_KEY=your_tmdb_api_key_here
SITE_URL=https://movie-universe-nextjs.netlify.app
```

### 4. Run the Development Server

```bash
pnpm dev
# or: npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## ⚙️ Environment Variables

| Variable              | Required | Description                                                                              |
| :-------------------- | :------- | :--------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_API_KEY` | **Yes**  | Your TMDB (The Movie Database) v3 API key. Required for client and server data fetching. |
| `SITE_URL`            | Optional | The base URL of the site used to generate absolute OpenGraph image URLs in metadata.     |

---

## 📜 Available Scripts

In the project directory, you can run:

| Command      | Description                                                                          |
| :----------- | :----------------------------------------------------------------------------------- |
| `pnpm dev`   | Starts the Next.js development server with hot-reloading on `http://localhost:3000`. |
| `pnpm build` | Compiles the production build.                                                       |
| `pnpm start` | Runs the compiled production server.                                                 |
| `pnpm lint`  | Runs ESLint to check for code quality and syntax issues.                             |

---

## 💡 Technical Highlights & Architecture

### 1. Optimized Client & Server Fetching Strategy

- **Server-Side SEO Metadata**: Dynamic routes (`/movie/[id]`, `/series/[id]`, `/person/[id]`) implement Next.js `generateMetadata` with server-side caching (`revalidate: 3600`) to generate search-engine-friendly titles, descriptions, and OpenGraph social preview images.
- **Client-Side Cache with React Query**: The custom `useFetch` hook encapsulates `@tanstack/react-query` to eliminate redundant network calls, prevent layout refetch flickers (`refetchOnWindowFocus: false`), and provide declarative `isLoading` and `error` states.

### 2. Zero-Backend State Persistence

- User favorites are managed through a custom **Zustand** store (`useFav`) synchronizing state directly with browser `localStorage`.
- An event-delegated click handler (`handleFavClick`) enables favoriting/unfavoriting items directly from any media card across sliders and grids without unnecessary component re-renders.

### 3. Intersection-Observer Infinite Scroll

- Explore pages (`/movie`, `/series`, `/person`) utilize `react-intersection-observer` attached to a loading trigger element at the bottom of the viewport, dynamically fetching subsequent paginated batches (`page=${pageNum}`) from TMDB's discovery endpoints.

### 4. Fluid Motion & Micro-Interactions

- Framer Motion's `useInView` and `useAnimation` hooks trigger smooth blur-reduction and entrance animations once cards enter the viewport (`animate.tsx`).
- Tailwind CSS custom clip paths (`clip-path-star`) provide lightweight, CSS-only star icons for favorite toggles without external SVG dependencies.

---

## 👤 Author

- **Senthil**
  - GitHub: [@senthil-karthikeyan](https://github.com/senthil-karthikeyan)
  - LinkedIn: [senthil-karthikeyan](https://linkedin.com/in/senthil-karthikeyan)
  - Email: [senthil.karthikeyan.offcial@gmail.com](mailto:senthil.karthikeyan.offcial@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
