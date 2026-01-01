
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#F8F9FA' }} className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1 - Brand & Social */}
          <div className="space-y-4">
            <Link to="/" className="flex items-start">
              <img 
                src="/lovable-uploads/db57410a-d435-45cc-afcb-4ae995c8b5e0.png" 
                alt="Thoughtnudge Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-700 font-medium">
              The Autonomous Growth Engine
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.linkedin.com/company/thoughtnudge" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Column 2 - Platform */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/product" className="text-gray-600 hover:text-primary transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions/bfsi" className="text-gray-600 hover:text-primary transition-colors">
                  Financial Services & Fintech
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blogs" className="text-gray-600 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 - CTA Block */}
          <div className="space-y-4 p-6 border border-gray-300 rounded-lg bg-white">
            <h4 className="text-lg font-semibold text-gray-900">Ready to Grow?</h4>
            <p className="text-gray-600 text-sm">
              Get a free, data-driven audit of your growth strategy and see your untapped revenue potential.
            </p>
            <a 
              href="https://calendly.com/aditya-thoughtnudge/30min" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md font-medium transition-colors"
            >
              Book a Demo
            </a>
          </div>
        </div>

        {/* Full-Width Bottom Bar */}
        <div className="border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Thoughtnudge. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 text-sm hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
