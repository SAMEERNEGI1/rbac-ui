import React, { useState } from "react";
import "./Admin.css";

const Admin = () => {
  const [newUser, setNewUser] = useState({ name: "", role: "" });
  const [users, setUsers] = useState([
    { name: "Sameer negi", role: "Admin" },
    { name: "rahul", role: "Editor" },
    {name: "conor", role: "Viewer"},
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.role) {
      setUsers((prevUsers) => [...prevUsers, newUser]);
      setNewUser({ name: "", role: "" });
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>

      <section className="role-management">
        <h2>Role Management</h2>
        <p>Manage the roles and permissions of users below.</p>
        <div className="role-list">
          {users.map((user, index) => (
            <div key={index} className="role-item">
              <p>{user.name}</p>
              <p><strong>Role:</strong> {user.role}</p>
              <button className="btn-edit">Edit Role</button>
              <button className="btn-delete">Delete User</button>
            </div>
          ))}
        </div>
      </section>

      <section className="add-user">
        <h2>Add New User</h2>
        <div className="add-user-form">
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
            placeholder="User Name"
          />
          <select
            name="role"
            value={newUser.role}
            onChange={handleInputChange}
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
          <button onClick={handleAddUser} className="btn-add">Add User</button>
        </div>
      </section>
    </div>
  );
};

export default Admin;
