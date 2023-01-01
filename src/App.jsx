import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./componnents/Layout";

import AddProductForm from "./features/Products/AddProductForm";
import UpdateProductForm from "./features/Products/UpdateProductForm";
import ErrorPage from "./pages/ErrorPage";
import SingleProduct from "./features/Products/SingleProduct";
const Products = lazy(() => import("./features/Products/Products"));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Products />} />
          <Route path='add_product' element={<AddProductForm />} />
          <Route
            path='edit_product/:category/:id'
            element={<UpdateProductForm />}
          />
          <Route path='/:category/:id' element={<SingleProduct />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
