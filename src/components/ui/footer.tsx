
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-start">
              <img 
                src="/lovable-uploads/db57410a-d435-45cc-afcb-4ae995c8b5e0.png" 
                alt="Thoughtnudge Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-600">
              Your AI teammate that makes 1:1 marketing decisions in real time.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://linkedin.com" className="text-gray-600 hover:text-brand-orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-brand-orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Product */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-black">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-brand-orange">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-gray-600 hover:text-brand-orange">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/integrations" className="text-gray-600 hover:text-brand-orange">
                  Integrations
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-gray-600 hover:text-brand-orange">
                  Product Overview
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-black">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-brand-orange">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-600 hover:text-brand-orange">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand-orange">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-brand-orange">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Call to Action */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-black">Ready to transform your marketing?</h3>
            <a href="https://calendly.com/himanshu_chauhan/30min" target="_blank" rel="noopener noreferrer" className="inline-flex bg-brand-pink hover:bg-brand-pink/90 text-white py-2 px-4 rounded-md font-medium transition-colors">
              Book a Demo
            </a>
            <p className="text-gray-600 text-sm mt-2">
              Get a personalized tour of the platform
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ThoughtNudge. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-brand-orange">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 text-sm hover:text-brand-orange">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
