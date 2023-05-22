import * as React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/header/index.tsx";
export const Layout = () => {
  return (
    <>
      <Navbar />
      <div id="content">
        <Outlet />
      </div>
    </>
  );
};
