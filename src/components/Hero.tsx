
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Background overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-vibrant-purple/10 to-secondary/5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-vibrant-cyan/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-vibrant-purple/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <p className="text-vibrant-purple font-medium mb-4 animate-fade-in stagger-animation">Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-4 animate-fade-in delay-100">
            <span className="block gradient-text">Stefan.</span>
            <span className="block text-foreground/80 mt-2">I build things for the web.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-8 animate-fade-in delay-200">
            I'm a Computer Science student with a passion for coding and content creation. 
            Currently pursuing my first year and actively building projects that combine technical expertise with creative expression.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in delay-300">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-vibrant-purple text-white font-medium rounded-md hover:bg-vibrant-purple/90 transition-all shadow-md hover:shadow-lg hover:shadow-vibrant-purple/20"
            >
              View my work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border-2 border-foreground/20 text-foreground font-medium rounded-md hover:bg-background/80 hover:border-vibrant-purple/40 transition-all"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-vibrant-purple flex flex-col items-center">
          <span className="sr-only">Scroll down</span>
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
