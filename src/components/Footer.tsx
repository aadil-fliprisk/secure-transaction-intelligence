import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <span className="font-display text-lg font-semibold">
              Fliprisk<span className="text-primary"> AI</span>
            </span>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 Fliprisk AI. All rights reserved.
          </p>
          
          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="mailto:contact@fliprisk.ai" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
