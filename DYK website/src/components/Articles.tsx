import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';
const articles = [
{
  id: 1,
  title: 'Ever tried asking ChatGPT or any AI to count to 1,000,000?',
  summary:
  'Exploring how serverless architectures and edge computing are reshaping the IT landscape.',
  author: 'Content Writing Team',
  date: 'Recent',
  image:
  'image4.jpeg',
  link: 'https://medium.com/@acs_usj/8bec51718f6a'
},
{
  id: 2,
  title: 'AI writes code... but can it really think❓',
  summary:
  'It can generate lines… but not always meaning. From syntax to systems, developers are no longer just builders…they are decision-makers. So code can be generated…but vision must be created.',
  author: 'Anushka Rodrigo',
  date: 'Recent',
  image: '/image1.jpeg',
  link: 'https://medium.com/@acs_usj/ai-is-writing-code-so-what-should-developers-do-15878258b7ac'
},
{
  id: 3,
  title: 'Would you text someone you’ve lost… if they could reply❓ ',
  summary:
  'Why "never trust, always verify" has become the golden rule of modern cybersecurity.',
  author: 'Content Writing Team',
  date: 'Recent',
  image:
  'image2.jpeg',
  link: 'https://medium.com/@acs_usj/is-ai-summoning-ghosts-0bda63a3273e'
},
{
  id: 4,
  title: '𝐓𝐡𝐚𝐭 𝐭𝐢𝐧𝐲 “𝐬𝐞𝐞𝐧” 𝐢𝐬𝐧’𝐭 𝐚 𝐬𝐢𝐫𝐞𝐧 🚨',
  summary:
  'Comparing Redux, Zustand, and Context API for building scalable web applications.',
  author: 'Content Writing Team',
  date: 'Recent',
  image:
  'image3.jpeg',
  link: 'https://shorturl.at/I5vGN'
}];

export function Articles() {
  const filteredArticles = articles;
  return (
    <section id="articles" className="py-24 bg-base relative">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/20 border border-primary/30 rounded-xl text-primary shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                <BookOpen size={28} />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-text">
                Article Series
              </h2>
            </div>
            <p className="text-text-muted text-lg leading-relaxed">
              Fact-checked, fine-tuned articles written by undergraduates.
              Enhancing research-oriented writing and exploring current industry
              trends.
            </p>
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          
          <AnimatePresence>
            {filteredArticles.map((article) =>
            <motion.article
              layout
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.95
              }}
              transition={{
                duration: 0.4
              }}
              key={article.id}
              className="group relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 min-h-[30rem]">

                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/65"></div>

                <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-white leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  <div className="mt-5">
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-secondary/20 transition duration-300 hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary/40">
                      Read on Medium
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.article>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <a
            href="https://medium.com/@acs_usj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary/50 text-text px-10 py-4 rounded-full font-bold hover:bg-primary/20 hover:border-primary transition-all duration-300">
            
            View All Articles on Medium
          </a>
        </div>
      </div>
    </section>);

}