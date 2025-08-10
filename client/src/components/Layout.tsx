import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";
import { useIsMobile } from "@/hooks/use-mobile";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const isMobile = useIsMobile();

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" data-testid="nav-logo">
              <Logo />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} data-testid={`nav-${item.name.toLowerCase()}`}>
                  <span 
                    className={`hover:text-primary transition-colors duration-200 ${
                      location === item.href ? 'text-primary' : ''
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
              
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="glass-effect hover:bg-opacity-20"
                data-testid="theme-toggle"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
              
              {/* CTA Button */}
              <Link href="/contact" data-testid="nav-cta">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium animate-glow">
                  Get Started Today
                </Button>
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden glass-effect"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-effect border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} data-testid={`mobile-nav-${item.name.toLowerCase()}`}>
                  <span 
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      location === item.href 
                        ? 'text-primary bg-primary/10' 
                        : 'hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm font-medium">Theme</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  data-testid="mobile-theme-toggle"
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Tagline */}
            <div className="md:col-span-2">
              <Logo className="mb-4" />
              <p className="text-gray-300 mb-4 max-w-md">
                Helping small service businesses save time with easy, affordable automation.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="mailto:adjam@flowsnap.ca" 
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-email"
                >
                  <span className="sr-only">Email</span>
                  📧
                </a>
                <a 
                  href="tel:555-686-5566" 
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-phone"
                >
                  <span className="sr-only">Phone</span>
                  📞
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} data-testid={`footer-${item.name.toLowerCase()}`}>
                      <span className="text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>adjam@flowsnap.ca</p>
                <p>555-686-5566</p>
                <p>Ontario, Canada</p>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FlowSnap Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      {isMobile && (
        <div className="fixed bottom-4 right-4 z-50">
          <Link href="/contact" data-testid="mobile-sticky-cta">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 animate-pulse">
              🚀 Get Started
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
