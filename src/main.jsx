import React, { Children } from "react";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import Genre from "./Pages/GenrePage/Genre"
import Browse from "./Pages/BrowsePage/Browse"
import Movie from "./Pages/MoviesPage/Movie"
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// react-router-dom is a library
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Genre",
    element: <Genre/>,
  },
  { path: "/Browse", element: <Browse/> },
  { path: "/movies", element: <Movie/> },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


//Next js has inbuilt routing 