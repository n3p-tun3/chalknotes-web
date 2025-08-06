import { Footer } from "@/components/landing/footer";
import { motion } from "framer-motion";
import { useNavigation } from "@/hooks/use-navigation";
import { 
  BookOpen, 
  Zap, 
  Palette, 
  Puzzle, 
  Smartphone, 
  Zap as Lightning, 
  Code, 
  Package,
  Terminal,
  Settings,
  FileText,
  Github,
  ExternalLink,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Clock,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Zap,
    title: "Zero Configuration",
    description: "Intelligent detection of Next.js setup, CSS frameworks, and project structure"
  },
  {
    icon: Palette,
    title: "Smart Theming",
    description: "Multiple themes with automatic CSS framework detection (Tailwind, Styled Components, CSS Modules)"
  },
  {
    icon: Puzzle,
    title: "Plugin Architecture",
    description: "Extensible plugin system with inline syntax parsing (`@@PluginName`)"
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first approach with dark mode support"
  },
  {
    icon: Lightning,
    title: "Performance Optimized",
    description: "Built-in caching, error boundaries, and retry mechanisms"
  },
  {
    icon: Code,
    title: "TypeScript Support",
    description: "Full TypeScript integration with comprehensive type definitions"
  }
];

const quickStartSteps = [
  {
    step: 1,
    title: "Installation",
    code: "npm install chalknotes",
    description: "Install ChalkNotes in your project"
  },
  {
    step: 2,
    title: "Environment Setup",
    code: `NOTION_TOKEN=secret_...
NOTION_DATABASE_ID=...`,
    description: "Create a .env file with your Notion credentials"
  },
  {
    step: 3,
    title: "Initialize",
    code: "npx chalknotes init",
    description: "Detect your setup and create configuration"
  },
  {
    step: 4,
    title: "Scaffold Blog",
    code: "npx chalknotes scaffold",
    description: "Generate blog pages and components"
  },
  {
    step: 5,
    title: "Start Blogging",
    code: "Visit /blog in your app",
    description: "Your beautiful blog is ready!"
  }
];

const builtInPlugins = [
  { name: "CommentSection", description: "Add a comment section" },
  { name: "TableOfContents", description: "Generate table of contents" },
  { name: "ReadingTime", description: "Show estimated reading time" },
  { name: "Share[twitter,linkedin]", description: "Add share buttons" },
  { name: "CodePen[pen-id]", description: "Embed CodePen" },
  { name: "Tweet[tweet-id]", description: "Embed Twitter tweets" },
  { name: "YouTube[video-id]", description: "Embed YouTube videos" }
];

const themes = [
  {
    name: "Modern",
    description: "Clean, contemporary design with excellent readability and modern styling.",
    isDefault: true
  },
  {
    name: "Minimal",
    description: "Simple, focused layout that puts content first with minimal distractions."
  },
  {
    name: "Dev",
    description: "Developer-focused theme with enhanced code highlighting and terminal-like aesthetics."
  }
];

