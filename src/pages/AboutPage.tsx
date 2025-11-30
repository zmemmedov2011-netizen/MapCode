import React from 'react';
import { Mountain, Users, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
export function AboutPage() {
  return <div className="w-full min-h-screen bg-[#041022] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="text-center mb-16">
          <Mountain className="w-16 h-16 text-[#1EA3FF] mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-[#E9F0FF] mb-4">
            MapCode.az haqqında
          </h1>
          <p className="text-xl text-[#B6C7E6]">
            Azərbaycanın bütün bölgələrini, xüsusilə dağlıq əraziləri kəşf etmək
            üçün rəqəmsal platforma.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.section initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mb-12 bg-[#071835] rounded-2xl p-8 border border-[#0E5BB5]/20">
          <div className="flex items-center mb-4">
            <Target className="w-8 h-8 text-[#1EA3FF] mr-3" />
            <h2 className="text-3xl font-bold text-[#E9F0FF]">Missiyamız</h2>
          </div>
          <p className="text-[#B6C7E6] text-lg leading-relaxed">
            Azərbaycanın təbii gözəlliklərini və dağ marşrutlarını yerli və
            xarici turistlərə tanıtmaq. Biz inanırıq ki, ölkəmizin hər bir
            bölgəsi unikal tarixi, mədəniyyəti və təbiəti ilə kəşf edilməyə
            layiqdir.
          </p>
        </motion.section>

        {/* Coverage Section */}
        <motion.section initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mb-12 bg-[#071835] rounded-2xl p-8 border border-[#0E5BB5]/20">
          <div className="flex items-center mb-4">
            <Mountain className="w-8 h-8 text-[#1EA3FF] mr-3" />
            <h2 className="text-3xl font-bold text-[#E9F0FF]">
              Əhatə dairəmiz
            </h2>
          </div>
          <p className="text-[#B6C7E6] text-lg leading-relaxed mb-6">
            Azərbaycanın 72 bölgəsi, dağ marşrutları, tarixi yerlər və təbii
            cazibələr. Platformamızda siz tapa bilərsiniz:
          </p>
          <ul className="space-y-3">
            {['200+ dağ marşrutu müxtəlif çətinlik səviyyələri ilə', '500+ tarixi və mədəni abidə', 'Hər bölgə üçün ətraflı nəqliyyat məlumatları', 'Onlayn bilet rezervasiya sistemi', 'Təhlükəsizlik məsləhətləri və bələdçi tövsiyələri'].map((item, index) => <li key={index} className="flex items-start text-[#B6C7E6]">
                <span className="text-[#1EA3FF] mr-3 text-xl">•</span>
                <span>{item}</span>
              </li>)}
          </ul>
        </motion.section>

        {/* Contribution Section */}
        <motion.section initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mb-12 bg-[#071835] rounded-2xl p-8 border border-[#0E5BB5]/20">
          <div className="flex items-center mb-4">
            <Heart className="w-8 h-8 text-[#1EA3FF] mr-3" />
            <h2 className="text-3xl font-bold text-[#E9F0FF]">Töhfə ver</h2>
          </div>
          <p className="text-[#B6C7E6] text-lg leading-relaxed mb-6">
            Yeni marşrutlar və ya düzəlişlər təklif etmək üçün əlaqə formasından
            istifadə edin. Sizin töhfəniz platformamızı daha da yaxşılaşdırmağa
            kömək edir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:info@MapCode.az" className="bg-[#1EA3FF] hover:bg-[#0E5BB5] text-[#E9F0FF] font-semibold px-6 py-3 rounded-lg transition-all text-center">
              Bizimlə əlaqə
            </a>
            <button className="bg-[#0B3D91]/30 hover:bg-[#0B3D91]/50 text-[#E9F0FF] font-semibold px-6 py-3 rounded-lg border border-[#0E5BB5]/30 transition-all">
              GitHub-da töhfə ver
            </button>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="bg-[#071835] rounded-2xl p-8 border border-[#0E5BB5]/20">
          <div className="flex items-center mb-6">
            <Users className="w-8 h-8 text-[#1EA3FF] mr-3" />
            <h2 className="text-3xl font-bold text-[#E9F0FF]">Komandamız</h2>
          </div>
          <p className="text-[#B6C7E6] text-lg leading-relaxed">
            MapCode.az təbiət həvəskarları, proqramçılar və turizm
            mütəxəssislərindən ibarət komanda tərəfindən yaradılıb və idarə
            olunur. Məqsədimiz Azərbaycanın gözəlliklərini dünyaya tanıtmaqdır.
          </p>
        </motion.section>
      </div>
    </div>;
}