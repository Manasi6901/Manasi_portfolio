import React from 'react';
import { Award } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
          <p className="text-xl text-gray-300">
            Professional development and continuous learning
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white/5 rounded-3xl border border-white/10 p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-blue-600 rounded-2xl">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Automate Linux Potential with GenAI</h3>
                <p className="text-gray-400">Udemy - December 2024</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Advanced automation techniques combining Linux system administration with Generative AI applications.
            </p>
            <a
              href="https://www.udemy.com/certificate/UC-745379f2-6829-4bfa-8658-0587aa835f1c/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-full"
            >
              View Certificate
            </a>
          </div>

          <div className="bg-white/5 rounded-3xl border border-white/10 p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-emerald-600 rounded-2xl">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Mastering Git & GitHub</h3>
                <p className="text-gray-400">Udemy - January 2025</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Comprehensive version control mastery covering advanced Git workflows and GitHub collaboration.
            </p>
            <a
              href="https://www.udemy.com/certificate/UC-737ce394-4cf6-494b-8726-cd3c86eb2008/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-full"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;