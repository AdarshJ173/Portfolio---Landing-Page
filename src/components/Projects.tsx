
import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const projects: Project[] = [
    {
      title: "Personal Finance Dashboard",
      description: "A comprehensive dashboard for tracking personal finances, expenses, and investments with data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format",
      tags: ["React", "Chart.js", "Node.js", "MongoDB"],
      demoUrl: "#",
      repoUrl: "#",
      featured: true,
    },
    {
      title: "Social Media API",
      description: "RESTful API designed for a social media platform with authentication, posts, comments, and likes functionality.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format",
      tags: ["Express.js", "MongoDB", "JWT", "REST API"],
      repoUrl: "#",
      featured: true,
    },
    {
      title: "E-commerce Storefront",
      description: "A modern e-commerce storefront with product listings, cart functionality, and checkout process.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format",
      tags: ["Next.js", "Tailwind CSS", "Stripe", "Prisma"],
      demoUrl: "#",
      repoUrl: "#",
      featured: false,
    },
    {
      title: "Weather Forecast App",
      description: "App that provides real-time weather forecasts based on user location or search.",
      image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=2075&auto=format",
      tags: ["React", "OpenWeather API", "Geolocation"],
      demoUrl: "#",
      featured: false,
    },
    {
      title: "Markdown Note Editor",
      description: "A simple yet powerful markdown editor with preview functionality and local storage.",
      image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=2070&auto=format",
      tags: ["React", "Marked.js", "LocalStorage"],
      demoUrl: "#",
      repoUrl: "#",
      featured: true,
    },
    {
      title: "Task Management System",
      description: "A collaborative task management system with real-time updates and team functionality.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format",
      tags: ["Vue.js", "Firebase", "Vuetify"],
      demoUrl: "#",
      featured: false,
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

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
            onClick={() => setFilter('featured')}
            className={`mr-4 pb-2 whitespace-nowrap ${filter === 'featured' ? 'border-b-2 border-teal-500 text-navy-700 font-medium' : 'text-navy-500'}`}
          >
            Featured
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
                  
                  <span className="text-navy-400 text-xs sm:text-sm font-medium">
                    {project.featured && "Featured"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://github.com" 
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
