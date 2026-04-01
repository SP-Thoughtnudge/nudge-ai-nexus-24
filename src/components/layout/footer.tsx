import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-lg font-bold text-foreground tracking-tight">
              Thought<span className="text-primary">Nudge</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Agentic AI for Insurance Operations
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Platform</h4>
            <div className="flex flex-col gap-2">
              <Link to="/product" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Product</Link>
              <Link to="/solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Solutions</Link>
              <Link to="/security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Security & Compliance</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Company</h4>
            <div className="flex flex-col gap-2">
              <Link to="/company" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link to="/demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Request a Demo</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Legal</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Privacy Policy</span>
              <span className="text-sm text-muted-foreground">Terms of Service</span>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ThoughtNudge. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
