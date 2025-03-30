
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-playfair text-navy-700">
              <span className="text-teal-500">01.</span> About Me
            </h2>
            <div className="space-y-4 text-navy-600">
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
                  icon: <Code className="h-6 w-6 text-teal-500" />,
                  title: 'Developer',
                  description: 'Building web applications with modern technologies',
                },
                {
                  icon: <Presentation className="h-6 w-6 text-teal-500" />,
                  title: 'Content Creator',
                  description: 'Sharing knowledge and experiences through various media',
                },
                {
                  icon: <Brain className="h-6 w-6 text-teal-500" />,
                  title: 'Student',
                  description: 'Constantly learning and expanding my knowledge base',
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex flex-col items-center text-center">
                    {item.icon}
                    <h3 className="mt-3 font-medium text-navy-700">{item.title}</h3>
                    <p className="mt-1 text-sm text-navy-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-navy-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-navy-700">My Skills</h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-md font-medium text-navy-700 mb-2">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="px-3 py-1 bg-white text-navy-600 text-sm rounded-full shadow-sm border border-gray-100"
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
