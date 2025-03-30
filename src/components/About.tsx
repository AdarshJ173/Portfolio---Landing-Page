
import { Code, Presentation, Brain, Award, Coffee } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { category: 'Programming Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'] },
    { category: 'Web Development', items: ['React', 'Next.js', 'HTML/CSS', 'Tailwind CSS', 'Node.js'] },
    { category: 'Tools & Others', items: ['Git', 'VS Code', 'Docker', 'Figma', 'AWS'] },
  ];

  const education = [
    { 
      degree: 'Bachelor of Computer Science',
      institution: 'University Name',
      period: '2023 - Present',
      description: 'Focusing on software development, algorithms, and data structures with a minor in UI/UX Design.'
    }
  ];

  const interests = [
    'Open Source Contribution', 'UI/UX Design', 'Machine Learning', 
    'Mobile App Development', 'Technical Writing', 'Game Development'
  ];

  return (
    <section id="about" className="section bg-white" ref={sectionRef}>
      <div className="container-custom">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-5 pointer-events-none">
          <div className="absolute transform rotate-45 border-8 border-vibrant-purple rounded-full w-64 h-64 -top-20 -right-20"></div>
          <div className="absolute rounded-full w-32 h-32 bg-vibrant-pink top-40 right-40"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-5 pointer-events-none overflow-hidden">
          <div className="absolute w-96 h-96 bg-vibrant-teal rounded-full blur-3xl -bottom-48 -left-48"></div>
        </div>

        <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-16 relative">
          <div className="md:w-1/2">
            <div className={`flex items-center relative ${isVisible ? 'animate-fade-in-scroll' : 'opacity-0'}`}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-playfair text-foreground">
                <span className="text-vibrant-purple">01.</span> About Me
              </h2>
              <div className="ml-4 h-[1px] w-32 bg-gradient-to-r from-vibrant-purple to-transparent"></div>
            </div>
            
            <div className={`space-y-4 text-foreground/70 ${isVisible ? 'animate-fade-in-scroll delay-100' : 'opacity-0'}`}>
              <p className="relative pl-4 border-l-2 border-vibrant-purple/30">
                I'm a 19-year-old Computer Science student currently in my first year. My journey
                into the world of programming began with a curiosity about how digital experiences
                are created, and it quickly evolved into a deep passion.
              </p>
              <p>
                When I'm not busy coding or attending lectures, I create content about my learning journey
                and tech adventures. I believe in sharing knowledge and documenting progress as a way to
                solidify understanding and help others who are on similar paths.
              </p>
              <p>
                My goal is to become a well-rounded developer who can build beautiful, functional, and
                accessible digital experiences while continuing to learn and grow in this ever-evolving field.
              </p>
            </div>

            {/* Animated stats cards */}
            <div className={`mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 ${isVisible ? 'animate-fade-in-scroll delay-200' : 'opacity-0'}`}>
              {[
                { label: 'Projects', value: '15+' },
                { label: 'Contributions', value: '50+' },
                { label: 'Competitions', value: '5' },
                { label: 'Coffee/day', value: '3', icon: <Coffee size={14} className="ml-1"/> }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-white to-white/70 p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center text-xl font-bold text-vibrant-purple">
                      {stat.value}
                      {stat.icon}
                    </div>
                    <p className="mt-1 text-sm text-foreground/70">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 ${isVisible ? 'animate-fade-in-scroll delay-300' : 'opacity-0'}`}>
              {[
                {
                  icon: <Code className="h-6 w-6 text-white" />,
                  title: 'Developer',
                  description: 'Building web applications with modern technologies',
                  bgColor: 'bg-vibrant-purple'
                },
                {
                  icon: <Presentation className="h-6 w-6 text-white" />,
                  title: 'Content Creator',
                  description: 'Sharing knowledge and experiences through various media',
                  bgColor: 'bg-vibrant-pink'
                },
                {
                  icon: <Brain className="h-6 w-6 text-white" />,
                  title: 'Student',
                  description: 'Constantly learning and expanding my knowledge base',
                  bgColor: 'bg-vibrant-teal'
                },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-vibrant-purple/20 transition-all duration-300 group card-3d"
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`${item.bgColor} p-3 rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <div className={`${isVisible ? 'animate-fade-in-scroll delay-400' : 'opacity-0'}`}>
              {/* Tabbed interface */}
              <div className="flex space-x-1 mb-6 bg-gray-50 p-1 rounded-lg">
                {['skills', 'education', 'interests'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                      activeTab === tab 
                        ? 'bg-white text-vibrant-purple shadow-sm' 
                        : 'text-foreground/60 hover:text-foreground'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <div className="bg-gradient-to-br from-white to-pastel-purple/10 p-8 rounded-lg border border-pastel-purple/20 shadow-sm transition-all animate-fade-in-blur">
                  <h3 className="text-xl font-bold mb-6 text-foreground flex items-center">
                    <Award className="mr-2 text-vibrant-purple" size={20} />
                    My Skills
                  </h3>
                  <div className="space-y-6">
                    {skills.map((skillGroup, index) => (
                      <div key={index} className="fade-in-element" style={{ animationDelay: `${index * 100 + 500}ms` }}>
                        <h4 className="text-md font-medium text-foreground mb-3 flex items-center">
                          <span className="w-2 h-2 rounded-full bg-vibrant-purple mr-2"></span>
                          {skillGroup.category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex} 
                              className="px-3 py-1 bg-white text-foreground/80 text-sm rounded-full shadow-sm border border-vibrant-purple/10 hover:border-vibrant-purple/30 hover:shadow-md transition-all duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Education Tab */}
              {activeTab === 'education' && (
                <div className="bg-gradient-to-br from-white to-pastel-blue/10 p-8 rounded-lg border border-pastel-blue/20 shadow-sm animate-fade-in-blur">
                  <h3 className="text-xl font-bold mb-6 text-foreground flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-vibrant-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    Education
                  </h3>
                  <div className="space-y-6">
                    {education.map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        <h4 className="text-lg font-bold text-foreground">{item.degree}</h4>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-foreground/80">{item.institution}</p>
                          <span className="text-sm bg-vibrant-blue/10 text-vibrant-blue px-2 py-1 rounded-full">
                            {item.period}
                          </span>
                        </div>
                        <p className="mt-3 text-foreground/70">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Interests Tab */}
              {activeTab === 'interests' && (
                <div className="bg-gradient-to-br from-white to-pastel-green/10 p-8 rounded-lg border border-pastel-green/20 shadow-sm animate-fade-in-blur">
                  <h3 className="text-xl font-bold mb-6 text-foreground flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-vibrant-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    Interests & Hobbies
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {interests.map((interest, index) => (
                      <div 
                        key={index} 
                        className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:border-vibrant-green/30 hover:shadow-md transition-all duration-300 flex items-center"
                      >
                        <span className="w-2 h-2 rounded-full bg-vibrant-green mr-2"></span>
                        <span className="text-foreground/80">{interest}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default About;
