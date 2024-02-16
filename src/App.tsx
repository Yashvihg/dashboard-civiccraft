import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import DashboardPage from "./Pages/dashboardPage";
import BookingsPage from "./Pages/bookingsPage";
import DashboardPage from "./Pages/dashboardPage";
import Layout from "./Pages/layout";

const App: React.FC = () => {
  return (
    // <div className="flex">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="bookings" element={<BookingsPage />} />
        <Route path="cancelled" element={<h1>cancellations</h1>} />
        <Route path="refund" element={<h1> refunds</h1>} />
        <Route path="support" element={<h1>support </h1>} />
        <Route path="add-entity" element={<h1>add an entity</h1>} />
      </Route>
    </Routes>
    // </div>
  );
};

export default App;
