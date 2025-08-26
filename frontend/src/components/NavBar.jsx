import React, { useState, useEffect } from "react";
import { Menu, Layout, Button, Avatar, Drawer } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { UserOutlined, MenuOutlined } from "@ant-design/icons";
import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";

const { Header } = Layout;

const NavBar = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navigate = useNavigate();
  const location = useLocation();

  // Check authentication on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  // Responsive design handling
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Login callback
  const handleLoginSuccess = (userData, token) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    navigate("/");
  };

  // Menu key based on route
  const getSelectedKey = () => {
    if (location.pathname.includes("/admin")) return "admin";
    if (location.pathname.includes("/tutorials")) return "tutorials";
    if (location.pathname.includes("/practicals")) return "practicals";
    if (location.pathname.includes("/lessons")) return "lessons";
    if (location.pathname.includes("/about")) return "about";
    if (location.pathname.includes("/contact")) return "contact";
    return "home";
  };

  const toggleDrawer = () => setIsDrawerVisible((prev) => !prev);

  const menuItems = [
    ...(isLoggedIn && user?.role === "teacher"
      ? [{ key: "admin", label: "Admin Page", onClick: () => { navigate("/admin"); if (isMobile) toggleDrawer(); } }]
      : []),
    { key: "home", label: "Home", onClick: () => { navigate("/home2"); if (isMobile) toggleDrawer(); } },
    { key: "tutorials", label: "Tutorials", onClick: () => { navigate("/tutorials"); if (isMobile) toggleDrawer(); } },
    { key: "practicals", label: "Practicals", onClick: () => { navigate("/practicals"); if (isMobile) toggleDrawer(); } },
    { key: "lessons", label: "Lessons", onClick: () => { navigate("/lessons"); if (isMobile) toggleDrawer(); } },
    { key: "about", label: "About Us", onClick: () => { navigate("/about"); if (isMobile) toggleDrawer(); } },
    { key: "contact", label: "Contact Us", onClick: () => { navigate("/contact"); if (isMobile) toggleDrawer(); } },
  ];

  return (
    <Header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#001529",
        padding: isMobile ? "0 16px" : "0 24px",
        minHeight: "64px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
      }}
    >
      {/* Logo */}
      <div style={{ color: "white", fontSize: isMobile ? "16px" : "20px", fontWeight: "bold" }}>
        Science Lab
      </div>

      {/* Desktop Menu */}
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[getSelectedKey()]}
        items={menuItems}
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "transparent",
          display: isMobile ? "none" : "flex",
        }}
      />

      {/* Desktop Buttons */}
      <div style={{ display: isMobile ? "none" : "flex", alignItems: "center", gap: "8px" }}>
        {isLoggedIn ? (
          <>
            <Avatar icon={<UserOutlined />} onClick={() => navigate("/profile")} style={{ cursor: "pointer" }} />
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <>
            <Button type="primary" onClick={() => setIsLoginVisible(true)}>Login</Button>
            <Button onClick={() => setIsSignupVisible(true)}>Sign Up</Button>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <Button
        type="text"
        icon={<MenuOutlined />}
        onClick={toggleDrawer}
        style={{ color: "white", display: isMobile ? "flex" : "none" }}
      />

      {/* Drawer Menu for Mobile */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleDrawer}
        open={isDrawerVisible}
        width={250}
        styles={{
          body: { padding: 0 },
          header: { backgroundColor: "#001529", color: "white" },
        }}
      >
        <Menu mode="vertical" selectedKeys={[getSelectedKey()]} items={menuItems} />
        <div style={{ padding: "16px" }}>
          {isLoggedIn ? (
            <>
              <Button
                type="text"
                icon={<UserOutlined />}
                onClick={() => { navigate("/profile"); toggleDrawer(); }}
                style={{ width: "100%", textAlign: "left", marginBottom: "8px" }}
              >
                Profile
              </Button>
              <Button onClick={() => { handleLogout(); toggleDrawer(); }} style={{ width: "100%" }}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button type="primary" onClick={() => { setIsLoginVisible(true); toggleDrawer(); }} style={{ width: "100%", marginBottom: "8px" }}>
                Login
              </Button>
              <Button onClick={() => { setIsSignupVisible(true); toggleDrawer(); }} style={{ width: "100%" }}>
                Sign Up
              </Button>
            </>
          )}
        </div>
      </Drawer>

      {/* Popups */}
      <LoginPopup
        isVisible={isLoginVisible}
        onClose={() => setIsLoginVisible(false)}
        onSignupClick={() => setIsSignupVisible(true)}
        onLoginSuccess={handleLoginSuccess}
      />
      <SignupPopup isVisible={isSignupVisible} onClose={() => setIsSignupVisible(false)} />
    </Header>
  );
};

export default NavBar;
