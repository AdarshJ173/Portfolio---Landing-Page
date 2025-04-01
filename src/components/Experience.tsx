import { useState } from 'react';
import { Calendar, Code, Layers, Rocket } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  type: string;
  period: string;
  description: string[];
  technologies: string[];
  icon: React.ReactNode;
}

const Experience = () => {
  const personalProjects: ProjectItem[] = [
    {
      id: 'project-1',
      title: 'Personal Portfolio',
      type: 'Web Development',
      period: '2024',
      description: [
        'Designed and built a responsive personal portfolio website from scratch',
        'Implemented modern UI components and animations',
        'Optimized for performance and accessibility',
        'Deployed using modern CI/CD practices'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      icon: <Code className="text-teal-500" size={20} />
    },
    {
      id: 'project-2',
      title: 'Learning Journey',
      type: 'Skill Development',
      period: '2023 - Present',
      description: [
        'Completing comprehensive courses on web development fundamentals',
        'Building small applications to practice concepts learned',
        'Participating in coding challenges to improve problem-solving skills',
        'Exploring new technologies and frameworks through hands-on projects'
      ],
      technologies: ['JavaScript', 'HTML/CSS', 'Git', 'Node.js'],
      icon: <Layers className="text-teal-500" size={20} />
    },
    {
      id: 'project-3',
      title: 'Future Projects',
      type: 'Upcoming Work',
      period: 'Planned',
      description: [
        'Planning to build a full-stack application with user authentication',
        'Exploring mobile app development with React Native',
        'Designing a personal blog to share my learning journey',
        'Contributing to open source projects to gain collaborative experience'
      ],
      technologies: ['React Native', 'MongoDB', 'Express', 'Firebase'],
      icon: <Rocket className="text-teal-500" size={20} />
    }
  ];

  const [activeTab, setActiveTab] = useState(personalProjects[0].id);

  const activeProject = personalProjects.find(proj => proj.id === activeTab);

  return (
    <section id="experience" className="section bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 font-playfair text-navy-700">
          <span className="text-teal-500">03.</span> Projects & Development
        </h2>
        <p className="text-navy-600 mb-6 sm:mb-8 max-w-xl">
          While I'm still building my professional experience, here's a look at what I'm working on and learning.
        </p>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Tabs for larger screens */}
          <div className="hidden md:block md:w-1/4 border-l-2 border-navy-100">
            {personalProjects.map((proj) => (
              <button
                key={proj.id}
                onClick={() => setActiveTab(proj.id)}
                className={`block w-full text-left px-4 py-3 transition-colors ${
                  activeTab === proj.id
                    ? 'border-l-2 border-teal-500 text-teal-500 -ml-0.5'
                    : 'text-navy-600 hover:bg-navy-50'
                }`}
              >
                {proj.title}
              </button>
            ))}
          </div>

          {/* Dropdown for mobile - enhanced for better touch control */}
          <div className="md:hidden mb-6">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full p-3 border border-navy-200 rounded-md bg-white text-navy-700 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              {personalProjects.map((proj) => (
                <option key={proj.id} value={proj.id}>
                  {proj.title} - {proj.type}
                </option>
              ))}
            </select>
          </div>

          {/* Content */}
          <div className="md:w-3/4">
            {activeProject && (
              <div>
                <h3 className="text-xl font-bold text-navy-700 flex items-center">
                  {activeProject.icon}
                  <span className="ml-2">{activeProject.title}</span>{' '}
                  <span className="text-teal-500 ml-2">| {activeProject.type}</span>
                </h3>
                
                <div className="flex items-center text-navy-500 mt-1 mb-4">
                  <Calendar size={16} className="mr-1 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{activeProject.period}</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {activeProject.description.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1 flex-shrink-0">▹</span>
                      <span className="text-navy-600 text-sm sm:text-base">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 text-xs bg-navy-50 text-navy-600 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 sm:mt-12 p-4 sm:p-6 bg-gradient-to-br from-white to-pastel-blue/10 rounded-lg border border-pastel-blue/20 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-foreground flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-vibrant-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            Education
          </h3>
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <h4 className="text-lg font-bold text-foreground">B.Tech in Computer Science Engineering</h4>
              <div className="flex justify-between items-center mt-1">
                <p className="text-foreground/80">Woxsen University, Hyderabad</p>
                <span className="text-sm bg-vibrant-blue/10 text-vibrant-blue px-2 py-1 rounded-full">
                  2024 - 2028
                </span>
              </div>
              <p className="mt-3 text-foreground/70">
                Pursuing CSE at one of India's top-ranked private universities, known for its world-class infrastructure and industry-integrated curriculum. The university's School of Technology is recognized for its cutting-edge research facilities, international collaborations, and exceptional placement record. Learning in an environment that emphasizes practical experience, innovation, and entrepreneurial thinking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
