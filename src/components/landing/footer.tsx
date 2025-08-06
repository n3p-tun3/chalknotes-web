import { Twitter, BookOpen } from "lucide-react";
import { useNavigation } from "@/hooks/use-navigation";

const footerLinks = {
  product: [
    { name: "Features", href: "/#features" },
    { name: "Documentation", href: "/docs" },
    { name: "Examples", href: "/#examples" },
  ],
  CreatedBy: [
    { name: "Twitter", href: "https://x.com/nep_tune1" },
  ]
};

const socialLinks = [
  { icon: Twitter, href: "https://x.com/nep_tune1", label: "Twitter" },
];

export function Footer() {
  const { navigateToSection } = useNavigation();

  const handleSectionClick = (sectionId: string) => {
    navigateToSection(sectionId.replace("#", ""));
  };

  return (
    <footer className="bg-muted/50 border-t border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-sm">
                <BookOpen className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-xl text-foreground">ChalkNotes</span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
              Transform your Notion database into beautiful, performant developer blogs with zero configuration.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith("#") ? (
                    <button
                      onClick={() => handleSectionClick(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-left"
                      data-testid={`footer-link-${link.name.toLowerCase()}`}
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`footer-link-${link.name.toLowerCase()}`}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Created By</h4>
            <ul className="space-y-2">
              {footerLinks.CreatedBy.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`footer-community-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2025 ChalkNotes. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors" data-testid="footer-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors" data-testid="footer-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
