import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Github, Menu, X, BookOpen } from "lucide-react";
import { useNavigation } from "@/hooks/use-navigation";
// import { useTheme } from "@/components/ui/theme-provider";

export function Navigation() {
  // const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navigateToSection, navigateToPage } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    navigateToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-sm">
              <BookOpen className="w-4 h-4 text-primary-foreground" />
            </div>
            <span onClick={() => window.location.href = '/'} className="font-semibold text-xl cursor-pointer">ChalkNotes</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleSectionClick("features")}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-features"
            >
              Features
            </button>
            <a
              href="/docs"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-docs"
            >
              Documentation
            </a>
            <button
              onClick={() => handleSectionClick("examples")}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-examples"
            >
              Examples
            </button>
            {/* <a
              href="https://github.com/chalknotes/chalknotes"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-1"
              data-testid="nav-github"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a> */}
          </div>

          <div className="flex items-center space-x-4">
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              data-testid="theme-toggle"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button> */}
            
            <Button
              variant="outline"
              onClick={() => window.location.href = '/docs'}
              data-testid="nav-get-started"
            >
              Get Started
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
                      <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => handleSectionClick("features")}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                  data-testid="mobile-nav-features"
                >
                  Features
                </button>
                <a
                  href="/docs"
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                  data-testid="mobile-nav-docs"
                >
                  Documentation
                </a>
                <button
                  onClick={() => handleSectionClick("examples")}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                  data-testid="mobile-nav-examples"
                >
                  Examples
                </button>
                {/* <a
                  href="https://github.com/chalknotes/chalknotes"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-1"
                  data-testid="mobile-nav-github"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a> */}
              </div>
            </div>
        )}
      </div>
    </nav>
  );
}
