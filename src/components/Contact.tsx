
import { Mail, MapPin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 font-playfair text-navy-700">
          <span className="text-teal-500">05.</span> Get In Touch
        </h2>
        <p className="text-navy-600 mb-12 max-w-xl">
          I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
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
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div className="bg-navy-50 p-8 rounded-lg mb-6">
              <h3 className="text-lg font-bold mb-6 text-navy-700">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-teal-500 mt-0.5 mr-3" />
                  <div>
                    <h4 className="text-navy-700 font-medium">Email</h4>
                    <a href="mailto:stefan@example.com" className="text-navy-600 hover:text-teal-500">
                      stefan@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-teal-500 mt-0.5 mr-3" />
                  <div>
                    <h4 className="text-navy-700 font-medium">Location</h4>
                    <p className="text-navy-600">City, Country</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-navy-700">Open to Opportunities</h3>
              <p className="text-navy-600 mb-4">
                I'm currently looking for internships, freelance projects, and collaboration opportunities.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium"
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
