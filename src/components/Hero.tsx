import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-100 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Hi, I'm <span className="text-rose-600 animate-pulse">Sara Nasr</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-gray-700 mb-6 font-medium">
              Software Testing Enthusiast & Database Developer
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              I ensure software quality through testing and database expertise.
            </p>
            
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore My Work
            </button>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 p-2 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-white p-2">
                  <img 
                    src="/public/WhatsApp Image 2025-08-23 at 17.36.35_e0ac18d9.jpg"
                    alt="Sara Nasr"
                    className="w-full h-full rounded-full object-cover shadow-2xl"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-rose-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-rose-300 rounded-full animate-pulse"></div>
            </div>
            
            {/* Languages under photo */}
            <div className="mt-6 text-center">
              <p className="text-lg text-gray-600">🌍 Arabic (Native) | English (Fluent)</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-rose-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;