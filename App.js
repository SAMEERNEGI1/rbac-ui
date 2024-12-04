import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";
import Editor from "./components/Editor";
import View from "./components/View";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import mockUser from "./mockUser";

const App = () => {
  return (
    <Router>
      
      <Navbar user={mockUser} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredPermission="manage_users" user={mockUser}>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editor"
          element={
            <ProtectedRoute requiredPermission="edit_content" user={mockUser}>
              <Editor/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/viewer"
          element={
            <ProtectedRoute requiredPermission="view_dashboard" user={mockUser}>
              <View />
            </ProtectedRoute>
          }
        />
        <Route path="/unauthorized" element={<h1>Unauthorized Access</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
