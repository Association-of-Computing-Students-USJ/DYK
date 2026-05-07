import { Mail } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-[#0A0418] text-text pt-20 pb-10 border-t border-primary/20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-[0_0_15px_rgba(124,58,237,0.5)] group-hover:shadow-[0_0_25px_rgba(255,176,32,0.6)] transition-shadow duration-300">
                <img
                  src="/WhatsApp_Profile.jpg"
                  alt="Logo"
                  className="w-full h-full object-cover" />
                
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl text-text leading-none">
                  DYK <span className="text-secondary">2.0</span>
                </span>
                <span className="font-sans font-semibold text-xs text-text-muted uppercase tracking-widest mt-1.5">
                  ACS USJ
                </span>
              </div>
            </div>
            <p className="text-text-muted max-w-md leading-relaxed mb-8 text-lg">
              "Did You Know? 2.0" by the Association of Computing Students,
              University of Sri Jayewardenepura.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-xl mb-8 text-white">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {['Home', 'The Series', 'Articles', 'Videos'].map((item) =>
              <li key={item}>
                  <a
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="text-text-muted hover:text-secondary transition-colors font-medium">
                  
                    {item}
                  </a>
                </li>
              )}
              <li>
                <a
                  href="https://medium.com/@acs_usj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-secondary transition-colors font-medium">
                  
                  Medium Publication
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-xl mb-8 text-white">
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-text-muted group">
                <div className="p-2 bg-elevated rounded-lg border border-primary/20 group-hover:border-secondary/50 transition-colors">
                  <Mail size={20} className="text-secondary" />
                </div>
                <span className="mt-1.5 font-medium">acs@sjp.ac.lk</span>
              </li>
              <li className="text-text-muted leading-relaxed">
                Association of Computing Students
                <br />
                Faculty of Computing
                <br />
                University of Sri Jayewardenepura
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm text-center md:text-left font-medium">
            &copy; {new Date().getFullYear()} Association of Computing Students
            USJ.
          </p>
        </div>
      </div>
    </footer>);

}