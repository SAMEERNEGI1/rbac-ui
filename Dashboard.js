import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const userStats = {
    uploads: 120,
    newMessages: 5,
    activeUsers: 45,
    alerts: 2,
  };

  const recentActivities = [
    { action: "Uploaded image", time: "5 minutes ago" },
    { action: "Edited content", time: "20 minutes ago" },
    { action: "Checked report", time: "1 hour ago" },
  ];

  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard</h1>

      <section className="overview">
        <h2>Overview</h2>
        <div className="stats">
          <div className="stat-card">
            <h3>{userStats.uploads}</h3>
            <p>Uploads</p>
          </div>
          <div className="stat-card">
            <h3>{userStats.newMessages}</h3>
            <p>New Messages</p>
          </div>
          <div className="stat-card">
            <h3>{userStats.activeUsers}</h3>
            <p>Active Users</p>
          </div>
          <div className="stat-card">
            <h3>{userStats.alerts}</h3>
            <p>Alerts</p>
          </div>
        </div>
      </section>

      <section className="recent-activities">
        <h2>Recent Activities</h2>
        <ul>
          {recentActivities.map((activity, index) => (
            <li key={index} className="activity-item">
              <p><strong>{activity.action}</strong> - {activity.time}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
