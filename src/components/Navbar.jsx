import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#highlights' },
  { label: 'Events', href: '#events' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Venue', href: '#venue' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 bg-white ${
        scrolled ? 'border-b border-gray-200 shadow-sm py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-4 h-4 bg-black rounded-sm" />
          <span className="font-bold text-lg tracking-tight text-black">
            Sci-Technovation<span className="text-gray-400">'26</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#events"
            className="clean-btn px-6 py-2.5 rounded-md text-sm"
          >
            Register
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-black"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 px-6 py-4 space-y-4 shadow-lg">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-gray-600 hover:text-black"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#events"
            onClick={() => setMobileOpen(false)}
            className="clean-btn block text-center px-5 py-3 rounded-md text-sm mt-4"
          >
            Register
          </a>
        </div>
      )}
    </nav>
  );
}
