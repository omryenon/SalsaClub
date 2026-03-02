import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  CheckCircle2, 
  Music, 
  Sparkles, 
  Heart, 
  ChevronDown, 
  Instagram, 
  Phone, 
  Play, 
  X,
  Menu,
  ArrowLeft
} from 'lucide-react';
import { content } from './data/content';

// --- Components ---

const Section = ({ id, children, className = "", title }: { id?: string, children: React.ReactNode, className?: string, title?: string }) => (
  <section id={id} className={`py-20 px-6 ${className}`}>
    <div className="max-w-6xl mx-auto">
      {title && (
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 salsa-text-gradient"
        >
          {title}
        </motion.h2>
      )}
      {children}
    </div>
  </section>
);

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = "", 
  href,
  icon: Icon
}: { 
  children: React.ReactNode, 
  onClick?: () => void, 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost',
  className?: string,
  href?: string,
  icon?: any
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md";
  const variants = {
    primary: "salsa-gradient text-white hover:shadow-orange-200",
    secondary: "bg-stone-900 text-white hover:bg-stone-800",
    outline: "border-2 border-orange-500 text-orange-600 hover:bg-orange-50",
    ghost: "text-stone-600 hover:bg-stone-100 shadow-none"
  };

  const buttonContent = (
    <>
      {children}
      {Icon && <Icon size={20} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {buttonContent}
    </button>
  );
};

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
        >
          <button onClick={onClose} className="absolute top-4 left-4 p-2 hover:bg-stone-100 rounded-full transition-colors z-10">
            <X size={24} />
          </button>
          {children}
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

// --- Views ---

const HomeView = ({ 
  setActiveService, 
  setSelectedVideo, 
  formSubmitted, 
  handleFormSubmit 
}: { 
  setActiveService: (s: any) => void, 
  setSelectedVideo: (v: string) => void, 
  formSubmitted: boolean, 
  handleFormSubmit: (e: React.FormEvent) => void 
}) => (
  <>
    {/* Top Section - אודות + תמונה */}
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-50 rounded-bl-[200px] -z-10 opacity-50" />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight mb-6">
            {content.about.title}
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed mb-8 max-w-lg">
            {content.about.text}
          </p>
          <Button href={`https://wa.me/${content.whatsappNumber}`} variant="primary" icon={MessageCircle}>
            {content.about.cta}
          </Button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&q=80&w=800" 
              alt="Salsa Dancing" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>

    {/* 3 Big Buttons - המסלולים */}
    <Section id="services" title={content.services.title} className="bg-white">
      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
        {content.services.items.map((service, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setActiveService(service);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full p-8 md:p-12 rounded-[40px] bg-stone-50 border-2 border-stone-100 hover:border-orange-500 hover:bg-orange-50 transition-all text-right group shadow-sm hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl md:text-4xl font-black mb-2 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                <p className="text-stone-600 text-lg md:text-xl">{service.description}</p>
              </div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-orange-500 shadow-md group-hover:bg-orange-500 group-hover:text-white transition-all">
                <ArrowLeft size={32} className="rotate-180" />
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </Section>

    {/* Studio Details - פירוט על הסטודיו */}
    <Section id="studio" title={(content as any).studioDetails.title} className="bg-stone-50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xl md:text-2xl text-stone-600 leading-relaxed">
          {(content as any).studioDetails.text}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square rounded-3xl overflow-hidden shadow-md">
              <img 
                src={`https://images.unsplash.com/photo-1545959527-3ef9666c770b?auto=format&fit=crop&q=80&w=400&h=400&sig=${i}`} 
                alt={`Studio ${i}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* Videos Section - הרבה סרטונים */}
    <Section id="videos" title="הסרטונים שלנו" className="bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedVideo(`video-${i}`)}
            className="rounded-3xl overflow-hidden shadow-md cursor-pointer relative group aspect-video"
          >
            <img 
              src={`https://picsum.photos/seed/dance-vid-${i}/800/450`} 
              alt={`Video Thumbnail ${i}`} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-500 shadow-lg group-hover:scale-110 transition-transform">
                <Play size={24} fill="currentColor" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>

    {/* Contact Section */}
    <Section id="contact" title="בואי נתחיל לרקוד" className="bg-orange-50">
      <div className="max-w-2xl mx-auto">
        {!formSubmitted ? (
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input required placeholder="שם מלא" type="text" className="w-full px-5 py-3 rounded-2xl border border-stone-200 focus:border-orange-500 outline-none transition-all" />
              <input required placeholder="טלפון" type="tel" className="w-full px-5 py-3 rounded-2xl border border-stone-200 focus:border-orange-500 outline-none transition-all" />
            </div>
            <Button onClick={() => {}} variant="primary" className="w-full py-4 text-lg">
              שלחי לי הודעה
            </Button>
          </form>
        ) : (
          <div className="text-center p-8 bg-emerald-50 rounded-[40px] border border-emerald-100">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">הודעתך נשלחה בהצלחה!</h3>
            <Button href={`https://wa.me/${content.whatsappNumber}`} variant="primary" icon={MessageCircle}>
              דברי איתי בוואטסאפ
            </Button>
          </div>
        )}
      </div>
    </Section>
  </>
);

const ServiceDetailView = ({ 
  activeService, 
  setActiveService, 
  scrollToContact 
}: { 
  activeService: any, 
  setActiveService: (s: any) => void, 
  scrollToContact: () => void 
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen"
  >
    <button 
      onClick={() => setActiveService(null)}
      className="flex items-center gap-2 text-orange-500 font-bold mb-8 hover:gap-4 transition-all"
    >
      <ArrowLeft size={24} />
      חזרה לעמוד הראשי
    </button>
    
    <div className="aspect-video rounded-[40px] overflow-hidden shadow-2xl mb-12">
      <img 
        src={`https://images.unsplash.com/photo-1545959527-3ef9666c770b?auto=format&fit=crop&q=80&w=1200&sig=${activeService.id}`} 
        alt={activeService.title} 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>

    <h1 className="text-4xl md:text-6xl font-black text-stone-900 mb-6">{activeService.title}</h1>
    <p className="text-2xl text-stone-600 leading-relaxed mb-12">
      {activeService.details || activeService.description}
    </p>

    <div className="bg-orange-50 p-8 md:p-12 rounded-[40px] border border-orange-100 mb-12">
      <h3 className="text-2xl font-bold mb-6">מעוניינת בפרטים נוספים?</h3>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button href={`https://wa.me/${content.whatsappNumber}`} variant="primary" icon={MessageCircle}>
          דברי איתי בוואטסאפ
        </Button>
        <Button onClick={() => { setActiveService(null); setTimeout(scrollToContact, 100); }} variant="outline">
          השאירי פרטים בטופס
        </Button>
      </div>
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeService, setActiveService] = useState<any | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen font-sans">
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled || activeService ? 'glass py-3 shadow-md' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-black salsa-text-gradient cursor-pointer" onClick={() => { setActiveService(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            {content.instructorName} Salsa
          </div>

          {!activeService && (
            <nav className="hidden md:flex items-center gap-8">
              {['אודות', 'שירותים', 'הסטודיו', 'סרטונים', 'צור קשר'].map((item, i) => {
                const ids = ['about', 'services', 'studio', 'videos', 'contact'];
                return (
                  <button 
                    key={i} 
                    onClick={() => scrollTo(ids[i])}
                    className="text-sm font-bold text-stone-600 hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </button>
                );
              })}
            </nav>
          )}

          <Button onClick={() => { setActiveService(null); setTimeout(() => scrollTo('contact'), 100); }} variant="primary" className="px-6 py-2 text-sm">
            שיעור ניסיון
          </Button>
        </div>
      </header>

      <main>
        {activeService ? (
          <ServiceDetailView 
            activeService={activeService} 
            setActiveService={setActiveService} 
            scrollToContact={() => scrollTo('contact')} 
          />
        ) : (
          <HomeView 
            setActiveService={setActiveService} 
            setSelectedVideo={setSelectedVideo} 
            formSubmitted={formSubmitted} 
            handleFormSubmit={handleFormSubmit} 
          />
        )}
      </main>

      <footer className="bg-stone-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-right">
            <div className="text-2xl font-black salsa-text-gradient mb-2">{content.instructorName} Salsa</div>
            <p className="text-stone-400 text-sm">© {new Date().getFullYear()} {content.footer.rights}</p>
          </div>
          <div className="flex gap-6">
            <a href={content.instagramUrl} className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              <Instagram size={24} />
            </a>
            <a href={`https://wa.me/${content.whatsappNumber}`} className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </footer>

      <a 
        href={`https://wa.me/${content.whatsappNumber}`}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      <button 
        onClick={() => scrollTo('contact')}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50 bg-stone-900 text-white px-4 py-8 rounded-r-3xl shadow-2xl hover:bg-orange-600 transition-all hidden md:block"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        צור קשר
      </button>

      <Modal isOpen={!!selectedVideo} onClose={() => setSelectedVideo(null)}>
        <div className="aspect-video bg-black flex items-center justify-center">
          <p className="text-white font-bold">Video Player Placeholder</p>
        </div>
      </Modal>
    </div>
  );
}
