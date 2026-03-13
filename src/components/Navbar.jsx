import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-secondary/95 backdrop-blur-md shadow-lg shadow-primary/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-white font-bold text-lg hidden sm:block">
              Akshay <span className="text-accent">Technologies</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-accent transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Hire Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-secondary/98 backdrop-blur-md border-t border-white/10 animate-fade-in">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleClick}
                  className="block px-4 py-3 text-gray-300 hover:text-accent hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <a
                  href="#contact"
                  onClick={handleClick}
                  className="block text-center bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-lg font-semibold transition-all"
                >
                  Hire Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
