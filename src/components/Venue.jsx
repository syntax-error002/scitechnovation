import React from 'react';

export default function Venue() {
  return (
    <section id="venue" className="py-24 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        <div className="lg:w-1/3 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-8">
            Venue & <br/> Location.
          </h2>
          <div className="bg-white border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-black mb-4">
              UPL University
            </h3>
            <p className="text-gray-500 font-medium leading-relaxed mb-8">
              Block No. 402/403,<br />
              Ankleshwar-Valia Road,<br />
              Ta: Valia / Jhagadia,<br />
              Dist: Bharuch, Gujarat - 393135
            </p>
            <a
              href="https://maps.google.com/?q=UPL+University"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-black text-white px-6 py-3 text-sm font-bold hover:bg-gray-800 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="lg:w-2/3 border border-gray-200 bg-white p-2">
          <iframe
            title="UPL University"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5!2d73.08!3d21.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be01f0000000001%3A0x1!2sUPL%20University!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="400"
            style={{ border: 0, filter: 'grayscale(1) contrast(1.2)' }}
            allowFullScreen
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}
