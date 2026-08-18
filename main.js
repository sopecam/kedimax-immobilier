(function () {
  'use strict';

  const WHATSAPP = '237655909868';

  const translations = {
    fr: {
      'nav.home':'Accueil','nav.buy':'Acheter','nav.rent':'Louer','nav.services':'Nos Services','nav.about':'À Propos','nav.contact':'Contact',
      'hero.badge':'Votre partenaire immobilier au Cameroun','hero.title':'Trouvez le bien qui correspond à votre projet.','hero.subtitle':'Location, achat, vente et gestion immobilière avec un accompagnement professionnel.','hero.btnExplore':'Explorer les biens','hero.btnContact':'Parler à un conseiller',
      'search.all':'Tous les types','search.buy':'Acheter','search.rent':'Louer','search.cityLabel':'Ville','search.categoryLabel':'Type de bien','search.budgetLabel':'Budget maximum','search.submit':'Rechercher',
      'featured.subtitle':'Nos opportunités du moment','featured.title':'Biens Immobiliers Sélectionnés','featured.viewAll':'Voir tous les biens disponibles',
      'testimonials.subtitle':'La confiance au cœur de notre métier','testimonials.title':'Témoignages clients','testimonials.desc':'Un espace conçu pour présenter les retours authentiques des clients KEDIMAX, sans inventer de témoignages.','testimonials.card1':'Votre témoignage peut apparaître ici après validation par KEDIMAX IMMOBILIER.','testimonials.author1':'Client KEDIMAX','testimonials.role1':'Avis à publier','testimonials.card2':'Ajoutez ici un avis réel issu de Facebook, Google ou d’un formulaire client validé.','testimonials.author2':'Client satisfait','testimonials.role2':'Témoignage vérifié','testimonials.card3':'La section est prête à accueillir des témoignages authentiques avec photo, nom et contexte.','testimonials.author3':'Votre prochain client','testimonials.role3':'Espace témoignage','testimonials.facebook':'Voir KEDIMAX sur Facebook',
      'video.subtitle':'Immersion & actualités','video.title':'Découvrez KEDIMAX en vidéo','video.desc':'Une rubrique dédiée aux visites de biens, présentations, conseils immobiliers et actualités publiées par KEDIMAX.','video.facebook':'Voir les vidéos Facebook','video.coverTitle':'Visites, biens & conseils immobiliers','video.item1':'Visites de biens','video.item1sub':'Découvrez les espaces avant votre rendez-vous.','video.item2':'Conseils immobiliers','video.item2sub':'Des contenus utiles pour vos projets.','video.item3':'Actualités sociales','video.item3sub':'Retrouvez les publications vidéo KEDIMAX'
    },
    en: {
      'nav.home':'Home','nav.buy':'Buy','nav.rent':'Rent','nav.services':'Our Services','nav.about':'About Us','nav.contact':'Contact',
      'hero.badge':'Your real estate partner in Cameroon','hero.title':'Find the property that fits your project.','hero.subtitle':'Rent, buy, sell and manage property with professional support.','hero.btnExplore':'Explore properties','hero.btnContact':'Talk to an advisor',
      'search.all':'All types','search.buy':'Buy','search.rent':'Rent','search.cityLabel':'City','search.categoryLabel':'Property type','search.budgetLabel':'Maximum budget','search.submit':'Search',
      'featured.subtitle':'Our current opportunities','featured.title':'Selected Properties','featured.viewAll':'View all available properties',
      'testimonials.subtitle':'Trust at the heart of our work','testimonials.title':'Client testimonials','testimonials.desc':'A dedicated space for authentic KEDIMAX client feedback, without fabricated testimonials.','testimonials.card1':'Your testimonial can appear here after validation by KEDIMAX IMMOBILIER.','testimonials.author1':'KEDIMAX client','testimonials.role1':'Review to publish','testimonials.card2':'Add a real review from Facebook, Google or a validated client form here.','testimonials.author2':'Satisfied client','testimonials.role2':'Verified testimonial','testimonials.card3':'This section is ready for authentic testimonials with photo, name and context.','testimonials.author3':'Your next client','testimonials.role3':'Testimonial space','testimonials.facebook':'See KEDIMAX on Facebook',
      'video.subtitle':'Immersion & news','video.title':'Discover KEDIMAX on video','video.desc':'A dedicated section for property tours, presentations, real estate tips and news published by KEDIMAX.','video.facebook':'Watch Facebook videos','video.coverTitle':'Tours, properties & real estate tips','video.item1':'Property tours','video.item1sub':'Discover spaces before your appointment.','video.item2':'Real estate tips','video.item2sub':'Useful content for your projects.','video.item3':'Social updates','video.item3sub':'Find KEDIMAX video publications'
    }
  };

  function applyLanguage(lang) {
    const current = translations[lang] ? lang : 'fr';
    const dict = translations[current];
    document.documentElement.lang = current;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] === undefined) return;
      const icon = el.querySelector('i');
      el.textContent = dict[key];
      if (icon) el.prepend(icon);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.innerHTML = `<span>${current === 'fr' ? 'EN' : 'FR'}</span>`;
      btn.setAttribute('aria-label', current === 'fr' ? 'Passer en anglais' : 'Passer en français');
      btn.title = current === 'fr' ? 'English' : 'Français';
    });

    localStorage.setItem('kedimax_lang', current);
    window.dispatchEvent(new CustomEvent('kedimax:language', { detail: { lang: current } }));
  }

  function wa(message) {
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function initTheme() {
    const root = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    const saved = localStorage.getItem('kedimax_theme') || 'light';
    root.dataset.theme = saved;

    function render() {
      if (!toggle) return;
      toggle.innerHTML = root.dataset.theme === 'dark'
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
      toggle.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre');
      toggle.title = root.dataset.theme === 'dark' ? 'Mode clair' : 'Mode sombre';
    }

    render();
    toggle?.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      localStorage.setItem('kedimax_theme', next);
      render();
    });
  }

  function initMobileMenu() {
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('nav-menu');
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('active');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menu.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }));
  }

  function initLanguage() {
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const next = document.documentElement.lang === 'en' ? 'fr' : 'en';
        applyLanguage(next);
      });
    });
    applyLanguage(localStorage.getItem('kedimax_lang') || 'fr');
  }

  function initQuickSearch() {
    const form = document.getElementById('quick-search-form');
    const widget = document.getElementById('search-widget');
    if (!form || !widget) return;

    // IMPORTANT: the three tabs live OUTSIDE the <form>. Query them from the
    // search widget, not from the form, otherwise Acheter/Louer receive no
    // click handler and remain visually clickable only.
    const tabs = [...widget.querySelectorAll('.search-tabs .search-tab')];
    let selectedType = '';

    const initial = tabs.find(t => t.classList.contains('active'));
    if (initial) {
      selectedType = ['Acheter', 'Louer'].includes(initial.dataset.type) ? initial.dataset.type : '';
    }

    tabs.forEach(tab => {
      tab.type = 'button';
      tab.setAttribute('role', 'tab');
      tab.setAttribute('tabindex', '0');
      tab.setAttribute('aria-selected', tab.classList.contains('active') ? 'true' : 'false');

      const selectTab = () => {
        selectedType = ['Acheter', 'Louer'].includes(tab.dataset.type) ? tab.dataset.type : '';
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
      };

      tab.addEventListener('click', selectTab);
      tab.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectTab();
        }
      });
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      const params = new URLSearchParams();
      if (selectedType) params.set('type', selectedType === 'Acheter' ? 'achat' : 'location');
      const values = [['city','search-city'],['category','search-category'],['max','search-budget']];
      values.forEach(([key,id]) => {
        const value = document.getElementById(id)?.value || '';
        if (value) params.set(key, value);
      });
      window.location.href = `biens.html${params.toString() ? '?' + params.toString() : ''}`;
    });
  }

  function initOwnerForm() {
    const form = document.getElementById('owner-property-form');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const get = id => document.getElementById(id)?.value.trim() || '';
      const name = get('owner-name'), phone = get('owner-phone'), type = get('owner-type'), location = get('owner-location'), message = get('owner-message');
      if (!name || !phone || !location) return;
      wa(`Bonjour KEDIMAX IMMOBILIER,\nJe souhaite confier mon bien.\nNom : ${name}\nTéléphone : ${phone}\nType : ${type}\nLocalisation : ${location}\nDétails : ${message || 'Non précisés'}`);
    });
  }

  function initContactForm() {
    const form = document.getElementById('main-contact-form');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const get = id => document.getElementById(id)?.value.trim() || '';
      const name = get('c-name'), phone = get('c-phone'), email = get('c-email'), subject = get('c-subject'), message = get('c-message');
      if (!name || !phone || !message) return;
      wa(`Bonjour KEDIMAX IMMOBILIER,\nNom : ${name}\nTéléphone : ${phone}\nEmail : ${email || 'Non renseigné'}\nObjet : ${subject}\nMessage : ${message}`);
    });
  }

  function initFeatured() {
    const featured = document.getElementById('featured-properties-container');
    const count = document.getElementById('total-properties-count');
    if (!featured || typeof propertiesData === 'undefined') return;
    featured.innerHTML = propertiesData.filter(p => p.featured).map(renderPropertyCard).join('');
    if (count) count.textContent = propertiesData.length;
  }

  function init() {
    initTheme();
    initMobileMenu();
    initFeatured();
    initLanguage();
    initQuickSearch();
    initOwnerForm();
    initContactForm();
  }

  window.kedimaxApplyLanguage = applyLanguage;
  window.kedimaxWhatsApp = wa;

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
