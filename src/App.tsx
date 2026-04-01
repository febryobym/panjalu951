/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Menu, Search, Play, Pause, Radio, Tv, ChevronRight, Share2, Heart, MessageSquare, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.log("Playback was prevented. User interaction required.", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const navItems = [
    "Berita",
    "Budaya",
    "Wayang",
    "Religi",
    "Kesehatan",
    "Interaktif"
  ];

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      {/* Header - Dark & Sleek */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-yellow-500/10 rounded-full transition-colors">
            <Menu className="w-6 h-6 text-yellow-400" />
          </button>
          <div className="flex items-center gap-3">
            <img 
              src="https://lh3.googleusercontent.com/d/1_0yNOcohGEA9AyV-j-cMRl70tRsaIGjZ" 
              alt="Radio Panjalu Logo" 
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-yellow-500/10 rounded-full transition-colors">
            <Search className="w-6 h-6 text-yellow-400" />
          </button>
        </div>
      </header>

      {/* Navigation Bar - High Contrast Yellow */}
      <nav className="bg-yellow-400 overflow-x-auto no-scrollbar whitespace-nowrap px-4 py-3">
        <div className="flex gap-8 items-center justify-center">
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href="#" 
              className="text-black font-black text-xs uppercase tracking-widest hover:opacity-60 transition-opacity"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      <main className="p-4 max-w-6xl mx-auto pb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column: News Section */}
        <section className="space-y-6 order-2 md:order-1">
          <div className="flex items-end justify-between border-b border-zinc-800 pb-2">
            <div>
              <h3 className="text-xs font-black text-yellow-400 uppercase tracking-widest">Headline</h3>
              <h2 className="text-xl font-black italic">KABAR PANJALU</h2>
            </div>
            <button className="text-[10px] font-bold text-zinc-500 hover:text-yellow-400 flex items-center gap-1 transition-colors">
              VIEW ALL <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          <div className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-yellow-400/50 transition-all">
            <div className="aspect-video overflow-hidden">
              <img 
                src="https://picsum.photos/seed/panjalu1/800/450" 
                alt="News" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-black text-black bg-yellow-400 px-2 py-0.5 rounded">BUDAYA</span>
                <span className="text-[10px] font-bold text-zinc-500">12 MENIT LALU</span>
              </div>
              <h3 className="text-lg font-black leading-tight text-white group-hover:text-yellow-400 transition-colors">
                Festival Budaya Panjalu Kembali Digelar di Kawasan Wisata Selomangleng
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 py-2">
              <span className="text-[10px] font-black text-yellow-400 uppercase tracking-[0.4em] whitespace-nowrap">NEWS</span>
              <div className="h-[1px] w-full bg-zinc-800" />
            </div>
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-yellow-400/30 transition-all">
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    src={`https://picsum.photos/seed/pj${i}/300/300`} 
                    alt="News" 
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] font-black text-yellow-400 uppercase tracking-widest mb-1">Update</span>
                  <h4 className="font-bold text-sm leading-snug text-zinc-100 line-clamp-2">
                    Laporan Khusus: Menjaga Tradisi Wayang Orang di Era Digital
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Column: Player Section & Health News */}
        <div className="space-y-8 order-1 md:order-2">
          <section className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-900 border-2 border-yellow-400/30 shadow-[0_0_50px_-12px_rgba(250,204,21,0.2)]">
            <audio 
              ref={audioRef} 
              src="http://ics.streamingmurah.com:8130/stream" 
              preload="auto"
            />
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-20" 
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #facc15 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            
            <div className="absolute inset-0 flex flex-col items-center justify-between p-8">
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-black tracking-[0.3em] text-yellow-400 uppercase">Live Now</span>
                </div>
                <div className="flex gap-4">
                  <Share2 className="w-5 h-5 text-zinc-500 hover:text-yellow-400 cursor-pointer transition-colors" />
                  <Heart className="w-5 h-5 text-zinc-500 hover:text-yellow-400 cursor-pointer transition-colors" />
                </div>
              </div>

              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  {/* Visualizer Ring */}
                  <AnimatePresence>
                    {isPlaying && (
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute inset-0 border-2 border-yellow-400 rounded-full"
                      />
                    )}
                  </AnimatePresence>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="relative z-10 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.4)]"
                  >
                    {isPlaying ? (
                      <Pause className="w-12 h-12 text-black fill-current" />
                    ) : (
                      <Play className="w-12 h-12 text-black fill-current ml-1" />
                    )}
                  </motion.button>
                </div>
                
                <div className="text-center">
                  <h2 className="text-2xl font-black italic tracking-tight text-white uppercase">Nang Kene Wae Nang Kene Wae</h2>
                  <p className="text-yellow-400 font-bold text-xs tracking-widest mt-1">PANJALU 95.1 FM</p>
                </div>
              </div>

              {/* Bottom Visualizer Bars */}
              <div className="w-full flex items-end justify-center gap-1 h-12">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: isPlaying ? [8, 32, 12, 40, 16] : 8 }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.05 }}
                    className="w-1.5 bg-yellow-400/40 rounded-full"
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Health News Section */}
          <section className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 py-2">
              <span className="text-[10px] font-black text-yellow-400 uppercase tracking-[0.4em] whitespace-nowrap">KESEHATAN</span>
              <div className="h-[1px] w-full bg-zinc-800" />
            </div>
            </div>
            <div className="flex gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-yellow-400/30 transition-all">
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src="https://picsum.photos/seed/health1/300/300" 
                  alt="Health" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="font-bold text-sm leading-snug text-zinc-100 line-clamp-2">
                  Tips Menjaga Kesehatan Jantung dengan Pola Makan Sehat
                </h4>
                <span className="text-[9px] font-bold text-zinc-500 mt-1 uppercase tracking-tighter">5 Jam Lalu</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Bottom Navigation - Minimalist Dark */}
      <footer className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-zinc-800 px-8 py-4 flex items-center justify-between z-50">
        <button className="flex flex-col items-center gap-1 text-yellow-400">
          <Radio className="w-6 h-6" />
          <span className="text-[9px] font-black uppercase tracking-tighter">Radio</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-600 hover:text-yellow-400 transition-colors">
          <Instagram className="w-6 h-6" />
          <span className="text-[9px] font-black uppercase tracking-tighter">SOSMED</span>
        </button>
        <div className="w-12 h-12 -mt-10 bg-yellow-400 rounded-2xl rotate-45 flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.3)]">
          <Play className="w-6 h-6 text-black -rotate-45 ml-1 fill-current" />
        </div>
        <button className="flex flex-col items-center gap-1 text-zinc-600 hover:text-yellow-400 transition-colors">
          <Search className="w-6 h-6" />
          <span className="text-[9px] font-black uppercase tracking-tighter">Cari</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-600 hover:text-yellow-400 transition-colors">
          <Menu className="w-6 h-6" />
          <span className="text-[9px] font-black uppercase tracking-tighter">Menu</span>
        </button>
      </footer>

      {/* Floating Action Button - Request/Message */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.4)] group"
      >
        <MessageSquare className="w-6 h-6 text-black fill-current" />
        <span className="absolute right-full mr-3 px-3 py-1 bg-zinc-900 text-yellow-400 text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-yellow-400/20">
          Request Lagu
        </span>
      </motion.button>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
