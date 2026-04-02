
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-start">
              <img 
                src="/lovable-uploads/db57410a-d435-45cc-afcb-4ae995c8b5e0.png" 
                alt="Thoughtnudge Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-foreground font-medium">
              AI-Powered Retention for B2C Apps
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/company/thoughtnudge" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Platform</h3>
            <ul className="space-y-3">
              <li><Link to="/product" className="text-muted-foreground hover:text-primary transition-colors">Product</Link></li>
              <li><Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/integrations" className="text-muted-foreground hover:text-primary transition-colors">Integrations</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/solutions" className="text-muted-foreground hover:text-primary transition-colors">Industry Solutions</Link></li>
              <li><Link to="/solutions/d2c" className="text-muted-foreground hover:text-primary transition-colors">E-commerce & D2C</Link></li>
              <li><Link to="/solutions/digital-services" className="text-muted-foreground hover:text-primary transition-colors">Digital Apps & Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about-us" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4 p-6 border border-border rounded-lg bg-card">
            <h4 className="text-lg font-semibold text-foreground">Fix Your Retention</h4>
            <p className="text-muted-foreground text-sm">
              Get a free AI-powered audit of your retention strategy. See exactly where you're losing subscribers.
            </p>
            <Link 
              to="/growth-audit" 
              className="inline-flex bg-primary hover:bg-primary/90 text-primary-foreground py-2 px-4 rounded-md font-medium transition-colors"
            >
              Get a Retention Audit
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Thoughtnudge. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-muted-foreground text-sm hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-muted-foreground text-sm hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
