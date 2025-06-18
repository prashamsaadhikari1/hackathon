import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Integrations from './components/Integrations';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('monthly');
  const [user, setUser] = useState(null);


  // (the data would normally be placed in separate files or context, 
  // but I'll leave them here for simplicity)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechSolutions Inc.",
      text: "This platform increased our sales by 40% in just three months. The deal tracking features are incredible.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Global Enterprises",
      text: "The contact management system saved us countless hours. Integration with our existing tools was seamless.",
      rating: 4
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Swift Marketing",
      text: "Our sales team adopted it immediately. The intuitive interface requires virtually no training.",
      rating: 5
    }
  ];

  const pricingPlans = {
    monthly: [
      {
        name: "Starter",
        price: "$8",
        features: ["Up to 3 users", "Basic lead management", "Email support", "Standard reports"],
        cta: "Start Free Trial"
      },
      {
        name: "Professional",
        price: "$10",
        features: ["Up to 10 users", "Advanced analytics", "Priority support", "CRM integration"],
        cta: "Start Free Trial",
        popular: true
      },
      {
        name: "Enterprise",
        price: "$15",
        features: ["Unlimited users", "Custom reporting", "24/7 support", "API access"],
        cta: "Contact Sales"
      }
    ],
    annually: [
      {
        name: "Starter",
        price: "$5",
        pricePeriod: "per month, billed annually",
        features: ["Up to 3 users", "Basic lead management", "Email support", "Standard reports"],
        cta: "Start Free Trial"
      },
      {
        name: "Professional",
        price: "$9",
        pricePeriod: "per month, billed annually",
        features: ["Up to 10 users", "Advanced analytics", "Priority support", "CRM integration"],
        cta: "Start Free Trial",
        popular: true
      },
      {
        name: "Enterprise",
        price: "$30",
        pricePeriod: "per month, billed annually",
        features: ["Unlimited users", "Custom reporting", "24/7 support", "API access"],
        cta: "Contact Sales"
      }
    ]
  };

  const integrations = [
    { name: "Google Workspace", icon: "google-icon.png" },
    { name: "Microsoft 365", icon: "microsoft-icon.png" },
    { name: "Slack", icon: "slack-icon.png" },
    { name: "Mailchimp", icon: "mailchimp-icon.png" },
    { name: "QuickBooks", icon: "quickbooks-icon.png" },
    { name: "Zapier", icon: "zapier-icon.png" }
  ];

  return (
<>
    <Router>
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <Testimonials testimonials={[]} />
            <Pricing pricingPlans={{}} activeTab="monthly" setActiveTab={() => {}} />
            <Integrations integrations={[]} />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
    
    <div className="sales-landing">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <Hero />

      <Features />

      <Testimonials testimonials={testimonials} />

      <Pricing pricingPlans={pricingPlans} activeTab={activeTab} setActiveTab={setActiveTab} />

      <Integrations integrations={integrations} />

      <Footer />
    </div>
    </>
  );
}

export default App;