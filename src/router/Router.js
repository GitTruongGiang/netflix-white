import React from "react";
import { Route, Routes } from "react-router-dom";
import BlankLayout from "../layouts/BlankLayout";
import MainLayout from "../layouts/MainLayout";
import DeitalPage from "../page/DeitalPage";
import HomePage from "../page/HomePage";
import LoginPage from "../page/LoginPage";

function Router() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>

      <Routes>
        <Route element={<BlankLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/movie/:movieId" element={<DeitalPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
