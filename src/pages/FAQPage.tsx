import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import regionsData from '../data/azerbaijan-regions.json';
export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = regionsData.ui_components.faq_component.faqs;
  return <div className="w-full min-h-screen bg-[#041022] py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#E9F0FF] mb-4">
            Tez-tez verilən suallar
          </h1>
          <p className="text-[#B6C7E6] text-lg">
            Platformamız haqqında ən çox verilən sualların cavabları
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} className="bg-[#071835] rounded-xl border border-[#0E5BB5]/20 overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left hover:bg-[#0B3D91]/20 transition-colors">
                <span className="text-[#E9F0FF] font-semibold text-lg pr-4">
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 text-[#1EA3FF] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {openIndex === index && <motion.div initial={{
              height: 0,
              opacity: 0
            }} animate={{
              height: 'auto',
              opacity: 1
            }} exit={{
              height: 0,
              opacity: 0
            }} transition={{
              duration: 0.3
            }} className="overflow-hidden">
                    <div className="px-6 pb-6 text-[#B6C7E6] leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>}
              </AnimatePresence>
            </motion.div>)}
        </div>

        {/* Contact CTA */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} className="mt-12 text-center bg-[#071835] rounded-xl p-8 border border-[#0E5BB5]/20">
          <h2 className="text-2xl font-bold text-[#E9F0FF] mb-4">
            Cavabınızı tapa bilmədiniz?
          </h2>
          <p className="text-[#B6C7E6] mb-6">
            Bizimlə əlaqə saxlayın və biz sizə kömək edəcəyik.
          </p>
          <a href="mailto:info@MapCode.az" className="inline-block bg-[#1EA3FF] hover:bg-[#0E5BB5] text-[#E9F0FF] font-semibold px-8 py-3 rounded-lg transition-all">
            Əlaqə saxla
          </a>
        </motion.div>
      </div>
    </div>;
}