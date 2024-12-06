import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";

const DashboardContext = createContext();

const DashboardLayout = () => {
  // temp
  const user = { name: "Achintha" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("toggle dark theme");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const loggoutUser = async () => {
    console.log("logout user");
  };

  return (
    <Wrapper>
      <DashboardContext.Provider
        value={{
          user,
          showSidebar,
          isDarkTheme,
          toggleDarkTheme,
          toggleSidebar,
          loggoutUser,
        }}
      >
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">{/* Your content here */}</div>
          </div>
        </main>
        <Outlet />
      </DashboardContext.Provider>
    </Wrapper>
  );
};


export const useDashboardContext=()=> useContext(DashboardContext)
export default DashboardLayout;
