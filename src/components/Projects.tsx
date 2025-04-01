import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useGithubPinnedRepos } from '../hooks/useGithubPinnedRepos';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
}

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'pinned'>('all');
  const { pinnedRepos } = useGithubPinnedRepos('AdarshJ173');
  
  const projects: Project[] = [
    {
      title: "Vocabify",
      description: "A dynamic app designed to enhance vocabulary through idioms, phrasal verbs, synonyms, and antonyms. Uses spaced repetition with engaging flashcards and quizzes for effective learning.",
      image: "https://images.unsplash.com/photo-1546521343-4eb2c01aa44b?q=80&w=2075&auto=format",
      tags: ["Dart", "Flutter", "Firebase", "Material Design"],
      repoUrl: "https://github.com/AdarshJ173/Vocabify"
    },
    {
      title: "zephyr",
      description: "A C++ project showcasing various algorithms and data structures implementations.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format",
      tags: ["C++", "Data Structures", "Algorithms"],
      repoUrl: "https://github.com/AdarshJ173/zephyr"
    },
    {
      title: "Portfolio---Landing-Page",
      description: "A modern, responsive portfolio website built with Next.js and TypeScript, featuring dynamic GitHub statistics, project showcase, and contact information.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format",
      tags: ["TypeScript", "Next.js", "Tailwind CSS", "React"],
      repoUrl: "https://github.com/AdarshJ173/Portfolio---Landing-Page"
    },
    {
      title: "NutriTech",
      description: "AI-Powered Nutritional App that transforms lives! Enjoy personalized, budget-friendly meals crafted by AI. Connect with vital government schemes effortlessly. Share and discover local recipes.",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format",
      tags: ["TypeScript", "Next.js", "AI", "Nutrition", "Government Schemes"],
      repoUrl: "https://github.com/AdarshJ173/NutriTech"
    },
    {
      title: "ToDo-IT",
      description: "A clean and intuitive todo list application with task management features, built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=2032&auto=format",
      tags: ["HTML", "CSS", "JavaScript", "Local Storage"],
      demoUrl: "https://adarshj173.github.io/ToDo-IT/",
      repoUrl: "https://github.com/AdarshJ173/ToDo-IT"
    },
    {
      title: "CAL-C",
      description: "A user-friendly calculator website that performs basic arithmetic operations with a clean interface and responsive design.",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=1980&auto=format",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://adarshj173.github.io/CAL-C/",
      repoUrl: "https://github.com/AdarshJ173/CAL-C"
    }
  ];

  // Filter projects based on selected tab
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => pinnedRepos.includes(project.title));

  return (
    <section id="projects" className="section bg-navy-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 font-playfair text-navy-700">
          <span className="text-teal-500">02.</span> My Projects
        </h2>
        <p className="text-navy-600 mb-8 max-w-xl">
          A showcase of my recent development work, side projects, and experiments.
        </p>

        <div className="flex mb-8 border-b border-navy-100 overflow-x-auto pb-1 scrollbar-none">
          <button 
            onClick={() => setFilter('all')}
            className={`mr-4 pb-2 whitespace-nowrap ${filter === 'all' ? 'border-b-2 border-teal-500 text-navy-700 font-medium' : 'text-navy-500'}`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter('pinned')}
            className={`mr-4 pb-2 whitespace-nowrap ${filter === 'pinned' ? 'border-b-2 border-teal-500 text-navy-700 font-medium' : 'text-navy-500'}`}
          >
            Pinned
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 sm:hover:-translate-y-2 group"
            >
              <div className="h-40 sm:h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-navy-700">{project.title}</h3>
                <p className="text-navy-600 mb-4 text-sm sm:text-base">{project.description}</p>
                
                <div className="flex flex-wrap mb-4 gap-1 sm:gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 bg-navy-50 text-navy-600 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <div className="space-x-2 sm:space-x-3">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-navy-700 hover:text-teal-500 text-sm sm:text-base tap-target"
                      >
                        <ExternalLink size={16} className="mr-1" /> Demo
                      </a>
                    )}
                    
                    {project.repoUrl && (
                      <a 
                        href={project.repoUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-navy-700 hover:text-teal-500 text-sm sm:text-base tap-target"
                      >
                        <Github size={16} className="mr-1" /> Code
                      </a>
                    )}
                  </div>
                  
                  {pinnedRepos.includes(project.title) && (
                    <span className="text-teal-500 text-xs sm:text-sm font-medium">
                      Pinned
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://github.com/AdarshJ173" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium text-teal-500 hover:text-teal-700 tap-target"
          >
            View more on GitHub <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
