import { motion } from 'framer-motion';
import { BookOpen, Video } from 'lucide-react';
export function Series() {
  return (
    <section id="series" className="py-24 bg-base relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-4xl md:text-5xl font-display font-bold text-text mb-6">
            
            The <span className="text-gradient">Series</span>
          </motion.h2>
          <motion.div
            initial={{
              scaleX: 0
            }}
            whileInView={{
              scaleX: 1
            }}
            viewport={{
              once: true
            }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full">
          </motion.div>
          <motion.p
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2
            }}
            className="text-text-muted max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            
            Did You Know? 2.0 consists of two main series designed to enhance
            research, writing, and multimedia skills while sharing fascinating
            tech knowledge with the community.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Article Writing Series */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.6
            }}
            className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-primary/30 to-transparent hover:from-secondary/50 transition-all duration-500">
            
            <div className="bg-elevated rounded-[23px] p-8 md:p-10 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-secondary/10 transition-colors duration-500"></div>

              <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mb-8 border border-primary/30 group-hover:border-secondary/50 group-hover:text-secondary transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.2)]">
                <BookOpen size={32} />
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-bold text-text mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-secondary transition-all">
                Article Writing Series
              </h3>

              <p className="text-text-muted leading-relaxed mb-8 text-lg">
                Aimed at improving the writing and reading abilities of students
                across faculties. Any undergraduate interested in writing can
                join to create articles related to IT and Technology.
              </p>
              <ul className="space-y-4 text-text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1 text-xl leading-none">
                    •
                  </span>
                  <span>
                    Fact-checked and fine-tuned by the Content Writing Team
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1 text-xl leading-none">
                    •
                  </span>
                  <span>Published on Medium and ACS social media</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1 text-xl leading-none">
                    •
                  </span>
                  <span>
                    Enhances research-oriented writing and critical thinking
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Short Video Series */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-secondary/30 to-transparent hover:from-primary/50 transition-all duration-500">
            
            <div className="bg-elevated rounded-[23px] p-8 md:p-10 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-colors duration-500"></div>

              <div className="w-16 h-16 bg-secondary/20 text-secondary rounded-2xl flex items-center justify-center mb-8 border border-secondary/30 group-hover:border-primary/50 group-hover:text-primary transition-all duration-300 shadow-[0_0_20px_rgba(245,166,35,0.2)]">
                <Video size={32} />
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-bold text-text mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary transition-all">
                Short Video Series
              </h3>

              <p className="text-text-muted leading-relaxed mb-8 text-lg">
                Addressing the rising demand for short-form media, this series
                presents verified IT facts and current tech news in an engaging,
                concise video format.
              </p>
              <ul className="space-y-4 text-text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1 text-xl leading-none">
                    •
                  </span>
                  <span>Scripted by the Content Writing Team</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1 text-xl leading-none">
                    •
                  </span>
                  <span>Produced by the Video Editing Team</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1 text-xl leading-none">
                    •
                  </span>
                  <span>
                    Bridges the gap between academic concepts and industry
                    developments
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}