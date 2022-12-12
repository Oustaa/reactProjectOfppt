import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./componnents/Layout";

import AddProductForm from "./features/Products/AddProductForm";
import ErrorPage from "./pages/ErrorPage";
const Products = lazy(() => import("./features/Products/Products"));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="add_product" element={<AddProductForm />} />
          <Route path="edit_product/:id" element={<AddProductForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
