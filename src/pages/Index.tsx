
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

    // Create and observe animated elements
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        root: null,
        rootMargin: "-10px",
        threshold: 0.15,
      }
    );

    // Observe all elements with reveal-element class
    document.querySelectorAll(".reveal-element").forEach((el) => {
      revealObserver.observe(el);
    });

    // Section animations
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add different animation classes based on section type or position
          if (entry.isIntersecting) {
            const section = entry.target as HTMLElement;
            const index = sectionsRef.current.indexOf(section);
            
            // Apply different animations based on section index (alternating)
            if (index % 2 === 0) {
              section.classList.add("animate-slide-up");
            } else {
              section.classList.add("animate-fade-in");
            }
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
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Background blobs */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div className="blob blob-purple w-[40vw] h-[40vw] top-[-10%] right-[-10%] animate-slow-rotate"></div>
        <div className="blob blob-indigo w-[35vw] h-[35vw] top-[40%] left-[-15%] animate-slow-rotate"></div>
        <div className="blob blob-purple w-[30vw] h-[30vw] bottom-[-10%] right-[20%] animate-slow-rotate"></div>
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
