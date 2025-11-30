import React, { useState } from 'react';
import { Calendar, Users, CreditCard, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
interface TicketBookingProps {
  itemName: string;
  priceAzn: number;
  type: 'route' | 'attraction';
}
export function TicketBooking({
  itemName,
  priceAzn,
  type
}: TicketBookingProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    adults: 1,
    children: 0,
    name: '',
    email: '',
    phone: ''
  });
  const totalPrice = priceAzn * (formData.adults + formData.children * 0.5);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Handle booking submission
      alert('Rezervasiya uğurla tamamlandı!');
      setIsOpen(false);
      setStep(1);
    }
  };
  return <>
      <button onClick={() => setIsOpen(true)} className="w-full bg-[#1EA3FF] hover:bg-[#0E5BB5] text-[#E9F0FF] font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#1EA3FF]/30">
        Bilet al - {priceAzn} AZN
      </button>

      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
            <motion.div initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.9,
          opacity: 0
        }} className="bg-[#071835] rounded-2xl max-w-md w-full p-6 border border-[#0E5BB5]/30" onClick={e => e.stopPropagation()}>
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#E9F0FF] mb-2">
                  Bilet rezervasiyası
                </h2>
                <p className="text-[#B6C7E6] text-sm">{itemName}</p>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map(s => <div key={s} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold transition-all ${step >= s ? 'bg-[#1EA3FF] text-[#E9F0FF]' : 'bg-[#0B3D91]/30 text-[#B6C7E6]'}`}>
                      {step > s ? <Check className="w-5 h-5" /> : s}
                    </div>
                    {s < 3 && <div className={`w-16 h-1 mx-2 transition-all ${step > s ? 'bg-[#1EA3FF]' : 'bg-[#0B3D91]/30'}`} />}
                  </div>)}
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Date & Guests */}
                {step === 1 && <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} className="space-y-4">
                    <div>
                      <label className="block text-[#E9F0FF] text-sm font-medium mb-2">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Tarix seçin
                      </label>
                      <input type="date" required value={formData.date} onChange={e => setFormData({
                  ...formData,
                  date: e.target.value
                })} className="w-full bg-[#0B3D91]/30 border border-[#0E5BB5]/30 rounded-lg px-4 py-3 text-[#E9F0FF] focus:outline-none focus:border-[#1EA3FF]" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#E9F0FF] text-sm font-medium mb-2">
                          <Users className="w-4 h-4 inline mr-2" />
                          Böyüklər
                        </label>
                        <input type="number" min="1" required value={formData.adults} onChange={e => setFormData({
                    ...formData,
                    adults: parseInt(e.target.value)
                  })} className="w-full bg-[#0B3D91]/30 border border-[#0E5BB5]/30 rounded-lg px-4 py-3 text-[#E9F0FF] focus:outline-none focus:border-[#1EA3FF]" />
                      </div>
                      <div>
                        <label className="block text-[#E9F0FF] text-sm font-medium mb-2">
                          Uşaqlar
                        </label>
                        <input type="number" min="0" value={formData.children} onChange={e => setFormData({
                    ...formData,
                    children: parseInt(e.target.value)
                  })} className="w-full bg-[#0B3D91]/30 border border-[#0E5BB5]/30 rounded-lg px-4 py-3 text-[#E9F0FF] focus:outline-none focus:border-[#1EA3FF]" />
                      </div>
                    </div>
                  </motion.div>}

                {/* Step 2: Contact Info */}
                {step === 2 && <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} className="space-y-4">
                    <div>
                      <label className="block text-[#E9F0FF] text-sm font-medium mb-2">
                        Ad Soyad
                      </label>
                      <input type="text" required value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="w-full bg-[#0B3D91]/30 border border-[#0E5BB5]/30 rounded-lg px-4 py-3 text-[#E9F0FF] focus:outline-none focus:border-[#1EA3FF]" />
                    </div>
                    <div>
                      <label className="block text-[#E9F0FF] text-sm font-medium mb-2">
                        Email
                      </label>
                      <input type="email" required value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} className="w-full bg-[#0B3D91]/30 border border-[#0E5BB5]/30 rounded-lg px-4 py-3 text-[#E9F0FF] focus:outline-none focus:border-[#1EA3FF]" />
                    </div>
                    <div>
                      <label className="block text-[#E9F0FF] text-sm font-medium mb-2">
                        Telefon
                      </label>
                      <input type="tel" required value={formData.phone} onChange={e => setFormData({
                  ...formData,
                  phone: e.target.value
                })} className="w-full bg-[#0B3D91]/30 border border-[#0E5BB5]/30 rounded-lg px-4 py-3 text-[#E9F0FF] focus:outline-none focus:border-[#1EA3FF]" />
                    </div>
                  </motion.div>}

                {/* Step 3: Payment */}
                {step === 3 && <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} className="space-y-4">
                    <div className="bg-[#0B3D91]/30 rounded-lg p-4 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[#B6C7E6]">
                          Böyüklər ({formData.adults})
                        </span>
                        <span className="text-[#E9F0FF] font-semibold">
                          {priceAzn * formData.adults} AZN
                        </span>
                      </div>
                      {formData.children > 0 && <div className="flex justify-between items-center mb-2">
                          <span className="text-[#B6C7E6]">
                            Uşaqlar ({formData.children})
                          </span>
                          <span className="text-[#E9F0FF] font-semibold">
                            {priceAzn * formData.children * 0.5} AZN
                          </span>
                        </div>}
                      <div className="border-t border-[#0E5BB5]/30 mt-2 pt-2 flex justify-between items-center">
                        <span className="text-[#E9F0FF] font-bold">Cəmi</span>
                        <span className="text-[#1EA3FF] font-bold text-xl">
                          {totalPrice} AZN
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#E9F0FF] text-sm font-medium mb-2">
                        <CreditCard className="w-4 h-4 inline mr-2" />
                        Ödəniş üsulu
                      </label>
                      <select className="w-full bg-[#0B3D91]/30 border border-[#0E5BB5]/30 rounded-lg px-4 py-3 text-[#E9F0FF] focus:outline-none focus:border-[#1EA3FF]">
                        <option>Bank kartı</option>
                        <option>Nağd ödəniş</option>
                        <option>Onlayn ödəniş</option>
                      </select>
                    </div>
                  </motion.div>}

                {/* Actions */}
                <div className="flex space-x-3 mt-6">
                  {step > 1 && <button type="button" onClick={() => setStep(step - 1)} className="flex-1 bg-[#0B3D91]/30 hover:bg-[#0B3D91]/50 text-[#E9F0FF] font-medium py-3 px-6 rounded-lg transition-all">
                      Geri
                    </button>}
                  <button type="submit" className="flex-1 bg-[#1EA3FF] hover:bg-[#0E5BB5] text-[#E9F0FF] font-semibold py-3 px-6 rounded-lg transition-all">
                    {step === 3 ? 'Təsdiqlə' : 'Növbəti'}
                  </button>
                </div>
              </form>

              {/* Close Button */}
              <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-[#B6C7E6] hover:text-[#E9F0FF] transition-colors">
                ✕
              </button>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </>;
}