import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import EventDirectory from './components/EventDirectory';
import Schedule from './components/Schedule';
import Venue from './components/Venue';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg">
      <Navbar />
      <Hero />
      <Highlights />
      <EventDirectory />
      <Schedule />
      <Venue />
      <Gallery />
      <Footer />
      <Chatbot />
    </div>
  );
}
