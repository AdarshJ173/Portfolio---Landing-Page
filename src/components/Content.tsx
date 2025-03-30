
import { Youtube, Twitch, Twitter } from 'lucide-react';

const contentItems = [
  {
    title: 'Coding Journey Series',
    platform: 'YouTube',
    icon: <Youtube className="h-5 w-5" />,
    description: 'Weekly vlogs documenting my progress learning new programming concepts and technologies.',
    stats: '15K+ views',
    link: '#',
    color: 'bg-red-50 text-red-600'
  },
  {
    title: 'Live Coding Sessions',
    platform: 'Twitch',
    icon: <Twitch className="h-5 w-5" />,
    description: 'Twice-weekly live streams where I build projects and solve coding challenges in real-time.',
    stats: '500+ followers',
    link: '#',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    title: 'Tech Thoughts',
    platform: 'Twitter',
    icon: <Twitter className="h-5 w-5" />,
    description: 'Daily insights, coding tips, and thoughts on the latest in tech and programming.',
    stats: '2K+ followers',
    link: '#',
    color: 'bg-blue-50 text-blue-600'
  }
];

interface ContentCardProps {
  title: string;
  platform: string;
  icon: React.ReactNode;
  description: string;
  stats: string;
  link: string;
  color: string;
}

const ContentCard = ({
  title,
  platform,
  icon,
  description,
  stats,
  link,
  color
}: ContentCardProps) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all">
    <div className="p-4 sm:p-6">
      <div className="flex items-center mb-3 sm:mb-4">
        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${color}`}>
          {icon}
        </div>
        <div className="ml-3">
          <h3 className="text-base sm:text-lg font-bold text-navy-700">{title}</h3>
          <p className="text-navy-500 text-xs sm:text-sm">{platform}</p>
        </div>
      </div>
      <p className="text-navy-600 mb-4 text-sm sm:text-base">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-xs sm:text-sm font-medium text-navy-500">{stats}</span>
        <a
          href={link}
          className="text-teal-500 hover:text-teal-600 text-xs sm:text-sm font-medium tap-target"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit channel →
        </a>
      </div>
    </div>
  </div>
);

const Content = () => {
  return (
    <section id="content" className="section bg-navy-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 font-playfair text-navy-700">
          <span className="text-teal-500">04.</span> Content Creation
        </h2>
        <p className="text-navy-600 mb-6 sm:mb-8 max-w-xl">
          Along with coding, I share my journey and knowledge through various platforms.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {contentItems.map((item, index) => (
            <ContentCard key={index} {...item} />
          ))}
        </div>

        <div className="mt-10 sm:mt-16">
          <h3 className="text-lg font-bold mb-4 sm:mb-6 text-navy-700">Featured Content</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="aspect-video relative rounded-md mb-4 overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <h4 className="text-base sm:text-lg text-navy-700 font-bold mb-1">How I Built My First Web App</h4>
              <p className="text-navy-500 text-xs sm:text-sm mb-2">Published 2 months ago</p>
              <p className="text-navy-600 text-sm sm:text-base">
                A comprehensive walkthrough of my process building a full-stack web application
                from planning to deployment.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="aspect-video relative rounded-md mb-4 overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <h4 className="text-base sm:text-lg text-navy-700 font-bold mb-1">5 Programming Concepts I Wish I Learned Earlier</h4>
              <p className="text-navy-500 text-xs sm:text-sm mb-2">Published 3 weeks ago</p>
              <p className="text-navy-600 text-sm sm:text-base">
                Sharing the programming concepts and practices that significantly improved my
                code quality and development workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
