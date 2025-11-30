import React, { useState } from 'react';
import { RegionCard } from '../components/RegionCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import regionsData from '../data/azerbaijan-regions.json';
const REGIONS_PER_PAGE = 9;
export function RegionsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(regionsData.regions.length / REGIONS_PER_PAGE);
  const startIndex = (currentPage - 1) * REGIONS_PER_PAGE;
  const endIndex = startIndex + REGIONS_PER_PAGE;
  const currentRegions = regionsData.regions.slice(startIndex, endIndex);
  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };
  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };
  return <div className="w-full min-h-screen bg-[#041022]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E9F0FF] mb-4">
            Azərbaycanın Bölgələri
          </h1>
          <p className="text-[#B6C7E6] text-lg">
            {regionsData.regions.length} bölgəni kəşf edin
          </p>
        </motion.div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentRegions.map((region, index) => <RegionCard key={region.id} id={region.id} name={region.region_name} description={region.short_description} image={region.image} tags={region.tags} bestTime={region.best_time_to_visit} index={index} />)}
        </div>

        {/* Pagination */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.3
      }} className="flex items-center justify-center space-x-2">
          {/* Previous Button */}
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={goToPrevious} disabled={currentPage === 1} className={`p-2 rounded-lg border transition-all ${currentPage === 1 ? 'border-[#0E5BB5]/20 text-[#B6C7E6]/30 cursor-not-allowed' : 'border-[#0E5BB5]/30 text-[#1EA3FF] hover:border-[#1EA3FF]/50 hover:bg-[#071835]'}`} aria-label="Əvvəlki səhifə">
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          {/* Page Numbers */}
          <div className="flex items-center space-x-2">
            {Array.from({
            length: totalPages
          }, (_, i) => i + 1).map(page => {
            // Show first page, last page, current page, and pages around current
            const showPage = page === 1 || page === totalPages || page >= currentPage - 1 && page <= currentPage + 1;
            if (!showPage) {
              // Show ellipsis
              if (page === currentPage - 2 || page === currentPage + 2) {
                return <span key={page} className="px-2 text-[#B6C7E6]">
                      ...
                    </span>;
              }
              return null;
            }
            return <motion.button key={page} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} onClick={() => goToPage(page)} className={`min-w-[40px] h-10 px-3 rounded-lg border transition-all font-medium ${currentPage === page ? 'bg-[#1EA3FF] border-[#1EA3FF] text-white' : 'border-[#0E5BB5]/30 text-[#B6C7E6] hover:border-[#1EA3FF]/50 hover:bg-[#071835] hover:text-[#E9F0FF]'}`}>
                  {page}
                </motion.button>;
          })}
          </div>

          {/* Next Button */}
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={goToNext} disabled={currentPage === totalPages} className={`p-2 rounded-lg border transition-all ${currentPage === totalPages ? 'border-[#0E5BB5]/20 text-[#B6C7E6]/30 cursor-not-allowed' : 'border-[#0E5BB5]/30 text-[#1EA3FF] hover:border-[#1EA3FF]/50 hover:bg-[#071835]'}`} aria-label="Növbəti səhifə">
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Page Info */}
        <div className="text-center mt-6 text-[#B6C7E6] text-sm">
          Səhifə {currentPage} / {totalPages} ({startIndex + 1}-
          {Math.min(endIndex, regionsData.regions.length)} /{' '}
          {regionsData.regions.length} bölgə)
        </div>
      </div>
    </div>;
}