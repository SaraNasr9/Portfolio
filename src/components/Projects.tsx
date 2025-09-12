import React from 'react';
import { ExternalLink, CheckCircle, Clock } from 'lucide-react';

const Projects = () => {
  const completedProjects = [
    {
      title: "Hotel Booking System",
      description: "SQL Server project for managing hotel rooms, customers, and bookings.",
      link: "https://saranasr9.github.io/Website-Hotel-Booking/",
      status: "completed"
    },
    {
      title: "Bug Tracking System",
      description: "Small system to manage bugs/tickets with SQL + testing use cases.",
      link: "https://drive.google.com/drive/folders/1RlIsISpQ2clARRV3f2txTZPrHHLvzlHQ?usp=sharing",
      status: "completed"
    }
  ];

  const inProgressProjects = [
    {
      title: "Automation Testing Portfolio",
      description: "Practicing Selenium & Postman for automated test cases.",
      status: "in-progress"
    },
    {
      title: "E-Library Management System",
      description: "SQL Server project to handle books, users, and transactions.",
      status: "in-progress"
    },
    {
      title: "Portfolio Improvement",
      description: "Continuously adding new test cases, scripts, and database queries.",
      status: "in-progress"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto"></div>
        </div>

        {/* Completed Projects */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-800">Completed Projects</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {completedProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-green-500"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-rose-600 hover:text-rose-700 font-semibold transition-colors"
                >
                  View Project <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* In Progress Projects */}
        <div>
          <div className="flex items-center mb-8">
            <Clock className="w-8 h-8 text-orange-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-800">In Progress Projects</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {inProgressProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h4>
                <p className="text-gray-600">{project.description}</p>
                <div className="mt-4 flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
                  </div>
                  <span className="ml-3 text-sm text-gray-600">60%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
