import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { RoutePath } from "./routes";
import Root from "../pages/root";
import General from "../pages/general";
import Channel from "../pages/room";
import GeneralResponses from "../pages/generalResponses";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";


const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.ROOT} element={<Root />} />
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.DASHBOARD} element={<Dashboard/>} />
      <Route path={RoutePath.GENERAL} element={<General />} />
      <Route path={RoutePath.GENERALRESPONSES} element={<GeneralResponses/>} />
      <Route path={RoutePath.CHANNEL} element={<Channel />} />
    </Routes>
  );
};

export default Router;


 