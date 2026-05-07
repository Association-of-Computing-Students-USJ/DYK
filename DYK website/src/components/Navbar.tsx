import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Home',
    href: '#home'
  },
  {
    name: 'The Series',
    href: '#series'
  },
  {
    name: 'Articles',
    href: '#articles'
  },
  {
    name: 'Videos',
    href: '#videos'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-base/80 backdrop-blur-xl border-b border-primary/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3' : 'bg-transparent py-6'}`}>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-[0_0_15px_rgba(124,58,237,0.5)] group-hover:shadow-[0_0_25px_rgba(255,176,32,0.6)] transition-shadow duration-300">
              <img
                src="/WhatsApp_Profile.jpg"
                alt="WhatsApp Profile"
                className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-text leading-none tracking-wide group-hover:text-secondary transition-colors">
                DYK <span className="text-secondary">2.0</span>
              </span>
              <span className="font-sans font-semibold text-[10px] text-text-muted uppercase tracking-widest mt-1">
                ACS USJ
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-text-muted hover:text-secondary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-secondary hover:after:w-full after:transition-all after:duration-300">
              
                {link.name}
              </a>
            )}
            <a
              href="https://medium.com/@acs_usj"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-base px-6 py-2.5 rounded-full font-bold hover:bg-secondary-light hover:shadow-[0_0_20px_rgba(255,176,32,0.4)] transition-all duration-300 transform hover:-translate-y-0.5">
              
              Medium
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-text hover:text-secondary transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">
            
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-elevated border-t border-primary/20 overflow-hidden shadow-2xl">
          
            <nav className="flex flex-col py-4 container mx-auto px-4">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="py-4 text-lg font-medium text-text border-b border-primary/10 hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>
              
                  {link.name}
                </a>
            )}
              <a
              href="https://medium.com/@acs_usj"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-6 bg-secondary text-base text-center px-5 py-3.5 rounded-xl font-bold shadow-[0_0_15px_rgba(255,176,32,0.3)]">
              
                Read on Medium
              </a>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}