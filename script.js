/* ============================================
   KÜRŞAT YILMAZ PORTFOLIO - JAVASCRIPT
   Enhanced with Language Support (TR/EN)
   ============================================ */

// ============================================
// PROJECT DATA (Bilingual)
// ============================================
const projectsData = {
    risko: {
        title: "Risko",
        category: { tr: "AI Platform", en: "AI Platform" },
        status: { tr: "Aktif", en: "Active" },
        statusType: "active",
        icon: "🌍",
        gradient: "linear-gradient(135deg, #00D9FF, #0099CC)",
        description: {
            tr: "Deprem, sel, yangın ve fırtına gibi afetler için AI destekli risk analizi yapan platform. Konum bazlı yapısal, jeolojik ve iklimsel verileri analiz ederek kapsamlı risk skorları sunar.",
            en: "AI-powered risk analysis platform for disasters like earthquakes, floods, fires, and storms. Analyzes location-based structural, geological, and climate data to provide comprehensive risk scores."
        },
        features: {
            tr: [
                "AI destekli çoklu afet risk analizi",
                "Konum bazlı detaylı raporlama",
                "Yapısal ve jeolojik veri entegrasyonu",
                "Gerçek zamanlı iklim verisi takibi",
                "Detaylı risk skor kartları"
            ],
            en: [
                "AI-powered multi-disaster risk analysis",
                "Location-based detailed reporting",
                "Structural and geological data integration",
                "Real-time climate data tracking",
                "Detailed risk scorecards"
            ]
        },
        tech: ["Python", "FastAPI", "TensorFlow", "PostgreSQL", "React"],
        github: "https://github.com/DevKursat/Risko"
    },
    "linkedin-agent": {
        title: "LinkedIn Agent",
        category: { tr: "Otomasyon", en: "Automation" },
        status: { tr: "Aktif", en: "Active" },
        statusType: "active",
        icon: "🤖",
        gradient: "linear-gradient(135deg, #0077B5, #00A0DC)",
        description: {
            tr: "LinkedIn'de otomatik içerik üretimi ve paylaşımı yapan AI bot. Gemini API ile kişiselleştirilmiş içerikler oluşturur ve optimal zamanlarda paylaşır.",
            en: "AI bot for automatic content generation and sharing on LinkedIn. Creates personalized content with Gemini API and shares at optimal times."
        },
        features: {
            tr: [
                "AI ile otomatik içerik üretimi",
                "Zamanlı paylaşım sistemi",
                "Kişiselleştirilmiş ton ve stil",
                "Engagement analizi",
                "Çoklu profil desteği"
            ],
            en: [
                "AI-powered automatic content generation",
                "Scheduled posting system",
                "Personalized tone and style",
                "Engagement analytics",
                "Multi-profile support"
            ]
        },
        tech: ["Python", "Gemini API", "Selenium", "Supabase"],
        github: "https://github.com/DevKursat/linkednai"
    },
    "iyilik-zinciri": {
        title: "İyilik Zinciri",
        category: { tr: "Sosyal Etki", en: "Social Impact" },
        status: { tr: "Aktif", en: "Active" },
        statusType: "active",
        icon: "💫",
        gradient: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
        description: {
            tr: "AI tarafından verilen iyilik görevlerini tamamlayarak puan kazanılan sosyal etki platformu. Toplumda pozitif değişim yaratmayı hedefler.",
            en: "Social impact platform where you earn points by completing AI-generated kindness tasks. Aims to create positive change in society."
        },
        features: {
            tr: [
                "AI destekli görev oluşturma",
                "Puan ve rozet sistemi",
                "Topluluk liderlik tablosu",
                "Sosyal paylaşım entegrasyonu",
                "Günlük iyilik hatırlatıcıları"
            ],
            en: [
                "AI-powered task generation",
                "Points and badge system",
                "Community leaderboard",
                "Social sharing integration",
                "Daily kindness reminders"
            ]
        },
        tech: ["JavaScript", "Node.js", "OpenAI API", "MongoDB"],
        github: "https://github.com/DevKursat/iyilikzinciri"
    },
    aura: {
        title: "Aura",
        category: { tr: "Lifestyle", en: "Lifestyle" },
        status: { tr: "Aktif", en: "Active" },
        statusType: "active",
        icon: "✨",
        gradient: "linear-gradient(135deg, #667EEA, #764BA2)",
        description: {
            tr: "Yapay zeka destekli kişisel yaşam asistanı. Hedefler, alışkanlıklar, finans takibi ve kişisel gelişim önerilerini tek çatı altında toplar.",
            en: "AI-powered personal life assistant. Combines goals, habits, finance tracking, and personal development suggestions under one roof."
        },
        features: {
            tr: [
                "Kişiselleştirilmiş AI asistanı",
                "Hedef ve alışkanlık takibi",
                "Finansal yönetim araçları",
                "Mood ve enerji takibi",
                "Günlük öneriler ve motivasyon"
            ],
            en: [
                "Personalized AI assistant",
                "Goal and habit tracking",
                "Financial management tools",
                "Mood and energy tracking",
                "Daily suggestions and motivation"
            ]
        },
        tech: ["Next.js", "TypeScript", "Prisma", "OpenAI", "PostgreSQL"],
        github: "https://github.com/DevKursat/Aura"
    },
    lusid: {
        title: "Lusid",
        category: { tr: "Yaratıcı Platform", en: "Creative Platform" },
        status: { tr: "Aktif", en: "Active" },
        statusType: "active",
        icon: "📚",
        gradient: "linear-gradient(135deg, #00D9FF, #0066FF)",
        description: {
            tr: "Kitap okuma, günlük yazma, meditasyon ve rüya yorumlama özellikleri sunan kapsamlı bir kişisel gelişim platformu.",
            en: "A comprehensive personal development platform offering book reading, journaling, meditation, and dream interpretation features."
        },
        features: {
            tr: [
                "Dijital kitaplık yönetimi",
                "AI destekli rüya yorumu",
                "Günlük yazma arayüzü",
                "Meditasyon seansları",
                "Kişisel gelişim takibi"
            ],
            en: [
                "Digital library management",
                "AI-powered dream interpretation",
                "Journaling interface",
                "Meditation sessions",
                "Personal development tracking"
            ]
        },
        tech: ["Flutter", "Firebase", "OpenAI API", "Dart"],
        github: "https://github.com/DevKursat/lusid"
    },
    viralwave: {
        title: "ViralWaveAi",
        category: { tr: "Sosyal Medya", en: "Social Media" },
        status: { tr: "Beklemede", en: "On Hold" },
        statusType: "waiting",
        icon: "📱",
        gradient: "linear-gradient(135deg, #FF0050, #FF4081)",
        description: {
            tr: "TikTok trend analizi ve içerik stratejisi platformu. Organik büyüme için veri odaklı içgörüler sunar.",
            en: "TikTok trend analysis and content strategy platform. Provides data-driven insights for organic growth."
        },
        features: {
            tr: [
                "Trend analizi ve tahminleme",
                "Viral içerik önerileri",
                "Hashtag optimizasyonu",
                "Rakip analizi",
                "Performans raporları"
            ],
            en: [
                "Trend analysis and forecasting",
                "Viral content suggestions",
                "Hashtag optimization",
                "Competitor analysis",
                "Performance reports"
            ]
        },
        tech: ["Python", "FastAPI", "TikTok API", "ML Models"],
        github: "https://github.com/DevKursat/viralwaveai"
    },
    vera: {
        title: "Vera",
        category: { tr: "Yemek Teknolojisi", en: "Food Tech" },
        status: { tr: "Beklemede", en: "On Hold" },
        statusType: "waiting",
        icon: "🍽️",
        gradient: "linear-gradient(135deg, #FF6B6B, #FFA07A)",
        description: {
            tr: "AI garsonlu akıllı restoran sipariş sistemi. Müşteri deneyimini kişiselleştirir ve restoran operasyonlarını optimize eder.",
            en: "AI waiter smart restaurant ordering system. Personalizes customer experience and optimizes restaurant operations."
        },
        features: {
            tr: [
                "AI destekli sipariş asistanı",
                "Kişiselleştirilmiş öneriler",
                "Diyet ve alerji takibi",
                "Akıllı masa yönetimi",
                "Mutfak entegrasyonu"
            ],
            en: [
                "AI-powered order assistant",
                "Personalized recommendations",
                "Diet and allergy tracking",
                "Smart table management",
                "Kitchen integration"
            ]
        },
        tech: ["React Native", "Node.js", "OpenAI", "PostgreSQL"],
        github: "https://github.com/DevKursat/vera"
    },
    veraqr: {
        title: "VeraQR",
        category: { tr: "QR Menü", en: "QR Menu" },
        status: { tr: "Aktif", en: "Active" },
        statusType: "active",
        icon: "📋",
        gradient: "linear-gradient(135deg, #FF8E53, #FFA726)",
        description: {
            tr: "Restoranlar için modern QR kod menü sistemi. Anlık güncelleme, çoklu dil desteği ve analitik özellikleri sunar.",
            en: "Modern QR code menu system for restaurants. Offers instant updates, multi-language support, and analytics features."
        },
        features: {
            tr: [
                "Anlık menü güncelleme",
                "Çoklu dil desteği",
                "Fiyat ve stok yönetimi",
                "Görsel menü tasarımı",
                "Müşteri analitiği"
            ],
            en: [
                "Instant menu updates",
                "Multi-language support",
                "Price and stock management",
                "Visual menu design",
                "Customer analytics"
            ]
        },
        tech: ["Next.js", "Supabase", "Tailwind CSS", "QR Code API"],
        github: "https://github.com/DevKursat/veraqr"
    },
    "kursat-social": {
        title: "Kürşat",
        category: { tr: "Sosyal Medya", en: "Social Media" },
        status: { tr: "Aktif", en: "Active" },
        statusType: "active",
        icon: "🇹🇷",
        gradient: "linear-gradient(135deg, #E1306C, #C13584)",
        description: {
            tr: "Yerli ve milli sosyal medya platformu. Türk kullanıcılar için özel tasarlanmış, güvenli ve kullanıcı dostu bir deneyim sunar.",
            en: "Local and national social media platform. Specially designed for Turkish users, offering a secure and user-friendly experience."
        },
        features: {
            tr: [
                "Yerli altyapı",
                "Güvenli veri saklama",
                "Türkçe öncelikli arayüz",
                "Topluluk yönetimi araçları",
                "İçerik moderasyonu"
            ],
            en: [
                "Local infrastructure",
                "Secure data storage",
                "Turkish-first interface",
                "Community management tools",
                "Content moderation"
            ]
        },
        tech: ["Flutter", "Firebase", "Node.js", "MongoDB"],
        github: "https://github.com/DevKursat/kursat"
    },
    lincard: {
        title: "Lincard",
        category: { tr: "Link Yönetimi", en: "Link Management" },
        status: { tr: "Aktif", en: "Active" },
        statusType: "active",
        icon: "🔗",
        gradient: "linear-gradient(135deg, #39E09B, #00D9FF)",
        description: {
            tr: "Tüm linklerinizi tek bir sayfada toplayan modern bio link platformu. Analitik ve özelleştirme seçenekleri sunar.",
            en: "Modern bio link platform that collects all your links on one page. Offers analytics and customization options."
        },
        features: {
            tr: [
                "Sınırsız link ekleme",
                "Özelleştirilebilir temalar",
                "Tıklama analitiği",
                "QR kod oluşturma",
                "Sosyal medya entegrasyonu"
            ],
            en: [
                "Unlimited link adding",
                "Customizable themes",
                "Click analytics",
                "QR code generation",
                "Social media integration"
            ]
        },
        tech: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
        github: "https://github.com/DevKursat/lincard"
    },
    voltnet: {
        title: "Voltnet",
        category: { tr: "EV Şarj", en: "EV Charging" },
        status: { tr: "Aktif", en: "Active" },
        statusType: "active",
        icon: "⚡",
        gradient: "linear-gradient(135deg, #00D9FF, #00FF88)",
        description: {
            tr: "Farklı elektrikli araç şarj ağlarını tek platformda birleştiren uygulama. Şarj istasyonu bulma, fiyat karşılaştırma ve ödeme kolaylığı sağlar.",
            en: "Application that unifies different electric vehicle charging networks on one platform. Provides charging station finding, price comparison, and payment convenience."
        },
        features: {
            tr: [
                "Çoklu şarj ağı entegrasyonu",
                "Gerçek zamanlı uygunluk",
                "Fiyat karşılaştırma",
                "Rota planlama",
                "Tek ödeme sistemi"
            ],
            en: [
                "Multi-charging network integration",
                "Real-time availability",
                "Price comparison",
                "Route planning",
                "Single payment system"
            ]
        },
        tech: ["Flutter", "Node.js", "Maps API", "PostgreSQL"],
        github: "https://github.com/DevKursat/voltnet"
    },
    alove: {
        title: "aLove",
        category: { tr: "Flört Uygulaması", en: "Dating App" },
        status: { tr: "Aktif", en: "Active" },
        statusType: "active",
        icon: "❤️",
        gradient: "linear-gradient(135deg, #FD297B, #FF655B)",
        description: {
            tr: "Anlamlı bağlantılar kurmayı hedefleyen modern flört uygulaması. AI destekli eşleştirme ve güvenlik özellikleri sunar.",
            en: "Modern dating app aimed at building meaningful connections. Offers AI-powered matching and security features."
        },
        features: {
            tr: [
                "AI destekli eşleştirme",
                "Profil doğrulama sistemi",
                "Güvenli mesajlaşma",
                "Video tanışma özelliği",
                "Gizlilik kontrolleri"
            ],
            en: [
                "AI-powered matching",
                "Profile verification system",
                "Secure messaging",
                "Video dating feature",
                "Privacy controls"
            ]
        },
        tech: ["React Native", "Firebase", "Node.js", "ML Kit"],
        github: "https://github.com/DevKursat/alove"
    }
};

