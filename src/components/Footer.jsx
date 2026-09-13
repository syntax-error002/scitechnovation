import React from 'react';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#highlights' },
  { label: 'Events', href: '#events' },
  { label: 'Schedule', href: '#schedule' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-black mb-6">
              Sci-Technovation '26
            </h2>
            <p className="text-gray-400 max-w-sm font-medium">
              National Level Technical Festival. Where Technology meets Intelligence. Code Today, Sustain Tomorrow.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm font-medium">
              <p>
                <span className="text-gray-400 block mb-1">Coordinators</span>
                Krish Patel: 7863071099 <br/>
                Drashti Sangdot: 8401707206
              </p>
              <p>
                <span className="text-gray-400 block mb-1">Helpline</span>
                9727745875 / 76 <br/>
                02666-222933 / 34
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-3 text-sm font-medium">
              {QUICK_LINKS.map(l => (
                <a key={l.label} href={l.href} className="hover:text-gray-300 transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="http://www.upluniversity.ac.in" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-colors">
                Official Website ↗
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
          <p>© 2026 Sci-Technovation. All rights reserved.</p>
          <p>UPL University of Sustainable Technology</p>
        </div>
      </div>
    </footer>
  );
}
