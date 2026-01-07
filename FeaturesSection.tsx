import { 
  Server, 
  Terminal, 
  FolderOpen, 
  Shield, 
  Zap, 
  Code2,
  Cpu,
  Lock
} from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Docker Containers",
    description: "Each user gets an isolated container with dedicated resources. Full control, zero interference.",
  },
  {
    icon: Terminal,
    title: "Web Console",
    description: "Real-time WebSocket terminal. Execute commands directly in your container from the browser.",
  },
  {
    icon: FolderOpen,
    title: "File Manager",
    description: "Upload, download, and manage files. ZIP auto-extraction included for quick deployments.",
  },
  {
    icon: Code2,
    title: "Multi-Runtime",
    description: "Python, Node.js, and Java support out of the box. Switch runtimes with a single click.",
  },
  {
    icon: Cpu,
    title: "Resource Control",
    description: "Fine-tune CPU, RAM, and storage allocation. Scale resources as your bot grows.",
  },
  {
    icon: Shield,
    title: "Admin Panel",
    description: "Powerful admin dashboard with user management, ban controls, and system monitoring.",
  },
  {
    icon: Zap,
    title: "Instant Deploy",
    description: "Push code and go live in seconds. No complex CI/CD pipelines required.",
  },
  {
    icon: Lock,
    title: "Secure Sessions",
    description: "Cookie-based authentication with secure session management for all users.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Everything You Need to
            <span className="text-gradient"> Host Bots</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete hosting control panel with all the tools to deploy, 
            manage, and scale your bots effortlessly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-glow group relative rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
