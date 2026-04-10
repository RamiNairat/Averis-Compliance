import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-slate-950 p-2 rounded-2xl group-hover:bg-brand-600 transition-all duration-300 shadow-lg shadow-slate-900/10">
              <img src="/logo.png" alt="Averis Compliance" className="w-8 h-8 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="heading-display text-xl tracking-tight leading-none">
                AVERIS<span className="text-brand-600 font-black">.</span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 leading-none mt-1">
                Compliance
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                  location.pathname === link.path ? "text-brand-600" : "text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary py-2 px-5 text-sm">
              Get Review
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-brand-600 transition-colors"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600 rounded-xl transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="flex items-center justify-between w-full px-3 py-4 text-base font-bold text-white bg-brand-600 rounded-xl mt-4"
              >
                Get Review <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
