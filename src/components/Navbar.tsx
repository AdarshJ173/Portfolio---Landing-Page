
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hasLoaded, setHasLoaded] = useState(false);

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
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        scrolled ? 'glass-nav py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className={`text-xl font-bold font-playfair text-foreground relative overflow-hidden ${hasLoaded ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <span className="text-vibrant-purple">{'<'}</span>
            Stefan
            <span className="text-vibrant-purple">{'/>'}</span>
            
            {/* Animated underscore cursor */}
            <span className="inline-block w-[2px] h-5 ml-1 bg-vibrant-purple animate-pulse"></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <a 
              href="#" 
              className={`nav-link font-medium px-4 py-2 transition-colors rounded-md ${
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
                className={`nav-link font-medium px-4 py-2 transition-colors rounded-md ${
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
              href="#" 
              className={`ml-2 px-4 py-2 border border-vibrant-purple text-vibrant-purple rounded-md hover:bg-vibrant-purple/5 transition-all ${hasLoaded ? 'animate-fade-in delay-600' : 'opacity-0'}`}
            >
              Resume
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground hover:text-vibrant-purple transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - with enhanced animations */}
      {isOpen && (
        <div className="md:hidden glass-nav backdrop-blur-lg bg-white/90 shadow-lg animate-fade-in-blur">
          <div className="container-custom py-4 space-y-1">
            <a 
              href="#" 
              className={`block py-2 px-3 rounded-md ${
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
                className={`block py-2 px-3 rounded-md ${
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
            
            <a 
              href="#" 
              className="block py-2 px-3 mt-4 text-center border border-vibrant-purple text-vibrant-purple rounded-md animate-fade-in"
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
