
import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-700 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-bold font-playfair">
              <span className="text-teal-400">{'<'}</span>
              Stefan
              <span className="text-teal-400">{'/>'}</span>
            </a>
            <p className="mt-2 text-navy-200 max-w-xs">
              A passionate developer and content creator building digital experiences.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-navy-200 hover:text-white transition-colors" aria-label="Github">
                <Github />
              </a>
              <a href="#" className="text-navy-200 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" className="text-navy-200 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href="#" className="text-navy-200 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube />
              </a>
            </div>
            <div className="text-navy-300 text-sm">
              © {currentYear} Stefan. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
