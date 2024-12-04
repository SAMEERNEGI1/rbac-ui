
import React from "react";
import { Link } from "react-router-dom";
import { permission } from "../permission";
import "./Navbar.css";

const Navbar = ({ user }) => {
  const canAccess = (permissions) =>
    permission[user.role]?.includes(permissions);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        Dashboard
      </Link>
      {canAccess("manage_users") && (
        <Link to="/admin" className="navbar-link">
          Admin Panel
        </Link>
      )}
      {canAccess("edit_content") && (
        <Link to="/editor" className="navbar-link">
          Editor Area
        </Link>
      )}
      {canAccess("view_dashboard") && (
        <Link to="/viewer" className="navbar-link">
          Viewer Content
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
