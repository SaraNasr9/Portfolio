import React from 'react';
import { Award, Target, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am Sara Nasr, a passionate Software Tester with hands-on experience in manual testing, 
              test case design, and software quality assurance.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I have successfully completed the Software Testing Training Program (Round 3) under the 
              Digital Egypt Pioneers Initiative (DEPI), which strengthened my skills in identifying 
              bugs, writing test scenarios, and ensuring product quality.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In addition, I have practical experience with SQL Server, including designing and managing 
              databases, writing queries, and working on real projects such as a Hotel Booking System.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I am eager to apply my knowledge in real-world projects, contribute to high-quality product 
              delivery, and grow further in both manual and automation testing.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-600 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-3">
                <Award className="w-8 h-8 text-rose-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Certified Tester</h3>
              </div>
              <p className="text-gray-700">DEPI Software Testing Program Graduate</p>
            </div>

            <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-600 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-3">
                <Target className="w-8 h-8 text-pink-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Quality Focused</h3>
              </div>
              <p className="text-gray-700">Dedicated to ensuring software excellence</p>
            </div>

            <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-600 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-3">
                <TrendingUp className="w-8 h-8 text-rose-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Continuous Learning</h3>
              </div>
              <p className="text-gray-700">Always expanding skills in testing & automation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;