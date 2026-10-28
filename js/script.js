/* =========================================================
   RIZQI.DEV — PORTFOLIO SCRIPT
   Vanilla JS only. No frameworks, no libraries.
   ========================================================= */

(function () {
  'use strict';

  /* ---------------------------------------------------------
     1. TRANSLATIONS
     --------------------------------------------------------- */
  const translations = {
    en: {
      'a11y.skip': 'Skip to main content',

      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.techstack': 'Services & Stack',
      'nav.projects': 'Sample Tasks',
      'nav.preview': 'Live Preview',
      'nav.experience': 'Workflow',
      'nav.contact': 'Order Task',

      'hero.label': 'TRUSTED CODING & ACADEMIC TASK SERVICES',
      'hero.title1': 'Fast Solutions for Web Tasks,',
      'hero.title2': 'Scientific Papers & Journals.',
      'hero.desc': 'Stackly helps you complete web development assignments (frontend & backend), research papers, journal articles, and academic coursework quickly, accurately, and with zero-plagiarism guarantee.',
      'hero.cta1': 'Order Task Now',
      'hero.cta2': 'Free Consultation',
      'hero.status': 'Open Order · Fast Response',

      'about.eyebrow': 'About Stackly',
      'about.title': 'Eliminating task deadlines with premium quality results.',
      'about.p1': 'Stackly is a trusted academic assistance and coding service. We help university and college students handle tight deadlines, complex programming tasks, and rigorous academic writing standards.',
      'about.p2': 'Our services include end-to-end web applications (HTML, CSS, JS, PHP, MySQL, React), scientific papers, accredited journals (Sinta/Scopus), lab reports, and final project thesis with complete code explanations and free revisions.',
      'about.tag1': 'Web Development Tasks',
      'about.tag2': 'Scientific Papers & Essays',
      'about.tag3': 'Journal Articles',
      'about.tag4': 'Lab Reports & Thesis',
      'about.tag5': 'Zero Plagiarism & Revisions',
      'about.stat1': 'Tasks Completed',
      'about.stat2': 'Top Grades (A/B)',
      'about.stat3': 'Fast Response 24/7',

      'tech.eyebrow': 'Services & Expertise',
      'tech.title': 'Technologies, web stacks, and writing tools we cover.',

      'projects.eyebrow': 'Task Samples & Portfolio',
      'projects.title': 'Real examples of student assignments we have successfully delivered.',
      'proj.demo': 'Live Preview',
      'proj.code': 'Task Info',

      'proj1.title': 'Campus Student Information System',
      'proj1.desc': 'A comprehensive university database and web programming coursework with admin dashboard, student records, and grading system.',
      'proj2.title': 'Responsive E-Commerce Storefront',
      'proj2.desc': 'A web development term assignment featuring responsive product catalogs, interactive cart drawer, filtering, and checkout flow.',
      'proj3.title': 'TaskFlow Kanban Project App',
      'proj3.desc': 'An advanced web programming assignment with interactive task management, status transitions, sprint tracking, and clean DOM manipulation.',
      'proj4.title': 'Academic Publishing & Journal Platform',
      'proj4.desc': 'A scholarly web platform assignment designed for research publication, citation formatting, reading metrics, and peer discussions.',

      'exp.eyebrow': 'How to Order',
      'exp.title': 'Ordering tasks at Stackly: Simple, secure, and fast.',
      'exp1.date': 'Step 1 · Consultation',
      'exp1.role': 'Send Task Brief & Deadline',
      'exp1.org': 'Free Consultation via WhatsApp / Email',
      'exp1.desc': 'Send your assignment instructions, professor requirements, rubric, and deadline. Our team reviews the scope immediately.',
      'exp2.date': 'Step 2 · Agreement & Start',
      'exp2.role': 'Student-Friendly Pricing & Immediate Start',
      'exp2.org': 'Handled by Experienced Developers & Writers',
      'exp2.desc': 'Receive transparent, student-friendly pricing. Once agreed, our specialist begins working on your task immediately.',
      'exp3.date': 'Step 3 · Review & Delivery',
      'exp3.role': 'Live Demo Preview & File Handover',
      'exp3.org': 'Quality Checked & 100% Anti-Plagiarism',
      'exp3.desc': 'Inspect the completed task via live preview or draft document. Receive full source codes, documentation, or ready-to-submit files.',
      'exp4.date': 'Step 4 · Guarantee & Coaching',
      'exp4.role': 'Free Revisions & Code Walkthrough',
      'exp4.org': 'Ready for Presentation & Defense',
      'exp4.desc': 'Got feedback from your lecturer? We provide free revisions and code explanations so you are fully prepared for presentations.',

      'contact.eyebrow': 'Consultation & Order',
      'contact.title': 'Have an urgent assignment? Consult with us now.',
      'contact.emailLabel': 'Email Order',
      'contact.locationLabel': 'Service Coverage',
      'contact.locationValue': 'Indonesia (Online 24/7)',
      'contact.availLabel': 'Availability',
      'contact.availValue': 'Ready for Urgent Tasks (24H)',
      'contact.socialLabel': 'Direct Order Channels',
      'contact.nameLabel': 'Your Name',
      'contact.emailInputLabel': 'Your Email or WhatsApp Number',
      'contact.subjectLabel': 'Assignment Type (Web, Paper, Journal, Other)',
      'contact.messageLabel': 'Assignment Brief & Deadline Date',
      'contact.send': 'Submit Task Order',
      'contact.success': 'Your task brief has been submitted! Our team will contact you shortly.',
      'contact.error': 'Please fill in all fields correctly.',

      'nav.preview': 'Live Preview',
      'preview.eyebrow': 'Task Interactive Simulation',
      'preview.title': 'Live Website Task Preview Mockup.',
      'preview.desc': 'Test drive interactive web assignments inside modern desktop and smartphone frames. Experience code responsiveness, styling, and functionality before submission!',
      'preview.desktop': 'Desktop',
      'preview.mobile': 'Mobile',
      'preview.autoscroll': 'Auto Scroll',
      'preview.autoscroll_active': 'Pause Scroll',
      'preview.resetscroll': 'Reset Scroll',
      'preview.reload': 'Reload',
      'preview.openNewTab': 'Open in New Tab',
      'preview.hint': 'Interactive: Click, scroll, or test buttons inside the frame.',
      'preview.loading': 'Loading interactive preview...',

      'footer.desc': 'Stackly — Trusted academic & coding assignment service for web programming, research papers, journals, and coursework. Fast, reliable, and guaranteed.',
      'footer.nav': 'Navigation',
      'footer.location': 'Location',
      'footer.locationValue': 'Indonesia',
      'footer.social': 'Social Media',
      'footer.copyright': '© 2026 STACKLY. All rights reserved.'
    },

    id: {
      'a11y.skip': 'Langsung ke konten utama',

      'nav.home': 'Beranda',
      'nav.about': 'Tentang Kami',
      'nav.techstack': 'Layanan & Stack',
      'nav.projects': 'Contoh Tugas',
      'nav.preview': 'Live Preview',
      'nav.experience': 'Alur Order',
      'nav.contact': 'Order Tugas',

      'hero.label': 'JASA JOKI TUGAS & CODING TERPERCAYA',
      'hero.title1': 'Solusi Cepat Tugas Web,',
      'hero.title2': 'Pembuatan Makalah & Jurnal.',
      'hero.desc': 'Stackly hadir membantu pengerjaan tugas pemrograman web (frontend & backend), pembuatan makalah ilmiah, artikel jurnal terakreditasi, hingga tugas kuliah lainnya dengan cepat, rapi, dan bergaransi bebas plagiasi.',
      'hero.cta1': 'Order Tugas Sekarang',
      'hero.cta2': 'Konsultasi Gratis',
      'hero.status': 'Buka Order · Fast Response',

      'about.eyebrow': 'Tentang Stackly',
      'about.title': 'Selesaikan tugas kuliah tanpa stres, rapi, dan tepat waktu.',
      'about.p1': 'Stackly adalah penyedia jasa bantuan pengerjaan tugas akademik dan pemrograman terpercaya. Kami hadir untuk membantu mahasiswa dan pelajar yang memiliki kendala waktu, deadline yang mendesak, maupun materi coding dan penulisan ilmiah yang sulit dipahami.',
      'about.p2': 'Layanan utama kami mencakup pembuatan tugas aplikasi web lengkap (HTML, CSS, JS, PHP, database MySQL), pembuatan makalah ilmiah terstruktur, artikel jurnal standar Sinta/internasional, laporan praktikum, hingga bimbingan tugas akhir dengan penjelasan alur kode dan garansi revisi gratis.',
      'about.tag1': 'Tugas Coding Web',
      'about.tag2': 'Makalah & Karya Tulis',
      'about.tag3': 'Artikel Jurnal Ilmiah',
      'about.tag4': 'Laporan & Tugas Akhir',
      'about.tag5': 'Garansi Bebas Plagiasi',
      'about.stat1': 'Tugas Selesai',
      'about.stat2': 'Kepuasan Nilai A/B',
      'about.stat3': 'Fast Response 24/7',

      'tech.eyebrow': 'Layanan & Keahlian',
      'tech.title': 'Teknologi web, framework, dan perangkat penulisan tugas yang kami kuasai.',

      'projects.eyebrow': 'Portofolio Contoh Tugas',
      'projects.title': 'Contoh tugas dan proyek mahasiswa yang telah sukses kami kerjakan.',
      'proj.demo': 'Live Preview',
      'proj.code': 'Info Tugas',

      'proj1.title': 'Sistem Informasi Akademik Kampus',
      'proj1.desc': 'Tugas besar pemrograman web & basis data untuk pengelolaan data mahasiswa, nilai, dan jadwal kuliah dengan antarmuka administratif yang rapi.',
      'proj2.title': 'Toko Online E-Commerce Responsif',
      'proj2.desc': 'Tugas kuliah web development berupa website toko online responsif dengan katalog produk, keranjang belanja interaktif, dan alur checkout ringan.',
      'proj3.title': 'Aplikasi Manajemen Tugas Kanban',
      'proj3.desc': 'Tugas pemrograman web lanjut berupa aplikasi manajemen tugas bergaya Kanban dengan checklist interaktif, kategori prioritas, dan progress sprint.',
      'proj4.title': 'Platform Publikasi Jurnal & Makalah Ilmiah',
      'proj4.desc': 'Tugas karya tulis dan web portal publikasi ilmiah dengan tata letak artikel berstandar akademik, sistem sitasi, dan fitur diskusi pembaca.',

      'exp.eyebrow': 'Alur Pemesanan',
      'exp.title': 'Cara order tugas di Stackly: Mudah, transparan, dan bergaransi.',
      'exp1.date': 'Langkah 1 · Konsultasi Brief',
      'exp1.role': 'Kirim Soal & Ketentuan Tugas',
      'exp1.org': 'Konsultasi Gratis via WhatsApp / Email',
      'exp1.desc': 'Kirimkan modul soal, instruksi dosen/guru, kriteria penilaian, dan tenggat waktu (deadline). Kami akan pelajari secara detail dan cepat.',
      'exp2.date': 'Langkah 2 · Kesepakatan & Pengerjaan',
      'exp2.role': 'Harga Ramah Mahasiswa & Langsung Dikerjakan',
      'exp2.org': 'Dikerjakan Langsung oleh Tim Ahli',
      'exp2.desc': 'Dapatkan estimasi biaya transparan dan terjangkau kantong mahasiswa. Setelah disepakati, pengerjaan tugas langsung dimulai.',
      'exp3.date': 'Langkah 3 · Review & Penyerahan File',
      'exp3.role': 'Preview Hasil & Serah Terima File Lengkap',
      'exp3.org': 'Dicek Teliti & Lolos Uji Bebas Plagiasi',
      'exp3.desc': 'Kami kirimkan preview hasil jadi tugas. Anda akan mendapatkan seluruh file source code, panduan instalasi, atau dokumen makalah siap kumpul.',
      'exp4.date': 'Langkah 4 · Garansi & Bimbingan',
      'exp4.role': 'Garansi Revisi Gratis & Penjelasan Alur',
      'exp4.org': 'Siap Presentasi & Ujian Tanpa Bingung',
      'exp4.desc': 'Ada revisi dari dosen? Kami sediakan revisi gratis serta penjelasan alur kode program atau isi tugas agar Anda siap saat presentasi.',

      'contact.eyebrow': 'Konsultasi & Order Tugas',
      'contact.title': 'Deadline tugas sudah mepet? Konsultasikan sekarang juga.',
      'contact.emailLabel': 'Email Order',
      'contact.locationLabel': 'Jangkauan Layanan',
      'contact.locationValue': 'Seluruh Indonesia (Online 24/7)',
      'contact.availLabel': 'Ketersediaan',
      'contact.availValue': 'Siap Terima Tugas Kilat (24 Jam)',
      'contact.socialLabel': 'Saluran Konsultasi Langsung',
      'contact.nameLabel': 'Nama Anda',
      'contact.emailInputLabel': 'Email atau No. WhatsApp Anda',
      'contact.subjectLabel': 'Jenis Tugas (Web, Makalah, Jurnal, Tugas Lain)',
      'contact.messageLabel': 'Detail Soal/Instruksi Tugas & Deadline',
      'contact.send': 'Kirim Permintaan Tugas',
      'contact.success': 'Permintaan tugas berhasil terkirim! Tim Stackly akan segera menghubungi Anda.',
      'contact.error': 'Mohon isi semua kolom dengan benar.',

      'nav.preview': 'Live Preview',
      'preview.eyebrow': 'Simulasi Hasil Tugas',
      'preview.title': 'Preview Interaktif Hasil Tugas Web.',
      'preview.desc': 'Uji coba langsung hasil pengerjaan tugas website di dalam frame desktop dan smartphone modern. Buktikan hasil kerja yang rapi, responsif, dan interaktif sebelum dikumpulkan!',
      'preview.desktop': 'Desktop',
      'preview.mobile': 'Mobile',
      'preview.autoscroll': 'Auto Scroll',
      'preview.autoscroll_active': 'Jeda Scroll',
      'preview.resetscroll': 'Reset Scroll',
      'preview.reload': 'Muat Ulang',
      'preview.openNewTab': 'Buka di Tab Baru',
      'preview.hint': 'Interaktif: Klik, gulir, atau coba tombol di dalam frame.',
      'preview.loading': 'Memuat pratinjau interaktif...',

      'footer.desc': 'Stackly — Layanan joki tugas terpercaya untuk pemrograman web, pembuatan makalah ilmiah, jurnal terakreditasi, dan tugas kuliah lainnya. Cepat, berkualitas, dan bergaransi.',
      'footer.nav': 'Navigasi',
      'footer.location': 'Lokasi',
      'footer.locationValue': 'Indonesia',
      'footer.social': 'Media Sosial & Chat',
      'footer.copyright': '© 2026 STACKLY. Seluruh hak cipta dilindungi.'
    }
  };

  const STORAGE_KEY_LANG = 'rizqi-portfolio-lang';
  const DEFAULT_LANG = 'id';

  /* ---------------------------------------------------------
     2. LANGUAGE SWITCHER
     --------------------------------------------------------- */
  function getStoredLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_LANG);
      return stored === 'id' || stored === 'en' ? stored : null;
    } catch (e) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY_LANG, lang);
    } catch (e) {
      /* localStorage unavailable — fail silently, language still switches for this session */
    }
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      }
    });

    document.documentElement.setAttribute('lang', lang);
  }

  function updateLangButtons(lang) {
    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function setLanguage(lang) {
    applyTranslations(lang);
    updateLangButtons(lang);
    storeLang(lang);
  }

  function initLanguageSwitcher() {
    const initialLang = getStoredLang() || DEFAULT_LANG;
    setLanguage(initialLang);

    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
      });
    });
  }

  /* ---------------------------------------------------------
     3. BURGER MENU
     --------------------------------------------------------- */
  function initBurgerMenu() {
    const burgerBtn = document.getElementById('burgerBtn');
    const burgerIcon = document.getElementById('burgerIcon');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');
    const navLinks = document.querySelectorAll('.nav-menu__link');

    if (!burgerBtn || !navMenu || !navOverlay) return;

    function openMenu() {
      navMenu.classList.add('is-open');
      navOverlay.classList.add('is-visible');
      burgerBtn.classList.add('is-open');
      burgerBtn.setAttribute('aria-expanded', 'true');
      burgerBtn.setAttribute('aria-label', 'Close menu');
      if (burgerIcon) {
        burgerIcon.classList.remove('bi-list');
        burgerIcon.classList.add('bi-x-lg');
      }
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      navMenu.classList.remove('is-open');
      navOverlay.classList.remove('is-visible');
      burgerBtn.classList.remove('is-open');
      burgerBtn.setAttribute('aria-expanded', 'false');
      burgerBtn.setAttribute('aria-label', 'Open menu');
      if (burgerIcon) {
        burgerIcon.classList.remove('bi-x-lg');
        burgerIcon.classList.add('bi-list');
      }
      document.body.style.overflow = '';
    }

    function toggleMenu() {
      if (navMenu.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    burgerBtn.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', closeMenu);

    navLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        closeMenu();
        burgerBtn.focus();
      }
    });
  }

  /* ---------------------------------------------------------
     4. NAVBAR SCROLL STATE
     --------------------------------------------------------- */
  function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    function updateNavbarState() {
      if (window.scrollY > 12) {
        navbar.classList.add('is-scrolled');
      } else {
        navbar.classList.remove('is-scrolled');
      }
    }

    updateNavbarState();
    window.addEventListener('scroll', updateNavbarState, { passive: true });
  }

  /* ---------------------------------------------------------
     5. ACTIVE NAVIGATION ON SCROLL
     --------------------------------------------------------- */
  function initActiveNavigation() {
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.nav-menu__link');

    if (!sections.length || !navLinks.length || !('IntersectionObserver' in window)) return;

    const linkMap = {};
    navLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        linkMap[href.slice(1)] = link;
      }
    });

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(function (link) {
              link.classList.remove('is-active');
            });
            if (linkMap[id]) {
              linkMap[id].classList.add('is-active');
            }
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ---------------------------------------------------------
     6. SCROLL REVEAL
     --------------------------------------------------------- */
  function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!('IntersectionObserver' in window) || prefersReducedMotion) {
      revealEls.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------------------------------------------------------
     7. CONTACT FORM
     --------------------------------------------------------- */
  function initContactForm() {
    var form = document.getElementById('contactForm');
    var status = document.getElementById('formStatus');
    if (!form || !status) return;

    function getCurrentLang() {
      return getStoredLang() || DEFAULT_LANG;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var subject = form.elements.subject.value.trim();
      var message = form.elements.message.value.trim();

      var lang = getCurrentLang();
      var dict = translations[lang] || translations[DEFAULT_LANG];

      /* Basic validation */
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!name || !email || !subject || !message || !emailRegex.test(email)) {
        status.textContent = dict['contact.error'];
        status.className = 'contact-form__status is-error';
        return;
      }

      /* Simulate send (no backend) */
      var submitBtn = form.querySelector('.contact-form__submit');
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.6';

      setTimeout(function () {
        status.textContent = dict['contact.success'];
        status.className = 'contact-form__status is-success';
        form.reset();
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';

        setTimeout(function () {
          status.textContent = '';
          status.className = 'contact-form__status';
        }, 5000);
      }, 1200);
    });
  }

  /* ---------------------------------------------------------
     8. LIVE PREVIEW MOCKUP
     --------------------------------------------------------- */
  function initLivePreviewMockup() {
    var mockupFrame = document.getElementById('mockupFrame');
    var previewIframe = document.getElementById('previewIframe');
    var desktopViewBtn = document.getElementById('desktopViewBtn');
    var mobileViewBtn = document.getElementById('mobileViewBtn');
    var autoScrollBtn = document.getElementById('autoScrollBtn');
    var autoScrollIcon = document.getElementById('autoScrollIcon');
    var autoScrollText = document.getElementById('autoScrollText');
    var resetScrollBtn = document.getElementById('resetScrollBtn');
    var browserReloadBtn = document.getElementById('browserReloadBtn');
    var openExternalBtn = document.getElementById('openExternalBtn');
    var browserUrlText = document.getElementById('browserUrlText');
    var statusTime = document.getElementById('statusTime');
    var mockupLoader = document.getElementById('mockupLoader');
    var projectTabs = document.querySelectorAll('.preview-tab');
    var previewTriggers = document.querySelectorAll('.js-preview-trigger');

    if (!mockupFrame || !previewIframe) return;

    var projects = {
      ecommerce: {
        file: 'assets/demos/ecommerce.html',
        url: 'https://storefront.stackly.dev'
      },
      student: {
        file: 'assets/demos/student-system.html',
        url: 'https://student-admin.stackly.dev'
      },
      task: {
        file: 'assets/demos/task-app.html',
        url: 'https://taskflow.stackly.dev'
      },
      blog: {
        file: 'assets/demos/blog-platform.html',
        url: 'https://insights.stackly.dev'
      }
    };

    /* --- Device View Switcher (Desktop vs Mobile) --- */
    function setDeviceMode(mode) {
      if (mode === 'mobile') {
        mockupFrame.classList.remove('is-desktop');
        mockupFrame.classList.add('is-mobile');
        if (mobileViewBtn) {
          mobileViewBtn.classList.add('is-active');
          mobileViewBtn.setAttribute('aria-pressed', 'true');
        }
        if (desktopViewBtn) {
          desktopViewBtn.classList.remove('is-active');
          desktopViewBtn.setAttribute('aria-pressed', 'false');
        }
      } else {
        mockupFrame.classList.remove('is-mobile');
        mockupFrame.classList.add('is-desktop');
        if (desktopViewBtn) {
          desktopViewBtn.classList.add('is-active');
          desktopViewBtn.setAttribute('aria-pressed', 'true');
        }
        if (mobileViewBtn) {
          mobileViewBtn.classList.remove('is-active');
          mobileViewBtn.setAttribute('aria-pressed', 'false');
        }
      }
    }

    if (desktopViewBtn) {
      desktopViewBtn.addEventListener('click', function () {
        setDeviceMode('desktop');
      });
    }

    if (mobileViewBtn) {
      mobileViewBtn.addEventListener('click', function () {
        setDeviceMode('mobile');
      });
    }

    /* --- Auto Scroll & Reset Scroll Controller --- */
    var isAutoScrolling = false;
    var autoScrollAnim = null;
    var isPausedAtEdge = false;
    var iframeHandlingScroll = false;

    window.addEventListener('message', function (e) {
      if (e.data && e.data.type === 'AUTO_SCROLL_ACK') {
        iframeHandlingScroll = true;
        if (autoScrollAnim) {
          cancelAnimationFrame(autoScrollAnim);
          autoScrollAnim = null;
        }
      }
    });

    function sendIframeMessage(data) {
      try {
        if (previewIframe && previewIframe.contentWindow) {
          previewIframe.contentWindow.postMessage(data, '*');
        }
      } catch (err) {
        /* Ignore cross-origin error */
      }
    }

    function updateAutoScrollUI(active) {
      var lang = getStoredLang() || DEFAULT_LANG;
      var dict = translations[lang] || translations[DEFAULT_LANG];

      if (active) {
        if (autoScrollBtn) {
          autoScrollBtn.classList.add('is-scrolling');
          autoScrollBtn.setAttribute('aria-pressed', 'true');
        }
        if (autoScrollIcon) {
          autoScrollIcon.className = 'bi bi-pause-circle';
        }
        if (autoScrollText) {
          autoScrollText.textContent = dict['preview.autoscroll_active'] || 'Pause Scroll';
        }
      } else {
        if (autoScrollBtn) {
          autoScrollBtn.classList.remove('is-scrolling');
          autoScrollBtn.setAttribute('aria-pressed', 'false');
        }
        if (autoScrollIcon) {
          autoScrollIcon.className = 'bi bi-play-circle';
        }
        if (autoScrollText) {
          autoScrollText.textContent = dict['preview.autoscroll'] || 'Auto Scroll';
        }
      }
    }

    function stopAutoScroll() {
      isAutoScrolling = false;
      if (autoScrollAnim) {
        cancelAnimationFrame(autoScrollAnim);
        autoScrollAnim = null;
      }
      updateAutoScrollUI(false);
      sendIframeMessage({ type: 'STOP_AUTO_SCROLL' });
    }

    function startAutoScroll() {
      if (isAutoScrolling) return;
      isAutoScrolling = true;
      isPausedAtEdge = false;
      iframeHandlingScroll = false;
      updateAutoScrollUI(true);

      /* Send message to iframe (works in all environments) */
      sendIframeMessage({ type: 'START_AUTO_SCROLL', speed: 1.2 });

      /* Fallback direct scroll if iframe does not acknowledge via message */
      setTimeout(function () {
        if (!isAutoScrolling || iframeHandlingScroll) return;

        var speed = 1.2;
        function step() {
          if (!isAutoScrolling || iframeHandlingScroll) return;

          try {
            var win = previewIframe.contentWindow;
            var doc = previewIframe.contentDocument || (win && win.document);
            if (doc && win) {
              var scrollEl = doc.scrollingElement || doc.documentElement || doc.body;
              var max = scrollEl.scrollHeight - win.innerHeight;
              var current = win.pageYOffset || scrollEl.scrollTop || 0;

              if (max > 10 && current >= max - 4) {
                if (!isPausedAtEdge) {
                  isPausedAtEdge = true;
                  setTimeout(function () {
                    if (!isAutoScrolling) return;
                    try { win.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) {}
                    setTimeout(function () {
                      isPausedAtEdge = false;
                      if (isAutoScrolling && !iframeHandlingScroll) {
                        autoScrollAnim = requestAnimationFrame(step);
                      }
                    }, 900);
                  }, 1200);
                }
                return;
              } else if (!isPausedAtEdge) {
                win.scrollBy(0, speed);
              }
            }
          } catch (e) {
            /* Fallback handled inside iframe by message listener */
          }

          autoScrollAnim = requestAnimationFrame(step);
        }

        autoScrollAnim = requestAnimationFrame(step);
      }, 100);
    }

    function toggleAutoScroll() {
      if (isAutoScrolling) {
        stopAutoScroll();
      } else {
        startAutoScroll();
      }
    }

    function resetScroll() {
      stopAutoScroll();
      sendIframeMessage({ type: 'RESET_SCROLL' });

      try {
        var win = previewIframe.contentWindow;
        if (win) {
          win.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } catch (e) {
        /* Handled by postMessage */
      }
    }

    if (autoScrollBtn) {
      autoScrollBtn.addEventListener('click', toggleAutoScroll);
    }

    if (resetScrollBtn) {
      resetScrollBtn.addEventListener('click', resetScroll);
    }

    /* --- Project Tabs Switcher --- */
    function selectProject(projKey) {
      var proj = projects[projKey];
      if (!proj) return;

      projectTabs.forEach(function (tab) {
        var isMatch = tab.getAttribute('data-project') === projKey;
        tab.classList.toggle('is-active', isMatch);
        tab.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      });

      stopAutoScroll();

      if (mockupLoader) {
        mockupLoader.classList.add('is-loading');
      }

      if (browserUrlText) {
        browserUrlText.textContent = proj.url;
      }
      if (openExternalBtn) {
        openExternalBtn.setAttribute('href', proj.file);
      }

      previewIframe.src = proj.file;
    }

    projectTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var projKey = tab.getAttribute('data-project');
        selectProject(projKey);
      });
    });

    /* Live Demo buttons from project cards */
    previewTriggers.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var projKey = btn.getAttribute('data-project');
        selectProject(projKey);
        var previewSection = document.getElementById('preview');
        if (previewSection) {
          previewSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    /* Browser reload button */
    if (browserReloadBtn) {
      browserReloadBtn.addEventListener('click', function () {
        stopAutoScroll();
        if (mockupLoader) {
          mockupLoader.classList.add('is-loading');
        }
        previewIframe.src = previewIframe.src;
      });
    }

    previewIframe.addEventListener('load', function () {
      if (mockupLoader) {
        mockupLoader.classList.remove('is-loading');
      }
    });

    /* Smartphone status bar clock */
    function updateStatusTime() {
      if (!statusTime) return;
      var now = new Date();
      var h = String(now.getHours()).padStart(2, '0');
      var m = String(now.getMinutes()).padStart(2, '0');
      statusTime.textContent = h + ':' + m;
    }
    updateStatusTime();
    setInterval(updateStatusTime, 30000);
  }

  /* ---------------------------------------------------------
     INIT
     --------------------------------------------------------- */
  function initAll() {
    initLanguageSwitcher();
    initBurgerMenu();
    initNavbarScroll();
    initActiveNavigation();
    initScrollReveal();
    initContactForm();
    initLivePreviewMockup();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
