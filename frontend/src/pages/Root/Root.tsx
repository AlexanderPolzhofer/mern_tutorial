import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../../context/UserContext";

export const Root: React.FC = () => {
  return (
    <UserContextProvider>
      <Navbar />
      <Outlet />
    </UserContextProvider>
  );
};
