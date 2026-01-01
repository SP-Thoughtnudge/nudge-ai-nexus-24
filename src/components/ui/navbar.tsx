
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
    <nav className="fixed w-full bg-background/95 backdrop-blur-md z-50 py-3 md:py-4 border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/db57410a-d435-45cc-afcb-4ae995c8b5e0.png" 
            alt="Thoughtnudge Logo" 
            className="h-12 md:h-16 w-auto py-1 md:py-2"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/product" className="text-brand-gray hover:text-primary transition-colors">
            Product
          </Link>
          <Link to="/how-it-works" className="text-brand-gray hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link to="/solutions" className="text-brand-gray hover:text-primary transition-colors">
            Solutions
          </Link>
          <Link to="/blogs" className="text-brand-gray hover:text-primary transition-colors">
            Blog
          </Link>
          <a href="https://calendly.com/himanshu_chauhan/30min" target="_blank" rel="noopener noreferrer">
            <Button variant="default" className="ml-4">
              Book a Demo
            </Button>
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-brand-gray hover:text-primary"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-lg border-t border-border/50 animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-1">
            <Link 
              to="/product" 
              className="text-foreground hover:text-primary hover:bg-muted/50 py-3 px-4 rounded-lg transition-colors text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-foreground hover:text-primary hover:bg-muted/50 py-3 px-4 rounded-lg transition-colors text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/solutions" 
              className="text-foreground hover:text-primary hover:bg-muted/50 py-3 px-4 rounded-lg transition-colors text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              to="/blogs" 
              className="text-foreground hover:text-primary hover:bg-muted/50 py-3 px-4 rounded-lg transition-colors text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="pt-4 px-4">
              <a 
                href="https://calendly.com/himanshu_chauhan/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="default" className="w-full py-6 text-lg">
                  Book a Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
