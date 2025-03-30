
import { Code, Presentation, Brain } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Programming Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'] },
    { category: 'Web Development', items: ['React', 'Next.js', 'HTML/CSS', 'Tailwind CSS', 'Node.js'] },
    { category: 'Tools & Others', items: ['Git', 'VS Code', 'Docker', 'Figma', 'AWS'] },
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-playfair text-foreground fade-up-element">
              <span className="text-vibrant-purple">01.</span> About Me
            </h2>
            <div className="space-y-4 text-foreground/70 fade-up-element delay-200">
              <p>
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

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: <Code className="h-6 w-6 text-vibrant-purple" />,
                  title: 'Developer',
                  description: 'Building web applications with modern technologies',
                },
                {
                  icon: <Presentation className="h-6 w-6 text-vibrant-purple" />,
                  title: 'Content Creator',
                  description: 'Sharing knowledge and experiences through various media',
                },
                {
                  icon: <Brain className="h-6 w-6 text-vibrant-purple" />,
                  title: 'Student',
                  description: 'Constantly learning and expanding my knowledge base',
                },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-vibrant-purple/20 transition-all duration-300 scale-element delay-300"
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="flex flex-col items-center text-center">
                    {item.icon}
                    <h3 className="mt-3 font-medium text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 fade-up-element delay-400">
            <div className="bg-pastel-purple/20 p-8 rounded-lg border border-pastel-purple/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6 text-foreground">My Skills</h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="fade-in-element" style={{ animationDelay: `${index * 100 + 500}ms` }}>
                    <h4 className="text-md font-medium text-foreground mb-2">{skillGroup.category}</h4>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
