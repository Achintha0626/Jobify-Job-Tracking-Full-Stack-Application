import React, { createContext, useContext, useState } from "react";
import { Outlet, redirect, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import { checkDefaultTheme } from "../App";
import customFetch from "../utils/customFetch";

export const loader= async()=>{
  try {
    const {data} =await customFetch.get('users/current-user')
    return data;
  } catch (error) {
    return redirect('/')

    
  }
}

const DashboardContext = createContext();



const DashboardLayout = ({ isDarkThemeEnabled }) => {
  const {user} = useLoaderData();
  
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme); //change the button
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
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
            <div className="dashboard-page">
              <Outlet context={{user}}/>
            </div>
          </div>
        </main>
      </DashboardContext.Provider>
    </Wrapper>
  );
};


export const useDashboardContext=()=> useContext(DashboardContext)
export default DashboardLayout;
