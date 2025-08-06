import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Zap, 
  FileText, 
  Code, 
  Palette, 
  Sparkles, 
  Heart 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Zero Configuration",
    description: "Get started instantly with automatic detection of your project structure. No complex setup required.",
  },
  {
    icon: FileText,
    title: "Rich Notion Support",
    description: "Complete support for all Notion block types with beautiful, clean rendering that matches your design.",
  },
  {
    icon: Code,
    title: "TypeScript First",
    description: "Full TypeScript support with comprehensive type definitions and intelligent IntelliSense.",
  },
  {
    icon: Sparkles,
    title: "Clean Design",
    description: "Beautiful, minimal design system that focuses on readability and user experience.",
  },
  {
    icon: Palette,
    title: "Customizable",
    description: "Easy theming and customization options to match your brand and preferences.",
  },
  {
    icon: Heart,
    title: "Developer Friendly",
    description: "Built by developers, for developers. Clean code, great documentation, and active community.",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Everything You Need</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, powerful, and beautiful. ChalkNotes gives you everything you need to create amazing blogs from your Notion content.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20" data-testid={`feature-card-${index}`}>
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
  );
}
