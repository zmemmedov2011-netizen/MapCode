import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, MapPin, Compass, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { RegionCard } from '../components/RegionCard';
import regionsData from '../data/azerbaijan-regions.json';
export function HomePage() {
  const featuredRegions = regionsData.regions.slice(0, 6);
  return <div className="w-full min-h-screen bg-[#041022]">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop" alt="Azerbaijan Mountains" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#041022]/70 via-[#041022]/50 to-[#041022]" />
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{
          scale: 0
        }} animate={{
          scale: 1
        }} transition={{
          delay: 0.2,
          type: 'spring',
          stiffness: 200
        }} className="inline-flex items-center justify-center w-20 h-20 bg-[#1EA3FF]/20 rounded-full mb-6">
            <Mountain className="w-10 h-10 text-[#1EA3FF]" />
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-[#E9F0FF] mb-6">
            Azərbaycanın dağlarını
            <span className="block text-[#1EA3FF]">kəşf edin</span>
          </h1>

          <p className="text-xl text-[#B6C7E6] mb-8 max-w-2xl mx-auto">
            72 bölgə, yüzlərlə dağ marşrutu və tarixi yerlər. Macəranız burada
            başlayır.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/regions" className="bg-[#1EA3FF] hover:bg-[#0E5BB5] text-[#E9F0FF] font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#1EA3FF]/30 inline-flex items-center justify-center">
              <Compass className="w-5 h-5 mr-2" />
              Bölgələri kəşf et
            </Link>
            <Link to="/about" className="bg-[#071835] hover:bg-[#0B3D91] text-[#E9F0FF] font-semibold px-8 py-4 rounded-lg border border-[#0E5BB5]/30 transition-all duration-300 inline-flex items-center justify-center">
              Ətraflı məlumat
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#071835]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            number: '72',
            label: 'Bölgə',
            icon: MapPin
          }, {
            number: '200+',
            label: 'Dağ marşrutu',
            icon: Mountain
          }, {
            number: '500+',
            label: 'Tarixi yer',
            icon: Compass
          }].map((stat, index) => <motion.div key={stat.label} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="text-center">
                <stat.icon className="w-12 h-12 text-[#1EA3FF] mx-auto mb-4" />
                <div className="text-4xl font-bold text-[#E9F0FF] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#B6C7E6]">{stat.label}</div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Featured Regions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#E9F0FF] mb-4">
              Populyar bölgələr
            </h2>
            <p className="text-[#B6C7E6] text-lg">
              Ən çox ziyarət edilən dağlıq ərazilərimiz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRegions.map((region, index) => <RegionCard key={region.id} id={region.id} name={region.region_name} description={region.short_description} image={region.image} tags={region.tags} bestTime={region.best_time_to_visit} index={index} />)}
          </div>

          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} className="text-center mt-12">
            <Link to="/regions" className="inline-flex items-center text-[#1EA3FF] hover:text-[#0E5BB5] font-semibold transition-colors">
              Bütün bölgələrə bax
              <TrendingUp className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0B3D91] to-[#0E5BB5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }}>
            <h2 className="text-4xl font-bold text-[#E9F0FF] mb-6">
              Macəranıza hazırsınız?
            </h2>
            <p className="text-[#B6C7E6] text-lg mb-8">
              İndi rezervasiya edin və Azərbaycanın ən gözəl dağ marşrutlarını
              kəşf edin.
            </p>
            <Link to="/regions" className="bg-[#E9F0FF] hover:bg-white text-[#0B3D91] font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl inline-flex items-center">
              <Mountain className="w-5 h-5 mr-2" />
              İndi başla
            </Link>
          </motion.div>
        </div>
      </section>
    </div>;
}