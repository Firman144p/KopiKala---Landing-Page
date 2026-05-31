import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Espresso Intenso",
    category: "coffee",
    price: 28000,
    priceFormatted: "Rp 28.000",
    description: "Classic rich and heavy-bodied espresso shot extracted with double precision.",
    image: "https://images.unsplash.com/photo-1510707513156-4627267ef5ee?q=80&w=600&auto=format&fit=crop",
    badge: "Strong",
    rating: 4.8
  },
  {
    id: 2,
    name: "Karamel Macchiato",
    category: "coffee",
    price: 42000,
    priceFormatted: "Rp 42.000",
    description: "Espresso blended with creamy milk, vanilla syrup, and sweet golden caramel drizzle.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53f?q=80&w=600&auto=format&fit=crop",
    badge: "Best Seller",
    rating: 4.9
  },
  {
    id: 3,
    name: "Velvet Matcha Latte",
    category: "latte-art",
    price: 38000,
    priceFormatted: "Rp 38.000",
    description: "Ceremonial grade Japanese matcha whisked lovingly with silky, warm oat milk.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=600&auto=format&fit=crop",
    badge: "Healthy",
    rating: 4.7
  },
  {
    id: 4,
    name: "Bronze Cold Brew",
    category: "cold-brew",
    price: 45000,
    priceFormatted: "Rp 45.000",
    description: "18-hour cold-steeped signature brew infused with raw forest honey & splash of cream.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop",
    badge: "Signature",
    rating: 5.0
  },
  {
    id: 5,
    name: "Aficionado Pour Over",
    category: "coffee",
    price: 35000,
    priceFormatted: "Rp 35.000",
    description: "V60 pour over of seasonal single-origin micro lot beans with bright floral notes.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop",
    badge: "Origin Lot",
    rating: 4.9
  },
  {
    id: 6,
    name: "Dark Mocha Velvet",
    category: "latte-art",
    price: 40000,
    priceFormatted: "Rp 40.000",
    description: "Double-shot espresso with melted premium dark Belgian cocoa & micro-foam milk.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop",
    badge: "Rich Cocoa",
    rating: 4.6
  }
];

export const SINGLE_FILE_HTML_CODE = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kopi Kala - Premium Coffee Shop</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        charcoal: {
                            dark: '#07080a',
                            DEFAULT: '#0b0c10',
                            light: '#121319',
                            card: '#161822',
                        },
                        bronze: {
                            DEFAULT: '#c5a880',
                            dark: '#9c8360',
                            hover: '#b2956d',
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    }
                }
            }
        }
    </script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
        
        html {
            scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #07080a;
        }
        ::-webkit-scrollbar-thumb {
            background: #1f2128;
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #c5a880;
        }
        
        .glow-border:hover {
            box-shadow: 0 0 15px rgba(197, 168, 128, 0.2);
            border-color: rgba(197, 168, 128, 0.4);
        }
    </style>
