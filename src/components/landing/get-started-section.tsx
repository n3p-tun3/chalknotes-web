import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github, ArrowRight, Sparkles } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Install ChalkNotes",
    code: "npx chalknotes init",
    icon: Sparkles
  },
  {
    number: 2,
    title: "Connect Notion",
    description: "Add your Notion token and database ID"
  },
  {
    number: 3,
    title: "Start Writing",
    description: "Your beautiful blog is ready!"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export function GetStartedSection() {
  return (
    <section id="get-started" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get started with ChalkNotes in under 2 minutes. Simple, fast, and beautiful.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20" data-testid={`getting-started-step-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/15 text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl border border-primary/20">
                    {step.number}
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{step.title}</h3>
                  {step.code ? (
                    <Card className="bg-card border border-border mt-2">
                      <CardContent className="p-3">
                        <code className="text-sm text-primary font-mono">{step.code}</code>
                      </CardContent>
                    </Card>
                  ) : (
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg"
            variant="outline"
            className="text-lg px-8 py-4 transition-all duration-300 hover:scale-105"
            data-testid="get-started-button"
            onClick={() => window.location.href = '/docs'}
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          {/* <Button 
            variant="outline"
            size="lg"
            className="text-lg px-8 py-4 transition-all duration-300 flex items-center space-x-2"
            data-testid="github-button"
          >
            <Github className="w-5 h-5" />
            <span>View on GitHub</span>
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
}
