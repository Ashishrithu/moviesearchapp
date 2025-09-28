# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


1. In the App.jsx, I have included all the routes
2. In the Home.jsx, I have created a search which returns the list of movies.
3. In the bottom of search results, I have added 'Load More' button to use pagination.
4. Onclicking the any of the movies, it will be routed to detailed view of that movie.
5. There I have added a button to favorite the movie.
6. If it is added  to favorites, then favorites array will be pushed the new movie.
7. Seperate route is created to see the favorite movies.
8. In that route, I have added a button to remove the movie from favt list.