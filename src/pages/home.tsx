import { Footer } from "@/components/landing/footer";
import { motion } from "framer-motion";
import { BookOpen, Code, ArrowRight, Clock, Zap, Database, Settings, Puzzle, Sparkles, Rocket, Users, Star, Github, Globe, Palette, Shield, Layers } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Get your blog running in under 5 minutes with our intelligent framework detection and automated scaffolding."
  },
  {
    icon: Palette,
    title: "Beautiful by Default",
    description: "Stunning, responsive designs that work perfectly across all devices and frameworks out of the box."
  },
  {
    icon: Puzzle,
    title: "Powerful Plugin System",
    description: "Extend functionality with built-in plugins for comments, sharing, analytics, and custom integrations."
  },
  {
    icon: Database,
    title: "Notion Integration",
    description: "Write in Notion, publish everywhere. Seamless sync with your existing Notion workspace and databases."
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Built for developers with TypeScript support, modern tooling, and extensive customization options."
  },
  {
    icon: Shield,
    title: "Production Ready",
    description: "Optimized for performance, SEO, and accessibility. Deploy with confidence to any platform."
  }
];

const steps = [
  {
    step: 1,
    title: "Connect Notion",
    description: "Link your Notion workspace with a simple integration token",
    icon: Database
  },
  {
    step: 2,
    title: "Install & Configure",
    description: "Run our CLI tool to detect your setup and generate configuration",
    icon: Settings
  },
  {
    step: 3,
    title: "Scaffold Your Blog",
    description: "Generate beautiful blog pages and components automatically",
    icon: Layers
  },
  {
    step: 4,
    title: "Start Writing",
    description: "Write in Notion, see changes reflected instantly in your blog",
    icon: BookOpen
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Developer",
    company: "TechCorp",
    content: "ChalkNotes transformed how I manage my developer blog. Writing in Notion and having it automatically sync to my Next.js site is incredible.",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "Marcus Rodriguez",
    role: "Full Stack Engineer",
    company: "StartupXYZ",
    content: "The plugin system is fantastic. I can embed CodePens, tweets, and custom components without touching any code. Perfect for technical content.",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "Emily Watson",
    role: "Tech Lead",
    company: "DevStudio",
    content: "Setup took literally 3 minutes. The automatic framework detection worked flawlessly with our existing React setup. Highly recommended!",
    avatar: "/placeholder.svg?height=40&width=40"
  }
];

// const stats = [
//   { number: "10k+", label: "Developers" },
//   { number: "50k+", label: "Blog Posts" },
//   { number: "99.9%", label: "Uptime" },
//   { number: "< 5min", label: "Setup Time" }
// ];

export default function Landing() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium mb-8 border border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Transform Your Notion Pages
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
              Beautiful Blogs
              <span className="block text-primary">From Notion</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
              Transform your Notion pages into stunning developer blogs with intelligent framework detection,
              powerful plugins, and zero configuration required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button
                size="lg"
                onClick={() => scrollToSection("get-started")}
                className="text-lg px-8 py-4 h-14 hover:bg-black hover:text-white"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Everything You Need</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful features designed to make blogging effortless and your content beautiful.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20 h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mb-6 border border-primary/20">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium mb-6 border border-primary/20">
              <Rocket className="w-4 h-4 mr-2" />
              How It Works
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Simple Setup Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get your blog up and running in minutes with our streamlined setup process.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6 mb-12 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-16 bg-border mx-auto mt-4"></div>
                  )}
                </div>
                <Card className="flex-1 border-border hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-primary/15 rounded-lg flex items-center justify-center border border-primary/20">
                        <step.icon className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium mb-6 border border-primary/20">
              <Globe className="w-4 h-4 mr-2" />
              See It In Action
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">From Notion to Blog</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch how your Notion content transforms into a beautiful, professional blog.
            </p>
          </motion.div>

          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex w-full flex-col sm:flex-row gap-8 items-center">
              {/* Notion Side */}
              <Card className="border-border shadow-lg overflow-hidden flex-1">
                <div className="bg-muted px-4 py-3 border-b border-border">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-muted-foreground text-sm ml-4">Notion - My Blog</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Building Modern React Apps</h3>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Published</span>
                      </div>
                      <div>Tags: React, TypeScript, Tutorial</div>
                      <div>Slug: building-modern-react-apps</div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <p>In this guide, we'll explore...</p>
                      <div className="bg-blue-50 dark:bg-blue-950/30 p-2 rounded text-xs">
                        %%ReadingTime
                      </div>
                      <div className="bg-green-50 dark:bg-green-950/30 p-2 rounded text-xs">
                        %%TableOfContents
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Arrow */}
              <div className="flex justify-center sm:justify-start">
                <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center border border-primary/20">
                  <ArrowRight className="w-6 h-6 text-primary rotate-90 sm:rotate-0" />
                </div>
              </div>

              {/* Blog Side */}
              <Card className="border-border shadow-lg overflow-hidden flex-1">
                <div className="bg-muted px-4 py-3 border-b border-border">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-muted-foreground text-sm ml-4">myblog.dev/building-modern-react-apps</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Building Modern React Apps</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>8 min read</span>
                      </div>
                      <div className="flex space-x-2">
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-muted-foreground">In this guide, we'll explore how to build modern React applications...</p>
                      <Card className="bg-card border border-border p-3">
                        <div className="text-sm font-medium mb-2">Table of Contents</div>
                        <div className="text-xs text-muted-foreground space-y-1">
                          <div>• Getting Started</div>
                          <div>• Project Setup</div>
                          <div>• Best Practices</div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium mb-6 border border-primary/20">
              <Rocket className="w-4 h-4 mr-2" />
              Get Started
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Ready to Transform Your Blog?</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join thousands of developers who've already transformed their Notion content into beautiful blogs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 h-14 hover:bg-black hover:text-white"
                onClick={() => window.open('/docs', '_self')}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
