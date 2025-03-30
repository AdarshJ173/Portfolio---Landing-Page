
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
              <div className="animate-fade-in">
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

        <div className="mt-10 sm:mt-12 p-4 sm:p-6 bg-navy-50 rounded-lg border border-navy-100">
          <h3 className="text-lg font-medium text-navy-700 mb-2">Education</h3>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div>
              <h4 className="font-bold text-navy-700">Bachelor of Computer Science</h4>
              <p className="text-navy-600">University Name</p>
            </div>
            <div className="text-navy-500 mt-1 sm:mt-0 text-sm sm:text-base">
              2023 - Present (First Year)
            </div>
          </div>
          <p className="mt-3 text-navy-600 text-sm sm:text-base">
            Currently pursuing my degree with a focus on software development, algorithms, 
            and data structures. Actively participating in coding clubs and tech events.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
