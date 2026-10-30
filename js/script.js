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
      'nav.services': 'Services',
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

      'services.eyebrow': 'SERVICES & EXPERTISE',
      'services.title': 'Tailored Digital & Academic Solutions.',
      'services.desc': 'High-standard coding assignments, academic papers, research, and coursework completed on time with quality guarantee.',
      'services.featuredBadge': 'Featured Service',
      'services.detailCta': 'View Details',

      'service1.title': 'Website Development Service',
      'service1.tagline': 'Modern web applications, custom features, fullstack architectures, and responsive UI.',
      'service2.title': 'Scientific Papers',
      'service2.tagline': 'Structured academic papers, credible scientific references, and anti-plagiarism guaranteed.',
      'service3.title': 'Presentation & Slides (PPT)',
      'service3.tagline': 'Elegant slide deck designs, clear infographics, and ready-to-present visuals.',
      'service4.title': 'Course Material Resume',
      'service4.tagline': 'Essential executive summaries from textbooks, lecture modules, and scholarly papers.',
      'service5.title': 'Laboratory Reports',
      'service5.tagline': 'Accurate data analysis, experimental test results, and compliant lab templates.',
      'service6.title': 'Study Guide & Material Summary',
      'service6.tagline': 'Targeted exam preparation, comprehensive cheatsheets, and concept mind maps.',
      'service7.title': 'Individual Assignments',
      'service7.tagline': 'Meticulous individual homework and essays adhering strictly to your professor\'s rubric.',
      'service8.title': 'Group Projects',
      'service8.tagline': 'Collaborative team coursework, balanced task distribution, and unified submission files.',

      'modal.scopeTitle': 'Scope of Work',
      'modal.requirementsTitle': 'Client Requirements & Details',
      'modal.priceLabel': 'Pricing Info',
      'modal.priceValue': 'Contact admin for pricing and quotation',
      'modal.estimateLabel': 'Estimated Turnaround',
      'modal.estimateValue': 'Consult your turnaround deadline with admin',
      'modal.footerNote': 'Order form auto-fills and is ready to submit',
      'modal.orderCta': 'Order Service',

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
      'nav.services': 'Daftar Layanan',
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

      'services.eyebrow': 'DAFTAR LAYANAN',
      'services.title': 'Layanan Digital & Akademik Profesional.',
      'services.desc': 'Solusi pengerjaan tugas coding dan akademik terstandar tinggi, transparan, cepat, dan bergaransi.',
      'services.featuredBadge': 'Layanan Unggulan',
      'services.detailCta': 'Lihat Detail',

      'service1.title': 'Jasa Pembuatan Website',
      'service1.tagline': 'Pengembangan aplikasi web modern, landing page, sistem informasi, dan tugas web responsif fullstack.',
      'service2.title': 'Makalah',
      'service2.tagline': 'Karya ilmiah terstruktur, referensi jurnal kredibel & bebas plagiasi.',
      'service3.title': 'PPT / Presentasi',
      'service3.tagline': 'Desain slide visual elegan, infografis komunikatif & siap sidang.',
      'service4.title': 'Resume Materi',
      'service4.tagline': 'Ringkasan esensial dari buku, bab materi, & artikel perkuliahan.',
      'service5.title': 'Laporan Praktikum',
      'service5.tagline': 'Analisis data percobaan akurat, grafik hasil uji, & template lab baku.',
      'service6.title': 'Rangkuman Materi',
      'service6.tagline': 'Intisari persiapan kuis, UTS/UAS, dan cheatsheet materi padat komprehensif.',
      'service7.title': 'Tugas Individu',
      'service7.tagline': 'Tugas mandiri harian/mingguan cermat, teliti & sesuai kriteria dosen.',
      'service8.title': 'Tugas Kelompok',
      'service8.tagline': 'Proyek tim kolaboratif, pembagian tugas merata & penyerahan terpadu.',

      'modal.scopeTitle': 'Cakupan Layanan',
      'modal.requirementsTitle': 'Informasi & Kebutuhan Pemesan',
      'modal.priceLabel': 'Informasi Harga',
      'modal.priceValue': 'Hubungi admin untuk informasi harga dan estimasi',
      'modal.estimateLabel': 'Estimasi Pengerjaan',
      'modal.estimateValue': 'Konsultasikan deadline pengerjaan bersama admin',
      'modal.footerNote': 'Formulir otomatis terisi & siap dikirim',
      'modal.orderCta': 'Pesan Layanan',

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

    if (typeof refreshServiceModalLanguage === 'function') {
      refreshServiceModalLanguage(lang);
    }
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
     9. DAFTAR LAYANAN (SERVICES BENTO GRID & DETAIL MODAL)
     --------------------------------------------------------- */
  var servicesData = {
    '01': {
      num: '01',
      icon: 'bi-laptop',
      id: {
        title: 'Jasa Pembuatan Website',
        desc: 'Layanan rancang bangun website profesional dan tugas pemrograman web dari frontend interaktif hingga backend & database terintegrasi.',
        scope: [
          'Pengembangan Website Responsif (Desktop, Tablet, Mobile)',
          'Arsitektur Frontend Modern & Bersih (HTML5, CSS3, JavaScript, React)',
          'Pemrograman Backend & Integrasi Database (Node.js, Express, PHP, MySQL)',
          'Fitur Lengkap: CRUD, Autentikasi Pengguna, Filter Pencarian & Dashboard Admin',
          'Penyerahan Source Code Lengkap + Panduan Instalasi & Presentasi'
        ],
        requirements: [
          { label: 'Jenis Website', desc: 'Landing page, web app, e-commerce, sistem informasi kampus, portfolio, dsb.' },
          { label: 'Kebutuhan Fitur', desc: 'Autentikasi login/register, CRUD database, dashboard admin, simulasi checkout.' },
          { label: 'Desain & Tampilan', desc: 'Tema modern dark/light mode, wireframe referensi, atau acuan desain khusus.' },
          { label: 'Responsivitas', desc: 'Optimasi tampilan untuk smartphone, tablet, laptop, hingga monitor desktop.' },
          { label: 'Teknologi yang Dibutuhkan', desc: 'Stack bahasa dan database yang diwajibkan oleh dosen atau kebutuhan proyek.' },
          { label: 'Kebutuhan Tambahan', desc: 'Domain/hosting, dokumentasi kode, penjelasan alur program, atau persiapan presentasi.' }
        ],
        subject: 'Pemesanan Layanan Jasa Pembuatan Website',
        messageTemplate: 'Halo STACKLY, saya tertarik memesan Jasa Pembuatan Website.\n\nJenis Website: (Landing Page / Web App / Toko Online / Tugas Kampus)\nFitur yang Dibutuhkan: \nDesain & Tampilan: \nTeknologi yang Dibutuhkan: \nDeadline Pengerjaan: \nKebutuhan Tambahan: '
      },
      en: {
        title: 'Website Development Service',
        desc: 'Professional end-to-end web development services for assignments and custom digital products from interactive UI to integrated databases.',
        scope: [
          'Fully Responsive Web Design (Desktop, Tablet, Smartphone)',
          'Modern Frontend Architecture (HTML5, CSS3, JavaScript, React)',
          'Backend Development & Database Integration (Node.js, Express, PHP, MySQL)',
          'Core Features: CRUD operations, Auth, Search Filters & Admin Panel',
          'Complete Source Code Handover + Setup & Presentation Guide'
        ],
        requirements: [
          { label: 'Website Type', desc: 'Landing page, web application, e-commerce, student management portal, portfolio, etc.' },
          { label: 'Required Features', desc: 'User authentication, database CRUD, admin dashboard, interactive forms.' },
          { label: 'UI / UX Design', desc: 'Modern dark/light theme, wireframes, reference links, or brand guidelines.' },
          { label: 'Responsiveness', desc: 'Optimization across mobile phones, tablets, laptops, and large monitors.' },
          { label: 'Tech Stack', desc: 'Languages and database engines required by your professor or project brief.' },
          { label: 'Extra Needs', desc: 'Hosting setup, codebase documentation, walkthrough coaching, or defense prep.' }
        ],
        subject: 'Order Service - Website Development Service',
        messageTemplate: 'Hello STACKLY, I am interested in ordering the Website Development Service.\n\nWebsite Type: (Landing Page / Web App / Storefront / Coursework)\nRequired Features: \nDesign & Style Preference: \nRequired Tech Stack: \nTurnaround Deadline: \nAdditional Notes: '
      }
    },
    '02': {
      num: '02',
      icon: 'bi-journal-text',
      id: {
        title: 'Makalah',
        desc: 'Penulisan makalah akademik dan karya tulis ilmiah komprehensif dengan kaidah penulisan baku, analisis mendalam, dan sitasi valid.',
        scope: [
          'Penyusunan Makalah Lengkap (Cover, Kata Pengantar, Pendahuluan, Pembahasan, Penutup)',
          'Referensi Ilmiah Terkini (Jurnal terakreditasi Sinta/Scopus, buku rujukan resmi)',
          'Sitasi & Daftar Pustaka Standar (Format APA, IEEE, Harvard, atau Vancouver)',
          'Format Dokumen Rapi Sesuai Template Kampus (Font, Margin 4-4-3-3, Spasi baku)',
          'Garansi Lolos Turnitin / Bebas Plagiasi & Revisi Gratis'
        ],
        requirements: [
          { label: 'Topik atau Judul', desc: 'Tema spesifik atau arahan silabus dari dosen pengampu.' },
          { label: 'Struktur Makalah', desc: 'Sistematika bab khusus atau pedoman penulisan fakultas.' },
          { label: 'Jumlah Halaman', desc: 'Target kuota halaman atau batas minimal/maksimal kata.' },
          { label: 'Format Dokumen', desc: 'Ukuran kertas, margin (misal 4-4-3-3), jenis font, dan spasi dokumen.' },
          { label: 'Referensi / Sumber Materi', desc: 'Batasan tahun terbit rujukan atau preferensi jurnal tertentu.' }
        ],
        subject: 'Pemesanan Layanan Makalah',
        messageTemplate: 'Halo STACKLY, saya tertarik menggunakan layanan Makalah.\n\nTopik atau Judul: \nStruktur Makalah: \nJumlah Halaman: \nFormat Dokumen: (DOCX / PDF)\nReferensi / Sumber Materi: \nDeadline: \nKebutuhan Tambahan: '
      },
      en: {
        title: 'Scientific Papers',
        desc: 'Comprehensive scientific papers and academic essays written with strict scholarship, thorough analysis, and valid citations.',
        scope: [
          'Complete Academic Structure (Cover, Abstract, Introduction, Discussion, Conclusion)',
          'Current Scholarly Sources (Peer-reviewed journals, textbooks, accredited papers)',
          'Standardized Citations & Bibliography (APA, IEEE, Harvard, or Vancouver formats)',
          'Clean Typography & Document Margins adhering to campus guidelines',
          'Zero-Plagiarism Guarantee (Turnitin-safe) & Free Revisions'
        ],
        requirements: [
          { label: 'Topic / Title', desc: 'Specific research topic, assignment question, or syllabus theme.' },
          { label: 'Paper Structure', desc: 'Specific chapter outlines or departmental formatting guidelines.' },
          { label: 'Page / Word Count', desc: 'Target page quota or minimum/maximum word limits.' },
          { label: 'Document Format', desc: 'Paper size, margins, font face, spacing, and DOCX/PDF export.' },
          { label: 'References & Sources', desc: 'Year publication limits, accredited journal tier, or provided materials.' }
        ],
        subject: 'Order Service - Scientific Paper',
        messageTemplate: 'Hello STACKLY, I am interested in ordering the Scientific Paper service.\n\nTopic or Title: \nPaper Structure: \nPage Count: \nDocument Format: (DOCX / PDF)\nReferences / Materials: \nDeadline: \nAdditional Notes: '
      }
    },
    '03': {
      num: '03',
      icon: 'bi-easel2',
      id: {
        title: 'PPT / Presentasi',
        desc: 'Desain slide presentasi modern, persuasif, dan visual-driven untuk sidang, seminar, tugas kuliah, maupun pitching proyek.',
        scope: [
          'Desain Visual Futuristik & Elegan (Bukan template standar yang membosankan)',
          'Visualisasi Data, Diagram Alur, & Infografis Konseptual yang Mudah Dipahami',
          'Pemadatan Materi Menjadi Poin-poin Kunci (Key Takeaways) yang Tajam',
          'Transisi & Animasi Halus Tanpa Mengurangi Formalitas',
          'File Master Presentasi (.PPTX) yang Dapat Diedit Sepenuhnya + File PDF'
        ],
        requirements: [
          { label: 'Topik Presentasi', desc: 'Tema materi kuliah, proposal proyek, atau hasil riset.' },
          { label: 'Jumlah Slide', desc: 'Estimasi jumlah slide atau alokasi durasi waktu presentasi.' },
          { label: 'Desain Presentasi', desc: 'Preferensi palet warna, gaya modern/minimalis, atau template institusi.' },
          { label: 'Materi yang Dibutuhkan', desc: 'Dokumen materi dasar, draft makalah, atau pointer materi.' },
          { label: 'Format File', desc: 'PPTX, PDF, Google Slides, serta rasio layar (16:9 widescreen).' }
        ],
        subject: 'Pemesanan Layanan PPT / Presentasi',
        messageTemplate: 'Halo STACKLY, saya tertarik memesan layanan PPT / Presentasi.\n\nTopik Presentasi: \nJumlah Slide: \nDesain Presentasi: \nMateri yang Dibutuhkan: \nFormat File: (PPTX / PDF / Google Slides)\nDeadline: \nKebutuhan Tambahan: '
      },
      en: {
        title: 'Presentation & Slides (PPT)',
        desc: 'Compelling, modern slide decks crafted for academic defenses, seminar presentations, team pitches, and coursework.',
        scope: [
          'Sleek Futuristic & Clean Presentation Layouts (Tailor-made, never generic)',
          'Data Visualizations, Workflow Diagrams & Intuitive Concept Infographics',
          'Sharp Content Condensation with high-impact key takeaways',
          'Subtle Professional Motion & Transitions',
          'Fully Editable Master PowerPoint File (.PPTX) + PDF Version'
        ],
        requirements: [
          { label: 'Presentation Topic', desc: 'Course subject, thesis defense topic, project pitch, or case study.' },
          { label: 'Slide Count', desc: 'Expected slide count or presentation duration limit in minutes.' },
          { label: 'Visual Style', desc: 'Preferred color scheme, minimal high-tech look, or institutional template.' },
          { label: 'Provided Materials', desc: 'Source paper, rough lecture notes, outlines, or bullet points.' },
          { label: 'File Output', desc: 'PPTX, PDF, Google Slides, widescreen 16:9 aspect ratio.' }
        ],
        subject: 'Order Service - Presentation Slides (PPT)',
        messageTemplate: 'Hello STACKLY, I am interested in ordering the Presentation Slides (PPT) service.\n\nPresentation Topic: \nSlide Count: \nDesign Preference: \nProvided Materials: \nFile Format: \nDeadline: \nAdditional Notes: '
      }
    },
    '04': {
      num: '04',
      icon: 'bi-card-checklist',
      id: {
        title: 'Resume Materi',
        desc: 'Penyusunan resume substansi materi dari literatur, modul, rekaman perkuliahan, atau artikel ilmiah secara sistematis dan padat.',
        scope: [
          'Ekstraksi Gagasan Pokok & Konsep Kunci secara Komprehensif',
          'Penataan Informasi Hierarkis dengan Heading & Bullet Points Rapi',
          'Penyusunan Glosarium Istilah Penting untuk Memudahkan Pemahaman',
          'Format Dokumen Siap Kumpul (DOCX / PDF) sesuai Panduan Dosen'
        ],
        requirements: [
          { label: 'Topik Materi', desc: 'Judul bab, materi kuliah, artikel ilmiah, atau modul referensi.' },
          { label: 'File atau Sumber Materi', desc: 'Dokumen PDF modul, link materi, atau slide perkuliahan.' },
          { label: 'Tingkat Detail Resume', desc: 'Intisari ringkas, poin pokok, atau resume komprehensif.' },
          { label: 'Format Dokumen', desc: 'Ketentuan margin, font, format file (.docx / .pdf), dan kelengkapan cover.' }
        ],
        subject: 'Pemesanan Layanan Resume Materi',
        messageTemplate: 'Halo STACKLY, saya tertarik memesan layanan Resume Materi.\n\nTopik Materi: \nFile atau Sumber Materi: \nTingkat Detail Resume: (Ringkas / Poin Pokok / Lengkap)\nFormat Dokumen: (DOCX / PDF)\nDeadline: \nKebutuhan Tambahan: '
      },
      en: {
        title: 'Course Material Resume',
        desc: 'Systematic and dense summaries extracting core concepts and thesis arguments from textbooks, lecture recordings, and scholarly articles.',
        scope: [
          'Comprehensive Extraction of Key Theorems, Concepts & Case Studies',
          'Structured Information Architecture with clear headers and bullet points',
          'Terminology Glossaries for swift memorization and review',
          'Ready-to-Submit Academic Document (DOCX / PDF) aligned with coursework rules'
        ],
        requirements: [
          { label: 'Material Topic', desc: 'Chapter title, syllabus unit, journal article, or lecture module.' },
          { label: 'Source File', desc: 'PDF handouts, lecture slides, ebook chapters, or video links.' },
          { label: 'Detail Level', desc: 'Brief executive summary, core key takeaways, or in-depth synthesis.' },
          { label: 'Document Format', desc: 'Page margins, font face, cover page, and file format (DOCX/PDF).' }
        ],
        subject: 'Order Service - Course Material Resume',
        messageTemplate: 'Hello STACKLY, I am interested in ordering the Material Resume service.\n\nTopic / Subject: \nSource Materials: \nDetail Level: \nDocument Format: \nDeadline: \nAdditional Notes: '
      }
    },
    '05': {
      num: '05',
      icon: 'bi-journal-code',
      id: {
        title: 'Laporan Praktikum',
        desc: 'Penulisan laporan praktikum laboratorium dengan analisis data akurat, pembahasan metodologis, dan interpretasi grafik/tabel yang valid.',
        scope: [
          'Sistematika Standar Laboratorium (Tujuan, Teori Dasar, Alat & Bahan, Prosedur)',
          'Pengolahan Data Hasil Praktikum (Tabel, Perhitungan Formula, Grafik, & Screenshot Hasil)',
          'Analisis & Pembahasan Mendalam Terhadap Fenomena Eksperimen',
          'Kesimpulan, Saran, & Jawaban Tugas Pendahuluan / Pertanyaan Akhir'
        ],
        requirements: [
          { label: 'Nama Mata Kuliah', desc: 'Pemrograman, basis data, jaringan, elektronika, IPA/teknik, dll.' },
          { label: 'Topik Praktikum', desc: 'Judul modul percobaan mingguan atau praktikum akhir semester.' },
          { label: 'Format Laporan', desc: 'Template dokumen wajib lab fakultas/program studi.' },
          { label: 'Data Hasil Praktikum', desc: 'Angka pengukuran, log data, kode program, atau tangkapan layar uji.' },
          { label: 'Ketentuan dari Dosen', desc: 'Rubrik khusus penilaian asistensi atau instruksi asisten lab.' }
        ],
        subject: 'Pemesanan Layanan Laporan Praktikum',
        messageTemplate: 'Halo STACKLY, saya tertarik memesan layanan Laporan Praktikum.\n\nNama Mata Kuliah: \nTopik Praktikum: \nFormat Laporan: \nData Hasil Praktikum: \nKetentuan dari Dosen / Asisten Lab: \nDeadline: '
      },
      en: {
        title: 'Laboratory Reports',
        desc: 'Detailed laboratory practical reports with accurate empirical data analysis, methodical discussion, and verified calculation tables.',
        scope: [
          'Standard Lab Structure (Objectives, Theoretical Basis, Apparatus, Methodology)',
          'Data Processing (Observation tables, formulas, charts, and screen captures)',
          'Critical Discussion & Scientific Analysis of experimental results',
          'Conclusions, Recommendations & Complete Pre/Post-Lab Questionnaire Answers'
        ],
        requirements: [
          { label: 'Course Subject', desc: 'Web programming, computer networking, databases, circuit design, physics, etc.' },
          { label: 'Practicum Topic', desc: 'Weekly module experiment title or final lab project.' },
          { label: 'Report Template', desc: 'Standard lab manual formatting guidelines or Word template.' },
          { label: 'Experimental Data', desc: 'Raw measurement logs, sample inputs/outputs, code terminal logs.' },
          { label: 'Instructor Notes', desc: 'Specific grading rubrics from teaching assistants or professors.' }
        ],
        subject: 'Order Service - Laboratory Report',
        messageTemplate: 'Hello STACKLY, I am interested in ordering the Laboratory Report service.\n\nCourse Subject: \nPracticum Topic: \nReport Format: \nLab Output Data: \nInstructor / TA Requirements: \nDeadline: '
      }
    },
    '06': {
      num: '06',
      icon: 'bi-bookmark-star',
      id: {
        title: 'Rangkuman Materi',
        desc: 'Rangkuman ringkas dan terarah untuk persiapan kuis, UTS, UAS, atau ujian sertifikasi dengan fokus pada inti konsep dan pemahaman cepat.',
        scope: [
          'Sintesis Materi Terfokus Berdasarkan Kisi-Kisi Ujian',
          'Mind Map Konseptual & Poin Hafalan / Rumus Utama',
          'Penyusunan Contoh Soal & Pembahasan Kunci',
          'Format Baca Cepat (Quick Cheat-Sheet & Extended Study Guide)'
        ],
        requirements: [
          { label: 'Topik Materi', desc: 'Bahan ajar satu semester, bab spesifik, atau kisi-kisi ujian tertentu.' },
          { label: 'Sumber Materi', desc: 'Buku referensi, kumpulan slide perkuliahan, atau silabus dosen.' },
          { label: 'Panjang Rangkuman', desc: 'Format cheat-sheet ringkas (1-3 halaman) atau panduan belajar lengkap.' },
          { label: 'Format Dokumen', desc: 'File dokumen siap cetak/baca (.pdf / .docx) dengan layout nyaman dibaca.' }
        ],
        subject: 'Pemesanan Layanan Rangkuman Materi',
        messageTemplate: 'Halo STACKLY, saya tertarik memesan layanan Rangkuman Materi.\n\nTopik Materi: \nSumber Materi: \nPanjang Rangkuman: \nFormat Dokumen: (DOCX / PDF)\nDeadline: \nCatatan Tambahan: '
      },
      en: {
        title: 'Study Guide & Material Summary',
        desc: 'Concentrated exam preparation guides, formula cheatsheets, and concept mappings designed for midterms, finals, and certification exams.',
        scope: [
          'Focused Material Synthesis prioritized around official exam rubrics',
          'Conceptual Mind Maps & Core Formula Memorization aids',
          'Sample Questions with detailed step-by-step problem-solving breakdown',
          'Fast Reading Layouts (1-3 page quick reference cheatsheet or extended study book)'
        ],
        requirements: [
          { label: 'Subject Matter', desc: 'Semester syllabus, specific chapters, or targeted exam questions.' },
          { label: 'Source References', desc: 'Textbook titles, slide decks, professor lectures, or past exams.' },
          { label: 'Length & Scope', desc: 'High-density cheatsheet (1-3 pages) or extensive revision booklet.' },
          { label: 'Format Requirements', desc: 'Print-ready or mobile-friendly DOCX/PDF with scannable headings.' }
        ],
        subject: 'Order Service - Study Guide & Material Summary',
        messageTemplate: 'Hello STACKLY, I am interested in ordering the Study Guide / Summary service.\n\nSubject Matter: \nSource References: \nLength & Scope: \nFormat Requirements: \nDeadline: \nAdditional Notes: '
      }
    },
    '07': {
      num: '07',
      icon: 'bi-person-check',
      id: {
        title: 'Tugas Individu',
        desc: 'Bantuan pengerjaan berbagai bentuk tugas mandiri harian/mingguan mahasiswa dengan ketelitian tinggi dan orisinalitas terjamin.',
        scope: [
          'Pengerjaan Tugas Mandiri Sesuai Ketentuan Dosen / Guru',
          'Pengecekan Ketat Terhadap Kriteria & Bobot Rubrik Penilaian',
          'Hasil Pengerjaan Orisinal, Rapi, dan Siap Kumpul',
          'Penjelasan Logika Pengerjaan agar Membantu Pemahaman Mahasiswa'
        ],
        requirements: [
          { label: 'Jenis Tugas', desc: 'Esai, studi kasus, review artikel, latihan soal pemrograman, dsb.' },
          { label: 'Mata Kuliah', desc: 'Bidang studi dan nama mata kuliah terkait.' },
          { label: 'Instruksi Pengerjaan', desc: 'Soal lengkap, lembar kerja, dan rubrik penilaian dosen.' },
          { label: 'Deadline', desc: 'Batas waktu penyerahan (bisa konsultasi untuk pengerjaan kilat/urgent).' },
          { label: 'File Pendukung', desc: 'Modul mata kuliah, materi acuan, atau template yang disyaratkan.' }
        ],
        subject: 'Pemesanan Layanan Tugas Individu',
        messageTemplate: 'Halo STACKLY, saya tertarik memesan layanan Tugas Individu.\n\nJenis Tugas: \nMata Kuliah: \nInstruksi Pengerjaan: \nDeadline: \nFile Pendukung / Kebutuhan Tambahan: '
      },
      en: {
        title: 'Individual Assignments',
        desc: 'Assistance for coursework, problem sets, case study papers, and weekly homework delivered with high accuracy and originality.',
        scope: [
          'Tailored Assignment Execution following specific instructor guidelines',
          'Strict Compliance with Course Rubrics and grading criteria',
          'Clean, verified original output ready for immediate submission',
          'Transparent Logic Explanations so you can confidently answer follow-up questions'
        ],
        requirements: [
          { label: 'Assignment Type', desc: 'Analytical essay, case study, problem set, coding exercises, etc.' },
          { label: 'Course Name', desc: 'Academic discipline, module code, and subject name.' },
          { label: 'Brief & Instructions', desc: 'Assignment prompt sheet, grading rubric, and special lecturer notes.' },
          { label: 'Deadline Date', desc: 'Submission cutoff date & time (express/urgent options available).' },
          { label: 'Supporting Files', desc: 'Course slides, reading list, dataset files, or required format template.' }
        ],
        subject: 'Order Service - Individual Assignment',
        messageTemplate: 'Hello STACKLY, I am interested in ordering the Individual Assignment service.\n\nAssignment Type: \nCourse Name: \nInstructions / Prompt: \nDeadline: \nSupporting Materials / Notes: '
      }
    },
    '08': {
      num: '08',
      icon: 'bi-people',
      id: {
        title: 'Tugas Kelompok',
        desc: 'Solusi pengerjaan proyek kelompok, tugas kolaboratif, maupun makalah tim terpadu dengan integrasi hasil yang rapi dan konsisten.',
        scope: [
          'Koordinasi Penyusunan Bagian-Bagian Proyek Kelompok secara Terpadu',
          'Harmonisasi Gaya Penulisan & Format Seluruh Anggota Tim',
          'Pengerjaan Bagian Tertentu Saja atau Keseluruhan Proyek Tim',
          'Siap dengan Materi Presentasi & Pembagian Peran saat Ujian / Sidang'
        ],
        requirements: [
          { label: 'Jenis Tugas', desc: 'Proyek semester, makalah kelompok, aplikasi tim, presentasi bersama.' },
          { label: 'Mata Kuliah', desc: 'Nama mata kuliah dan institusi pengampu.' },
          { label: 'Jumlah Anggota', desc: 'Pembagian sub-tugas antar anggota atau pengerjaan menyeluruh.' },
          { label: 'Instruksi Pengerjaan', desc: 'Panduan tugas kelompok dan kriteria capaian luaran.' },
          { label: 'Deadline', desc: 'Jadwal target pengumpulan progres tim dan penyerahan final.' },
          { label: 'File Pendukung', desc: 'Draft awal kelompok, lembar acuan dosen, atau data pendukung.' }
        ],
        subject: 'Pemesanan Layanan Tugas Kelompok',
        messageTemplate: 'Halo STACKLY, saya tertarik memesan layanan Tugas Kelompok.\n\nJenis Tugas: \nMata Kuliah: \nJumlah Anggota: \nInstruksi Pengerjaan: \nDeadline: \nFile Pendukung / Catatan Khusus: '
      },
      en: {
        title: 'Group Projects',
        desc: 'Comprehensive solutions for collaborative coursework, semester group papers, team software projects, and presentation preparations.',
        scope: [
          'Unified Synthesis of Multi-Part Group Deliverables',
          'Tone, Style & Layout Harmonization across all project sections',
          'Flexible Scope: specific chapters/features or end-to-end project completion',
          'Presentation-Ready Deck & Q&A Role-Play Guidance for defense'
        ],
        requirements: [
          { label: 'Project Type', desc: 'Semester term project, group paper, multi-component app, team pitch.' },
          { label: 'Course Subject', desc: 'University department, subject name, and professor in charge.' },
          { label: 'Team Size & Roles', desc: 'Number of members and assigned division of responsibilities.' },
          { label: 'Project Guidelines', desc: 'Official project specification handbook and evaluation milestones.' },
          { label: 'Deadline Schedule', desc: 'Milestone submission checkpoints and final project due date.' },
          { label: 'Shared Files', desc: 'Group shared drive links, partial drafts, or datasets.' }
        ],
        subject: 'Order Service - Group Project',
        messageTemplate: 'Hello STACKLY, I am interested in ordering the Group Project service.\n\nProject Type: \nCourse Subject: \nNumber of Group Members: \nProject Instructions: \nDeadline: \nShared Files / Notes: '
      }
    }
  };

  var activeServiceId = null;
  var activeTriggerElement = null;

  function refreshServiceModalLanguage(lang) {
    var modalBackdrop = document.getElementById('serviceModalBackdrop');
    if (!modalBackdrop || !modalBackdrop.classList.contains('is-open') || !activeServiceId) return;
    populateServiceModal(activeServiceId, lang);
  }

  function populateServiceModal(serviceId, lang) {
    var currentLang = lang || getStoredLang() || DEFAULT_LANG;
    var rawItem = servicesData[serviceId];
    if (!rawItem) return;

    var item = rawItem[currentLang] || rawItem['id'];
    var modalNum = document.getElementById('serviceModalNum');
    var modalIcon = document.getElementById('serviceModalIcon');
    var modalTitle = document.getElementById('serviceModalTitle');
    var modalDesc = document.getElementById('serviceModalDesc');
    var modalScopeList = document.getElementById('serviceModalScopeList');
    var modalReqGrid = document.getElementById('serviceModalReqGrid');

    if (modalNum) modalNum.textContent = rawItem.num;
    if (modalIcon) modalIcon.className = 'bi ' + rawItem.icon;
    if (modalTitle) modalTitle.textContent = item.title;
    if (modalDesc) modalDesc.textContent = item.desc;

    if (modalScopeList) {
      modalScopeList.innerHTML = '';
      item.scope.forEach(function (text) {
        var li = document.createElement('li');
        li.className = 'service-modal__item';
        li.innerHTML = '<span class="service-modal__item-dot" aria-hidden="true"><i class="bi bi-check2-circle"></i></span><span>' + text + '</span>';
        modalScopeList.appendChild(li);
      });
    }

    if (modalReqGrid) {
      modalReqGrid.innerHTML = '';
      item.requirements.forEach(function (req) {
        var card = document.createElement('div');
        card.className = 'service-modal__req-card';

        var label = document.createElement('span');
        label.className = 'service-modal__req-label';
        label.textContent = req.label;

        var desc = document.createElement('span');
        desc.className = 'service-modal__req-desc';
        desc.textContent = req.desc;

        card.appendChild(label);
        card.appendChild(desc);
        modalReqGrid.appendChild(card);
      });
    }
  }

  function initServicesSection() {
    var serviceCards = document.querySelectorAll('.service-card[data-service-id]');
    var modalBackdrop = document.getElementById('serviceModalBackdrop');
    var modalDialog = document.getElementById('serviceModalDialog');
    var modalCloseBtn = document.getElementById('serviceModalCloseBtn');
    var modalOrderBtn = document.getElementById('serviceModalOrderBtn');

    if (!modalBackdrop || !serviceCards.length) return;

    function openModal(serviceId, triggerEl) {
      activeServiceId = serviceId;
      activeTriggerElement = triggerEl;
      populateServiceModal(serviceId);

      modalBackdrop.classList.add('is-open');
      modalBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      if (modalCloseBtn) {
        modalCloseBtn.focus();
      }
    }

    function closeModal() {
      if (!modalBackdrop.classList.contains('is-open')) return;
      modalBackdrop.classList.remove('is-open');
      modalBackdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';

      if (activeTriggerElement && typeof activeTriggerElement.focus === 'function') {
        activeTriggerElement.focus();
      }
      activeServiceId = null;
      activeTriggerElement = null;
    }

    function handleOrder(serviceId) {
      if (!serviceId) return;
      var currentLang = getStoredLang() || DEFAULT_LANG;
      var rawItem = servicesData[serviceId];
      if (!rawItem) return;

      var item = rawItem[currentLang] || rawItem['id'];

      closeModal();

      var contactSection = document.getElementById('contact');
      var subjectInput = document.getElementById('contactSubject');
      var messageInput = document.getElementById('contactMessage');
      var nameInput = document.getElementById('contactName');

      if (subjectInput) {
        subjectInput.value = item.subject;
      }
      if (messageInput) {
        messageInput.value = item.messageTemplate;
      }

      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }

      setTimeout(function () {
        if (nameInput) {
          nameInput.focus();
        }
      }, 450);
    }

    /* Card event listeners */
    serviceCards.forEach(function (card) {
      card.addEventListener('click', function () {
        var id = card.getAttribute('data-service-id');
        openModal(id, card);
      });

      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          var id = card.getAttribute('data-service-id');
          openModal(id, card);
        }
      });
    });

    /* Close button listener */
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeModal);
    }

    /* Backdrop click outside dialog */
    modalBackdrop.addEventListener('click', function (e) {
      if (modalDialog && !modalDialog.contains(e.target)) {
        closeModal();
      }
    });

    /* Escape key to close modal */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('is-open')) {
        closeModal();
      }
    });

    /* Order Button listener */
    if (modalOrderBtn) {
      modalOrderBtn.addEventListener('click', function () {
        handleOrder(activeServiceId);
      });
    }
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
    initServicesSection();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();

