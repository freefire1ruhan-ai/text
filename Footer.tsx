import { Server, Github, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer id="about" className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
                <Server className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                RIZER<span className="text-gradient">x</span>HOSTING
              </span>
            </a>
            <p className="mb-4 max-w-sm text-sm text-muted-foreground">
              Self-contained web hosting control panel with Docker containers, 
              multi-runtime support, and powerful management tools.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:border-primary hover:text-primary"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:border-primary hover:text-primary"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:border-primary hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="transition-colors hover:text-foreground">Features</a></li>
              <li><a href="#pricing" className="transition-colors hover:text-foreground">Pricing</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Documentation</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-foreground">Help Center</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Status</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Contact</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Discord</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center text-sm text-muted-foreground md:flex-row">
          <p>© 2024 RIZERxHOSTING. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
