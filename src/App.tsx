
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import PerformanceMonitor from "@/components/ui/performance-monitor";
// Lazy load components for better performance
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const UseCases = lazy(() => import("./pages/UseCases"));
const Solutions = lazy(() => import("./pages/Solutions"));
const SolutionsD2C = lazy(() => import("./pages/SolutionsD2C"));
const SolutionsDigitalServices = lazy(() => import("./pages/SolutionsDigitalServices"));
const Product = lazy(() => import("./pages/Product"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Integrations = lazy(() => import("./pages/Integrations"));
const About = lazy(() => import("./pages/About"));
const GrowthAudit = lazy(() => import("./pages/GrowthAudit"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Brochure = lazy(() => import("./pages/Brochure"));
const EcommerceBrochure = lazy(() => import("./pages/EcommerceBrochure"));
const TelecomBrochure = lazy(() => import("./pages/TelecomBrochure"));
const InsuranceBrochure = lazy(() => import("./pages/InsuranceBrochure"));
const Pricing = lazy(() => import("./pages/Pricing"));

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <PerformanceMonitor />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          }>
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
