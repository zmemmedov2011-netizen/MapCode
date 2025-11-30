import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, TrendingUp, Calendar, Info, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { TicketBooking } from '../components/TicketBooking';
import regionsData from '../data/azerbaijan-regions.json';
export function RegionDetailPage() {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const region = regionsData.regions.find(r => r.id === id);
  if (!region) {
    return <div className="w-full min-h-screen bg-[#041022] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#E9F0FF] mb-4">
            Bölgə tapılmadı
          </h1>
          <Link to="/regions" className="text-[#1EA3FF] hover:text-[#0E5BB5]">
            Bölgələrə qayıt
          </Link>
        </div>
      </div>;
  }
  return <div className="w-full min-h-screen bg-[#041022]">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img src={region.hero_image} alt={region.region_name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041022] via-[#041022]/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <Link to="/regions" className="inline-flex items-center text-[#B6C7E6] hover:text-[#E9F0FF] mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Geri
            </Link>
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="text-5xl font-bold text-[#E9F0FF] mb-4">
              {region.region_name}
            </motion.h1>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1
          }} className="text-xl text-[#B6C7E6] max-w-3xl">
              {region.short_description}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#071835] rounded-xl p-6 border border-[#0E5BB5]/20">
            <Calendar className="w-8 h-8 text-[#1EA3FF] mb-3" />
            <h3 className="text-[#E9F0FF] font-semibold mb-2">Ən yaxşı vaxt</h3>
            <p className="text-[#B6C7E6]">{region.best_time_to_visit}</p>
          </div>
          <div className="bg-[#071835] rounded-xl p-6 border border-[#0E5BB5]/20">
            <MapPin className="w-8 h-8 text-[#1EA3FF] mb-3" />
            <h3 className="text-[#E9F0FF] font-semibold mb-2">Nəqliyyat</h3>
            <p className="text-[#B6C7E6]">
              {region.transportation.how_to_get_there}
            </p>
          </div>
          <div className="bg-[#071835] rounded-xl p-6 border border-[#0E5BB5]/20">
            <Info className="w-8 h-8 text-[#1EA3FF] mb-3" />
            <h3 className="text-[#E9F0FF] font-semibold mb-2">
              Yol keyfiyyəti
            </h3>
            <p className="text-[#B6C7E6]">
              {region.transportation.road_quality}
            </p>
          </div>
        </div>

        {/* Mountain Routes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#E9F0FF] mb-6">
            Dağ marşrutları
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {region.mountain_routes.map((route, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-[#071835] rounded-xl p-6 border border-[#0E5BB5]/20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#E9F0FF]">
                    {route.route_name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${route.difficulty === 'Asan' ? 'bg-green-500/20 text-green-400' : route.difficulty === 'Orta' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>
                    {route.difficulty}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-[#B6C7E6]">
                    <TrendingUp className="w-4 h-4 mr-2 text-[#1EA3FF]" />
                    {route.length_km} km
                  </div>
                  <div className="flex items-center text-[#B6C7E6]">
                    <Clock className="w-4 h-4 mr-2 text-[#1EA3FF]" />
                    {route.estimated_time_hours} saat
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-[#E9F0FF] font-semibold mb-2 text-sm">
                    Xüsusiyyətlər:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {route.highlights.map((highlight, i) => <span key={i} className="px-2 py-1 bg-[#0B3D91]/30 text-[#1EA3FF] text-xs rounded">
                        {highlight}
                      </span>)}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-[#E9F0FF] font-semibold mb-2 text-sm">
                    Təhlükəsizlik:
                  </h4>
                  <ul className="space-y-1">
                    {route.safety_tips.map((tip, i) => <li key={i} className="text-[#B6C7E6] text-sm flex items-start">
                        <span className="text-[#1EA3FF] mr-2">•</span>
                        {tip}
                      </li>)}
                  </ul>
                </div>

                <TicketBooking itemName={route.route_name} priceAzn={route.ticket_price_azn} type="route" />
              </motion.div>)}
          </div>
        </section>

        {/* Main Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#E9F0FF] mb-6">
            Əsas cazibələr
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {region.main_attractions.map((attraction, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-[#071835] rounded-xl p-6 border border-[#0E5BB5]/20">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-[#E9F0FF]">
                    {attraction.name}
                  </h3>
                  <span className="px-3 py-1 bg-[#0B3D91]/30 text-[#1EA3FF] text-xs rounded-full">
                    {attraction.type}
                  </span>
                </div>
                <p className="text-[#B6C7E6] mb-4">{attraction.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#B6C7E6] text-sm">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    {attraction.recommended_visiting_season}
                  </span>
                  <span className="text-[#1EA3FF] font-bold">
                    {attraction.ticket_price_azn} AZN
                  </span>
                </div>
                <div className="mt-4">
                  <TicketBooking itemName={attraction.name} priceAzn={attraction.ticket_price_azn} type="attraction" />
                </div>
              </motion.div>)}
          </div>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {region.tags.map(tag => <span key={tag} className="px-4 py-2 bg-[#071835] border border-[#0E5BB5]/30 text-[#1EA3FF] rounded-lg text-sm">
              {tag}
            </span>)}
        </div>
      </div>
    </div>;
}