// ============================================
// LANGUAGE SYSTEM
// ============================================
let currentLang = localStorage.getItem('lang') || 'tr';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    
    // Update all translatable elements
    document.querySelectorAll('[data-tr][data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // If modal is open, update modal content
    const modal = document.getElementById('projectModal');
    if (modal && modal.classList.contains('active')) {
        const projectId = modal.dataset.projectId;
        if (projectId && projectsData[projectId]) {
            updateModalContent(projectsData[projectId]);
        }
    }
}

function initLanguage() {
    // Set initial language
    setLanguage(currentLang);
    
    // Add click handlers to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
}

// ============================================
// CUSTOM CURSOR
// ============================================
function initCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    if (!cursor || !follower) return;
    
    // Check for touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        cursor.style.display = 'none';
        follower.style.display = 'none';
        return;
    }
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animate() {
        // Cursor (fast)
        cursorX += (mouseX - cursorX) * 0.5;
        cursorY += (mouseY - cursorY) * 0.5;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        // Follower (slower)
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        
        requestAnimationFrame(animate);
    }
    animate();
    
    // Hover effects
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .project-mini, .hobby-item, .skill-tag');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            follower.classList.add('active');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            follower.classList.remove('active');
        });
    });
}

// ============================================
// LOADER
// ============================================
function initLoader() {
    const loader = document.querySelector('.loader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.style.overflow = '';
            initScrollAnimations();
        }, 1000);
    });
    
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    const nav = document.querySelector('.nav');
    const menuBtn = document.querySelector('.nav-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    // Scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const elements = document.querySelectorAll('[data-scroll]');
    
    const observerOptions = {
        root: null,
        rootMargin: '-50px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.scrollDelay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    elements.forEach(el => observer.observe(el));
}

// ============================================
// STATS COUNTER
// ============================================
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const count = parseInt(target.dataset.count);
                animateCount(target, count);
                observer.unobserve(target);
            }
        });
    }, observerOptions);
    
    stats.forEach(stat => observer.observe(stat));
}

