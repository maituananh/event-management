import React from "react";
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarFooter,
} from "cdbreact";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Event from "../pages/Event";

const Sidebar = () => {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}>
        <CDBSidebar
          textColor="#fff"
          backgroundColor="#333"
        >
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              Sidebar
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink to="/" >
                <CDBSidebarMenuItem icon="columns">
                  Dashboard
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/events">
                <CDBSidebarMenuItem icon="sticky-note">
                  Events
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <div
              className="sidebar-btn-wrapper"
              style={{ padding: "20px 5px" }}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>

        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/events" element={<Event />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Sidebar;
