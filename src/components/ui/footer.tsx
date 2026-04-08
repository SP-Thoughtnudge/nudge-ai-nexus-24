
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="space-y-4">
            <Link to="/" className="flex items-start">
              <img 
                src="/lovable-uploads/db57410a-d435-45cc-afcb-4ae995c8b5e0.png" 
                alt="Thoughtnudge Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              The AI-native system behind every customer interaction — deciding, learning, and optimizing across your entire lifecycle.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/company/thoughtnudge" target="_blank" rel="noopener noreferrer" className="text-background/50 hover:text-background transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-background/50 uppercase tracking-wider">Navigate</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-background/70 hover:text-background transition-colors text-sm">About</Link></li>
              <li><Link to="/blogs" className="text-background/70 hover:text-background transition-colors text-sm">Blog</Link></li>
              <li><Link to="/growth-audit" className="text-background/70 hover:text-background transition-colors text-sm">Request a Demo</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-background/50 uppercase tracking-wider">Ready to start?</h3>
            <p className="text-background/70 text-sm">
              See how Thoughtnudge can transform every customer interaction.
            </p>
            <Link 
              to="/growth-audit" 
              className="inline-flex bg-primary hover:bg-primary/90 text-primary-foreground py-2.5 px-5 rounded-md font-medium transition-colors text-sm"
            >
              Request a Demo
            </Link>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/40 text-sm">
            © 2025 Thoughtnudge. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-background/40 text-sm hover:text-background/70 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-background/40 text-sm hover:text-background/70 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
