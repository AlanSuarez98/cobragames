import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Eliminamos la importación de Routes
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./ErrorBoundary";
import Loading from "./components/loader/Loader";
import appRoutes from "./Routes"; // Importamos las rutas

import "./App.css";

function App() {
  const router = createBrowserRouter(appRoutes); // Usamos las rutas importadas

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
