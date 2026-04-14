import { useState } from "react";
import { Button } from "@/landing/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import icon from "../../assets/icon.svg";

const navLinks = ["Home", "Features", "How It Works", "Dashboard", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleStartMonitoring = () => {
    window.location.href = "app.drowsygaurd.space";
  };
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30"
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <img src={icon} className="w-5 h-5" alt="DrowsyGuard" />
          </div>
          <span className="font-display font-semibold text-lg text-foreground">
            DrowsyGuard
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="hero" size="sm" onClick={handleStartMonitoring}>
            Try Now
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass border-t border-border/30 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <Button
                  variant="hero"
                  size="sm"
                  className="flex-1"
                  onClick={() => {window.open("https://github.com/mohammad-dhoraji/drowsygaurd-landing/releases/download/v1.0.0/DrowsyGuardv1.0.0.apk", "_blank")}}
                >
                  Get App
                </Button>
                <Button
                  variant="hero"
                  size="sm"
                  className="flex-1"
                  onClick={handleStartMonitoring}
                >
                  Start Monitoring
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
