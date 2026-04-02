
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "./button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background/90 backdrop-blur-sm z-50 py-4 border-b border-border">
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
          <Link to="/product" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Product
          </Link>
          <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            How It Works
          </Link>
          <Link to="/solutions" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Solutions
          </Link>
          <Link to="/blogs" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Blog
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            About Us
          </Link>
          <Button asChild className="ml-4">
            <Link to="/growth-audit">Get a Retention Audit</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/product" className="text-muted-foreground hover:text-primary py-2 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Product</Link>
            <Link to="/how-it-works" className="text-muted-foreground hover:text-primary py-2 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>How It Works</Link>
            <Link to="/solutions" className="text-muted-foreground hover:text-primary py-2 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Solutions</Link>
            <Link to="/blogs" className="text-muted-foreground hover:text-primary py-2 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary py-2 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Button asChild className="mt-2">
              <Link to="/growth-audit">Get a Retention Audit</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
