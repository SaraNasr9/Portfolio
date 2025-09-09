import React from 'react';
import { TestTube, FileCheck, Database, Bug, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <TestTube className="w-12 h-12" />,
      title: "Manual Testing",
      description: "Writing and executing detailed test cases, ensuring functionality and usability.",
      color: "rose"
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: "Test Documentation & Reporting",
      description: "Preparing structured test plans and clear bug reports.",
      color: "pink"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Database Management (SQL Server)",
      description: "Designing databases, managing data, and writing advanced queries.",
      color: "rose"
    },
    {
      icon: <Bug className="w-12 h-12" />,
      title: "Bug Tracking & Quality Assurance",
      description: "Identifying, categorizing, and tracking defects to support development teams.",
      color: "pink"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Upcoming Service: Automation Testing",
      description: "Currently learning Selenium & API testing to provide automation solutions.",
      color: "rose",
      upcoming: true
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Services</h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${
                service.color === 'rose' 
                  ? 'from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100' 
                  : 'from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100'
              } p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden`}
            >
              {service.upcoming && (
                <div className="absolute top-4 right-4 bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Coming Soon
                </div>
              )}
              
              <div className={`${service.color === 'rose' ? 'text-rose-600' : 'text-pink-600'} mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;