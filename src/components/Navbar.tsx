import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hasLoaded, setHasLoaded] = useState(false);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['about', 'projects', 'experience', 'content', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          } else if (scrollPosition < document.getElementById('about')?.offsetTop || 0) {
            setActiveSection('home');
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    setHasLoaded(true);
    
    // Disable body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Content', href: '#content' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav py-2' : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className={`text-lg sm:text-xl font-bold font-playfair text-foreground relative overflow-hidden ${hasLoaded ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <span className="text-vibrant-purple">{'<'}</span>
            Adarsh
            <span className="text-vibrant-purple">{'/>'}</span>
            
            {/* Animated underscore cursor */}
            <span className="hidden sm:inline-block w-[2px] h-5 ml-1 bg-vibrant-purple animate-pulse"></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <a 
              href="#" 
              className={`nav-link font-medium px-3 lg:px-4 py-2 transition-colors rounded-md ${
                activeSection === 'home' 
                  ? 'text-vibrant-purple bg-vibrant-purple/5' 
                  : 'text-foreground/80 hover:text-vibrant-purple hover:bg-vibrant-purple/5'
              }`}
            >
              Home
            </a>
            
            {menuItems.map((item, index) => (
              <a 
                key={item.label} 
                href={item.href} 
                className={`nav-link font-medium px-3 lg:px-4 py-2 transition-colors rounded-md ${
                  activeSection === item.href.substring(1) 
                    ? 'text-vibrant-purple bg-vibrant-purple/5' 
                    : 'text-foreground/80 hover:text-vibrant-purple hover:bg-vibrant-purple/5'
                } ${hasLoaded ? `animate-fade-in delay-${index * 100 + 100}` : 'opacity-0'}`}
              >
                {item.label}
              </a>
            ))}
            
            {/* Resume button */}
            <a 
              href="https://drive.google.com/file/d/1Ee-AmHm5BOuiebvzCUeElyGuWs4oOw9J/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-2 px-3 lg:px-4 py-2 border border-vibrant-purple text-vibrant-purple rounded-md hover:bg-vibrant-purple/5 transition-all ${hasLoaded ? 'animate-fade-in delay-600' : 'opacity-0'}`}
            >
              Resume
            </a>
          </nav>
          
          {/* Mobile Menu Button - increased tap target */}
          <button 
            className="md:hidden tap-target text-foreground hover:text-vibrant-purple transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - full screen with better transitions */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg shadow-lg animate-fade-in-blur z-50 flex flex-col">
          <div className="container-custom py-2 flex justify-between items-center border-b border-gray-100">
            <a 
              href="#" 
              className="text-lg font-bold font-playfair text-foreground"
            >
              <span className="text-vibrant-purple">{'<'}</span>
              Adarsh
              <span className="text-vibrant-purple">{'/>'}</span>
            </a>
            <button 
              className="tap-target text-foreground hover:text-vibrant-purple transition-colors p-2"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 container-custom flex flex-col justify-center space-y-2">
            <a 
              href="#" 
              className={`block py-3 px-4 text-center rounded-md text-lg ${
                activeSection === 'home' 
                  ? 'text-vibrant-purple bg-vibrant-purple/5' 
                  : 'text-foreground/80'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            
            {menuItems.map((item, index) => (
              <a 
                key={item.label} 
                href={item.href}
                className={`block py-3 px-4 text-center rounded-md text-lg ${
                  activeSection === item.href.substring(1) 
                    ? 'text-vibrant-purple bg-vibrant-purple/5' 
                    : 'text-foreground/80'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="container-custom py-6 border-t border-gray-100">
            <a 
              href="https://drive.google.com/file/d/1Ee-AmHm5BOuiebvzCUeElyGuWs4oOw9J/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 px-4 text-center border border-vibrant-purple text-vibrant-purple rounded-md animate-fade-in w-full sm:w-auto"
              style={{ animationDelay: '250ms' }}
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
