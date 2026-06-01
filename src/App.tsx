import React, { useState, useEffect } from 'react';
import { 
  Coffee, 
  Menu as MenuIcon, 
  X, 
  ShoppingBag, 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Check, 
  Trash2, 
  Plus, 
  Minus, 
  Sparkles, 
  Instagram, 
  ExternalLink,
  ChevronRight,
  ThumbsUp,
  Sun,
  Moon,
  RotateCcw,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from './data';
import { MenuItem, CartItem, BookingDetails, ToastMessage } from './types';

const playTickSound = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const audioCtx = new AudioContextClass();
    
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.type = 'sine';
    const startTime = audioCtx.currentTime;
    
    // Very quick acoustic high-frequency precision 'tick'
    osc.frequency.setValueAtTime(1400, startTime);
    osc.frequency.exponentialRampToValueAtTime(700, startTime + 0.02);
    
    // Tiny amplitude, extremely short decay to sound elegant and subtle
    gainNode.gain.setValueAtTime(0.012, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.02);
    
    osc.start(startTime);
    osc.stop(startTime + 0.025);
  } catch {
    // Fail silently in unsupported contexts
  }
};

function ColdBrewSimulator() {
  const [progress, setProgress] = useState(78.5);
  const [isAccelerated, setIsAccelerated] = useState(false);
  const [hours, setHours] = useState(14.1);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        const step = isAccelerated ? 3.5 : 0.06;
        let next = p + step;
        if (next >= 100) {
          next = 0;
        }
        const calculatedHours = parseFloat(((next / 100) * 18).toFixed(1));
        setHours(calculatedHours);
        return parseFloat(next.toFixed(1));
      });
    }, 200);
    return () => clearInterval(interval);
  }, [isAccelerated]);

  return (
    <div className="bg-black/25 border-y border-white/5 py-4 px-5 text-left select-none relative overflow-hidden backdrop-blur-sm">
      {/* Background soft ambient glow */}
      <div className="absolute right-0 top-0 w-24 h-24 bg-bronze/5 rounded-full blur-2xl pointer-events-none"></div>
      
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          {/* Pulsing amber brewing dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bronze opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-bronze"></span>
          </span>
          <span className="text-[10px] tracking-[0.15em] text-bronze uppercase font-semibold font-mono">18H Slow Extract Drip</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsAccelerated(!isAccelerated);
          }}
          className="text-[9px] px-2 py-0.5 rounded border border-bronze/20 hover:border-bronze text-slate-400 hover:text-white transition-all bg-white/5 font-mono uppercase tracking-wider cursor-pointer"
          title="Accelerate the 18-hour slow steep process to inspect quality"
        >
          {isAccelerated ? "⚡ Fast Mode" : "🔬 Live Chamber"}
        </button>
      </div>

      <div className="grid grid-cols-12 gap-3 items-center">
        {/* Animated Beaker Icon */}
        <div className="col-span-3 flex justify-center">
          <div className="relative w-10 h-10 border border-white/25 rounded-b-xl rounded-t-sm flex flex-col justify-end p-[2px] overflow-hidden bg-charcoal-dark">
            {/* Neck of beaker */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-1 border-b border-white/20"></div>
            {/* Drip path */}
            <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-[1px] h-4 bg-white/5">
              {/* Dripping drops using framer-motion */}
              <motion.div
                animate={{ y: [0, 18], opacity: [0, 1, 0.8, 0] }}
                transition={{ repeat: Infinity, duration: isAccelerated ? 0.35 : 1.4, ease: "linear" }}
                className="w-1.5 h-1.5 bg-bronze rounded-full"
              />
            </div>
            {/* Liquid inside the beaker */}
            <motion.div 
              style={{ height: `${progress}%` }}
              className="w-full bg-gradient-to-t from-bronze-dark/60 to-bronze/30 rounded-b-lg border-t border-bronze/40"
              animate={isAccelerated ? { y: [0.5, -0.5, 0.5] } : { y: [1, -1, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            {/* Landing ripple */}
            <motion.div
              animate={{ scale: [0.5, 1.5], opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: isAccelerated ? 0.35 : 1.4, delay: 0.8 }}
              className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-1 bg-bronze/30 rounded-full"
            />
          </div>
        </div>

        {/* Detailed Status text + bar */}
        <div className="col-span-9 flex flex-col justify-center">
          <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
            <span>Elapsed: <strong className="text-white font-semibold">{hours} hrs</strong></span>
            <span className="text-bronze font-bold">{progress}%</span>
          </div>
          {/* Progress outer track */}
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-bronze-dark to-bronze rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="text-[9px] text-slate-500 mt-1.5 font-mono tracking-wider flex justify-between items-center">
            <span>STEEP: {progress < 40 ? "INFUSION" : progress < 85 ? "FLAVORING" : "MATURED"}</span>
            <span className="text-bronze-hover animate-pulse font-bold">{isAccelerated ? "SPEED ACTIVE" : "STEEPING..."}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface OrderState {
  orderId: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  status: 'Received' | 'Preparing' | 'Brewing' | 'Ready';
  progress: number;
}

export default function App() {
  // --- States ---
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeOrder, setActiveOrder] = useState<OrderState | null>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('kopikala-active-order');
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  });
  const [isOrderStatusOpen, setIsOrderStatusOpen] = useState(false);
  const [isOrderAccelerated, setIsOrderAccelerated] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'coffee' | 'cold-brew' | 'latte-art'>('all');
  const [bookingFormData, setBookingFormData] = useState<BookingDetails>({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '14:00',
    guests: 2,
    notes: ''
  });
  const [bookingReceipt, setBookingReceipt] = useState<BookingDetails | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('kopikala-theme') as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    localStorage.setItem('kopikala-theme', theme);
  }, [theme]);

  // Persist Active Order tracking details in local storage
  useEffect(() => {
    if (activeOrder) {
      localStorage.setItem('kopikala-active-order', JSON.stringify(activeOrder));
    } else {
      localStorage.removeItem('kopikala-active-order');
    }
  }, [activeOrder]);

  // Simulate active order progress updating in waves
  useEffect(() => {
    if (!activeOrder) return;
    if (activeOrder.progress >= 100) return;

    const interval = setInterval(() => {
      setActiveOrder(prev => {
        if (!prev) return null;
        if (prev.progress >= 100) {
          clearInterval(interval);
          return prev;
        }

        const step = isOrderAccelerated ? 8 : 2;
        const nextProgress = Math.min(prev.progress + step, 100);
        let nextStatus = prev.status;
        
        if (nextProgress < 20) {
          nextStatus = 'Received';
        } else if (nextProgress >= 20 && nextProgress < 55) {
          nextStatus = 'Preparing';
        } else if (nextProgress >= 55 && nextProgress < 90) {
          nextStatus = 'Brewing';
        } else {
          nextStatus = 'Ready';
        }

        if (nextStatus !== prev.status) {
          setTimeout(() => {
            if (nextStatus === 'Preparing') {
              showToast("Pesanan diterima! Barista premium kami mulai meracik profil rasa.", "info");
            } else if (nextStatus === 'Brewing') {
              showToast("Sedang diseduh! Air bersuhu 92°C menetes perlahan untuk ekstraksi sempurna.", "info");
            } else if (nextStatus === 'Ready') {
              showToast("Penyeduhan usai! Kopi Anda siap diambil di counter pelayanan.", "success");
            }
          }, 50);
        }

        return {
          ...prev,
          progress: nextProgress,
          status: nextStatus
        };
      });
    }, isOrderAccelerated ? 300 : 1200);

    return () => clearInterval(interval);
  }, [activeOrder?.orderId, activeOrder === null, isOrderAccelerated]);

  // Track scroll position for header glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toast auto-clearing
  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts(prev => prev.slice(1));
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  // --- Actions ---
  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const newToast: ToastMessage = {
      id: Math.random().toString(36).substring(2, 9),
      message,
      type
    };
    setToasts(prev => [...prev, newToast]);
  };

  const addToCart = (product: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(item => item.menuItem.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.menuItem.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { menuItem: product, quantity: 1 }];
    });
    showToast(`"${product.name}" berhasil ditambahkan ke pesanan!`, 'success');
  };

  const updateQuantity = (productId: number, amount: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.menuItem.id === productId) {
          const newQty = item.quantity + amount;
          if (newQty <= 0) return null;
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter((item): item is CartItem => item !== null);
    });
  };

  const removeFromCart = (productId: number, productName: string) => {
    setCart(prev => prev.filter(item => item.menuItem.id !== productId));
    showToast(`"${productName}" dihapus dari daftar pesanan.`, 'info');
  };

  const cartTotalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const cartSubtotal = cart.reduce((acc, curr) => acc + (curr.menuItem.price * curr.quantity), 0);
  const cartTax = Math.floor(cartSubtotal * 0.1); // PB1 10%
  const cartTotal = cartSubtotal + cartTax;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingReceipt({ ...bookingFormData });
    setIsBookingOpen(false);
    showToast(`Reservasi sukses atas nama ${bookingFormData.name}!`, 'success');
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) {
      showToast("Keranjang Anda kosong!", "error");
      return;
    }

    const itemsCopy = [...cart];
    const sub = cartSubtotal;
    const tax = cartTax;
    const tot = cartTotal;

    let orderMessage = "Halo Kopi Kala Premium! Saya ingin memesan menu-menu berikut:\n\n";
    cart.forEach((item, index) => {
      orderMessage += `${index + 1}. ${item.menuItem.name} (x${item.quantity}) - Rp ${(item.menuItem.price * item.quantity).toLocaleString('id-ID')}\n`;
    });

    orderMessage += `\n*Subtotal:* Rp ${cartSubtotal.toLocaleString('id-ID')}`;
    orderMessage += `\n*Pajak PB1 (10%):* Rp ${cartTax.toLocaleString('id-ID')}`;
    orderMessage += `\n*Total Pembayaran:* *Rp ${cartTotal.toLocaleString('id-ID')}*\n\nMohon dikonfirmasi pesanannya untuk persiapan take-away / dine-in terdekat. Terima kasih!`;

    const encoded = encodeURIComponent(orderMessage);
    const url = `https://wa.me/628123456789?text=${encoded}`;
    
    try {
      window.open(url, '_blank');
    } catch (e) {
      // Fail-safe
    }

    const newId = "KPK-" + Math.floor(1000 + Math.random() * 9000);
    setActiveOrder({
      orderId: newId,
      items: itemsCopy,
      subtotal: sub,
      tax: tax,
      total: tot,
      status: 'Received',
      progress: 0
    });

    setCart([]);
    setIsCartOpen(false);
    setIsOrderStatusOpen(true);
    setIsOrderAccelerated(false);
    showToast(`Pesanan #${newId} dibuat! Memulai pelacakan penyeduhan.`, "success");
  };

  const filteredMenuItems = categoryFilter === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === categoryFilter);

  return (
    <div className="bg-charcoal text-slate-100 font-sans min-h-screen relative flex flex-col selection:bg-bronze selection:text-charcoal-dark overflow-x-hidden">
      
      {/* Symmetrical Minimal Grid Accent Lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/5 pointer-events-none"></div>
      <div className="absolute left-[15%] top-0 bottom-0 w-px bg-white/[0.02] pointer-events-none hidden lg:block"></div>
      <div className="absolute right-[15%] top-0 bottom-0 w-px bg-white/[0.02] pointer-events-none hidden lg:block"></div>

      {/* --- NAVBAR SECTION --- */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transiton-all duration-300 backdrop-blur-md border-b ${
          scrollY > 20 
            ? 'bg-charcoal/95 border-white/10 shadow-lg py-4' 
            : 'bg-charcoal/80 border-white/5 py-6'
        }`}
        id="navbar-element"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 bg-bronze rounded-full"></span>
              <a href="#" className="text-xl font-serif tracking-wider text-white font-bold flex items-center gap-1">
                KOPI<span className="text-bronze font-light">KALA</span>
              </a>
            </div>

            {/* Desktop Navigation links */}
            <nav className="hidden md:flex items-center space-x-10 text-xs font-semibold uppercase tracking-widest text-slate-300">
              <a href="#home" className="hover:text-bronze text-white transition-colors">Home</a>
              <a href="#menu" className="hover:text-white transition-colors">Menu</a>
              <a href="#about" className="hover:text-white transition-colors">Story</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>

            {/* Action buttons (Cart, book table button) */}
            <div className="hidden md:flex items-center gap-5">
              {/* Active Order Tracker Button */}
              {activeOrder && (
                <button 
                  onClick={() => setIsOrderStatusOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-bronze/10 hover:bg-bronze/25 border border-bronze/30 text-bronze hover:text-white transition-all text-[11px] font-bold tracking-wider uppercase cursor-pointer"
                  id="active-order-desktop-trigger"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bronze opacity-80"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-bronze"></span>
                  </span>
                  <span>Lacak Kopi: {activeOrder.status} ({activeOrder.progress}%)</span>
                </button>
              )}

              {/* Theme Toggle Button */}
              <button 
                onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
                className="p-2.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all outline-none cursor-pointer"
                aria-label="Ubah Tema"
                id="theme-toggle-desktop"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-bronze" /> : <Moon className="w-5 h-5 text-bronze" />}
              </button>

              {/* Cart trigger button */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all outline-none"
                aria-label="Keranjang Belanja"
                id="cart-nav-trigger"
              >
                <ShoppingBag className="w-5.5 h-5.5" />
                <AnimatePresence>
                  {cartTotalItems > 0 && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-bronze text-charcoal-dark font-mono text-[10px] font-bold flex items-center justify-center rounded-full"
                    >
                      {cartTotalItems}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-bronze hover:bg-bronze-hover text-charcoal-dark font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full transition-all duration-300 shadow-md transform hover:-translate-y-0.5 cursor-pointer"
                id="cta-nav-button"
              >
                Order Table
              </button>
            </div>

            {/* Mobile Actions block */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Active Mobile Order Tracking Pulse Dot */}
              {activeOrder && (
                <button 
                  onClick={() => setIsOrderStatusOpen(true)}
                  className="p-2.5 rounded-full text-bronze hover:text-white bg-bronze/10 border border-bronze/30 cursor-pointer flex items-center justify-center"
                  aria-label="Lacak Pesanan Mandiri"
                  id="active-order-mobile-trigger"
                >
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bronze opacity-80"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-bronze flex items-center justify-center text-[8px] text-charcoal-dark font-sans font-black">!</span>
                  </span>
                </button>
              )}

              {/* Theme Toggle Button for Mobile */}
              <button 
                onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full text-slate-300 hover:text-white"
                aria-label="Ubah Tema"
                id="theme-toggle-mobile"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-bronze" /> : <Moon className="w-5 h-5 text-bronze" />}
              </button>

              {/* cart button mobile */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-full text-slate-300"
                aria-label="Keranjang"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartTotalItems > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-bronze text-charcoal-dark font-mono text-[9px] font-bold flex items-center justify-center rounded-full">
                    {cartTotalItems}
                  </span>
                )}
              </button>

              {/* Hamburger Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                aria-label="Toggle mobile navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu dropdown slider */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-white/5 bg-charcoal-light/95 backdrop-blur-xl"
              id="mobile-navigation-dropdown"
            >
              <div className="px-5 py-6 space-y-4">
                <a 
                  href="#home" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-white hover:text-bronze transition-colors py-1.5"
                >
                  Home
                </a>
                <a 
                  href="#menu" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-slate-300 hover:text-white transition-colors py-1.5"
                >
                  Menu
                </a>
                <a 
                  href="#about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-slate-300 hover:text-white transition-colors py-1.5"
                >
                  Story
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-slate-300 hover:text-white transition-colors py-1.5"
                >
                  Contact
                </a>
                <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsBookingOpen(true);
                    }}
                    className="w-full bg-bronze text-charcoal-dark font-bold text-center py-4 rounded-full text-xs tracking-widest uppercase"
                  >
                    Book a Table
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* --- 2. HERO SECTION --- */}
      <section id="home" className="relative pt-40 pb-28 md:pt-52 md:pb-40 flex items-center overflow-hidden min-h-[95vh] bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
            
            {/* Header copy details */}
            <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-white leading-[1.1] font-bold">
                Savor Every Sip,<br/>
                Embrace <span className="text-bronze">Kala Aesthetic.</span>
              </h1>

              <p className="text-slate-400 max-w-xl text-base md:text-lg font-light leading-relaxed">
                Kopi Kala memadukan cita rasa kopi artisan berkualitas tinggi dengan atmosfer minimalis nan menenangkan. Setiap cangkir diracik presisi oleh barista berpengalaman untuk menghidupkan harmoni rasa yang mendalam.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                  href="#menu" 
                  className="bg-bronze hover:bg-bronze-hover text-charcoal-dark font-bold text-xs tracking-widest uppercase py-4 px-10 transition-all duration-300 text-center block sm:inline-block"
                >
                  Explore Signature Menu
                </a>
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="border border-white/20 hover:border-bronze hover:text-bronze text-white font-bold text-xs tracking-widest uppercase py-4 px-10 transition-all duration-300 text-center block sm:inline-block cursor-pointer"
                >
                  Book Table
                </button>
              </div>

              {/* Minimal stats row */}
              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5 max-w-lg">
                <div>
                  <p className="text-2xl md:text-3xl font-serif text-white font-bold">100%</p>
                  <p className="text-[10px] text-slate-550 uppercase tracking-widest mt-1 font-semibold">Arabica Beans</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-serif text-white font-bold">85+</p>
                  <p className="text-[10px] text-slate-550 uppercase tracking-widest mt-1 font-semibold">Roast Score</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-serif text-white font-bold">18 Hour</p>
                  <p className="text-[10px] text-slate-550 uppercase tracking-widest mt-1 font-semibold">Slow Cold Brew</p>
                </div>
              </div>
            </div>

            {/* Custom Aesthetic Frame image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[420px] lg:max-w-none group">
                <div className="absolute -inset-px border border-white/10 opacity-30 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-charcoal p-3 border border-white/5">
                  <img 
                    src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=800&auto=format&fit=crop" 
                    alt="Aesthetic hot coffee" 
                    className="w-full h-[320px] md:h-[450px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Floating organic badge stamp */}
                <div className="absolute -bottom-6 -left-6 bg-charcoal border border-white/10 p-4 hidden sm:flex items-center gap-3">
                  <span className="w-10 h-10 bg-bronze/10 flex items-center justify-center text-bronze">
                    <Coffee className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-xs text-white uppercase font-bold tracking-wider">Certified Organic</h4>
                    <p className="text-[10px] text-slate-400">Rainforest Alliance Certified</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 3. MENU SECTION --- */}
      <section id="menu" className="py-24 md:py-36 bg-charcoal-light border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header block */}
          <div className="text-center max-w-xl mx-auto space-y-4 mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-bronze font-bold block">The Signature Lineup</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold">Koleksi Cita Rasa Terbaik Kami</h2>
            <div className="w-12 h-0.5 bg-bronze mx-auto mt-1"></div>
            <p className="text-slate-405 text-sm font-light leading-relaxed">
              Dari citarasa pekat klasik hingga racikan segar unik barista, nikmati sajian terbaik yang dirancang khusus untuk memanjakan lidah Anda.
            </p>
          </div>

          {/* Selector Categories Navigation tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-xl mx-auto">
            {[
              { id: 'all', label: 'Semua' },
              { id: 'coffee', label: 'Hot Coffee' },
              { id: 'cold-brew', label: 'Cold Brews' },
              { id: 'latte-art', label: 'Latte Art' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setCategoryFilter(tab.id as any)}
                className={`px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-350 cursor-pointer ${
                  categoryFilter === tab.id
                    ? 'bg-bronze text-charcoal-dark shadow-md'
                    : 'bg-white/5 text-slate-300 border border-white/5 hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredMenuItems.map(product => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-charcoal-card rounded-xl overflow-hidden border border-white/5 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 hover:border-bronze"
                >
                  <div>
                    {/* Picture visual */}
                    <div className="relative overflow-hidden aspect-[4/3] bg-charcoal">
                      {product.badge && (
                        <span className="absolute top-4 left-4 z-10 bg-bronze/10 border border-bronze/30 text-bronze text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                          {product.badge}
                        </span>
                      )}
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {product.category === 'cold-brew' && (
                      <ColdBrewSimulator />
                    )}
 
                    {/* Specific details info */}
                    <div className="p-6 pb-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-serif text-white font-bold">{product.name}</h3>
                        <div className="flex items-center text-xs text-bronze gap-1 font-semibold">
                          <svg className="w-3.5 h-3.5 fill-current text-bronze" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                          <span>{product.rating}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed font-light">
                        {product.description}
                      </p>
                    </div>
                  </div>
 
                  {/* Add action row footer */}
                  <div className="p-6 pt-3 flex items-center justify-between border-t border-white/5 mt-4">
                    <span className="text-base font-mono text-bronze font-bold">{product.priceFormatted}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      onMouseEnter={playTickSound}
                      className="bg-white/5 hover:bg-bronze hover:text-charcoal-dark border border-white/10 hover:border-bronze text-white text-[11px] font-bold tracking-wider uppercase px-5 py-2.5 rounded-none transition-all duration-300 cursor-pointer"
                    >
                      Add to Order
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
 
        </div>
      </section>
 
      {/* --- 4. ABOUT / STORY / VIBE --- */}
      <section id="about" className="py-28 md:py-40 lg:py-48 bg-charcoal relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Column Text Story */}
            <div className="lg:col-span-6 space-y-6 md:space-y-8">
              <span className="text-xs uppercase tracking-[0.25em] text-bronze font-bold block">Crafted with Soul</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-bold leading-tight">Manifesto Kopi Kala:<br/>Dedikasi & Rasa</h2>
              <div className="w-12 h-0.5 bg-bronze"></div>
 
              <div className="space-y-5 text-slate-400 text-sm md:text-base font-light leading-relaxed">
                <p>
                  Bagi kami, kopi bukan sekadar minuman berkafein penunjang aktivitas harian. Kopi adalah sebuah seni kontemplatif yang menyatukan dedikasi petani lokal di lereng pegunungan tinggi dengan ketelitian seduh para barista kami di meja bar.
                </p>
                <p>
                  Setiap biji kopi Arabica dipanen secara manual kala matang merah sempurna, diproses basah secara bersih, roasted dengan kedalaman rasa yang pas, lalu diseduh presisi. Kami percaya, ruang kopi yang tenang, minimalis, dan hangat adalah katalisator terbaik bagi lahirnya inspirasi baru dalam hidup Anda.
                </p>
              </div>
 
              {/* Story minor badges */}
              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center">
                  <span className="text-2xl md:text-3xl font-bold font-serif text-bronze mr-2">12+</span>
                  <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold leading-tight">Original<br/>Bean Lots</span>
                </div>
                <div className="h-8 w-px bg-white/10"></div>
                <div className="flex items-center">
                  <span className="text-2xl md:text-3xl font-bold font-serif text-bronze mr-2">5★</span>
                  <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold leading-tight">Signature<br/>Cozy Vibe</span>
                </div>
              </div>
            </div>
 
            {/* Right Column Visual graphic frame */}
            <div className="lg:col-span-6">
              <div className="relative max-w-[480px] lg:max-w-none mx-auto group">
                <div className="absolute -inset-px border border-white/10 opacity-30 group-hover:opacity-100 transition-all duration-505"></div>
                <div className="relative bg-charcoal p-4 border border-white/5">
                  <img 
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop" 
                    alt="Cafe ambient decoration" 
                    className="w-full h-[280px] md:h-[400px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Visual quote stamp */}
                <div className="absolute top-8 right-8 bg-charcoal border border-white/10 px-5 py-3 max-w-[180px] text-center hidden sm:block">
                  <p className="font-serif text-xs font-bold text-white">"Cozy & Aesthetic"</p>
                  <p className="text-[10px] text-slate-400 mt-1">Interior dirancang minimalis-modern, pas untuk kerja & temu rasa.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 5. BOOKING RECEIPT SCREEN (IF BOOKING IS SUBMITTED) --- */}
      {bookingReceipt && (
        <section className="bg-charcoal px-4 py-8 max-w-2xl mx-auto w-full my-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-charcoal-card border-2 border-bronze/30 p-6 sm:p-8 rounded-2xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-bronze/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center text-bronze mb-1">
                <Check className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-bronze font-bold">Booking Terbuat!</span>
              <h3 className="text-2xl font-serif text-white font-bold">Terima Kasih, {bookingReceipt.name}!</h3>
              <p className="text-xs text-slate-400 max-w-sm">Meja Anda berhasil diamankan. Berikut rincian reservasi:</p>
              
              {/* Receipt Board details */}
              <div className="bg-charcoal border border-white/5 rounded-xl p-5 w-full max-w-md text-left space-y-3.5 my-4 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Nama Tamu</span>
                  <span className="text-white font-bold">{bookingReceipt.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Tanggal Kedatangan</span>
                  <span className="text-white font-bold">{bookingReceipt.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Waktu Kedatangan</span>
                  <span className="text-white font-bold">{bookingReceipt.time} WIB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Kapasitas Kursi</span>
                  <span className="text-white font-bold">{bookingReceipt.guests} Orang</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Kontak Handphone</span>
                  <span className="text-white font-bold">{bookingReceipt.phone}</span>
                </div>
                {bookingReceipt.notes && (
                  <div className="pt-2.5 border-t border-white/5">
                    <span className="text-slate-500 block mb-1">Catatan Khusus:</span>
                    <span className="text-slate-300 italic tracking-wide">"{bookingReceipt.notes}"</span>
                  </div>
                )}
              </div>
              
              <div className="flex w-full max-w-md gap-3 pt-2">
                <button 
                  onClick={() => setBookingReceipt(null)} 
                  className="flex-1 bg-white/5 border border-white/10 hover:border-white/30 text-white font-bold text-[10px] uppercase tracking-widest py-3.5 rounded-full transition-colors cursor-pointer"
                >
                  Dismiss
                </button>
                <a 
                  href={`https://wa.me/628123456789?text=Halo%2520Kopi%2520Kala.%2520Saya%2520telah%2520melakukan%2520booking%2520atas%2520nama%2520${encodeURIComponent(bookingReceipt.name)}%2520untuk%2520${bookingReceipt.guests}%2520orang%252520pada%2520${bookingReceipt.date}%2520jam%2520${bookingReceipt.time}.%2520Mohon%2520konfirmasi%2520terima%2520kasih.`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-bronze hover:bg-bronze-hover text-charcoal-dark font-bold text-[10px] uppercase tracking-widest py-3.5 rounded-full text-center hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
                >
                  Kirim Konfirmasi WA
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* --- 6. FOOTER / CONTACT / CALL TO ACTION --- */}
      <section id="contact" className="py-28 md:py-40 lg:py-48 bg-charcoal-light border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8 relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-bronze font-bold block">Join the Experience</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-bold max-w-3xl mx-auto leading-tight">
            Ada Pertanyaan, atau Ingin Mengamankan Meja Terbaik?
          </h2>
          <div className="w-12 h-0.5 bg-bronze mx-auto"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
            Hubungi kami sekarang untuk reservasi tempat duduk eksklusif, rapat kecil, atau katering kopi spesial. Anda juga bisa langsung datang ke kafe kami yang buka setiap hari mulai pukul 08.00 - 22.00 WIB.
          </p>
 
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center items-center">
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto bg-bronze hover:bg-bronze-hover text-charcoal-dark font-bold text-xs tracking-widest uppercase px-10 py-5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book a Table Now
            </button>
            <a 
              href="https://wa.me/628123456789?text=Halo%2520Kopi%2520Kala,%2520saya%2520ingin%2520bertanya%2520atau%2520memesan%2520layanan%2520meja..." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-white/20 hover:border-bronze hover:text-bronze text-white font-bold text-xs tracking-widest uppercase px-10 py-5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Contact via WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer info bars */}
        <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-10 border-t border-white/5 text-slate-500 text-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-serif text-slate-300 font-bold tracking-wider text-sm">
            <span className="w-1.5 h-4 bg-bronze rounded-full"></span>
            <span>KOPI<span className="text-bronze font-light">KALA</span></span>
          </div>
          
          <p className="text-center md:text-left font-light tracking-wide">
            &copy; 2026 Kopi Kala Premium. Seluruh hak cipta dilindungi. Dibuat sebagai visual prototype.
          </p>

          {/* Social icons minimal links */}
          <div className="flex items-center gap-3">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-white/5 border border-white/5 rounded-full hover:border-[#c5a880] hover:text-[#c5a880] text-slate-405 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </footer>
      </section>


      {/* ==================================================== */}
      {/* INTERACTIVE COMPONENT MODALS / SHEETS (ANMATED) */}
      {/* ==================================================== */}

      {/* --- RENDER TOAST MESSAGES --- */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map(toast => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="bg-charcoal-card border border-bronze/30 text-white pl-4 pr-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3.5 max-w-sm pointer-events-auto"
            >
              <span className="w-7 h-7 bg-bronze/10 rounded-full flex items-center justify-center text-bronze text-sm font-semibold">
                ✓
              </span>
              <div>
                <p className="text-xs font-semibold text-white">Sukses</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{toast.message}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>


      {/* --- SHOPPING CART SIDEBAR SHEET --- */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Dark blur backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Sidebar Slider layout */}
            <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="w-screen max-w-md bg-charcoal-light/95 backdrop-blur-xl border-l border-white/10 flex flex-col justify-between p-6 shadow-2xl"
              >
                <div>
                  {/* Drawer Header */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-bronze rounded-full"></span>
                      <h3 className="font-serif text-lg text-white font-bold">Keranjang Belanja</h3>
                    </div>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Scrollable list content */}
                  <div className="space-y-4 overflow-y-auto max-h-[55vh] pr-1">
                    {cart.length === 0 ? (
                      <div className="text-center py-20 text-slate-500 space-y-3">
                        <ShoppingBag className="w-12 h-12 stroke-thin mx-auto mb-2 opacity-25 text-slate-400" />
                        <p className="text-sm font-medium">Keranjang belanja Anda masih kosong</p>
                        <p className="text-xs text-slate-600">Tambahkan beberapa menu signature di list atas!</p>
                      </div>
                    ) : (
                      <AnimatePresence mode="popLayout">
                        {cart.map(item => (
                          <motion.div 
                            key={item.menuItem.id}
                            layout
                            initial={{ opacity: 0, x: 50, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -50, scale: 0.95 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                            className="relative overflow-hidden flex items-center justify-between bg-charcoal p-4 rounded-xl border border-white/5"
                          >
                            {/* Subtle flash highlights that runs briefly upon item creation */}
                            <motion.div
                              initial={{ opacity: 0.7 }}
                              animate={{ opacity: 0 }}
                              transition={{ duration: 1.2, ease: 'easeOut' }}
                              className="absolute inset-0 bg-bronze/15 pointer-events-none"
                            />

                            <div className="relative z-10">
                              <h4 className="text-sm font-semibold text-white">{item.menuItem.name}</h4>
                              <p className="text-xs text-slate-400 mt-0.5">
                                {item.menuItem.priceFormatted}
                              </p>
                            </div>
                            
                            <div className="flex items-center gap-3 relative z-10">
                              <button 
                                onClick={() => updateQuantity(item.menuItem.id, -1)}
                                className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center text-xs cursor-pointer"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="font-mono text-sm text-with font-semibold w-5 text-center">
                                {item.quantity}
                              </span>
                              <button 
                                onClick={() => updateQuantity(item.menuItem.id, 1)}
                                className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center text-xs cursor-pointer"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>

                              <button 
                                onClick={() => removeFromCart(item.menuItem.id, item.menuItem.name)}
                                className="p-1 text-slate-500 hover:text-rose-400 rounded transition-colors ml-1 cursor-pointer"
                                aria-label="Hapus dari keranjang"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    )}
                  </div>
                </div>

                {/* Subtotals checkout calculation box footer */}
                <div className="border-t border-white/5 pt-4 bg-charcoal-card p-5 rounded-xl border border-white/5">
                  <div className="space-y-2 mb-4 text-sm font-light">
                    <div className="flex justify-between text-slate-400">
                      <span>Subtotal</span>
                      <span className="font-mono text-white">Rp {cartSubtotal.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Pajak (PB1 10%)</span>
                      <span className="font-mono text-white">Rp {cartTax.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="h-px bg-white/5 my-2"></div>
                    <div className="flex justify-between text-base font-bold">
                      <span className="text-slate-200 font-serif">Total Pembayaran</span>
                      <span className="font-mono text-bronze">Rp {cartTotal.toLocaleString('id-ID')}</span>
                    </div>
                  </div>

                  <button 
                    onClick={handleWhatsAppCheckout}
                    disabled={cart.length === 0}
                    className={`w-full bg-bronze hover:bg-bronze-hover disabled:bg-slate-800 disabled:text-slate-600 text-charcoal-dark font-bold py-3.5 rounded-full text-center tracking-widest text-xs uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      cart.length === 0 ? 'cursor-not-allowed opacity-50' : 'hover:scale-[1.01]'
                    }`}
                  >
                    PESAN VIA WHATSAPP (SIMULATION)
                  </button>
                </div>

              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>


      {/* --- ORDER STATUS SIDEBAR SHEET --- */}
      <AnimatePresence>
        {isOrderStatusOpen && activeOrder && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Soft backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOrderStatusOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Sidebar Slider */}
            <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="w-screen max-w-md bg-charcoal-light/95 backdrop-blur-xl border-l border-white/10 flex flex-col justify-between p-6 shadow-2xl overflow-y-auto"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-bronze rounded-full"></span>
                      <div>
                        <h3 className="font-serif text-lg text-white font-bold">Lacak Pesanan</h3>
                        <p className="text-[10px] font-mono text-bronze tracking-wider uppercase mt-0.5">Order ID: {activeOrder.orderId}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setIsOrderStatusOpen(false)}
                      className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Brew Machine Live Stage Animation */}
                  <div className="bg-black/20 rounded-xl p-4 border border-white/5 mb-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="relative w-16 h-16 bg-charcoal-dark border border-white/10 rounded-full flex items-center justify-center p-3">
                        <Coffee className={`w-8 h-8 text-bronze ${activeOrder.status === 'Brewing' ? 'animate-bounce' : activeOrder.status === 'Preparing' ? 'animate-pulse' : ''}`} />
                        {activeOrder.status !== 'Ready' && (
                          <div className="absolute border-[2px] border-dashed border-bronze/40 rounded-full top-0 left-0 w-full h-full animate-spin"></div>
                        )}
                      </div>
                    </div>
                    <h4 className="text-sm font-semibold text-white tracking-wide">
                      {activeOrder.status === 'Received' && "Pesanan Diterima"}
                      {activeOrder.status === 'Preparing' && "Mempersiapkan Biji Kopi"}
                      {activeOrder.status === 'Brewing' && "Proses Penyeduhan Perlahan"}
                      {activeOrder.status === 'Ready' && "Pesanan Siap Dinikmati!"}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                      {activeOrder.status === 'Received' && "Menunggu barista premium kami untuk memvalidasi detail biji pilihan Anda."}
                      {activeOrder.status === 'Preparing' && "Biji kopi sedang ditimbang & digiling presisi. Air sedang dipanaskan hingga 92°C."}
                      {activeOrder.status === 'Brewing' && "Air menetes perlahan pada filter. Blooming & ekstraksi sedang berlangsung."}
                      {activeOrder.status === 'Ready' && "Seduhan siap! Silakan ambil pesanan Anda langsung di counter Kopi Kala."}
                    </p>
                  </div>

                  {/* Live Progress Bar with accelerator */}
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-slate-400">Penyeduhan:</span>
                      <span className="text-white font-bold">{activeOrder.progress}% Selesai</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-bronze-dark to-bronze rounded-full"
                        style={{ width: `${activeOrder.progress}%` }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                    
                    {/* Acceleration control */}
                    <div className="flex justify-between items-center pt-1">
                      <button
                        onClick={() => setIsOrderAccelerated(prev => !prev)}
                        className="text-[9px] px-2.5 py-1 rounded bg-white/5 border border-bronze/20 hover:border-bronze text-slate-400 hover:text-white font-mono tracking-wider transition-all flex items-center gap-1 cursor-pointer"
                      >
                        <Zap className={`w-3 h-3 text-bronze ${isOrderAccelerated ? 'animate-pulse' : ''}`} />
                        {isOrderAccelerated ? "⚡ AKSELERASI: AKTIF" : "🔬 LIVE: AKSELERASI BARISTA"}
                      </button>
                      <span className="text-[9px] text-slate-500 font-mono">Estimasi: {activeOrder.status === 'Ready' ? "Selesai" : `${Math.ceil((100 - activeOrder.progress) * (isOrderAccelerated ? 0.3 : 1.2))} Detik`}</span>
                    </div>
                  </div>

                  {/* High fidelity timeline */}
                  <div className="space-y-4 mb-6 border-t border-white/5 pt-5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">Timeline Penyeduhan</h4>
                    
                    <div className="relative pl-6 space-y-5">
                      {/* Left bar accent */}
                      <div className="absolute top-1.5 bottom-1.5 left-2 w-0.5 bg-white/5"></div>

                      {/* Step 1: Received */}
                      <div className="relative">
                        <span className={`absolute -left-5.5 top-0.5 w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all ${
                          activeOrder.progress >= 0 ? 'bg-bronze border-bronze text-charcoal-dark' : 'bg-charcoal border-white/10'
                        }`}>
                          {activeOrder.progress >= 20 ? '✓' : <span className="w-1.5 h-1.5 bg-bronze rounded-full"></span>}
                        </span>
                        <div>
                          <h5 className={`text-xs font-semibold ${activeOrder.progress >= 0 ? 'text-white' : 'text-slate-500'}`}>1. Pesanan Diterima</h5>
                          <p className="text-[10px] text-slate-400 mt-0.5">Sistem memvalidasi pesanan & mengirimnya ke bar penyeduhan.</p>
                        </div>
                      </div>

                      {/* Step 2: Preparing */}
                      <div className="relative">
                        <span className={`absolute -left-5.5 top-0.5 w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all ${
                          activeOrder.progress >= 20 ? 'bg-bronze border-bronze text-charcoal-dark' : 'bg-charcoal border-white/10'
                        }`}>
                          {activeOrder.progress >= 55 ? '✓' : activeOrder.progress >= 20 ? <span className="inline-block w-1.5 h-1.5 bg-bronze rounded-full animate-ping"></span> : null}
                        </span>
                        <div>
                          <h5 className={`text-xs font-semibold ${activeOrder.progress >= 20 ? 'text-white' : 'text-slate-500'}`}>2. Persiapan Bahan</h5>
                          <p className="text-[10px] text-slate-400 mt-0.5">Biji kopi premium digiling halus & air dipanaskan khusus.</p>
                        </div>
                      </div>

                      {/* Step 3: Brewing */}
                      <div className="relative">
                        <span className={`absolute -left-5.5 top-0.5 w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all ${
                          activeOrder.progress >= 55 ? 'bg-bronze border-bronze text-charcoal-dark' : 'bg-charcoal border-white/10'
                        }`}>
                          {activeOrder.progress >= 90 ? '✓' : activeOrder.progress >= 55 ? <span className="inline-block w-1.5 h-1.5 bg-bronze rounded-full animate-ping"></span> : null}
                        </span>
                        <div>
                          <h5 className={`text-xs font-semibold ${activeOrder.progress >= 55 ? 'text-white' : 'text-slate-500'}`}>3. Penyeduhan Aktif</h5>
                          <p className="text-[10px] text-slate-400 mt-0.5">Proses penuangan air bersuhu tinggi perlahan (Drip Extraction).</p>
                        </div>
                      </div>

                      {/* Step 4: Ready */}
                      <div className="relative">
                        <span className={`absolute -left-5.5 top-0.5 w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all ${
                          activeOrder.progress >= 100 ? 'bg-bronze border-bronze text-charcoal-dark' : 'bg-charcoal border-white/10'
                        }`}>
                          {activeOrder.progress >= 100 ? '✓' : null}
                        </span>
                        <div>
                          <h5 className={`text-xs font-semibold ${activeOrder.progress >= 90 ? 'text-white' : 'text-slate-500'}`}>4. Selesai & Siap Diambil</h5>
                          <p className="text-[10px] text-slate-400 mt-0.5 font-sans">Kopi telah sepenuhnya terekstraksi & siap disajikan di bar counter.</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* List of Ordered Items */}
                  <div className="border-t border-white/5 pt-5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">Detail Minuman</h4>
                    <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1">
                      {activeOrder.items.map(item => (
                        <div key={item.menuItem.id} className="flex justify-between items-center text-xs bg-black/10 p-2.5 rounded-lg border border-white/5">
                          <div>
                            <span className="text-white font-semibold">{item.menuItem.name}</span>
                            <span className="text-slate-500 text-[10px] font-mono ml-2">x{item.quantity}</span>
                          </div>
                          <span className="font-mono text-slate-400">Rp {(item.menuItem.price * item.quantity).toLocaleString('id-ID')}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Subtotals & New Order Action footer */}
                <div className="border-t border-white/5 pt-4 bg-charcoal-card p-4 rounded-xl border border-white/5 mt-5">
                  <div className="flex justify-between text-xs text-slate-400 mb-2">
                    <span>Total Pembayaran</span>
                    <span className="font-mono text-bronze font-bold">Rp {activeOrder.total.toLocaleString('id-ID')}</span>
                  </div>
                  
                  <button 
                    onClick={() => {
                      if (activeOrder.progress < 100) {
                        if (confirm("Apakah Anda yakin ingin membatalkan simulasi pesanan ini?")) {
                          setActiveOrder(null);
                          setIsOrderStatusOpen(false);
                          setIsOrderAccelerated(false);
                          showToast("Simulasi pelacakan pesanan telah dibatalkan.", "info");
                        }
                      } else {
                        setActiveOrder(null);
                        setIsOrderStatusOpen(false);
                        setIsOrderAccelerated(false);
                        showToast("Pesanan selesai diproses! Selamat menikmati.", "success");
                      }
                    }}
                    className="w-full bg-white/5 hover:bg-bronze hover:text-charcoal-dark border border-white/10 hover:border-bronze font-bold text-[10px] tracking-widest uppercase py-3 rounded-full text-center transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    {activeOrder.progress < 100 ? "BATALKAN SIMULASI" : "TUTUP & PESAN BARU"}
                  </button>
                </div>

              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>


      {/* --- PERSISTENT FLOATING LAB ORDER TRACKER BADGE --- */}
      <AnimatePresence>
        {activeOrder && !isOrderStatusOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            onClick={() => setIsOrderStatusOpen(true)}
            className="fixed bottom-6 right-6 z-40 bg-charcoal-card border border-bronze/30 hover:border-bronze text-white p-4 rounded-2xl shadow-2xl cursor-pointer select-none max-w-xs hover:scale-[1.03] transition-all flex items-center gap-3.5"
            title="Klik untuk melihat detail progres penyeduhan kopi Anda"
          >
            <div className="relative w-10.5 h-10.5 bg-bronze/10 rounded-xl flex items-center justify-center text-bronze">
              <Coffee className={`w-5.5 h-5.5 ${activeOrder.status === 'Brewing' ? 'animate-bounce' : activeOrder.status === 'Preparing' ? 'animate-pulse' : ''}`} />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-bronze text-charcoal-dark font-sans font-bold text-[9px] rounded-full flex items-center justify-center animate-pulse">!</div>
            </div>
            
            <div className="text-left">
              <div className="flex justify-between items-center gap-4">
                <span className="text-[9px] font-mono font-bold tracking-widest text-bronze uppercase">LIVE DRIP SIM</span>
                <span className="text-[10px] font-mono text-slate-400 font-semibold">{activeOrder.progress}%</span>
              </div>
              <h5 className="text-[11px] font-bold text-white mt-0.5 font-semibold">Kopi Anda: {activeOrder.status}</h5>
              <div className="w-28 h-0.5 bg-white/5 rounded-full mt-1.5 overflow-hidden">
                <div className="h-full bg-bronze" style={{ width: `${activeOrder.progress}%` }}></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* --- ONLINE TABLE BOOKING MODAL FORM --- */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop cover blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative bg-charcoal-light border border-white/10 rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              {/* Close icon button */}
              <button 
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title label copy */}
              <div className="space-y-2 mb-6">
                <span className="text-xs uppercase tracking-[0.25em] text-bronze font-bold block">Online Booking</span>
                <h3 className="text-2xl font-serif text-white font-bold flex items-center gap-2">Amankan Meja Anda</h3>
                <p className="text-xs text-slate-400">Silakan isi formulir pemesanan meja di bawah dengan lengkap.</p>
              </div>

              {/* Booking Fields form */}
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-350 uppercase tracking-widest mb-1.5" htmlFor="name-input">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name-input"
                    required 
                    placeholder="Masukkan nama Anda" 
                    value={bookingFormData.name}
                    onChange={e => setBookingFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-[#161822] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-bronze transition-colors focus:ring-1 focus:ring-bronze"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-350 uppercase tracking-widest mb-1.5" htmlFor="phone-input">No. WhatsApp/Phone</label>
                    <input 
                      type="tel" 
                      id="phone-input"
                      required 
                      placeholder="Contoh: 081234567..." 
                      value={bookingFormData.phone}
                      onChange={e => setBookingFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-[#161822] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-bronze transition-colors focus:ring-1 focus:ring-bronze"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-350 uppercase tracking-widest mb-1.5" htmlFor="guests-select">Jumlah Tamu</label>
                    <select 
                      id="guests-select"
                      value={bookingFormData.guests}
                      onChange={e => setBookingFormData(prev => ({ ...prev, guests: parseInt(e.target.value) }))}
                      className="w-full bg-[#161822] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-bronze transition-colors cursor-pointer focus:ring-1 focus:ring-bronze"
                    >
                      <option value="1">1 Orang</option>
                      <option value="2">2 Orang (Standard)</option>
                      <option value="3">3 Orang</option>
                      <option value="4">4 Orang (Family)</option>
                      <option value="6">6 Orang (Group)</option>
                      <option value="8">8+ Orang</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-350 uppercase tracking-widest mb-1.5" htmlFor="date-input">Tanggal Reservasi</label>
                    <input 
                      type="date" 
                      id="date-input"
                      required 
                      value={bookingFormData.date}
                      onChange={e => setBookingFormData(prev => ({ ...prev, date: e.target.value }))}
                      className="w-full bg-[#161822] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-bronze transition-colors focus:ring-1 focus:ring-bronze"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-350 uppercase tracking-widest mb-1.5" htmlFor="time-input">Jam Reservasi</label>
                    <input 
                      type="time" 
                      id="time-input"
                      required 
                      value={bookingFormData.time}
                      onChange={e => setBookingFormData(prev => ({ ...prev, time: e.target.value }))}
                      className="w-full bg-[#161822] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-bronze transition-colors focus:ring-1 focus:ring-bronze"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-350 uppercase tracking-widest mb-1.5" htmlFor="notes-textarea">Catatan Tambahan (Optional)</label>
                  <textarea 
                    id="notes-textarea"
                    rows={2} 
                    placeholder="Contoh: Meja smoking area dekat jendela, kursi bayi, dll." 
                    value={bookingFormData.notes}
                    onChange={e => setBookingFormData(prev => ({ ...prev, notes: e.target.value }))}
                    className="w-full bg-[#161822] border border-white/10 rounded-xl p-4 text-xs text-white focus:outline-none focus:border-bronze transition-colors focus:ring-1 focus:ring-bronze"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-bronze hover:bg-bronze-hover text-charcoal-dark font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all duration-300 shadow-md cursor-pointer"
                >
                  Konfirmasi Reservasi Meja
                </button>
              </form>

            </motion.div>
          </div>
        )}
      </AnimatePresence>




    </div>
  );
}
