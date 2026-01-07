import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 animate-grid" />
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <div className="container relative mx-auto px-4 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 backdrop-blur-sm animate-fade-in">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Next-Gen Bot Hosting Platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Deploy Your Bots
            <br />
            <span className="text-gradient">In Seconds</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Self-contained hosting with Docker containers, web console, 
            file manager, and support for Python, Node.js & Java. 
            Launch your bot empire today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl">
              Start Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="glow" size="xl">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border/50 pt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient lg:text-4xl">99.9%</div>
              <div className="mt-1 text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient lg:text-4xl">10K+</div>
              <div className="mt-1 text-sm text-muted-foreground">Bots Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient lg:text-4xl">24/7</div>
              <div className="mt-1 text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>

        {/* Floating Terminal Preview */}
        <div className="mx-auto mt-20 max-w-4xl animate-float">
          <div className="rounded-xl border border-border bg-card/80 p-1 shadow-2xl backdrop-blur-sm glow-primary-sm">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-destructive" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-4 text-xs text-muted-foreground font-mono">terminal@rizerxhosting</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="flex items-center gap-2">
                <span className="text-primary">$</span>
                <span className="text-muted-foreground">rizerx deploy bot.py</span>
              </div>
              <div className="mt-2 text-green-400">✓ Container created successfully</div>
              <div className="text-green-400">✓ Dependencies installed</div>
              <div className="text-green-400">✓ Bot running on port 8080</div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-primary">$</span>
                <span className="animate-pulse text-foreground">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
