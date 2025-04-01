import { Mail, MapPin, ExternalLink, Instagram, Github, Twitter, Linkedin } from 'lucide-react';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus('idle');

    const form = e.currentTarget;
    
    try {
      await emailjs.sendForm(
        'service_dfiwqs8', // EmailJS service ID
        'template_jgbfyco', // EmailJS template ID
        form,
        'Ako-iZ2P2z7TSMAsj' // EmailJS public key
      );
      setFormStatus('success');
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 font-playfair text-navy-700">
          <span className="text-teal-500">05.</span> Get In Touch
        </h2>
        <p className="text-navy-600 mb-8 sm:mb-12 max-w-xl">
          I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Your name"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="How can I help you?"
                  required
                  disabled={isLoading}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
                {formStatus === 'success' && (
                  <p className="mt-2 text-green-600 text-sm">Message sent successfully!</p>
                )}
                {formStatus === 'error' && (
                  <p className="mt-2 text-red-600 text-sm">Failed to send message. Please try again.</p>
                )}
              </div>
            </form>
          </div>

          <div className="flex flex-col justify-between gap-6 mt-6 md:mt-0">
            <div className="bg-navy-50 p-6 sm:p-8 rounded-lg">
              <h3 className="text-lg font-bold mb-4 sm:mb-6 text-navy-700">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-navy-700 font-medium">Email</h4>
                    <a 
                      href="mailto:adarshjagannath777@gmail.com" 
                      className="text-navy-600 hover:text-teal-500 break-words"
                    >
                      adarshjagannath777@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-navy-700 font-medium">Location</h4>
                    <p className="text-navy-600">Hyderabad, India</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-navy-700 font-medium mb-2">Social Media</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/AdarshJ173"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy-600 hover:text-teal-500"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://www.instagram.com/a.adarshjagannath_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy-600 hover:text-teal-500"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://twitter.com/codexaaj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy-600 hover:text-teal-500"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/a-adarsh-jagannath-968147243"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy-600 hover:text-teal-500"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-navy-700">Open to Opportunities</h3>
              <p className="text-navy-600 mb-4">
                I'm currently looking for internships, freelance projects, and collaboration opportunities.
              </p>
              <a 
                href="https://drive.google.com/file/d/1Ee-AmHm5BOuiebvzCUeElyGuWs4oOw9J/view?usp=sharing" 
                className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium tap-target"
                target="_blank"
                rel="noopener noreferrer"
              >
                View resume <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
