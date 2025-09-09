import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-rose-600">Sara Nasr</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-rose-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-rose-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-rose-600 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-rose-600 transition-colors">Services</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-rose-600 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-rose-600 transition-colors">Contact</button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <button onClick={() => scrollToSection('home')} className="text-left py-2 text-gray-700 hover:text-rose-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 text-gray-700 hover:text-rose-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-left py-2 text-gray-700 hover:text-rose-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('services')} className="text-left py-2 text-gray-700 hover:text-rose-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('projects')} className="text-left py-2 text-gray-700 hover:text-rose-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-gray-700 hover:text-rose-600 transition-colors">Contact</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;