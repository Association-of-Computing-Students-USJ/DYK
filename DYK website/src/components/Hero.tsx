import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, PlayCircle, ChevronDown } from 'lucide-react';
import { Sparkle } from './Sparkle';
const facts = [
'The first computer bug was an actual moth found in 1947.',
"90% of the world's data was generated in the last 2 years.",
'The first 1GB hard drive weighed over 500 pounds.',
'The term "Artificial Intelligence" was coined in 1956.',
'There are over 700 programming languages in use today.'];

export function Hero() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev: number) => (prev + 1) % facts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative flex items-center justify-center">
      
      {/* Deep Purple Radial Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary-glow/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-primary-deep/80 rounded-full blur-[150px]"></div>
        {/* Subtle noise overlay could go here if needed */}
      </div>

      {/* Floating Background Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <Sparkle
          className="absolute top-1/4 left-1/4 text-primary opacity-50"
          size={32}
          delay={0} />
        
        <Sparkle
          className="absolute top-1/3 right-1/4 text-secondary/30"
          size={24}
          delay={1} />
        
        <Sparkle
          className="absolute bottom-1/4 left-1/3 text-primary/40"
          size={40}
          delay={2} />
        
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
            className="flex flex-col items-center">
            
            {/* Massive Typography mimicking logo */}
            <div className="mb-8 relative inline-block">
              <h1 className="flex flex-col items-center font-display font-black leading-none">
                <span className="text-3xl md:text-5xl text-secondary tracking-widest mb-2">
                  DID YOU
                </span>
                <div className="relative flex items-end">
                  <span className="text-7xl md:text-[140px] text-secondary tracking-tighter drop-shadow-[0_0_30px_rgba(245,166,35,0.3)]">
                    KNOW?
                  </span>
                  <span className="text-2xl md:text-5xl text-secondary ml-2 md:ml-4 mb-2 md:mb-6">
                    2.0
                  </span>

                  {/* Logo Sparkles */}
                  <Sparkle
                    className="absolute -top-4 -right-8 md:-top-8 md:-right-16 text-secondary"
                    size={48}
                    delay={0} />
                  
                  <Sparkle
                    className="absolute top-8 -right-12 md:top-16 md:-right-24 text-secondary"
                    size={32}
                    delay={0.5} />
                  
                </div>
              </h1>
            </div>
          </motion.div>

          <div className="h-24 md:h-16 mb-10 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFactIndex}
                initial={{
                  opacity: 0,
                  y: 10,
                  filter: 'blur(4px)'
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)'
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  filter: 'blur(4px)'
                }}
                transition={{
                  duration: 0.4
                }}
                className="glass-panel px-6 py-3 rounded-2xl border-secondary/30">
                
                <p className="text-lg md:text-xl text-text font-medium italic">
                  "{facts[currentFactIndex]}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.4
            }}
            className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            
            Two series — written articles and short videos — exploring IT &
            technology. We bridge the gap between academic concepts and
            real-world industry developments.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.6
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6">
            
            <a
              href="https://medium.com/@acs_usj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-secondary text-base px-8 py-4 rounded-full font-bold hover:bg-secondary-light transition-all duration-300 shadow-[0_0_30px_rgba(245,166,35,0.3)] hover:shadow-[0_0_40px_rgba(245,166,35,0.5)] hover:-translate-y-1">
              
              Read on Medium
              <ArrowRight size={20} />
            </a>
            <a
              href="#videos"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-primary text-text px-8 py-4 rounded-full font-bold hover:bg-primary/20 transition-all duration-300 hover:-translate-y-1">
              
              <PlayCircle size={20} className="text-secondary" />
              Watch Videos
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted flex flex-col items-center gap-2"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}>
        
        <span className="text-xs font-semibold tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown size={20} />
      </motion.div>
    </section>);

}