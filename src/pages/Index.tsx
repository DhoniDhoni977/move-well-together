
import React from "react";
import Navbar from "@/components/Navbar";
import Dashboard from "@/components/Dashboard";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default Index;
