import { Youtube, Twitch, Twitter } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

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

interface YouTubeVideo {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    publishedAt: string;
    description: string;
  };
}

const YOUTUBE_API_KEY = 'AIzaSyDoTevzElKvvHTymI92-y5rhkFXY3LST8s';
const CHANNEL_ID = 'UCKyO9n_tcvvbfOyosrSwVtw';

const useYouTubeVideos = (maxResults: number = 12) => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // First, let's verify we can get channel info
        const channelResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
        );
        
        console.log('Channel response:', channelResponse.data);
        
        // Then get the videos
        const videosResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${maxResults}&order=date&type=video&key=${YOUTUBE_API_KEY}`
        );
        
        console.log('Videos response:', videosResponse.data);
        
        if (videosResponse.data.items) {
          setVideos(videosResponse.data.items);
        } else {
          setError('No videos found');
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
        setError(error instanceof Error ? error.message : 'Failed to fetch videos');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [maxResults]);

  return { videos, loading, error };
};

const VideoCard = ({ video }: { video: YouTubeVideo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex-none w-[360px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="relative aspect-video overflow-hidden rounded-xl bg-navy-50">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="mt-4 px-1">
          <p className="text-sm font-medium text-navy-700 line-clamp-2 mb-1.5 group-hover:text-teal-600 transition-colors">
            {video.snippet.title}
          </p>
          <div className="flex items-center gap-2">
            <time className="text-xs text-navy-400 font-mono">
              {new Date(video.snippet.publishedAt).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })}
            </time>
          </div>
        </div>
      </a>
    </div>
  );
};

const VideoSkeleton = () => (
  <div className="flex-none w-[360px] animate-pulse">
    <div className="aspect-video rounded-xl bg-navy-100/50" />
    <div className="mt-4 px-1">
      <div className="h-4 bg-navy-100/50 rounded w-4/5 mb-1.5" />
      <div className="h-3 bg-navy-100/50 rounded w-1/3" />
    </div>
  </div>
);

const YouTubeVideoList = () => {
  const { videos, loading, error } = useYouTubeVideos(12);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (error) {
    return (
      <div className="mt-8 p-6 rounded-xl bg-red-50/50 text-red-600 text-sm">
        Error loading videos: {error}
      </div>
    );
  }

  return (
    <div className="mt-12">
      <h3 className="text-lg font-medium text-navy-800 mb-6">My Youtube Videos</h3>
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-6 scroll-smooth hide-scrollbar -mx-6 px-6"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <VideoSkeleton key={index} />
            ))
          : videos.map((video) => (
              <VideoCard key={video.id.videoId} video={video} />
            ))}
      </div>
    </div>
  );
};

const FeaturedContent = () => {
  const { videos, loading, error } = useYouTubeVideos(2);

  if (error) {
    return (
      <div className="p-6 rounded-xl bg-red-50/50 text-red-600 text-sm">
        Error loading featured videos: {error}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2].map((i) => (
          <div key={i} className="aspect-[16/10] rounded-xl bg-navy-100/50 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {videos.map((video) => (
        <div key={video.id.videoId} className="group">
          <div className="aspect-[16/10] relative rounded-xl overflow-hidden bg-navy-50">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="mt-4">
            <h4 className="text-base font-medium text-navy-700 group-hover:text-teal-600 transition-colors line-clamp-2 mb-1.5">
              {video.snippet.title}
            </h4>
            <time className="text-xs text-navy-400 font-mono block mb-2">
              {new Date(video.snippet.publishedAt).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })}
            </time>
            <p className="text-sm text-navy-600 line-clamp-2">
              {video.snippet.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Content = () => {
  return (
    <section id="content" className="section bg-navy-50/30">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 font-playfair text-navy-800">
          <span className="text-teal-500">04.</span> Content Creation
        </h2>
        <p className="text-navy-600 mb-6 sm:mb-8 max-w-xl">
          Along with coding, I share my journey and knowledge through various platforms.
        </p>

        <YouTubeVideoList />

        <div className="mt-16">
          <h3 className="text-lg font-medium text-navy-800 mb-6">Featured Content</h3>
          <FeaturedContent />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {contentItems.map((item, index) => (
            <ContentCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
