import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
interface RegionCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  bestTime: string;
  index: number;
}
export function RegionCard({
  id,
  name,
  description,
  image,
  tags,
  bestTime,
  index
}: RegionCardProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.4,
    delay: index * 0.1
  }}>
      <Link to={`/region/${id}`} className="group block">
        <div className="bg-[#071835] rounded-xl overflow-hidden border border-[#0E5BB5]/20 hover:border-[#1EA3FF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#1EA3FF]/10">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041022] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-3 left-3 right-3">
              <h3 className="text-xl font-bold text-[#E9F0FF] mb-1">{name}</h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="text-[#B6C7E6] text-sm mb-4 line-clamp-2">
              {description}
            </p>

            {/* Meta Info */}
            <div className="flex items-center space-x-4 mb-4 text-xs text-[#B6C7E6]">
              <div className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-[#1EA3FF]" />
                <span>{bestTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-[#1EA3FF]" />
                <span>Marşrutlar</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map(tag => <span key={tag} className="px-2 py-1 bg-[#0B3D91]/30 text-[#1EA3FF] text-xs rounded-md">
                  {tag}
                </span>)}
            </div>

            {/* CTA */}
            <div className="mt-4 pt-4 border-t border-[#0E5BB5]/20">
              <span className="text-[#1EA3FF] text-sm font-medium group-hover:text-[#E9F0FF] transition-colors flex items-center">
                Ətraflı bax
                <TrendingUp className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>;
}