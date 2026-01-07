import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "Free",
    description: "Perfect for getting started with a single bot",
    features: [
      "1 Container",
      "512MB RAM",
      "1 vCPU",
      "5GB Storage",
      "Web Console",
      "File Manager",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    icon: Rocket,
    price: "$9.99",
    period: "/month",
    description: "For serious developers running multiple bots",
    features: [
      "5 Containers",
      "2GB RAM each",
      "2 vCPU each",
      "25GB Storage",
      "Priority Support",
      "Custom Domains",
      "Auto Backups",
    ],
    cta: "Get Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "$29.99",
    period: "/month",
    description: "Unlimited power for large-scale operations",
    features: [
      "Unlimited Containers",
      "8GB RAM each",
      "4 vCPU each",
      "100GB Storage",
      "24/7 Support",
      "SSH Access",
      "Custom Runtimes",
      "SLA Guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-primary bg-card glow-primary scale-105"
                  : "border-border bg-card/50 hover:border-primary/50 hover:bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  plan.popular ? "bg-gradient-primary" : "bg-muted"
                }`}>
                  <plan.icon className={`h-5 w-5 ${
                    plan.popular ? "text-primary-foreground" : "text-primary"
                  }`} />
                </div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
              </div>

              <div className="mb-4">
                <span className="text-4xl font-black">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground">{plan.period}</span>
                )}
              </div>

              <p className="mb-6 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "glow"}
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
