import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { useNavigation } from "@/hooks/use-navigation";
import { motion } from "framer-motion";

export function HeroSection() {
  const { navigateToSection } = useNavigation();

  const handleSectionClick = (sectionId: string) => {
    navigateToSection(sectionId);
  };

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium mb-8 border border-primary/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Simple, Beautiful, and Fast
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Write Notes with
            <span className="block text-primary">ChalkNotes</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Transform your Notion into a beautiful, performant blog with zero configuration. 
            Clean design, TypeScript support, and built for modern developers.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center space-x-2 mb-3">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground text-sm">Notion Database</span>
              </div>
              <div className="text-foreground font-medium">
                Your content, beautifully rendered
              </div>
            </div>
            <div className="flex items-center text-muted-foreground">
              <ArrowRight className="w-6 h-6" />
            </div>
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
              <div className="flex items-center space-x-2 mb-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-primary text-sm font-medium">ChalkNotes</span>
              </div>
              <div className="text-foreground font-medium">
                Clean, fast blog
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={() => window.location.href = '/docs'}
              className="text-lg px-8 py-4"
              data-testid="hero-get-started"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleSectionClick("examples")}
              className="text-lg px-8 py-4"
              data-testid="hero-view-examples"
            >
              View Examples
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
