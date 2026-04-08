
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

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            About
          </Link>
          <Link to="/blogs" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Blog
          </Link>
          <Button asChild className="ml-4">
            <Link to="/growth-audit">Request a Demo</Link>
          </Button>
        </div>

        <button
          className="md:hidden text-muted-foreground hover:text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/about" className="text-muted-foreground hover:text-foreground py-2 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/blogs" className="text-muted-foreground hover:text-foreground py-2 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Button asChild className="mt-2">
              <Link to="/growth-audit">Request a Demo</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
