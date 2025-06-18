import React from 'react';
import Sidebar from './Sidebar';
import { Routes, Route } from 'react-router-dom';
import DynamicPricing from './DynamicPricing';
import SocialTrends from './SocialTrends';
import FraudDetection from './FraudDetection';

const Dashboard = () => (
  <div className="dashboard-layout">
    <Sidebar />
    <div className="dashboard-content">
      <Routes>
        <Route path="pricing" element={<DynamicPricing />} />
        <Route path="social" element={<SocialTrends />} />
        <Route path="fraud" element={<FraudDetection />} />
        <Route path="/" element={<div>Welcome to your dashboard!</div>} />
      </Routes>
    </div>
  </div>
);

export default Dashboard;
