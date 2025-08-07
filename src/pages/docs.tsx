import { Footer } from "@/components/landing/footer";
import { motion } from "framer-motion";
import { BookOpen, Code, Terminal, FileText, ExternalLink, CheckCircle, ArrowRight, Clock, MessageCircle, Copy, ExternalLinkIcon, Zap, Database, Settings, Puzzle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const quickStartSteps = [
  {
    step: 1,
    title: "Installation",
    code: "npm install chalknotes",
    description: "Install ChalkNotes in your project"
  },
  {
    step: 2,
    title: "Get Notion Credentials",
    description: "Create a Notion integration and get your database ready.",
    hasButtons: true,
    hasDatabaseExample: false
  },
  {
    step: 3,
    title: "Environment Setup",
    code: `NOTION_TOKEN=secret_...
NOTION_DATABASE_ID=...`,
    description: "Create a .env file with your Notion credentials"
  },
  {
    step: 4,
    title: "Initialize",
    code: "npx chalknotes init",
    description: "Detect your setup and create configuration"
  },
  {
    step: 5,
    title: "Scaffold Blog",
    code: "npx chalknotes scaffold",
    description: "Generate blog pages and components"
  },
  {
    step: 6,
    title: "Start Blogging",
    description: "Your beautiful blog is ready! Visit /blog in your app to see it in action.",
    isSuccess: true
  }
];

const builtInPlugins = [
  { name: "CommentSection", description: "Add a comment section", icon: MessageCircle },
  { name: "TableOfContents", description: "Generate table of contents", icon: FileText },
  { name: "ReadingTime", description: "Show estimated reading time", icon: Clock },
  { name: "Share[twitter,linkedin]", description: "Add share buttons", icon: ExternalLink },
  { name: "CodePen[pen-id]", description: "Embed CodePen", icon: Code },
  { name: "Tweet[tweet-id]", description: "Embed Twitter tweets", icon: MessageCircle },
  { name: "YouTube[video-id]", description: "Embed YouTube videos", icon: ExternalLink }
];

const navigationSections = [
  { id: "quick-start", title: "Quick Start", icon: Zap },
  { id: "setup", title: "Setup Guide", icon: Settings },
  { id: "plugins", title: "Plugin System", icon: Puzzle },
  { id: "api", title: "API Reference", icon: Code }
];

export default function Docs() {
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
            
            {/* Navigation Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {navigationSections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    className="border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20 cursor-pointer group"
                    onClick={() => scrollToSection(section.id)}
                  >
                    <CardContent className="p-4 text-center">
                      <section.icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <p className="text-sm font-medium">{section.title}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("quick-start")}
                className="text-lg px-8 py-4"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="quick-start" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium mb-6 border border-primary/20">
              <Zap className="w-4 h-4 mr-2" />
              Quick Start
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Get Up and Running</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow these steps to set up ChalkNotes in your project. Takes less than 5 minutes.
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
                <Card className={`border-border hover:shadow-lg transition-all duration-300 ${step.isSuccess ? 'border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 ${step.isSuccess ? 'bg-green-500' : 'bg-primary'} text-primary-foreground rounded-full flex items-center justify-center font-bold`}>
                        {step.isSuccess ? <CheckCircle className="w-4 h-4" /> : step.step}
                      </div>
                      <CardTitle className="text-2xl">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    
                    {step.code && (
                      <Card className="bg-card border border-border mb-4">
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
                    )}
                    
                    {step.hasButtons && (
                      <div className="mt-4 space-y-3">
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button
                            variant="outline"
                            onClick={() => window.open('https://www.notion.so/my-integrations', '_blank')}
                            className="flex items-center justify-center"
                          >
                            <ExternalLinkIcon className="w-4 h-4 mr-2" />
                            Create Notion Integration
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => window.open('https://roasted-earl-5a9.notion.site/243732a303f280aeb8c5cc5ee4b67973?v=243732a303f280088f32000c73120dea', '_blank')}
                            className="flex items-center justify-center"
                          >
                            <Copy className="w-4 h-4 mr-2" />
                            Clone Blog Template
                          </Button>
                        </div>
                        <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg border border-border">
                          <p className="font-medium mb-2 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                            Pro Tip:
                          </p>
                          <p>Use our ready-made blog template with the correct database structure and example content. Just click "Clone Blog Template" above!</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Guide Section */}
      <section id="setup" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium mb-6 border border-primary/20">
              <Settings className="w-4 h-4 mr-2" />
              Setup Guide
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Configuration & Setup</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Detailed setup instructions for database structure and environment configuration.
            </p>
          </motion.div>

          {/* Database Structure */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <Database className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-3xl font-bold text-foreground">Database Structure</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <CardTitle>Required Properties</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Title", required: true },
                      { name: "Slug", required: true },
                      { name: "Status", required: true },
                      { name: "Published Date", required: false },
                      { name: "Tags", required: false },
                      { name: "Excerpt", required: false }
                    ].map((prop, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border">
                        <span className="font-medium">{prop.name}</span>
                        <Badge variant={prop.required ? "secondary" : "outline"}>
                          {prop.required ? "Required" : "Optional"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <CardTitle>Quick Setup</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Don't want to set up the database manually? Use our ready-made template!
                    </p>
                    <Button
                      onClick={() => window.open('https://www.notion.so/ChalkNotes-Blog-Template-248732a303f280b896a7effab4d0a018', '_blank')}
                      className="w-full"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Clone Blog Template
                    </Button>
                    <div className="text-sm text-muted-foreground bg-primary/5 p-3 rounded-lg border border-primary/20">
                      <p className="font-medium mb-1 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                        What's included:
                      </p>
                      <ul className="space-y-1 ml-6">
                        <li>• Correct database structure</li>
                        <li>• Example blog posts</li>
                        <li>• Plugin demonstrations</li>
                        <li>• SEO-optimized content</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Environment Variables */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <Settings className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-3xl font-bold text-foreground">Environment Variables</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <CardTitle>.env File</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Card className="bg-card border border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Terminal className="w-4 h-4 text-primary" />
                        <span className="text-primary font-mono text-sm">Environment Variables</span>
                      </div>
                      <pre className="text-foreground font-mono text-sm overflow-x-auto">{`# Notion Integration Token
NOTION_TOKEN=secret_...

# Notion Database ID (32 characters, no dashes)
NOTION_DATABASE_ID=248732a303f280b896a7effab4d0a018`}
                      </pre>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <CardTitle>How to Get These</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg border border-border">
                      <h4 className="font-semibold mb-2 flex items-center">
                        <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mr-2">1</span>
                        NOTION_TOKEN
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Go to <a href="https://www.notion.so/my-integrations" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Notion Integrations</a>, create a new integration, and copy the token.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-muted/50 rounded-lg border border-border">
                      <h4 className="font-semibold mb-2 flex items-center">
                        <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mr-2">2</span>
                        NOTION_DATABASE_ID
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Share your database, copy the link, and extract the 32-character ID from the URL.
                      </p>
                    </div>
                    
                    <Button
                      variant="outline"
                      onClick={() => window.open('https://www.notion.so/my-integrations', '_blank')}
                      className="w-full"
                    >
                      <ExternalLinkIcon className="w-4 h-4 mr-2" />
                      Create Notion Integration
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Visual Database ID Example */}
            <Card className="border-border mt-8">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <CardTitle>Database ID Example</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    When you share your database, you'll get a URL like this:
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm break-all border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-primary font-medium">Shared URL:</span>
                      <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                        <Copy className="w-3 h-3 mr-1" />
                        Copy ID
                      </Button>
                    </div>
                    <div className="space-y-1">
                      <span className="text-muted-foreground">https://www.notion.so/</span>
                      <span className="bg-primary text-primary-foreground px-2 py-1 rounded font-bold">248732a303f280b896a7effab4d0a018</span>
                      <span className="text-muted-foreground">?v=248732a303f28173b303000cda161283</span>
                    </div>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg border border-primary/20">
                    <p className="text-sm font-medium text-primary mb-1">✅ Database ID to use:</p>
                    <code className="bg-muted px-2 py-1 rounded font-mono text-sm">248732a303f280b896a7effab4d0a018</code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Plugin System Section */}
      <section id="plugins" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium mb-6 border border-primary/20">
              <Puzzle className="w-4 h-4 mr-2" />
              Plugin System
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Extend with Plugins</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enhance your blog with powerful plugins using simple inline syntax.
            </p>
          </motion.div>

          {/* Plugin Demo */}
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
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span className="text-blue-900 dark:text-blue text-base font-medium">
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
                        <FileText className="w-5 h-5 text-green-600" />
                        <span className="text-green-900 dark:text-green text-base font-medium">%%TableOfContents</span>
                      </div>
                      <div className="space-y-2 text-sm text-green-800 dark:text-green">
                        <div className="text-green-800 dark:text-green">• Getting Started</div>
                        <div className="text-green-800 dark:text-green">• Project Setup</div>
                        <div className="text-green-800 dark:text-green">• Component Architecture</div>
                        <div className="text-green-800 dark:text-green">• State Management</div>
                        <div className="text-green-800 dark:text-green">• Deployment</div>
                      </div>
                    </div>
                    
                    {/* Share plugin */}
                    <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <ExternalLink className="w-5 h-5 text-purple-600" />
                        <span className="text-purple-900 dark:text-purple text-base font-medium">
                          %%Share[twitter,linkedin,github]
                        </span>
                      </div>
                      <div className="flex space-x-3">
                        <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">T</span>
                        </div>
                        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">L</span>
                        </div>
                        <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">G</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Comment section plugin */}
                    <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <MessageCircle className="w-5 h-5 text-orange-600" />
                        <span className="text-orange-900 dark:text-orange text-base font-medium">
                          %%CommentSection
                        </span>
                      </div>
                      <div className="text-sm text-orange-800 dark:text-orange">
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
                  <Card key={index} className="border-border hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center border border-primary/20">
                          <plugin.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
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
                      <pre className="text-foreground font-mono text-sm overflow-x-auto">{`import { registerPlugin } from 'chalknotes';

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

      {/* API Reference Section */}
      <section id="api" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium mb-6 border border-primary/20">
              <Code className="w-4 h-4 mr-2" />
              API Reference
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">API Documentation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete API reference for integrating ChalkNotes into your projects.
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
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="w-5 h-5 mr-2 text-primary" />
                    Data Fetching
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Card className="bg-card border border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Code className="w-4 h-4 text-primary" />
                        <span className="text-primary font-mono text-sm">TypeScript</span>
                      </div>
                      <pre className="text-foreground font-mono text-sm overflow-x-auto">{`import { getAllPosts, getPostBySlug } from 'chalknotes';

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
              <h3 className="text-2xl font-bold mb-6 text-foreground">Next.js Integration</h3>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="w-5 h-5 mr-2 text-primary" />
                    App Router
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Card className="bg-card border border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Code className="w-4 h-4 text-primary" />
                        <span className="text-primary font-mono text-sm">TypeScript</span>
                      </div>
                      <pre className="text-foreground font-mono text-sm overflow-x-auto">{`// app/blog/[slug]/page.tsx
import { getPostBySlug } from 'chalknotes';

export default async function BlogPost({ 
  params 
}: { 
  params: { slug: string } 
}) {
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

      <Footer />
    </div>
  );
}
