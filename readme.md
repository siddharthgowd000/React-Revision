# React Revision 🚀

A well-structured and optimized React project built with **Vite**, **Tailwind CSS**, and **React Router**. This repository is a revision of core React concepts, featuring optimized rendering, efficient state management, and dark mode implementation.

## 🔥 Features  

- **Optimized State Management**  
  - Used `useContext` to manage theme globally without prop drilling.  
  - Minimized unnecessary re-renders using memoization and dependency arrays in `useEffect`.  

- **Dark Mode Implementation**  
  - Utilized the `darkMode: "class"` approach in Tailwind.  
  - Dynamically toggles dark mode using class-based styling instead of inline styles.  
  - Theme persists using `localStorage`.  

- **React Router Optimization**  
  - Lazy-loaded routes for performance improvement.  
  - Implemented `Suspense` to prevent blocking UI while loading pages.  

- **Vite Performance Boost**  
  - Leveraged Vite’s fast build system for an improved development experience.  
  - Replaced unnecessary dependencies with lighter alternatives for better bundle size.  

## 🛠️ Tech Stack  

- **Frontend**: React, Vite, Tailwind CSS  
- **Routing**: React Router  
- **State Management**: Context API  
- **Build Tool**: Vite  

## 🚀 Getting Started  

1. **Clone the repository**  
   ```sh
   git clone https://github.com/siddharthgowd000/React-Revision.git
   cd React-Revision

