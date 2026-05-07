import { motion } from 'framer-motion';
import { Video } from 'lucide-react';
import { Sparkle } from './Sparkle';
const videos = [
{
  id: '/video1.mp4',
  title: 'Every scroll, every like, every share… you’re leaving digital footprints behind',
  description:
  'The algorithm is watching, learning, adapting.It starts to know what you enjoy, what you pause on, what keeps you hooked.But here’s the real question…Are you controlling your phone, or is it quietly learning to control you?'
},
{
  id: '/video2.mp4',
  title: 'Software Project Management is where tech meets leadership',
  description:
  'Using tools like Jira, ClickUp teams stay organized, transparent, and on schedule. With AI-powered insights, this career is evolving like never before.'
}];

export function Videos() {
  return (
    <section id="videos" className="py-24 bg-base relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <Sparkle
        className="absolute top-20 right-20 text-secondary/40"
        size={32}
        delay={0.5} />
      
      <Sparkle
        className="absolute bottom-40 left-10 text-primary/40"
        size={48}
        delay={1.5} />
      

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-3 bg-secondary/10 border border-secondary/30 rounded-xl text-secondary shadow-[0_0_15px_rgba(245,166,35,0.2)]">
              <Video size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text">
              Short Video Series
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Concise, engaging videos based on IT facts and current tech news.
            Scripted by the Content Writing Team and produced by the Video
            Editing Team.
          </p>
        </div>

        <div className="space-y-20 md:space-y-32 max-w-6xl mx-auto">
          {videos.map((video, index) =>
          <motion.div
            key={video.id}
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.8
            }}
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-16 items-center`}>
            
              {/* Video Embed with Gradient Border */}
              <div className="w-full md:w-1/2">
                <div className="relative p-[2px] rounded-[2rem] bg-gradient-to-br from-primary via-primary-deep to-secondary shadow-[0_0_40px_rgba(124,58,237,0.2)] group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
                  <div className="relative pt-[56.25%] rounded-[calc(2rem-2px)] overflow-hidden bg-base">
                    {video.id.endsWith('.mp4') ? (
                      <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src={video.id}
                        controls
                        preload="metadata"
                      />
                    ) : (
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                      </iframe>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block px-4 py-1.5 bg-elevated border border-secondary/30 text-secondary font-bold text-xs uppercase tracking-widest rounded-full shadow-sm">
                  Featured Short
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-text leading-tight">
                  {video.title}
                </h3>
                <p className="text-lg text-text-muted leading-relaxed">
                  {video.description}
                </p>
                <div className="pt-6">
                  <a
                  href={`https://youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-elevated border border-primary text-text px-8 py-4 rounded-full font-bold hover:bg-primary hover:border-primary transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.2)] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:-translate-y-1">
                  
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}