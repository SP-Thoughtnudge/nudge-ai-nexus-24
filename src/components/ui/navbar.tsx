
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "./button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/db57410a-d435-45cc-afcb-4ae995c8b5e0.png" 
            alt="Thoughtnudge Logo" 
            className="h-16 w-auto py-2"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/product" className="text-brand-gray hover:text-brand-orange transition-colors">
            Product
          </Link>
          <Link to="/how-it-works" className="text-brand-gray hover:text-brand-orange transition-colors">
            How It Works
          </Link>
          <Link to="/solutions" className="text-brand-gray hover:text-brand-orange transition-colors">
            Solutions
          </Link>
          <Link to="/blogs" className="text-brand-gray hover:text-brand-orange transition-colors">
            Blog
          </Link>
          <Link to="/about" className="text-brand-gray hover:text-brand-orange transition-colors">
            About Us
          </Link>
          <a href="https://calendly.com/himanshu_chauhan/30min" target="_blank" rel="noopener noreferrer">
            <Button variant="pink" className="ml-4">
              Book a Demo
            </Button>
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-brand-gray hover:text-brand-orange"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/product" 
              className="text-brand-gray hover:text-brand-orange py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-brand-gray hover:text-brand-orange py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/solutions" 
              className="text-brand-gray hover:text-brand-orange py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              to="/blogs" 
              className="text-brand-gray hover:text-brand-orange py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className="text-brand-gray hover:text-brand-orange py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <a href="https://calendly.com/himanshu_chauhan/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="pink" className="mt-2">
                Book a Demo
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
