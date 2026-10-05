# Sear

Find your next favorite meal — a warm, food-magazine-style recipe app built with React.

**Live demo:** https://sear-kitchen.vercel.app

## Features

- Browse recipes with real photos, ingredient lists, and step-by-step directions
- Search recipes by name
- Save favorites with the heart button (persisted in localStorage)
- Recipe detail view — tap any card for ingredients and directions
- Shopping list — add a whole recipe's ingredients with one tap, check items off as you shop
- Responsive design — 2-column grid on desktop, single column on mobile
- Add your own recipes by editing one data file (`src/data/recipes.js`) — no other code changes needed

## Tech

- React + Vite
- Plain CSS (no UI framework)
- localStorage for favorites and shopping list persistence
- Deployed on Vercel

## Run it locally

```bash
npm install
npm run dev
```

## Project structure

```
src/
  data/recipes.js        — all recipe data lives here; adding a recipe = adding an object
  components/
    RecipeCard.jsx       — recipe card with photo and favorite button
    RecipeDetail.jsx     — full recipe modal (ingredients, directions, add-to-list)
    ShoppingList.jsx     — checkable shopping list section
  App.jsx                — shared state (search, favorites, shopping list), layout
  App.css                — warm food-magazine styling
```

## Screenshots

_Add 1–2 screenshots of the app here._
