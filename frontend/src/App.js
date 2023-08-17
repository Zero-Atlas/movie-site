import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Browse from "./pages/browse/Browse";
import ErrorPage from "./pages/error/ErrorPage";
import RootLayout from "./pages/root/RootLayout";
// import Search from "./pages/search/Search";
const Search = lazy(() => import("./pages/search/Search"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Browse /> },
      {
        path: "search",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Search />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