</head>
<body class="bg-charcoal text-slate-100 font-sans min-h-screen flex flex-col selection:bg-bronze selection:text-charcoal-dark overflow-x-hidden">

    <!-- 1. NAVBAR (Navigation) -->
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-charcoal/80 border-b border-white/5" id="main-header">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <!-- Logo -->
                <div class="flex items-center gap-2">
                    <span class="w-2.5 h-6 bg-bronze rounded-full"></span>
                    <a href="#" class="text-xl font-serif tracking-wider text-white font-bold flex items-center gap-1">
                        KOPI<span class="text-bronze font-light">KALA</span>
                    </a>
                </div>

                <!-- Desktop Navigation Menu -->
                <nav class="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
                    <a href="#id-home" class="text-white hover:text-bronze transition-colors duration-200">Home</a>
                    <a href="#id-menu" class="text-slate-400 hover:text-white transition-colors duration-200">Menu</a>
                    <a href="#id-about" class="text-slate-400 hover:text-white transition-colors duration-200">Story</a>
                    <a href="#id-contact" class="text-slate-400 hover:text-white transition-colors duration-200">Contact</a>
                </nav>

                <!-- Right Side Actions -->
                <div class="hidden md:flex items-center gap-4">
                    <!-- Cart Button Trigger -->
                    <button id="cart-trigger" class="relative p-2.5 rounded-full text-slate-350 hover:text-white hover:bg-white/5 transition-all outline-none" aria-label="Buka Keranjang">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.5760 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                        </svg>
                        <span id="cart-badge" class="absolute -top-0.5 -right-0.5 w-5 h-5 bg-bronze text-charcoal-dark font-mono text-[10px] font-bold flex items-center justify-center rounded-full scale-0 transition-transform duration-300">0</span>
                    </button>
                    <!-- Order CTA Button -->
                    <button class="bg-bronze hover:bg-bronze-hover text-charcoal-dark font-medium text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300 shadow-md transform hover:-translate-y-0.5 active:translate-y-0" onclick="openReservationModal()">
                        Order Table
                    </button>
                </div>

                <!-- Mobile Hamburger Button -->
                <div class="flex items-center gap-3 md:hidden">
                    <!-- mobile cart button -->
                    <button id="mobile-cart-trigger" class="relative p-2.5 rounded-full text-slate-300 hover:text-white" aria-label="Keranjang">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.5760 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                        </svg>
                        <span id="mobile-cart-badge" class="absolute top-1 right-1 w-4.5 h-4.5 bg-bronze text-charcoal-dark font-mono text-[9px] font-bold flex items-center justify-center rounded-full scale-0 transition-transform duration-300">0</span>
                    </button>
                    <!-- hamburger icon -->
                    <button id="menu-btn" class="p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none" aria-label="Toggle Menu">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="menu-icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- 1B. MOBILE DROPDOWN MENU -->
        <div id="mobile-menu" class="hidden md:hidden absolute top-20 left-0 right-0 bg-charcoal-light/95 backdrop-blur-xl border-b border-white/5 shadow-2xl transition-all duration-300">
            <div class="px-5 py-6 space-y-4">
                <a href="#id-home" class="block text-lg font-medium text-white hover:text-bronze transition-colors py-2" onclick="toggleMobileMenu()">Home</a>
                <a href="#id-menu" class="block text-lg font-medium text-slate-300 hover:text-white transition-colors py-2" onclick="toggleMobileMenu()">Menu</a>
                <a href="#id-about" class="block text-lg font-medium text-slate-300 hover:text-white transition-colors py-2" onclick="toggleMobileMenu()">Story</a>
                <a href="#id-contact" class="block text-lg font-medium text-slate-300 hover:text-white transition-colors py-2" onclick="toggleMobileMenu()">Contact</a>
                <div class="pt-4 border-t border-white/5 flex flex-col gap-3">
                    <button class="w-full bg-bronze text-charcoal-dark font-semibold text-center py-3.5 rounded-full text-sm tracking-wider uppercase transition-all" onclick="toggleMobileMenu(); openReservationModal()">
                        Book a Table
                    </button>
                </div>
            </div>
        </div>
    </header>

    <!-- 2. HERO SECTION -->
    <section id="id-home" class="relative pt-40 pb-28 md:pt-52 md:pb-40 flex items-center overflow-hidden min-h-[95vh] bg-charcoal">
        <!-- Symmetrical Minimal Grid Lines -->
        <div class="absolute inset-x-0 top-0 h-px bg-white/5 pointer-events-none"></div>
        <div class="absolute left-[15%] top-0 bottom-0 w-px bg-white/[0.02] pointer-events-none hidden lg:block"></div>
        <div class="absolute right-[15%] top-0 bottom-0 w-px bg-white/[0.02] pointer-events-none hidden lg:block"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
                <!-- Left Details Column -->
                <div class="lg:col-span-7 text-left space-y-8">
                    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.03] border border-white/10">
                        <span class="w-1.5 h-1.5 bg-bronze"></span>
                        <span class="text-[10px] tracking-[0.2em] text-bronze uppercase font-bold">Premium Crafted Beans</span>
                    </div>
                    
                    <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-white leading-[1.1] font-bold">
                        Savor Every Sip,<br/>
                        Embrace <span class="text-bronze">Kala Aesthetic.</span>
                    </h1>

                    <p class="text-slate-400 max-w-xl text-base md:text-lg font-light leading-relaxed">
                        Kopi Kala memadukan cita rasa kopi artisan berkualitas tinggi dengan atmosfer minimalis nan menenangkan. Setiap cangkir diracik presisi oleh barista berpengalaman untuk menghidupkan harmoni rasa yang mendalam.
                    </p>

                    <div class="flex flex-col sm:flex-row gap-4 mt-2">
                        <a href="#id-menu" class="bg-bronze hover:bg-bronze-hover text-charcoal-dark font-bold text-xs tracking-widest uppercase py-4 px-10 transition-all duration-300 text-center block sm:inline-block">
                            Explore Signature Menu
                        </a>
                        <button onclick="openReservationModal()" class="border border-white/20 hover:border-bronze hover:text-bronze text-white font-bold text-xs tracking-widest uppercase py-4 px-10 transition-all duration-300 text-center block sm:inline-block">
                            Book Table
                        </button>
                    </div>

                    <!-- Trust Stats -->
                    <div class="grid grid-cols-3 gap-6 pt-10 border-t border-white/5 max-w-lg">
                        <div>
                            <p class="text-2xl md:text-3xl font-serif text-white font-bold">100%</p>
                            <p class="text-[10px] text-slate-550 uppercase tracking-widest mt-1 font-semibold">Arabica Beans</p>
                        </div>
                        <div>
                            <p class="text-2xl md:text-3xl font-serif text-white font-bold">85+</p>
                            <p class="text-[10px] text-slate-550 uppercase tracking-widest mt-1 font-semibold">Roast Score</p>
                        </div>
                        <div>
                            <p class="text-2xl md:text-3xl font-serif text-white font-bold">18 Hour</p>
                            <p class="text-[10px] text-slate-550 uppercase tracking-widest mt-1 font-semibold">Slow Cold Brew</p>
                        </div>
                    </div>
                </div>

                <!-- Right Visual Column -->
                <div class="lg:col-span-5 relative">
                    <!-- Photo Border Framing -->
                    <div class="relative mx-auto max-w-[420px] lg:max-w-none group">
                        <div class="absolute -inset-px border border-white/10 opacity-30 group-hover:opacity-100 transition-all duration-500"></div>
                        <div class="relative bg-charcoal p-3 border border-white/5 shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=800&auto=format&fit=crop" 
                                 alt="Kopi Estetis Kala" 
                                 class="w-full h-[320px] md:h-[420px] object-cover rounded-xl grayscale-[15%] group-hover:grayscale-0 transition-all duration-700">
                        </div>
                        <!-- Floating Stamp Badge -->
                        <div class="absolute -bottom-6 -left-6 bg-charcoal border border-white/10 p-4 rounded-xl shadow-xl hidden sm:flex items-center gap-3">
                            <span class="w-10 h-10 bg-bronze/10 rounded-lg flex items-center justify-center text-bronze">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 m1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path>
                                </svg>
                            </span>
                            <div>
                                <h4 class="text-xs text-white uppercase font-bold tracking-wider">Certified Organic</h4>
                                <p class="text-[10px] text-slate-400">Rainforest Alliance Certified</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 3. INTERACTIVE MENU SECTION -->
    <section id="id-menu" class="py-20 md:py-28 bg-charcoal-light relative">
        <div class="absolute top-[40%] left-[5%] w-[300px] h-[300px] bg-bronze/3 rounded-full blur-[90px] pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <!-- Headers -->
            <div class="text-center max-w-xl mx-auto space-y-4 mb-12">
                <span class="text-xs uppercase tracking-[0.25em] text-bronze font-semibold">The Signature Lineup</span>
                <h2 class="text-3xl md:text-4xl font-serif text-white font-bold">Koleksi Cita Rasa Terbaik Kami</h2>
                <div class="w-12 h-0.5 bg-bronze mx-auto mt-2.5"></div>
                <p class="text-slate-400 text-sm md:text-base font-light">
                    Dari citarasa pekat klasik hingga racikan segar unik barista, nikmati sajian terbaik yang dirancang khusus untuk memanjakan lidah Anda.
                </p>
            </div>

            <!-- Interactive Filters (Vanilla JS implementation inside source) -->
            <div class="flex flex-wrap items-center justify-center gap-3 mb-10 max-w-xl mx-auto">
                <button onclick="filterMenu('all')" id="filter-all" class="filter-btn px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 bg-bronze text-charcoal-dark border border-bronze">
                    Semua
                </button>
                <button onclick="filterMenu('coffee')" id="filter-coffee" class="filter-btn px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 bg-white/5 text-slate-300 border border-white/5 hover:border-white/20">
                    Hot Coffee
                </button>
                <button onclick="filterMenu('cold-brew')" id="filter-cold-brew" class="filter-btn px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 bg-white/5 text-slate-300 border border-white/5 hover:border-white/20">
                    Cold Brews
                </button>
                <button onclick="filterMenu('latte-art')" id="filter-latte-art" class="filter-btn px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 bg-white/5 text-slate-300 border border-white/5 hover:border-white/20">
                    Latte Art
                </button>
            </div>

            <!-- Product Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="menu-grid">
                <!-- Card 1 (Espresso) -->
                <div class="group bg-charcoal-card rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 hover:scale-105 glow-border flex flex-col justify-between" data-category="coffee">
                    <div>
                        <!-- Picture -->
                        <div class="relative overflow-hidden aspect-[4/3] bg-charcoal">
                            <span class="absolute top-4 left-4 z-10 bg-bronze/10 border border-bronze/30 text-bronze text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">Classic Strong</span>
                            <img src="https://images.unsplash.com/photo-1510707513156-4627267ef5ee?q=80&w=600&auto=format&fit=crop" 
                                 class="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" alt="Espresso Intenso">
                        </div>
                        <!-- Details -->
                        <div class="p-6 pb-2">
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-serif text-white font-semibold flex items-center gap-1.5">Espresso Intenso</h3>
                                <div class="flex items-center text-xs text-amber-400 gap-1 font-semibold">
                                    <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                    <span>4.8</span>
                                </div>
                            </div>
                            <p class="text-xs text-slate-400 mt-2.5 line-clamp-2 leading-relaxed">Ekstraksi biji espresso murni 100% Arabika pilihan dengan cita rasa tebal dan kaya.</p>
                        </div>
                    </div>
                    <div class="p-6 pt-3 flex items-center justify-between border-t border-white/5 mt-4">
                        <span class="text-lg font-mono text-bronze font-bold">Rp 28.000</span>
                        <button onclick="addToCart(1, 'Espresso Intenso', 28000)" class="bg-[#1e202c] hover:bg-bronze hover:text-charcoal-dark border border-white/10 hover:border-bronze text-white text-xs font-semibold px-4.5 py-2 rounded-full transition-all duration-300">
                            Add to Order
                        </button>
                    </div>
                </div>

                <!-- Card 2 (Karamel Macchiato) -->
                <div class="group bg-charcoal-card rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 hover:scale-105 glow-border flex flex-col justify-between" data-category="coffee">
                    <div>
                        <!-- Picture -->
                        <div class="relative overflow-hidden aspect-[4/3] bg-charcoal">
                            <span class="absolute top-4 left-4 z-10 bg-bronze/10 border border-bronze/30 text-bronze text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">Best Seller</span>
                            <img src="https://images.unsplash.com/photo-1572442388796-11668a67e53f?q=80&w=600&auto=format&fit=crop" 
                                 class="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" alt="Karamel Macchiato">
                        </div>
                        <!-- Details -->
                        <div class="p-6 pb-2">
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-serif text-white font-semibold flex items-center gap-1.5">Karamel Macchiato</h3>
                                <div class="flex items-center text-xs text-amber-400 gap-1 font-semibold">
                                    <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                    <span>4.9</span>
                                </div>
                            </div>
                            <p class="text-xs text-slate-400 mt-2.5 line-clamp-2 leading-relaxed">Susu creamy hangat dengan espresso, sirup vanilla premium, dan saus karamel emas.</p>
                        </div>
                    </div>
                    <div class="p-6 pt-3 flex items-center justify-between border-t border-white/5 mt-4">
                        <span class="text-lg font-mono text-bronze font-bold">Rp 42.000</span>
                        <button onclick="addToCart(2, 'Karamel Macchiato', 42000)" class="bg-[#1e202c] hover:bg-bronze hover:text-charcoal-dark border border-white/10 hover:border-bronze text-white text-xs font-semibold px-4.5 py-2 rounded-full transition-all duration-300">
                            Add to Order
                        </button>
                    </div>
                </div>

                <!-- Card 3 (Matcha Latte) -->
                <div class="group bg-charcoal-card rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 hover:scale-105 glow-border flex flex-col justify-between" data-category="latte-art">
                    <div>
                        <!-- Picture -->
                        <div class="relative overflow-hidden aspect-[4/3] bg-charcoal">
                            <span class="absolute top-4 left-4 z-10 bg-bronze/10 border border-bronze/30 text-bronze text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">Relaxing</span>
                            <img src="https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=600&auto=format&fit=crop" 
                                 class="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" alt="Velvet Matcha Latte">
                        </div>
                        <!-- Details -->
                        <div class="p-6 pb-2">
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-serif text-white font-semibold flex items-center gap-1.5">Velvet Matcha Latte</h3>
                                <div class="flex items-center text-xs text-amber-400 gap-1 font-semibold">
                                    <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                    <span>4.7</span>
                                </div>
                            </div>
                            <p class="text-xs text-slate-400 mt-2.5 line-clamp-2 leading-relaxed">Serbuk Matcha ceremonial grade dari Uji, Jepang dilarutkan ke dalam oat milk hangat.</p>
                        </div>
                    </div>
                    <div class="p-6 pt-3 flex items-center justify-between border-t border-white/5 mt-4">
                        <span class="text-lg font-mono text-bronze font-bold">Rp 38.000</span>
                        <button onclick="addToCart(3, 'Velvet Matcha Latte', 38000)" class="bg-[#1e202c] hover:bg-bronze hover:text-charcoal-dark border border-white/10 hover:border-bronze text-white text-xs font-semibold px-4.5 py-2 rounded-full transition-all duration-300">
                            Add to Order
                        </button>
                    </div>
                </div>

                <!-- Cold Brew Card 4 (Bronze Cold Brew) -->
                <div class="group bg-charcoal-card rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 hover:scale-105 glow-border flex flex-col justify-between" data-category="cold-brew">
                    <div>
                        <!-- Picture -->
                        <div class="relative overflow-hidden aspect-[4/3] bg-charcoal">
                            <span class="absolute top-4 left-4 z-10 bg-bronze/10 border border-bronze/30 text-bronze text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded font-semibold">Signature</span>
                            <img src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop" 
                                 class="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" alt="Bronze Cold Brew">
                        </div>
                        <!-- Details -->
                        <div class="p-6 pb-2">
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-serif text-white font-semibold flex items-center gap-1.5">Bronze Cold Brew</h3>
                                <div class="flex items-center text-xs text-amber-400 gap-1 font-semibold">
                                    <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                    <span>5.0</span>
                                </div>
                            </div>
                            <p class="text-xs text-slate-400 mt-2.5 line-clamp-2 leading-relaxed">Kopi seduhan dingin selama 18 jam, disajikan dengan madu alami dan sentuhan hazelnut cream.</p>
                        </div>
                    </div>
                    <div class="p-6 pt-3 flex items-center justify-between border-t border-white/5 mt-4">
                        <span class="text-lg font-mono text-bronze font-bold">Rp 45.000</span>
                        <button onclick="addToCart(4, 'Bronze Cold Brew', 45000)" class="bg-[#1e202c] hover:bg-bronze hover:text-charcoal-dark border border-white/10 hover:border-bronze text-white text-xs font-semibold px-4.5 py-2 rounded-full transition-all duration-300">
                            Add to Order
                        </button>
                    </div>
                </div>

                <!-- Cold Brew Card 5 (Pour Over) -->
                <div class="group bg-charcoal-card rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 hover:scale-105 glow-border flex flex-col justify-between" data-category="coffee">
                    <div>
                        <!-- Picture -->
                        <div class="relative overflow-hidden aspect-[4/3] bg-charcoal">
                            <span class="absolute top-4 left-4 z-10 bg-bronze/10 border border-bronze/30 text-bronze text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">Single Origin</span>
                            <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop" 
                                 class="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" alt="Aficionado Pour Over">
                        </div>
                        <!-- Details -->
                        <div class="p-6 pb-2">
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-serif text-white font-semibold flex items-center gap-1.5">Aficionado Pour Over</h3>
                                <div class="flex items-center text-xs text-amber-400 gap-1 font-semibold">
                                    <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                    <span>4.9</span>
                                </div>
                            </div>
                            <p class="text-xs text-slate-400 mt-2.5 line-clamp-2 leading-relaxed">Seduhan manual V60 menggunakan kopi musiman lokal dengan citarasa fruity dan manis.</p>
                        </div>
                    </div>
                    <div class="p-6 pt-3 flex items-center justify-between border-t border-white/5 mt-4">
                        <span class="text-lg font-mono text-bronze font-bold">Rp 35.000</span>
                        <button onclick="addToCart(5, 'Aficionado Pour Over', 35000)" class="bg-[#1e202c] hover:bg-bronze hover:text-charcoal-dark border border-white/10 hover:border-bronze text-white text-xs font-semibold px-4.5 py-2 rounded-full transition-all duration-300">
                            Add to Order
                        </button>
                    </div>
                </div>

                <!-- Card 6 (Mocha Premium) -->
                <div class="group bg-charcoal-card rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 hover:scale-105 glow-border flex flex-col justify-between" data-category="latte-art">
                    <div>
                        <!-- Picture -->
                        <div class="relative overflow-hidden aspect-[4/3] bg-charcoal">
                            <span class="absolute top-4 left-4 z-10 bg-bronze/10 border border-bronze/30 text-bronze text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">Belgian Dark Coa</span>
                            <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop" 
                                 class="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" alt="Dark Mocha Velvet">
                        </div>
                        <!-- Details -->
                        <div class="p-6 pb-2">
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-serif text-white font-semibold flex items-center gap-1.5">Dark Mocha Velvet</h3>
                                <div class="flex items-center text-xs text-amber-400 gap-1 font-semibold">
                                    <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                    <span>4.6</span>
                                </div>
                            </div>
                            <p class="text-xs text-slate-400 mt-2.5 line-clamp-2 leading-relaxed">Espresso intens dengan campuran cokelat murni premium Belgia dan busa susu lembut.</p>
                        </div>
                    </div>
                    <div class="p-6 pt-3 flex items-center justify-between border-t border-white/5 mt-4">
                        <span class="text-lg font-mono text-bronze font-bold">Rp 40.000</span>
                        <button onclick="addToCart(6, 'Dark Mocha Velvet', 40000)" class="bg-[#1e202c] hover:bg-bronze hover:text-charcoal-dark border border-white/10 hover:border-bronze text-white text-xs font-semibold px-4.5 py-2 rounded-full transition-all duration-300">
                            Add to Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 4. ABOUT / VIBE SECTION -->
    <section id="id-about" class="py-20 md:py-28 bg-charcoal relative overflow-hidden">
        <!-- background lights -->
        <div class="absolute bottom-[-10%] right-[-15%] w-[400px] h-[400px] bg-bronze/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <!-- Left Story Column -->
                <div class="lg:col-span-6 space-y-6 md:space-y-8">
                    <span class="text-xs uppercase tracking-[0.25em] text-bronze font-semibold block">Crafted with Soul</span>
                    <h2 class="text-3xl md:text-4xl font-serif text-white font-bold leading-tight">Manifesto Kopi Kala:<br/>Dedikasi & Rasa</h2>
                    <div class="w-12 h-0.5 bg-bronze"></div>

                    <div class="space-y-4 text-slate-350 text-sm md:text-base font-light leading-relaxed">
                        <p>
                            Bagi kami, kopi bukan sekadar minuman berkafein penunjang aktivitas harian. Kopi adalah sebuah seni kontemplatif yang menyatukan dedikasi petani lokal di lereng pegunungan tinggi dengan ketelitian seduh para barista kami di meja bar.
                        </p>
                        <p>
                            Setiap biji kopi Arabica dipanen secara manual kala matang merah sempurna, diproses basah secara bersih, dan disangrai pada level medium untuk mengunci spektrum rasa floral dan bodi yang alami. Kami percaya, ruang kopi yang tenang, minimalis, dan hangat adalah katalisator terbaik bagi lahirnya inspirasi baru dalam hidup Anda.
                        </p>
                    </div>

                    <div class="flex items-center gap-5 pt-4">
                        <div class="flex items-center">
                            <span class="text-3xl font-bold font-serif text-bronze mr-2">12+</span>
                            <span class="text-[10px] text-slate-400 uppercase tracking-wider leading-tight block">Original<br>Bean Lots</span>
                        </div>
                        <div class="h-8 w-px bg-white/10"></div>
                        <div class="flex items-center">
                            <span class="text-3xl font-bold font-serif text-bronze mr-2">5★</span>
                            <span class="text-[10px] text-slate-400 uppercase tracking-wider leading-tight block">Signature<br>Cozy Vibe</span>
                        </div>
                    </div>
                </div>

                <!-- Right Cozy Environment Image Column -->
                <div class="lg:col-span-6 relative">
                    <div class="relative max-w-[480px] lg:max-w-none mx-auto group">
                        <!-- Frame design -->
                        <div class="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-bronze/10 to-white/5 opacity-40 blur-sm"></div>
                        <div class="relative bg-charcoal-card p-4 rounded-2xl border border-white/5 shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop" 
                                 class="w-full h-[280px] md:h-[380px] object-cover rounded-xl filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700" alt="Suasana Estetik Kopi Kala">
                        </div>
                        <!-- Tiny overlay details card -->
                        <div class="absolute top-8 right-8 bg-charcoal-dark/95 backdrop-blur border border-white/10 px-5 py-3 rounded-xl max-w-[180px] text-center hidden sm:block">
                            <p class="font-serif text-sm font-semibold text-white">"Cozy & Aesthetic"</p>
                            <p class="text-[10px] text-slate-400 mt-1">Interior dirancang minimalis-modern, pas untuk kerja & temu rasa.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 5. CONTACT & FOOTER CTA -->
    <section id="id-contact" class="py-16 md:py-24 bg-charcoal-light border-t border-white/5 relative">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-bronze/5 rounded-full blur-[110px] pointer-events-none"></div>

        <div class="max-w-4xl mx-auto px-4 text-center space-y-8 relative z-10">
            <span class="text-xs uppercase tracking-[0.3em] text-bronze font-semibold">Join the Experience</span>
            <h2 class="text-3xl sm:text-4xl font-serif text-white font-bold max-w-2xl mx-auto leading-tight">Ada Pertanyaan, atau Ingin Mengamankan Meja Terbaik?</h2>
            <div class="w-12 h-0.5 bg-bronze mx-auto"></div>
            <p class="text-slate-400 max-w-xl mx-auto text-sm md:text-base font-light">
                Hubungi kami sekarang untuk reservasi tempat duduk eksklusif, rapat kecil, atau katering kopi spesial. Anda juga bisa langsung datang ke kafe kami yang buka setiap hari mulai pukul 08.00 - 22.00 WIB.
            </p>

            <div class="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                <button onclick="openReservationModal()" class="w-full sm:w-auto bg-bronze hover:bg-bronze-hover text-charcoal-dark font-bold text-sm tracking-widest uppercase px-10 py-5 rounded-full transition-all duration-300 shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>
                    Book a Table Now
                </button>
                <a href="https://wa.me/628123456789?text=Halo%2520Kopi%2520Kala,%2520saya%2520ingin%2520bertanya%2520atau%2520memesan%2520layanan%2520meja..." target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto border border-white/20 hover:border-bronze hover:text-bronze text-white font-semibold text-sm tracking-widest uppercase px-10 py-5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1">
                    <svg class="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.739-1.45L0 24zm6.59-4.846c1.6.95 3.1 1.4 4.8 1.4 5.4 0 9.8-4.4 9.8-9.8C21.2 5.4 16.8 1 11.4 1s-9.8 4.4-9.8 9.8c0 1.9.5 3.7 1.4 5.3L2 19.8l4.646-1.646zM17.4 14.3c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-1-.9-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-.9-2.3c-.2-.6-.5-.5-.7-.5h-.7c-.2 0-.6.1-.9.4s-1.1 1.1-1.1 2.6c0 1.5 1.1 3 1.2 3.2.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.7.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.3.3-.7.3-1.2.2-1.3-.1-.2-.3-.3-.6-.4z"/></svg>
                    Contact via WhatsApp
                </a>
            </div>
        </div>

        <!-- Footer Lines -->
        <footer class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-10 border-t border-white/5 text-slate-500 text-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-1.5 font-serif text-slate-300 font-semibold tracking-wider">
                <span class="w-1.5 h-4 bg-bronze rounded-full"></span>
                <span>KOPI<span class="text-bronze font-light">KALA</span></span>
            </div>
            
            <p class="text-center md:text-left font-light tracking-wide">
                &copy; 2026 Kopi Kala Premium. Seluruh hak cipta dilindungi. Dibuat sebagai visual prototype.
            </p>

            <!-- Social Icons -->
            <div class="flex items-center gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="p-2 bg-white/5 border border-white/5 rounded-full hover:border-bronze hover:text-bronze transition-colors duration-200 text-slate-400" aria-label="Instagram">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" class="p-2 bg-white/5 border border-white/5 rounded-full hover:border-bronze hover:text-bronze transition-colors duration-200 text-slate-400" aria-label="TikTok">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.41-.43-.6-.67-.12 1.58-.27 3.16-.48 4.74-.35 2.45-1.63 4.8-3.79 6-1.53.88-3.32 1.25-5.08 1.12-2.12-.13-4.24-1.12-5.49-2.88-1.58-2.18-1.85-5.32-.73-7.79 1-2.26 3.18-3.95 5.65-4.26V9.01c-1.64.21-3.2.1.9-4.3 2.13C10.42 12.28 11.28 13 12.3 13c1.07 0 1.94-.96 1.94-2.1 0-1.05-.18-6.14-.18-7.86 0-.8-.02-1.6-.02-2.4-.04-1.22.42-2.31 1.23-3.13.8-.81 1.88-1.26 3.02-1.28V.02z"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="p-2 bg-white/5 border border-white/5 rounded-full hover:border-bronze hover:text-bronze transition-colors duration-200 text-slate-400" aria-label="X (Twitter)">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
            </div>
        </footer>
    </div>

    <!-- 6. SHOPPING CART SIDEBAR DRAWER -->
    <div id="cart-drawer" class="fixed inset-y-0 right-0 z-[100] w-full max-w-md bg-charcoal-light/95 backdrop-blur-xl border-l border-white/10 shadow-2xl p-6 flex flex-col justify-between translate-x-full transition-transform duration-500 ease-out">
        <div>
            <!-- Header items -->
            <div class="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div class="flex items-center gap-2">
                    <span class="w-1.5 h-4 bg-bronze rounded-full"></span>
                    <h3 class="font-serif text-lg text-white font-bold">Keranjang Belanja</h3>
                </div>
                <button onclick="toggleCartDrawer()" class="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>

            <!-- Scrollable list of items -->
            <div id="cart-items-container" class="space-y-4 overflow-y-auto max-h-[55vh] pr-1">
                <!-- Fallback empty state -->
                <div id="cart-empty-message" class="text-center py-16 text-slate-500">
                    <svg class="w-12 h-12 stroke-current mx-auto mb-3 opacity-30" fill="none" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m1.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.5760 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/></svg>
                    <p class="text-sm">Keranjang belanja Anda masih kosong.</p>
                    <p class="text-xs text-slate-600 mt-1">Tambahkan beberapa menu signature di atas!</p>
                </div>
            </div>
        </div>

        <!-- Checkout Pricing section -->
        <div class="border-t border-white/5 pt-4 bg-charcoal-card p-5 rounded-xl border border-white/5">
            <div class="space-y-2 mb-4 text-sm">
                <div class="flex justify-between text-slate-400">
                    <span>Subtotal</span>
                    <span id="cart-subtotal" class="font-mono text-white">Rp 0</span>
                </div>
                <div class="flex justify-between text-slate-400">
                    <span>Pajak (PB1 10%)</span>
                    <span id="cart-tax" class="font-mono text-white">Rp 0</span>
                </div>
                <div class="h-px bg-white/5 my-2"></div>
                <div class="flex justify-between text-base font-bold">
                    <span class="text-slate-200 font-serif">Total Pembayaran</span>
                    <span id="cart-total" class="font-mono text-bronze">Rp 0</span>
                </div>
            </div>

            <button onclick="checkoutWhatsApp()" class="w-full bg-bronze hover:bg-bronze-hover text-charcoal-dark font-bold py-3.5 rounded-full text-center tracking-wider text-xs uppercase transition-all flex items-center justify-center gap-2">
                <svg class="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.739-1.45L0 24zm6.59-4.846c1.6.95 3.1 1.4 4.8 1.4 5.4 0 9.8-4.4 9.8-9.8C21.2 5.4 16.8 1 11.4 1s-9.8 4.4-9.8 9.8c0 1.9.5 3.7 1.4 5.3L2 19.8l4.646-1.646zM17.4 14.3c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-1-.9-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-.9-2.3c-.2-.6-.5-.5-.7-.5h-.7c-.2 0-.6.1-.9.4s-1.1 1.1-1.1 2.6c0 1.5 1.1 3 1.2 3.2.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.7.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.3.3-.7.3-1.2.2-1.3-.1-.2-.3-.3-.6-.4z"/></svg>
                Pesan via WhatsApp
            </button>
        </div>
    </div>
    
    <!-- Backdrop overlay for Cart drawer -->
    <div id="cart-backdrop" class="fixed inset-0 z-[95] bg-black/60 backdrop-blur-sm hidden transition-all duration-300" onclick="toggleCartDrawer()"></div>

    <!-- 7. RESERVATION TABLE MODAL -->
    <div id="booking-modal" class="fixed inset-0 z-[120] hidden flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="closeReservationModal()"></div>
        
        <!-- Form container -->
        <div class="relative bg-charcoal-light border border-white/10 rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-2xl scale-95 transition-all duration-300 transform" id="booking-content">
            <!-- Close Button -->
            <button onclick="closeReservationModal()" class="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-white/5 rounded-full transition-all">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <!-- Form Title -->
            <div class="space-y-2 mb-6">
                <span class="text-xs uppercase tracking-[0.25em] text-bronze font-bold block">Online Booking</span>
                <h3 class="text-2xl font-serif text-white font-bold flex items-center gap-2">Amankan Meja Anda</h3>
                <p class="text-xs text-slate-400">Silakan isi formulir pemesanan meja di bawah dengan lengkap.</p>
            </div>

            <!-- Form fields -->
            <form id="booking-form" onsubmit="handleBookingSubmit(event)" class="space-y-4">
                <div>
                    <label class="block text-xs font-semibold text-slate-350 uppercase tracking-widest mb-1.5" for="booking-name">Nama Lengkap</label>
                    <input type="text" id="booking-name" required placeholder="Masukkan nama Anda" 
                        class="w-full bg-[#161822] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-bronze transition-colors">
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-semibold text-slate-350 uppercase tracking-widest mb-1.5" for="booking-phone">No. WhatsApp/Phone</label>
                        <input type="tel" id="booking-phone" required placeholder="Contoh: 081234567..." 
                            class="w-full bg-[#161822] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-bronze transition-colors">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-350 uppercase tracking-widest mb-1.5" for="booking-guests">Jumlah Tamu</label>
                        <select id="booking-guests" class="w-full bg-[#161822] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-bronze transition-colors">
                            <option value="1">1 Orang</option>
                            <option value="2" selected>2 Orang (Standard)</option>
                            <option value="3">3 Orang</option>
                            <option value="4">4 Orang (Family)</option>
                            <option value="6">6 Orang (Group)</option>
                            <option value="8">8+ Orang</option>
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-semibold text-slate-350 uppercase tracking-widest mb-1.5" for="booking-date">Tanggal Reservasi</label>
                        <input type="date" id="booking-date" required 
                            class="w-full bg-[#161822] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-bronze transition-colors">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-350 uppercase tracking-widest mb-1.5" for="booking-time">Jam Reservasi</label>
                        <input type="time" id="booking-time" required 
                            class="w-full bg-[#161822] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-bronze transition-colors">
                    </div>
                </div>

                <div>
                    <label class="block text-xs font-semibold text-slate-350 uppercase tracking-widest mb-1.5" for="booking-notes">Catatan Tambahan (Optional)</label>
                    <textarea id="booking-notes" rows="2" placeholder="Contoh: Meja smoking area dekat jendela, kursi bayi, dll." 
                        class="w-full bg-[#161822] border border-white/10 rounded-xl p-4 text-xs text-white focus:outline-none focus:border-bronze transition-colors"></textarea>
                </div>

                <button type="submit" class="w-full bg-bronze hover:bg-bronze-hover text-charcoal-dark font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all duration-300 shadow-md">
                    Konfirmasi Reservasi Meja
                </button>
            </form>
        </div>
    </div>

    <!-- 8. SUCCESS TOAST NOTIFICATION -->
    <div id="toast" class="fixed bottom-6 left-6 z-[150] bg-charcoal-card border border-bronze/30 text-white pl-4 pr-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3.5 max-w-sm pointer-events-none opacity-0 translate-y-4 transition-all duration-500">
        <span class="w-7 h-7 bg-bronze/10 rounded-full flex items-center justify-center text-bronze text-sm">✓</span>
        <div>
            <p class="text-xs font-semibold text-white" id="toast-title">Sukses</p>
            <p class="text-[10px] text-slate-400 mt-0.5" id="toast-desc">Item telah ditambahkan ke keranjang.</p>
        </div>
    </div>


    <!-- ============================================ -->
    <!-- INTERACTIVE JAVASCRIPT STATE ENGINE -->
    <!-- ============================================ -->
    <script>
        // Set Default Date in form (Today)
        const dateInput = document.getElementById('booking-date');
        if(dateInput) {
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1;
            let dd = today.getDate();
            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;
            dateInput.value = yyyy + '-' + mm + '-' + dd;
        }

        // --- 1. Navigation Menu Mobile Toggle ---
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if(mobileMenu.classList.contains('hidden')) {
                // Hamburger icon original state
                menuIcon.innerHTML = \`<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>\`;
            } else {
                // Cross mark icon state
                menuIcon.innerHTML = \`<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>\`;
            }
        });

        function toggleMobileMenu() {
            mobileMenu.classList.add('hidden');
            menuIcon.innerHTML = \`<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>\`;
        }

        // Sticky Navbar shadow effect on scroll
        const header = document.getElementById('main-header');
        window.addEventListener('scroll', () => {
            if(window.scrollY > 20) {
                header.classList.add('bg-charcoal/95', 'shadow-lg', 'border-white/10');
                header.classList.remove('bg-charcoal/80', 'border-white/5');
            } else {
                header.classList.add('bg-charcoal/80', 'border-white/5');
                header.classList.remove('bg-charcoal/95', 'shadow-lg', 'border-white/10');
            }
        });


        // --- 2. Menu Lineup Filter System ---
        function filterMenu(category) {
            const cards = document.querySelectorAll('#menu-grid > div');
            const btns = document.querySelectorAll('.filter-btn');
            
            // Update filter button colors
            btns.forEach(btn => {
                btn.className = "filter-btn px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 bg-white/5 text-slate-300 border border-white/5 hover:border-white/20";
            });
            const clickedBtn = document.getElementById('filter-' + category);
            if(clickedBtn) {
                clickedBtn.className = "filter-btn px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 bg-bronze text-charcoal-dark border border-bronze";
            }

            // Show/Hide matching product cards
            cards.forEach(card => {
                if (category === 'all') {
                    card.style.display = 'flex';
                } else {
                    const cardCat = card.getAttribute('data-category');
                    if(cardCat === category) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        }


        // --- 3. Booking Reservation Modal toggler ---
        const bookingModal = document.getElementById('booking-modal');
        const bookingContent = document.getElementById('booking-content');

        function openReservationModal() {
            bookingModal.classList.remove('hidden');
            bookingModal.classList.add('flex');
            setTimeout(() => {
                bookingContent.classList.remove('scale-95');
                bookingContent.classList.add('scale-100');
            }, 10);
        }

        function closeReservationModal() {
            bookingContent.classList.remove('scale-100');
            bookingContent.classList.add('scale-95');
            setTimeout(() => {
                bookingModal.classList.add('hidden');
                bookingModal.classList.remove('flex');
            }, 200);
        }

        function handleBookingSubmit(event) {
            event.preventDefault();
            const name = document.getElementById('booking-name').value;
            const guests = document.getElementById('booking-guests').value;
            const date = document.getElementById('booking-date').value;
            const time = document.getElementById('booking-time').value;

            closeReservationModal();
            
            // Trigger customized toast
            showToast('Reservasi Terkirim', \`Sukses mengamankan meja untuk \${guests} orang atas nama \${name} pada \${date} jam \${time}.\`);
            document.getElementById('booking-form').reset();
        }


        // --- 4. Interactive Shopping Cart Database State ---
        let cart = [];

        const cartDrawer = document.getElementById('cart-drawer');
        const cartBackdrop = document.getElementById('cart-backdrop');
        const cartBadge = document.getElementById('cart-badge');
        const mobileCartBadge = document.getElementById('mobile-cart-badge');
        const cartTrigger = document.getElementById('cart-trigger');
        const mobileCartTrigger = document.getElementById('mobile-cart-trigger');
        
        cartTrigger.addEventListener('click', toggleCartDrawer);
        mobileCartTrigger.addEventListener('click', toggleCartDrawer);

        function toggleCartDrawer() {
            cartDrawer.classList.toggle('translate-x-full');
            cartBackdrop.classList.toggle('hidden');
        }

        function addToCart(id, name, price) {
            const existingItem = cart.find(item => item.id === id);
            
            if(existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id,
                    name,
                    price,
                    quantity: 1
                });
            }
            
            updateCartUI();
            showToast('Ditambahkan!', \`\${name} berhasil masuk ke daftar pesanan.\`);
        }

        function updateQuantity(id, change) {
            const item = cart.find(item => item.id === id);
            if(item) {
                item.quantity += change;
                if(item.quantity <= 0) {
                    cart = cart.filter(it => it.id !== id);
                }
                updateCartUI();
            }
        }

        function updateCartUI() {
            const container = document.getElementById('cart-items-container');
            const subtotalText = document.getElementById('cart-subtotal');
            const taxText = document.getElementById('cart-tax');
            const totalText = document.getElementById('cart-total');

            // 1. Calculate items total count
            const totalItemsCount = cart.reduce((acc, current) => acc + current.quantity, 0);
            
            // Badge scale animation & text update
            if(totalItemsCount > 0) {
                cartBadge.innerText = totalItemsCount;
                cartBadge.classList.remove('scale-0');
                cartBadge.classList.add('scale-100');

                mobileCartBadge.innerText = totalItemsCount;
                mobileCartBadge.classList.remove('scale-0');
                mobileCartBadge.classList.add('scale-100');
            } else {
                cartBadge.classList.add('scale-0');
                cartBadge.classList.remove('scale-100');

                mobileCartBadge.classList.add('scale-0');
                mobileCartBadge.classList.remove('scale-100');
            }

            // 2. Render container items
            if(cart.length === 0) {
                container.innerHTML = \`
                    <div id="cart-empty-message" class="text-center py-16 text-slate-500">
                        <svg class="w-12 h-12 stroke-current mx-auto mb-3 opacity-30" fill="none" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m1.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.5760 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/></svg>
                        <p class="text-sm">Keranjang belanja Anda masih kosong.</p>
                        <p class="text-xs text-slate-600 mt-1">Tambahkan beberapa menu signature di atas!</p>
                    </div>\`;
            } else {
                let html = '';
                cart.forEach(item => {
                    html += \`
                        <div class="flex items-center justify-between bg-charcoal p-3.5 rounded-xl border border-white/5">
                            <div>
                                <h4 class="text-sm font-semibold text-white">\${item.name}</h4>
                                <p class="text-xs text-slate-400 mt-0.5">Rp \{(item.price).toLocaleString('id-ID')\}</p>
                            </div>
                            <div class="flex items-center gap-3">
                                <button onclick="updateQuantity(\${item.id}, -1)" class="w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center text-xs outline-none focus:outline-none">-</button>
                                <span class="font-mono text-sm text-white font-semibold w-4 text-center">\${item.quantity}</span>
                                <button onclick="updateQuantity(\${item.id}, 1)" class="w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center text-xs outline-none focus:outline-none">+</button>
                            </div>
                        </div>\`;
                });
                container.innerHTML = html;
            }

            // 3. Price summation details
            const subtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
            const pb1Tax = Math.floor(subtotal * 0.1);
            const total = subtotal + pb1Tax;

            subtotalText.innerText = 'Rp ' + subtotal.toLocaleString('id-ID');
            taxText.innerText = 'Rp ' + pb1Tax.toLocaleString('id-ID');
            totalText.innerText = 'Rp ' + total.toLocaleString('id-ID');
        }

        // WhatsApp cart checkout message compositor
        function checkoutWhatsApp() {
            if(cart.length === 0) {
                showToast('Hambatan', 'Keranjang belanja Anda kosong. Tambahkan kopi terlebih dahulu!');
                return;
            }

            let orderText = 'Halo Kopi Kala Premium! Saya ingin memesan kopi berikut:\\n\\n';
            cart.forEach((item, index) => {
                orderText += \`\${index + 1}. \${item.name} (x\${item.quantity}) - Rp \{(item.price * item.quantity).toLocaleString('id-ID')\}\\n\`;
            });
            
            const subtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
            const tax = Math.floor(subtotal * 0.1);
            const total = subtotal + tax;

            orderText += \`\\n*Subtotal:* Rp \${subtotal.toLocaleString('id-ID')\}\`;
            orderText += \`\\n*Pajak PB1 (10%):* Rp \${tax.toLocaleString('id-ID')\}\`;
            orderText += \`\\n*Total Pembayaran:* *Rp \${total.toLocaleString('id-ID')}*\\n\\nMohon dikonfirmasi pesanannya untuk persiapan take-away / dine-in terdekat. Terima kasih!\`;
            
            // Encode URI and open WhatsApp API link
            const waUrl = 'https://wa.me/628123456789?text=' + encodeURIComponent(orderText);
            window.open(waUrl, '_blank');
        }


        // --- 5. Pop-up Toast Controller ---
        let toastTimeout;
        function showToast(title, desc) {
            const toast = document.getElementById('toast');
            const titleEl = document.getElementById('toast-title');
            const descEl = document.getElementById('toast-desc');

            clearTimeout(toastTimeout);

            titleEl.innerText = title;
            descEl.innerText = desc;

            // Animate In classes
            toast.classList.remove('opacity-0', 'translate-y-4');
            toast.classList.add('opacity-100', 'translate-y-0');

            // Auto dismiss toast after 3500ms
            toastTimeout = setTimeout(() => {
                toast.classList.add('opacity-0', 'translate-y-4');
                toast.classList.remove('opacity-100', 'translate-y-0');
            }, 3500);
        }
    </script>
</body>
</html>
`;
