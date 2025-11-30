import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;

    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#0E5BB5]/20 bg-[#041022]/95 backdrop-blur supports-[backdrop-filter]:bg-[#041022]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#E9F0FF]">MapCode.az</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#B6C7E6] hover:text-[#E9F0FF] transition-colors text-sm font-medium">
              Ana səhifə
            </Link>
            <Link to="/regions" className="text-[#B6C7E6] hover:text-[#E9F0FF] transition-colors text-sm font-medium">
              Bölgələr
            </Link>
            <Link to="/about" className="text-[#B6C7E6] hover:text-[#E9F0FF] transition-colors text-sm font-medium">
              Haqqında
            </Link>
            <Link to="/faq" className="text-[#B6C7E6] hover:text-[#E9F0FF] transition-colors text-sm font-medium">
              Suallar
            </Link>
          </nav>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[#071835] border border-[#0E5BB5]/30"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun-mobile"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5 text-[#1EA3FF]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon-mobile"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5 text-[#1EA3FF]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#E9F0FF] hover:bg-[#071835] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[#0E5BB5]/20 bg-[#041022]"
          >
            <div className="px-4 py-4 space-y-3">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-[#B6C7E6] hover:text-[#E9F0FF] hover:bg-[#071835] rounded-lg transition-colors">
                Ana səhifə
              </Link>
              <Link to="/regions" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-[#B6C7E6] hover:text-[#E9F0FF] hover:bg-[#071835] rounded-lg transition-colors">
                Bölgələr
              </Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-[#B6C7E6] hover:text-[#E9F0FF] hover:bg-[#071835] rounded-lg transition-colors">
                Haqqında
              </Link>
              <Link to="/faq" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-[#B6C7E6] hover:text-[#E9F0FF] hover:bg-[#071835] rounded-lg transition-colors">
                Suallar
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
