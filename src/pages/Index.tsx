
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Content from "@/components/Content";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";

const Index = () => {
  // Create refs for all sections to animate them
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
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

    return () => {
      observer.disconnect();
      revealObserver.disconnect();
      fadeUpObserver.disconnect();
      fadeInObserver.disconnect();
      scaleObserver.disconnect();
      blurObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Background blobs with enhanced colors */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div className="blob blob-purple w-[40vw] h-[40vw] top-[-10%] right-[-10%] animate-slow-rotate"></div>
        <div className="blob blob-pink w-[35vw] h-[35vw] top-[40%] left-[-15%] animate-slow-rotate"></div>
        <div className="blob blob-indigo w-[30vw] h-[30vw] bottom-[-10%] right-[20%] animate-slow-rotate"></div>
      </div>
      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Content />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
