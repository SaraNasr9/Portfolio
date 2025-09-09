import React from 'react';
import { Award, BookOpen } from 'lucide-react';

const Training = () => {
  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Courses & Training</h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-rose-600">
            <div className="flex items-start">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <Award className="w-8 h-8 text-rose-600" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Software Testing Training Program
                </h3>
                
                <div className="flex items-center mb-4">
                  <BookOpen className="w-5 h-5 text-rose-600 mr-2" />
                  <span className="text-rose-600 font-semibold">
                    Digital Egypt Pioneers Initiative (DEPI), Round 3
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Ministry of Communications and Information Technology (MCIT)
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Successfully completed the comprehensive program with a focus on manual testing, 
                  automation basics, and software quality assurance. The program enhanced my 
                  practical skills in identifying bugs, writing detailed test scenarios, and 
                  ensuring software quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;