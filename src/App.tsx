
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";
import PerformanceMonitor from "@/components/ui/performance-monitor";
import ImagePreloader from "@/components/ui/image-preloader";
import ScrollToTop from "@/components/ui/scroll-to-top";
import BackToTopButton from "@/components/ui/back-to-top-button";
import { useWebVitals } from "@/hooks/use-web-vitals";
import { addStructuredData, organizationSchema } from "@/lib/seo";
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
const AuditThankYou = lazy(() => import("./pages/AuditThankYou"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Brochure = lazy(() => import("./pages/Brochure"));
const EcommerceBrochure = lazy(() => import("./pages/EcommerceBrochure"));
const TelecomBrochure = lazy(() => import("./pages/TelecomBrochure"));
const InsuranceBrochure = lazy(() => import("./pages/InsuranceBrochure"));
const Pricing = lazy(() => import("./pages/Pricing"));
const FAQ = lazy(() => import("./pages/FAQ"));

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

// Critical images to preload
const criticalImages = [
  '/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png',
  '/lovable-uploads/d20048b9-627e-42af-9034-d893f184e5a2.png',
];

const App = () => {
  // Initialize web vitals monitoring
  useWebVitals();

  // Ensure global Organization schema is present on all pages
  useEffect(() => {
    addStructuredData(organizationSchema, 'org');
  }, []);


  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <PerformanceMonitor />
        <ImagePreloader images={criticalImages} priority />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <BackToTopButton />
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
            <Route path="/faq" element={<FAQ />} />
            <Route path="/growth-audit" element={<GrowthAudit />} />
            <Route path="/audit-thank-you" element={<AuditThankYou />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
