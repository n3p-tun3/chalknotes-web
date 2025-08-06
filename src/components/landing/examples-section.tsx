import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, Clock, Code2 } from "lucide-react";

export function ExamplesSection() {
  return (
    <section id="examples" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">See It in Action</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Clean, beautiful, and fast. Here's how your Notion content looks with ChalkNotes.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="border-border shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" data-testid="blog-preview">
            {/* Browser mockup header */}
            <div className="bg-muted px-4 py-3 border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-muted-foreground text-sm ml-4">chalknotes.dev</span>
              </div>
            </div>
            
            {/* Blog content preview */}
            <CardContent className="p-8">
              <article>
                <h1 className="text-3xl font-bold mb-4 text-foreground">
                  Writing Clean Code with TypeScript
                </h1>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>January 15, 2024</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>5 min read</span>
                  </div>
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Learn how to write maintainable, type-safe code that your team will love. TypeScript makes JavaScript development a joy.
                  </p>
                  
                  <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                    Getting Started
                  </h2>
                  
                  <Card className="bg-card border border-border my-6 overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Code2 className="w-4 h-4 text-primary" />
                        <span className="text-primary font-mono text-sm">TypeScript</span>
                      </div>
                      <code className="text-foreground font-mono text-sm">
                        interface User {'{'} name: string; email: string; {'}'}
                      </code>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-primary my-6 bg-primary/5">
                    <CardContent className="p-6">
                      <p className="text-muted-foreground italic">
                        TypeScript helps catch errors early and provides better developer experience.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </article>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
