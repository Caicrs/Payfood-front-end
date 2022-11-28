import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { RoutePath } from "./routes";
import Root from "../pages/root";
import General from "../pages/general";
import Channel from "../pages/room";



const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.ROOT} element={<Root />} />
      <Route path={RoutePath.GENERAL} element={<General />} />
      <Route path={RoutePath.CHANNEL} element={<Channel />} />
    </Routes>
  );
};

export default Router;


 