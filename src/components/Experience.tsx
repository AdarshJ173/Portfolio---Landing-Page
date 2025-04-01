import { useState } from 'react';
import { Calendar } from 'lucide-react';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 'internship-1',
      company: 'Tech Innovators',
      role: 'Web Development Intern',
      period: 'June 2023 - August 2023',
      description: [
        'Developed and maintained code for client websites primarily using HTML, CSS, JavaScript, and React',
        'Collaborated with designers to implement responsive designs',
        'Assisted in optimizing site performance and fixing bugs',
        'Participated in code reviews and team meetings'
      ],
      technologies: ['React', 'JavaScript', 'CSS', 'Git']
    },
    {
      id: 'freelance',
      company: 'Freelance Projects',
      role: 'Web Developer',
      period: 'January 2023 - Present',
      description: [
        'Built custom websites for small businesses and individuals',
        'Designed and implemented UI/UX for client projects',
        'Maintained ongoing relationships with clients for website updates and improvements',
        'Handled project management and client communications'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'WordPress', 'Figma']
    },
    {
      id: 'hackathon',
      company: 'University Hackathon',
      role: 'Team Lead',
      period: 'November 2023',
      description: [
        'Led a team of 4 in developing a web application for environmental sustainability',
        'Architected the application structure and delegated tasks',
        'Presented the final product to judges and audience',
        'Won third place among 25 participating teams'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Firebase']
    }
  ];

  const [activeTab, setActiveTab] = useState(experiences[0].id);

  const activeExperience = experiences.find(exp => exp.id === activeTab);

  return (
    <section id="experience" className="section bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 font-playfair text-navy-700">
          <span className="text-teal-500">03.</span> Experience
        </h2>
        <p className="text-navy-600 mb-6 sm:mb-8 max-w-xl">
          My professional journey and relevant experience in the tech world.
        </p>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Tabs for larger screens */}
          <div className="hidden md:block md:w-1/4 border-l-2 border-navy-100">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={`block w-full text-left px-4 py-3 transition-colors ${
                  activeTab === exp.id
                    ? 'border-l-2 border-teal-500 text-teal-500 -ml-0.5'
                    : 'text-navy-600 hover:bg-navy-50'
                }`}
              >
                {exp.company}
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
              {experiences.map((exp) => (
                <option key={exp.id} value={exp.id}>
                  {exp.company} - {exp.role}
                </option>
              ))}
            </select>
          </div>

          {/* Content */}
          <div className="md:w-3/4">
            {activeExperience && (
              <div>
                <h3 className="text-xl font-bold text-navy-700">
                  {activeExperience.role}{' '}
                  <span className="text-teal-500">@ {activeExperience.company}</span>
                </h3>
                
                <div className="flex items-center text-navy-500 mt-1 mb-4">
                  <Calendar size={16} className="mr-1 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{activeExperience.period}</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {activeExperience.description.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1 flex-shrink-0">▹</span>
                      <span className="text-navy-600 text-sm sm:text-base">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {activeExperience.technologies.map((tech, idx) => (
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