export default function Docs() {
  const { navigateToSection } = useNavigation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium mb-8 border border-primary/20">
              <BookOpen className="w-4 h-4 mr-2" />
              Documentation
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              ChalkNotes
              <span className="block text-primary">Documentation</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Transform your Notion pages into beautiful developer blogs with intelligent framework detection and plugin architecture.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("quick-start")}
                className="text-lg px-8 py-4"
              >
                Quick Start
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => window.open('https://github.com/chalknotes/chalknotes', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">✨ Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to create beautiful, performant blogs from your Notion content.
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
                <Card className="border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20">
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
      </section> */}

      {/* Quick Start Section */}
      <section id="quick-start" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">🚀 Quick Start</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get up and running with ChalkNotes in just a few minutes.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {quickStartSteps.map((step, index) => (
              <motion.div
                key={index}
                className="mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-border hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <CardTitle className="text-2xl">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <Card className="bg-card border border-border">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Terminal className="w-4 h-4 text-primary" />
                          <span className="text-primary font-mono text-sm">Terminal</span>
                        </div>
                        <code className="text-foreground font-mono text-sm whitespace-pre-wrap">
                          {step.code}
                        </code>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Configuration Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">🔧 Configuration</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Customize ChalkNotes to match your project's needs.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Settings className="w-5 h-5 text-primary" />
                  <CardTitle>blog.config.js</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <FileText className="w-4 h-4 text-primary" />
                      <span className="text-primary font-mono text-sm">Configuration</span>
                    </div>
                    <pre className="text-foreground font-mono text-sm overflow-x-auto">
{`module.exports = {
  notionToken: process.env.NOTION_TOKEN,
  notionDatabaseId: process.env.NOTION_DATABASE_ID,
  routeBasePath: '/blog',
  theme: 'modern', // 'modern' | 'minimal' | 'dev'
  plugins: [
    '@chalknotes/syntax-highlighter',
    '@chalknotes/analytics',
    '@chalknotes/seo'
  ],
  caching: {
    enabled: true,
    ttl: 3600
  },
  errorBoundaries: true,
  customization: {
    colors: {
      primary: '#3b82f6',
      accent: '#8b5cf6'
    }
  }
};`}
                    </pre>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

             {/* Plugin System Section */}
       <section className="py-20 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
           <motion.div 
             className="text-center mb-16"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">🧩 Plugin System</h2>
             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
               Extend ChalkNotes with powerful plugins using inline syntax parsing.
             </p>
           </motion.div>

           {/* Visual Plugin Demo */}
           <motion.div 
             className="mb-16"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             viewport={{ once: true }}
           >
             <h3 className="text-2xl font-bold mb-8 text-center text-foreground">See Plugins in Action</h3>
             <div className="max-w-4xl mx-auto">
               <Card className="border-border shadow-lg overflow-hidden">
                 {/* Notion-like header */}
                 <div className="bg-muted px-4 py-3 border-b border-border">
                   <div className="flex items-center space-x-2">
                     <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                     <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                     <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                     <span className="text-muted-foreground text-sm ml-4">Notion - My Blog Post</span>
                   </div>
                 </div>
                 
                 {/* Mock Notion content with plugins */}
                 <CardContent className="p-8">
                   <div className="space-y-6">
                     {/* Title */}
                     <h1 className="text-3xl font-bold text-foreground">Building a Modern React App</h1>
                     
                                           {/* Reading time plugin */}
                      <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-400 p-4 rounded-r-lg">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-5 h-5 text-blue-700 dark:text-blue-900" />
                          <span className="text-blue-900 dark:text-blue-900 text-sm font-medium">
                            %%ReadingTime - Estimated 8 min read
                          </span>
                        </div>
                      </div>
                     
                     {/* Introduction */}
                     <p className="text-muted-foreground leading-relaxed">
                       In this comprehensive guide, we'll explore how to build a modern React application 
                       with TypeScript, Tailwind CSS, and the latest best practices.
                     </p>
                     
                                           {/* Table of contents plugin */}
                      <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <FileText className="w-5 h-5 text-green-700 dark:text-green-900" />
                          <span className="text-green-900 dark:text-green-900 font-medium">%%TableOfContents</span>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="text-green-800 dark:text-green-800">• Getting Started</div>
                          <div className="text-green-800 dark:text-green-800">• Project Setup</div>
                          <div className="text-green-800 dark:text-green-800">• Component Architecture</div>
                          <div className="text-green-800 dark:text-green-800">• State Management</div>
                          <div className="text-green-800 dark:text-green-800">• Deployment</div>
                        </div>
                      </div>
                     
                     {/* Code block */}
                     <div className="bg-gray-900 rounded-lg p-4">
                       <div className="flex items-center space-x-2 mb-2">
                         <Code className="w-4 h-4 text-green-400" />
                         <span className="text-green-400 font-mono text-sm">TypeScript</span>
                       </div>
                       <code className="text-green-400 font-mono text-sm">
                         npm create react-app my-app --template typescript
                       </code>
                     </div>
                     
                                           {/* Share plugin */}
                      <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <ExternalLink className="w-5 h-5 text-purple-700 dark:text-purple-900" />
                          <span className="text-purple-900 dark:text-purple-900 font-medium">
                            %%Share[twitter,linkedin,github]
                          </span>
                        </div>
                        <div className="flex space-x-3">
                          <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">
                            <span className="text-white text-xs">T</span>
                          </div>
                          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                            <span className="text-white text-xs">L</span>
                          </div>
                          <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                            <span className="text-white text-xs">G</span>
                          </div>
                        </div>
                      </div>
                     
                                           {/* Comment section plugin */}
                      <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <MessageCircle className="w-5 h-5 text-orange-700 dark:text-orange-900" />
                          <span className="text-orange-900 dark:text-orange-900 font-medium">
                            %%CommentSection
                          </span>
                        </div>
                        <div className="text-sm text-orange-800 dark:text-orange-800">
                          Comments section will appear here...
                        </div>
                      </div>
                   </div>
                 </CardContent>
               </Card>
             </div>
           </motion.div>

           <div className="grid lg:grid-cols-2 gap-12">
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
             >
               <h3 className="text-2xl font-bold mb-6 text-foreground">Built-in Plugins</h3>
               <div className="space-y-4">
                 {builtInPlugins.map((plugin, index) => (
                   <Card key={index} className="border-border">
                     <CardContent className="p-4">
                       <div className="flex items-center justify-between">
                         <div>
                           <code className="text-primary font-mono text-sm">%%{plugin.name}</code>
                           <p className="text-muted-foreground text-sm mt-1">{plugin.description}</p>
                         </div>
                         <CheckCircle className="w-5 h-5 text-green-500" />
                       </div>
                     </CardContent>
                   </Card>
                 ))}
               </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               viewport={{ once: true }}
             >
               <h3 className="text-2xl font-bold mb-6 text-foreground">Custom Plugins</h3>
               <Card className="border-border">
                 <CardContent className="p-6">
                   <p className="text-muted-foreground mb-4">
                     Create custom plugins by registering them in your blog:
                   </p>
                   <Card className="bg-card border border-border">
                     <CardContent className="p-4">
                       <div className="flex items-center space-x-2 mb-2">
                         <Code className="w-4 h-4 text-primary" />
                         <span className="text-primary font-mono text-sm">JavaScript</span>
                       </div>
                       <pre className="text-foreground font-mono text-sm overflow-x-auto">
{`import { registerPlugin } from 'chalknotes';

registerPlugin({
  name: 'CustomWidget',
  syntax: /%%CustomWidget\\[([^\\]]+)\\]/g,
  render: (match, context) => {
    const config = match[1];
    return \`<div class="custom-widget">\${config}</div>\`;
  }
});`}
                       </pre>
                     </CardContent>
                   </Card>
                 </CardContent>
               </Card>
             </motion.div>
           </div>
         </div>
       </section>

      {/* Themes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">🎨 Themes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from multiple beautiful themes or create your own.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {themes.map((theme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-border hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{theme.name}</CardTitle>
                      {theme.isDefault && (
                        <Badge variant="secondary">Default</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {theme.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* API Reference Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">📚 API Reference</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete API documentation for integrating ChalkNotes into your projects.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground">Core Functions</h3>
              <Card className="border-border">
                <CardContent className="p-6">
                  <Card className="bg-card border border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Code className="w-4 h-4 text-primary" />
                        <span className="text-primary font-mono text-sm">TypeScript</span>
                      </div>
                      <pre className="text-foreground font-mono text-sm overflow-x-auto">
{`import { getAllPosts, getPostBySlug } from 'chalknotes';

// Get all published posts
const posts = await getAllPosts();

// Get specific post by slug
const post = await getPostBySlug('my-post-slug');`}
                      </pre>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground">Next.js Helpers</h3>
              <Card className="border-border">
                <CardContent className="p-6">
                  <Card className="bg-card border border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Code className="w-4 h-4 text-primary" />
                        <span className="text-primary font-mono text-sm">TypeScript</span>
                      </div>
                      <pre className="text-foreground font-mono text-sm overflow-x-auto">
{`// For App Router
import { getPostBySlug } from 'chalknotes';

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);
  return <YourBlogComponent post={post} />;
}`}
                      </pre>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Transform your Notion content into a beautiful developer blog today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => window.open('https://github.com/chalknotes/chalknotes', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => window.open('https://chalknotes.dev/examples', '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Examples
              </Button>
            </div>
          </motion.div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
} 