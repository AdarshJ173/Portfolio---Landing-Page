
import { useEffect, useRef, useState } from "react";

// Components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Content from "@/components/Content";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Create refs for all sections to animate them
  const sectionsRef = useRef<HTMLElement[]>([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollProgress, setShowScrollProgress] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Handle cursor position - only on desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handlePointerDown = () => setIsPointerDown(true);
    const handlePointerUp = () => setIsPointerDown(false);

    // Handle scroll progress
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
      
      setShowScrollProgress(currentScroll > 100);
    };

    // Animation observer for fade-in animations on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    // Get all section headings to animate
    document.querySelectorAll("section h2").forEach((el) => {
      el.classList.remove("animate-fade-in"); // Remove any initial animation
      observer.observe(el);
    });

    // Enhanced scroll animations for different element types
    const createScrollObserver = (classNames: { base: string, visible: string }, threshold = 0.15) => {
      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(classNames.visible);
            }
          });
        },
        {
          root: null,
          rootMargin: "-10px",
          threshold,
        }
      );
    };

    // Create observers for different animation types
    const fadeUpObserver = createScrollObserver({ base: 'fade-up-element', visible: 'visible' });
    const fadeInObserver = createScrollObserver({ base: 'fade-in-element', visible: 'visible' });
    const scaleObserver = createScrollObserver({ base: 'scale-element', visible: 'visible' }, 0.2);
    const blurObserver = createScrollObserver({ base: 'blur-element', visible: 'visible' });
    
    // Legacy observer for backward compatibility
    const revealObserver = createScrollObserver({ base: 'reveal-element', visible: 'revealed' });

    // Observe all elements with specific animation classes
    document.querySelectorAll(".fade-up-element").forEach((el) => fadeUpObserver.observe(el));
    document.querySelectorAll(".fade-in-element").forEach((el) => fadeInObserver.observe(el));
    document.querySelectorAll(".scale-element").forEach((el) => scaleObserver.observe(el));
    document.querySelectorAll(".blur-element").forEach((el) => blurObserver.observe(el));
    document.querySelectorAll(".reveal-element").forEach((el) => revealObserver.observe(el));

    // Section animations with staggered effects
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target as HTMLElement;
            const sectionIndex = sectionsRef.current.indexOf(section);
            
            // Apply different animation types based on section index (alternating)
            const animationClasses = [
              'animate-fade-in-scroll',
              'animate-scale-in-scroll',
              'animate-fade-in-blur',
              'animate-slide-up'
            ];
            
            // Apply animation class based on section position
            const animationClass = animationClasses[sectionIndex % animationClasses.length];
            section.classList.add(animationClass);
            
            // Add staggered animations to child elements
            const childElements = section.querySelectorAll('.stagger-animation');
            childElements.forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 150 + 200}ms`;
              el.classList.add('animate-fade-in-scroll');
            });
          }
        });
      },
      {
        root: null,
        rootMargin: "-50px",
        threshold: 0.1,
      }
    );

    // Collect and observe all sections
    document.querySelectorAll("section").forEach((section) => {
      const sectionEl = section as HTMLElement;
      sectionsRef.current.push(sectionEl);
      sectionObserver.observe(sectionEl);
    });

    // Only add mouse events on non-mobile devices
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('pointerdown', handlePointerDown);
      window.addEventListener('pointerup', handlePointerUp);
    }
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      observer.disconnect();
      revealObserver.disconnect();
      fadeUpObserver.disconnect();
      fadeInObserver.disconnect();
      scaleObserver.disconnect();
      blurObserver.disconnect();
      sectionObserver.disconnect();
      
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('pointerdown', handlePointerDown);
        window.removeEventListener('pointerup', handlePointerUp);
      }
      
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Background blobs with enhanced colors */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div className="blob blob-purple w-[60vw] sm:w-[40vw] h-[60vw] sm:h-[40vw] top-[-10%] right-[-20%] sm:right-[-10%] animate-blob-morph"></div>
        <div className="blob blob-pink w-[50vw] sm:w-[35vw] h-[50vw] sm:h-[35vw] top-[30%] sm:top-[40%] left-[-20%] sm:left-[-15%] animate-blob-morph" style={{ animationDelay: '2s' }}></div>
        <div className="blob blob-indigo w-[40vw] sm:w-[30vw] h-[40vw] sm:h-[30vw] bottom-[-15%] sm:bottom-[-10%] right-[10%] sm:right-[20%] animate-blob-morph" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Custom cursor effect - only visible on desktop */}
      {!isMobile && (
        <>
          <div 
            className="fixed w-6 h-6 rounded-full border-2 border-vibrant-purple pointer-events-none z-[100] mix-blend-difference hidden md:block"
            style={{ 
              transform: `translate(${cursorPosition.x - 12}px, ${cursorPosition.y - 12}px)`,
              transition: 'transform 0.1s ease-out',
              opacity: 0.7
            }}
          ></div>
          
          {/* Cursor dot */}
          <div 
            className="fixed w-2 h-2 bg-vibrant-purple rounded-full pointer-events-none z-[100] hidden md:block"
            style={{ 
              transform: `translate(${cursorPosition.x - 1}px, ${cursorPosition.y - 1}px)`,
              transition: 'transform 0.05s linear',
              scale: isPointerDown ? '2' : '1'
            }}
          ></div>
        </>
      )}
      
      {/* Scroll progress indicator */}
      {showScrollProgress && (
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[60]">
          <div 
            className="h-full bg-gradient-to-r from-vibrant-purple to-vibrant-pink"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      )}
      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Content />
      <Contact />
      <Footer />
      
      {/* Back to top button - improved for mobile */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 p-3 bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 z-50 tap-target ${
          showScrollProgress ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vibrant-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default Index;
