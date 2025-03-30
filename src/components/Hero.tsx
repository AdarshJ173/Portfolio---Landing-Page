
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  
  useEffect(() => {
    setHasLoaded(true);
  }, []);
  
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-vibrant-purple/5 to-vibrant-pink/5"></div>
        
        {/* Animated blobs */}
        <div className="blob blob-purple w-[40vw] h-[40vw] top-[-10%] right-[-10%] animate-float delay-100"></div>
        <div className="blob blob-pink w-[35vw] h-[35vw] top-[40%] left-[-15%] animate-float delay-300"></div>
        <div className="blob blob-teal w-[25vw] h-[25vw] bottom-[-5%] right-[20%] animate-float delay-500"></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]" 
          style={{
            backgroundImage: 'linear-gradient(#8B5CF6 1px, transparent 1px), linear-gradient(90deg, #8B5CF6 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <p 
            className={`inline-block text-vibrant-purple font-medium mb-4 py-1 px-3 rounded-full border border-vibrant-purple/20 bg-vibrant-purple/5 ${hasLoaded ? 'animate-fade-in' : 'opacity-0'}`}
          >
            Hi, my name is
          </p>
          
          <div className="overflow-hidden mb-4">
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold font-playfair ${hasLoaded ? 'animate-reveal-right' : 'scale-x-0'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="block gradient-text animated-text">Stefan.</span>
              <span className="block text-foreground/80 mt-2 text-outline">I build things for the web.</span>
            </h1>
          </div>
          
          <div className={`relative ${hasLoaded ? 'animate-fade-in-blur delay-300' : 'opacity-0 blur-sm'}`}>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-8">
              I'm a Computer Science student with a passion for coding and content creation. 
              Currently pursuing my first year and actively building projects that combine technical expertise with creative expression.
            </p>
          </div>
          
          <div className={`flex flex-wrap gap-4 ${hasLoaded ? 'animate-fade-in delay-400' : 'opacity-0'}`}>
            <a 
              href="#projects" 
              className="btn-primary group"
            >
              <span>View my work</span>
            </a>
            <a 
              href="#contact" 
              className="btn-outline"
            >
              Contact me
            </a>
          </div>
          
          {/* Animated card highlight */}
          <div className={`mt-16 bg-gradient-to-r from-white/5 to-white/10 p-5 rounded-lg border border-white/10 backdrop-blur-sm shadow-xl animate-float max-w-md ${hasLoaded ? 'animate-fade-in delay-500' : 'opacity-0'}`}>
            <p className="text-sm text-foreground/60 font-medium">CURRENTLY WORKING ON</p>
            <h3 className="text-lg font-medium mt-1 text-foreground/90">Personal Finance Dashboard</h3>
            <div className="flex gap-2 mt-2">
              <span className="px-2 py-0.5 bg-vibrant-purple/10 text-vibrant-purple text-xs rounded-full">React</span>
              <span className="px-2 py-0.5 bg-vibrant-blue/10 text-vibrant-blue text-xs rounded-full">Chart.js</span>
              <span className="px-2 py-0.5 bg-vibrant-teal/10 text-vibrant-teal text-xs rounded-full">Node.js</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-soft">
        <a href="#about" className="flex flex-col items-center group">
          <span className="text-xs text-vibrant-purple/70 mb-2 group-hover:text-vibrant-purple transition-colors">SCROLL DOWN</span>
          <div className="w-8 h-14 border-2 border-vibrant-purple/30 rounded-full flex items-start justify-center p-1.5 overflow-hidden">
            <div className="w-1.5 h-1.5 bg-vibrant-purple rounded-full animate-slide-up"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
