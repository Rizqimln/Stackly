
(function () {
  'use strict';

  /* ---------------------------------------------------------
     1. TRANSLATIONS
     --------------------------------------------------------- */
  const translations = {
    en: {
      'a11y.skip': 'Skip to main content',

      'nav.home': 'Home',
      'nav.apps': 'Premium Apps',
      'nav.about': 'About Us',
      'nav.techstack': 'Tech & Services',
      'nav.projects': 'Portfolio',
      'nav.services': 'Services',
      'nav.preview': 'Live Preview',
      'nav.experience': 'How to Order',
      'nav.contact': 'Start Order',

      'apps.eyebrow': 'PREMIUM APPS & ACCOUNTS',
      'apps.title': 'Tools That Make Your Academic Life Easier.',
      'apps.desc': 'Get verified, private-access premium accounts for design, writing, AI assistance, and office productivity — all at prices students can actually afford.',
      'apps.priceFrom': 'Starting from',
      'apps.orderBtn': 'Order Now',

      'hero.label': 'ACADEMIC ASSISTANCE & PREMIUM APPS · TRUSTED SINCE 2024',
      'hero.title1': 'Stackly_',
      'hero.title2': 'Your Web Tasks & Papers.',
      'hero.desc': 'From web apps and backend systems to research papers, accredited journals, and thesis documents — Stackly delivers polished, on-time results with a zero-plagiarism guarantee.',
      'hero.cta1': 'Order a Task',
      'hero.cta2': 'Free Consultation',
      'hero.status': 'Open for Orders · Fast Response',

      'tech.eyebrow': 'Technologies We Use',
      'tech.title': 'Web stacks, frameworks, and tools we work with every day.',

      'projects.eyebrow': 'Sample Portfolio',
      'projects.title': 'A look at real student assignments we have delivered.',
      'proj.demo': 'Live Preview',
      'proj.code': 'Order Similar',

      'proj1.title': 'Campus Academic Information System',
      'proj1.desc': 'A full-stack university web app covering student records, GPA tracking, and schedule management — built as a database & web programming coursework.',
      'proj2.title': 'Responsive E-Commerce Storefront',
      'proj2.desc': 'A web development assignment featuring a product catalog, cart drawer, promo filtering, and a lightweight multi-step checkout flow.',
      'proj3.title': 'Kanban Task Management App',
      'proj3.desc': 'An advanced web programming project with draggable task boards, sprint tracking, priority labels, and real-time DOM state management.',
      'proj4.title': 'Academic Journal & Research Portal',
      'proj4.desc': 'A scholarly web platform for publishing research with citation formatting, article tagging, reader metrics, and discussion threads.',
      'proj5.title': 'Point of Sale & Stock Management',
      'proj5.desc': 'A web-based cashier system with real-time inventory tracking, daily transaction history, and PDF receipt printing.',
      'proj6.title': 'Thesis & Journal Repository Portal',
      'proj6.desc': 'A digital archive portal for student academic work with document search, department filters, and in-browser PDF preview.',

      'services.eyebrow': 'WHAT WE OFFER',
      'services.title': 'Every Assignment Type.',
      'services.desc': 'Whether it is a coding project, a scientific paper, or a group presentation — we handle it thoroughly, on time, and to your professor\'s standards.',
      'services.featuredBadge': 'Most Ordered',
      'services.detailCta': 'See Details',

      'service1.title': 'Website Development',
      'service1.tagline': 'Full-stack web apps, landing pages, information systems, and responsive UI — built to your course rubric.',
      'service2.title': 'Scientific Papers',
      'service2.tagline': 'Well-structured academic papers with credible references and guaranteed plagiarism-free content.',
      'service3.title': 'Presentations & Slides',
      'service3.tagline': 'Visually compelling slide decks with clear infographics, professional layouts, and thesis-ready designs.',
      'service4.title': 'Lecture Material Summaries',
      'service4.tagline': 'Concise, accurate summaries of textbooks, lecture modules, and research articles.',
      'service5.title': 'Lab Reports',
      'service5.tagline': 'Precise data analysis, properly formatted experimental results, and compliant lab report templates.',
      'service6.title': 'Study Guides & Cheatsheets',
      'service6.tagline': 'Exam-ready study guides, condensed concept maps, and cheatsheets for mid-terms and finals.',
      'service7.title': 'Individual Assignments',
      'service7.tagline': 'Careful, rubric-aligned individual homework and essays — submitted exactly as your professor expects.',
      'service8.title': 'Group Projects',
      'service8.tagline': 'Coordinated team coursework with balanced task allocation and a single polished submission package.',

      'modal.scopeTitle': 'Scope of Work',
      'modal.requirementsTitle': 'What We Need from You',
      'modal.priceLabel': 'Pricing',
      'modal.priceValue': 'Chat with admin for a quote — we keep it student-friendly.',
      'modal.estimateLabel': 'Turnaround Time',
      'modal.estimateValue': 'Tell us your deadline and we will confirm availability.',
      'modal.footerNote': 'Your order form is pre-filled and ready to send',
      'modal.orderCta': 'Place Order',

      'exp.eyebrow': 'How It Works',
      'exp.title': 'Four steps from brief to done — simple and stress-free.',
      'exp1.date': 'Step 1 · Brief',
      'exp1.role': 'Share Your Assignment & Deadline',
      'exp1.org': 'Free Consultation via WhatsApp or Email',
      'exp1.desc': 'Send the assignment instructions, rubric, lecturer requirements, and deadline. We review the scope right away and get back to you fast.',
      'exp2.date': 'Step 2 · Agreement',
      'exp2.role': 'Confirm Price & Kick Off',
      'exp2.org': 'Transparent Pricing · Handled by Specialists',
      'exp2.desc': 'Receive a clear, student-friendly quote. Once you confirm, our developer or writer starts immediately — no delays.',
      'exp3.date': 'Step 3 · Delivery',
      'exp3.role': 'Review & Receive Your Files',
      'exp3.org': 'Quality-Checked · Plagiarism-Free',
      'exp3.desc': 'Preview the finished task via live demo or draft document. You get the full source code, documentation, or a submission-ready file.',
      'exp4.date': 'Step 4 · Support',
      'exp4.role': 'Free Revisions & Code Walkthrough',
      'exp4.org': 'Presentation-Ready · Fully Explained',
      'exp4.desc': 'Lecturer requested changes? We revise for free. We also walk you through the code or content so you are confident presenting it.',

      'contact.eyebrow': 'Get in Touch',
      'contact.title': 'Got a task due soon? Let\'s talk — no commitment needed.',
      'contact.emailLabel': 'Order Email',
      'contact.locationLabel': 'Service Coverage',
      'contact.locationValue': 'Indonesia (Online 24/7)',
      'contact.availLabel': 'Availability',
      'contact.availValue': 'Urgent Orders Welcome (24H)',
      'contact.socialLabel': 'Direct Chat Channels',
      'contact.nameLabel': 'Your Name',
      'contact.emailInputLabel': 'WhatsApp Number',
      'contact.subjectLabel': 'Task Type (Web, Paper, Journal, Other)',
      'contact.messageLabel': 'Task Brief, Requirements & Deadline',
      'contact.send': 'Submit My Order',
      'contact.success': 'Order received! Our team will reach out to you shortly.',
      'contact.error': 'Please fill in all fields before submitting.',

      'nav.preview': 'Live Preview',
      'preview.eyebrow': 'Interactive Task Demo',
      'preview.title': 'See the Results — Live, Inside a Real Device Frame.',
      'preview.desc': 'Scroll through, click buttons, and test interactions inside realistic desktop and smartphone mockups. Exactly what you will hand in to your lecturer.',
      'preview.desktop': 'Desktop',
      'preview.mobile': 'Mobile',
      'preview.autoscroll': 'Auto Scroll',
      'preview.autoscroll_active': 'Pause Scroll',
      'preview.resetscroll': 'Reset',
      'preview.reload': 'Reload',
      'preview.openNewTab': 'Open in New Tab',
      'preview.hint': 'Fully interactive — click, scroll, and explore inside the frame.',
      'preview.loading': 'Loading preview...',

      'footer.desc': 'Stackly — Trusted task completion service for web programming, academic papers, journals, and coursework. Fast, quality-checked, and guaranteed.',
      'footer.nav': 'Navigation',
      'footer.location': 'Location',
      'footer.locationValue': 'Indonesia',
      'footer.social': 'Social Media',
      'footer.copyright': '© 2026 STACKLY. All rights reserved.'
    },

    id: {
      'a11y.skip': 'Langsung ke konten utama',

      'nav.home': 'Beranda',
      'nav.apps': 'Aplikasi Premium',
      'nav.about': 'Tentang Kami',
      'nav.techstack': 'Teknologi & Layanan',
      'nav.projects': 'Portofolio',
      'nav.services': 'Daftar Layanan',
      'nav.preview': 'Live Preview',
      'nav.experience': 'Cara Order',
      'nav.contact': 'Order Sekarang',

      'apps.eyebrow': 'APLIKASI & AKUN PREMIUM',
      'apps.title': 'Tools yang Bikin Kuliah Jadi Lebih Produktif.',
      'apps.desc': 'Akses akun premium berlisensi resmi untuk desain, penulisan, AI, hingga office suite — dengan harga yang masih masuk budget mahasiswa.',
      'apps.priceFrom': 'Mulai dari',
      'apps.orderBtn': 'Pesan Sekarang',

      'hero.label': 'JASA JOKI TUGAS & APLIKASI PREMIUM',
      'hero.title1': 'Stackly_',
      'hero.title2': 'Tugas Web & Makalah Beres.',
      'hero.desc': 'Dari aplikasi web, sistem informasi, hingga makalah ilmiah dan jurnal terakreditasi — Stackly mengerjakan semuanya dengan rapi, tepat waktu, dan bergaransi bebas plagiasi.',
      'hero.cta1': 'Pesan Tugas',
      'hero.cta2': 'Konsultasi Gratis',
      'hero.status': 'Buka Order · Respons Cepat',

      'tech.eyebrow': 'Teknologi yang Kami Gunakan',
      'tech.title': 'Web stack, framework, dan tools yang kami kuasai.',

      'projects.eyebrow': 'Portofolio Contoh Tugas',
      'projects.title': 'Hasil nyata tugas mahasiswa yang telah kami kerjakan.',
      'proj.demo': 'Lihat Live Preview',
      'proj.code': 'Order Mirip Ini',

      'proj1.title': 'Sistem Informasi Akademik Kampus',
      'proj1.desc': 'Aplikasi web fullstack untuk pengelolaan data mahasiswa, nilai kuliah, dan jadwal kelas — dikerjakan sebagai tugas pemrograman web & basis data.',
      'proj2.title': 'Toko Online E-Commerce Responsif',
      'proj2.desc': 'Tugas web development berupa toko online dengan katalog produk, keranjang interaktif, filter promo, dan alur checkout multi-langkah yang ringan.',
      'proj3.title': 'Aplikasi Manajemen Tugas Kanban',
      'proj3.desc': 'Tugas pemrograman web lanjut dengan papan tugas drag-and-drop, sprint tracker, label prioritas, dan manajemen state DOM yang bersih.',
      'proj4.title': 'Portal Jurnal & Repositori Penelitian',
      'proj4.desc': 'Tugas web portal publikasi ilmiah lengkap dengan format sitasi, penandaan artikel, statistik pembaca, dan fitur diskusi.',
      'proj5.title': 'Sistem Kasir & Manajemen Stok',
      'proj5.desc': 'Tugas sistem kasir berbasis web dengan pelacakan inventori real-time, riwayat transaksi harian, dan cetak struk PDF.',
      'proj6.title': 'Portal Repositori Skripsi & Jurnal',
      'proj6.desc': 'Tugas portal arsip digital karya ilmiah dengan fitur pencarian dokumen, filter jurusan, dan preview naskah PDF langsung di browser.',

      'services.eyebrow': 'DAFTAR LAYANAN',
      'services.title': 'Semua Jenis Tugas.',
      'services.desc': 'Baik itu proyek coding, makalah ilmiah, atau presentasi kelompok — kami tangani secara menyeluruh, tepat waktu, dan sesuai kriteria dosen.',
      'services.featuredBadge': 'Paling Diminati',
      'services.detailCta': 'Lihat Detail',

      'service1.title': 'Jasa Pembuatan Website',
      'service1.tagline': 'Aplikasi web fullstack, landing page, sistem informasi, dan UI responsif — sesuai kriteria tugas kuliah.',
      'service2.title': 'Makalah Ilmiah',
      'service2.tagline': 'Karya tulis terstruktur dengan referensi jurnal kredibel dan konten bebas plagiasi.',
      'service3.title': 'Presentasi & Slide PPT',
      'service3.tagline': 'Desain slide yang menarik, infografis komunikatif, dan tata letak yang siap untuk sidang maupun presentasi.',
      'service4.title': 'Resume & Ringkasan Materi',
      'service4.tagline': 'Ringkasan padat dan akurat dari buku teks, modul kuliah, dan artikel penelitian.',
      'service5.title': 'Laporan Praktikum',
      'service5.tagline': 'Analisis data percobaan yang presisi, grafik hasil uji terformat, dan template laporan standar institusi.',
      'service6.title': 'Rangkuman & Cheatsheet Ujian',
      'service6.tagline': 'Panduan belajar siap ujian, peta konsep padat, dan cheatsheet untuk UTS maupun UAS.',
      'service7.title': 'Tugas Individu',
      'service7.tagline': 'Pengerjaan tugas harian dan mingguan yang cermat, teliti, dan sesuai rubrik penilaian dosen.',
      'service8.title': 'Tugas Kelompok',
      'service8.tagline': 'Pengerjaan proyek tim kolaboratif dengan pembagian tugas merata dan satu paket file yang rapi.',

      'modal.scopeTitle': 'Cakupan Layanan',
      'modal.requirementsTitle': 'Yang Kami Butuhkan dari Kamu',
      'modal.priceLabel': 'Estimasi Biaya',
      'modal.priceValue': 'Chat admin untuk penawaran — harga selalu ramah kantong mahasiswa.',
      'modal.estimateLabel': 'Waktu Pengerjaan',
      'modal.estimateValue': 'Beritahu deadline-mu dan kami konfirmasi ketersediaan.',
      'modal.footerNote': 'Formulir order sudah terisi otomatis dan siap dikirim',
      'modal.orderCta': 'Pesan Layanan Ini',

      'exp.eyebrow': 'Alur Pemesanan',
      'exp.title': 'Empat langkah dari brief ke selesai — mudah dan tanpa ribet.',
      'exp1.date': 'Langkah 1 · Brief',
      'exp1.role': 'Kirim Soal & Ketentuan Tugas',
      'exp1.org': 'Konsultasi Gratis via WhatsApp / Email',
      'exp1.desc': 'Kirimkan modul soal, instruksi dosen, rubrik penilaian, dan tenggat waktu. Kami pelajari detailnya dan langsung merespons.',
      'exp2.date': 'Langkah 2 · Kesepakatan',
      'exp2.role': 'Konfirmasi Harga & Mulai Pengerjaan',
      'exp2.org': 'Harga Transparan · Dikerjakan oleh Ahlinya',
      'exp2.desc': 'Dapatkan estimasi biaya yang jelas dan terjangkau. Setelah disepakati, tim kami langsung mulai — tanpa tunda.',
      'exp3.date': 'Langkah 3 · Penyerahan',
      'exp3.role': 'Review Hasil & Terima File Lengkap',
      'exp3.org': 'Dicek Teliti · Lolos Uji Bebas Plagiasi',
      'exp3.desc': 'Preview hasil tugas via live demo atau dokumen draft. Kamu terima source code lengkap, panduan instalasi, atau file siap kumpul.',
      'exp4.date': 'Langkah 4 · Garansi',
      'exp4.role': 'Revisi Gratis & Penjelasan Alur',
      'exp4.org': 'Siap Presentasi · Bisa Dijelaskan ke Dosen',
      'exp4.desc': 'Ada revisi dari dosen? Kami bantu tanpa biaya tambahan. Kami juga jelaskan isi kode atau tugas agar kamu percaya diri saat presentasi.',

      'contact.eyebrow': 'Konsultasi & Order',
      'contact.title': 'Deadline sudah mepet? Hubungi kami sekarang — gratis konsultasi.',
      'contact.emailLabel': 'Email Order',
      'contact.locationLabel': 'Jangkauan Layanan',
      'contact.locationValue': 'Seluruh Indonesia (Online 24/7)',
      'contact.availLabel': 'Ketersediaan',
      'contact.availValue': 'Siap Terima Tugas Kilat (24 Jam)',
      'contact.socialLabel': 'Hubungi Langsung via',
      'contact.nameLabel': 'Nama Kamu',
      'contact.emailInputLabel': 'Nomor WhatsApp',
      'contact.subjectLabel': 'Jenis Tugas (Web, Makalah, Jurnal, Lainnya)',
      'contact.messageLabel': 'Detail Instruksi Tugas & Deadline',
      'contact.send': 'Kirim Order Tugas',
      'contact.success': 'Order diterima! Tim Stackly akan segera menghubungimu.',
      'contact.error': 'Mohon isi semua kolom sebelum mengirim.',

      'nav.preview': 'Live Preview',
      'preview.eyebrow': 'Demo Interaktif Hasil Tugas',
      'preview.title': 'Lihat Hasilnya — Live di dalam Frame Perangkat Nyata.',
      'preview.desc': 'Scroll, klik tombol, dan uji interaksi langsung dalam frame desktop dan smartphone. Persis seperti yang akan kamu kumpulkan ke dosen.',
      'preview.desktop': 'Desktop',
      'preview.mobile': 'Mobile',
      'preview.autoscroll': 'Auto Scroll',
      'preview.autoscroll_active': 'Jeda Scroll',
      'preview.resetscroll': 'Reset',
      'preview.reload': 'Muat Ulang',
      'preview.openNewTab': 'Buka di Tab Baru',
      'preview.hint': 'Interaktif penuh — klik, scroll, dan eksplor di dalam frame.',
      'preview.loading': 'Memuat preview...',

      'footer.desc': 'Stackly — Layanan jasa tugas terpercaya untuk pemrograman web, makalah ilmiah, jurnal terakreditasi, dan tugas kuliah lainnya. Cepat, berkualitas, bergaransi.',
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
     SCROLL HELPER — navbar-aware smooth scroll
     scrollIntoView() does not honour scroll-padding-top in
     all browsers, so we compute the offset manually.
     --------------------------------------------------------- */
  function scrollToSection(el) {
    if (!el) return;
    var navbar = document.getElementById('navbar');
    var navH = navbar ? navbar.offsetHeight : 72;
    var gap = 24; /* breathing room below navbar */
    var top = el.getBoundingClientRect().top + window.pageYOffset - navH - gap;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

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

    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var subject = form.elements.subject.value.trim();
      var message = form.elements.message.value.trim();

      var lang = getCurrentLang();
      var dict = translations[lang] || translations[DEFAULT_LANG];

      // Validasi
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !subject || !message || !emailRegex.test(email)) {
        status.textContent = dict['contact.error'];
        status.className = 'contact-form__status is-error';
        return;
      }

      var submitBtn = form.querySelector('.contact-form__submit');

      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.6';
      status.textContent = '';

      try {
        var response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: {
            Accept: 'application/json'
          }
        });

        if (response.ok) {
          status.textContent = dict['contact.success'];
          status.className = 'contact-form__status is-success';

          form.reset();
        } else {
          throw new Error('Gagal mengirim pesan');
        }

      } catch (error) {
        status.textContent = 'Pesan gagal dikirim. Silakan coba lagi.';
        status.className = 'contact-form__status is-error';

      } finally {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
      }

      setTimeout(function () {
        status.textContent = '';
        status.className = 'contact-form__status';
      }, 5000);
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
          scrollToSection(previewSection);
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
        scrollToSection(contactSection);
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
     7.5 PREMIUM APPS & PROJECT ORDER HANDLERS
     --------------------------------------------------------- */
  function initAppOrderButtons() {
    var appButtons = document.querySelectorAll('.js-order-app');
    var projectButtons = document.querySelectorAll('.js-order-project');
    var subjectInput = document.getElementById('contactSubject');
    var messageInput = document.getElementById('contactMessage');
    var contactSection = document.getElementById('contact');

    function populateAndScroll(subject, message) {
      if (subjectInput) {
        subjectInput.value = subject;
      }
      if (messageInput) {
        messageInput.value = message;
      }
      if (contactSection) {
        scrollToSection(contactSection);
        setTimeout(function () {
          if (messageInput) messageInput.focus();
        }, 500);
      }
    }

    appButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var appName = btn.getAttribute('data-app') || 'Aplikasi Premium';
        var appPrice = btn.getAttribute('data-price') || '';
        populateAndScroll(
          'Order ' + appName + ' (' + appPrice + ')',
          'Halo Admin Stackly, saya ingin memesan akun premium ' + appName + ' dengan harga ' + appPrice + '. Mohon informasi ketersediaan slot dan instruksi pembayaran. Terima kasih!'
        );
      });
    });

    projectButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var projName = btn.getAttribute('data-project') || 'Tugas Web';
        populateAndScroll(
          'Konsultasi Pengerjaan Mirip: ' + projName,
          'Halo Admin Stackly, saya berminat membuat tugas dengan konsep mirip ' + projName + '. Mohon estimasi pengerjaan dan biaya. Terima kasih!'
        );
      });
    });
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
    initAppOrderButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();

