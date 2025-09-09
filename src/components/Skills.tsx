import React from 'react';
import { Code, Database, Bug, FileText, Coffee, Zap, Globe } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Manual Software Testing",
      description: "Test cases, test execution, regression testing",
      color: "rose"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "SQL Server",
      description: "Database design, queries, stored procedures, triggers",
      color: "pink"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Bug Reporting & Tracking",
      description: "Excel, documentation, issue tracking",
      color: "rose"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Microsoft Tools",
      description: "Excel, Word, PowerPoint for documentation & reporting",
      color: "pink"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Java Programming",
      description: "OOP principles, application development",
      color: "rose"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Python Programming",
      description: "Scripting, automation, data processing",
      color: "pink"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Learning Automation",
      description: "Selenium, Postman basics",
      color: "rose"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 ${
                skill.color === 'rose' ? 'border-rose-600' : 'border-pink-600'
              }`}
            >
              <div className={`${skill.color === 'rose' ? 'text-rose-600' : 'text-pink-600'} mb-4`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;