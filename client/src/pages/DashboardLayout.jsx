import { Outlet, redirect, useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch";

import Wrapper from "../assets/wrappers/Dashboard";
import { Navbar, BigSidebar, SmallSidebar } from "../components";

import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const loader = async () => {
  try {
    const { data } = await customFetch("/users/current-user");
    return data;
  } catch (error) {
    return redirect("/");
  }
};

const DashboardContext = createContext();
const Dashboard = ({ isDarkThemeEnabled }) => {
  // temp
  const { user } = useLoaderData();

  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    toast.success("Logging out...");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default Dashboard;
