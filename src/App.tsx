
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UseCases from "./pages/UseCases";
import Solutions from "./pages/Solutions";
import SolutionsD2C from "./pages/SolutionsD2C";
import SolutionsDigitalServices from "./pages/SolutionsDigitalServices";
import Product from "./pages/Product";
import HowItWorks from "./pages/HowItWorks";
import Integrations from "./pages/Integrations";
import About from "./pages/About";
import GrowthAudit from "./pages/GrowthAudit";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import Brochure from "./pages/Brochure";
import EcommerceBrochure from "./pages/EcommerceBrochure";
import TelecomBrochure from "./pages/TelecomBrochure";
import InsuranceBrochure from "./pages/InsuranceBrochure";
import Pricing from "./pages/Pricing";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/d2c" element={<SolutionsD2C />} />
            <Route path="/solutions/digital-services" element={<SolutionsDigitalServices />} />
            <Route path="/product" element={<Product />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/brochure" element={<Brochure />} />
            <Route path="/brochure/ecommerce" element={<EcommerceBrochure />} />
            <Route path="/brochure/telecom" element={<TelecomBrochure />} />
            <Route path="/brochure/insurance" element={<InsuranceBrochure />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/growth-audit" element={<GrowthAudit />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
