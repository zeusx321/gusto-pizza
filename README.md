# 🍕 Gusto Pizza

A modern, responsive pizza restaurant website built with **React**, **Vite**, and **React Router**. Gusto Pizza combines a polished restaurant landing page with an interactive food menu featuring pizzas, fries, and soft drinks.

> **Project status:** Frontend demo under active development. The "Order Now" button currently shows a confirmation alert; it does not process real orders or payments.

## ✨ Features

- **Responsive restaurant landing page** with hero, about, popular items, trending food, and call-to-action sections.
- **Dedicated menu page** accessible at `/menu`.
- **Category filtering** to browse all items, pizzas, fries, or sodas.
- **Product cards** displaying food images, names, ratings, and prices.
- **Quantity controls** for increasing or decreasing an item's quantity (minimum: 1).
- **Interactive navigation**, including a mobile menu.
- **Reusable React components** and centralized menu data for easier maintenance.

## 🛠️ Tech Stack

- **React 19** — component-based user interfaces and state management with Hooks
- **React Router 7** — client-side routing between Home and Menu
- **Vite 8** — development server and production builds
- **CSS3** — responsive layouts and styling
- **React Player** — media playback integration

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

```bash
git clone https://github.com/zeusx321/gusto-pizza.git
cd gusto-pizza
npm install
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```text
src/
├── assets/                 # Images and SVGs
├── components/
│   ├── home/               # Home page sections
│   ├── layout/             # Header and Footer
│   └── menu/               # Menu grid, categories, and cards
├── constants/
│   └── index.js            # Navigation and product data
├── css/
│   ├── home/
│   ├── layout/
│   ├── menu/
│   └── style.css
├── pages/
│   ├── Home.jsx
│   └── Menu.jsx
├── routes/
│   └── router.jsx
├── App.jsx
└── main.jsx
```

## 🧭 Pages

| Route | Description |
| --- | --- |
| `/` | Restaurant landing page |
| `/menu` | Interactive menu with category filters and quantity selectors |

---

If you like this project, consider giving the repository a ⭐.