function animateCount(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 1500;
    const stepTime = duration / 50;
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// ============================================
// PROJECT MODAL
// ============================================
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalBackdrop = modal.querySelector('.modal-backdrop');
    const modalClose = modal.querySelector('.modal-close');
    const projectCards = document.querySelectorAll('[data-project]');
    
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.project;
            const project = projectsData[projectId];
            
            if (project) {
                openModal(project, projectId);
            }
        });
    });
    
    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal(project, projectId) {
    const modal = document.getElementById('projectModal');
    modal.dataset.projectId = projectId;
    
    updateModalContent(project);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateModalContent(project) {
    const modal = document.getElementById('projectModal');
    const lang = currentLang;
    
    // Update visual
    modal.querySelector('.modal-gradient').style.background = project.gradient;
    modal.querySelector('.modal-icon').textContent = project.icon;
    
    // Update meta
    modal.querySelector('.modal-category').textContent = project.category[lang];
    const statusEl = modal.querySelector('.modal-status');
    statusEl.textContent = project.status[lang];
    statusEl.className = `modal-status ${project.statusType}`;
    
    // Update content
    modal.querySelector('.modal-title').textContent = project.title;
    modal.querySelector('.modal-description').textContent = project.description[lang];
    
    // Update features
    const featureList = modal.querySelector('.modal-feature-list');
    featureList.innerHTML = project.features[lang].map(f => `<li>${f}</li>`).join('');
    
    // Update tech
    const techList = modal.querySelector('.modal-tech-list');
    techList.innerHTML = project.tech.map(t => `<span>${t}</span>`).join('');
    
    // Update link
    modal.querySelector('.modal-link').href = project.github;
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// PARALLAX EFFECTS
// ============================================
function initParallax() {
    const orbs = document.querySelectorAll('.gradient-orb');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        orbs.forEach((orb, index) => {
            const speed = 0.1 + (index * 0.05);
            orb.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
}

// ============================================
// SKILLS WHEEL ANIMATION
// ============================================
function initSkillsWheel() {
    const wheel = document.querySelector('.skills-wheel');
    if (!wheel) return;
    
    // Pause animation on hover
    const orbits = wheel.querySelectorAll('.skill-orbit');
    
    wheel.addEventListener('mouseenter', () => {
        orbits.forEach(orbit => {
            orbit.style.animationPlayState = 'paused';
        });
    });
    
    wheel.addEventListener('mouseleave', () => {
        orbits.forEach(orbit => {
            orbit.style.animationPlayState = 'running';
        });
    });
}

// ============================================
// 3D TILT EFFECT FOR PROJECT CARDS
// ============================================
function initTiltEffect() {
    const cards = document.querySelectorAll('.project-mini');
    
    cards.forEach(card => {
        card.classList.add('tilt');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// ============================================
// MARQUEE PAUSE ON HOVER
// ============================================
function initMarquee() {
    const marquee = document.querySelector('.marquee');
    if (!marquee) return;
    
    const contents = marquee.querySelectorAll('.marquee-content');
    
    marquee.addEventListener('mouseenter', () => {
        contents.forEach(content => {
            content.style.animationPlayState = 'paused';
        });
    });
    
    marquee.addEventListener('mouseleave', () => {
        contents.forEach(content => {
            content.style.animationPlayState = 'running';
        });
    });
}

// ============================================
// LANG SWITCHER SCROLL EFFECT
// ============================================
function initLangSwitcherScroll() {
    const langSwitcher = document.querySelector('.lang-switcher');
    if (!langSwitcher) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            langSwitcher.classList.add('scrolled');
        } else {
            langSwitcher.classList.remove('scrolled');
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initLoader();
    initCursor();
    initNavigation();
    initStatsCounter();
    initProjectModal();
    initParallax();
    initSkillsWheel();
    initMarquee();
    initTiltEffect();
    initLangSwitcherScroll();
});

// Handle page visibility
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when tab is not visible
        document.querySelectorAll('.marquee-content, .skill-orbit').forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    } else {
        // Resume animations
        document.querySelectorAll('.marquee-content, .skill-orbit').forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }
});

// Performance: Reduce motion if user prefers
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--duration-fast', '0.01ms');
    document.documentElement.style.setProperty('--duration-normal', '0.01ms');
    document.documentElement.style.setProperty('--duration-slow', '0.01ms');
}

console.log('%c🚀 Portfolio by Kürşat Yılmaz', 'font-size: 20px; color: #00D9FF; font-weight: bold;');
console.log('%cBuilding ideas into reality, fast.', 'font-size: 14px; color: #666;');
