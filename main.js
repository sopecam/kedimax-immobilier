/* ============================================================
   KEDIMAX IMMOBILIER — SCRIPT CENTRAL
   - FR / EN global translation
   - Language persisted across pages
   - Dark / light mode
   - Mobile menu
   - Quick search
   - WhatsApp forms
   ============================================================ */
(function () {
  'use strict';

  const STORAGE_LANGUAGE = 'kedimax_language';
  const STORAGE_THEME = 'kedimax_theme';
  const DEFAULT_LANGUAGE = 'fr';
  const WHATSAPP = '237657519974';

  const T = {
    fr: {
      'nav.home':'Accueil','nav.properties':'Nos Biens','nav.buy':'Acheter','nav.rent':'Louer','nav.services':'Nos Services','nav.about':'À Propos','nav.contact':'Contact',
      'button.whatsapp':'WhatsApp','button.contact':'Contacter KEDIMAX','button.advisor':'Parler à un conseiller','button.explore':'Explorer nos biens','button.search':'Rechercher','button.submit':'Soumettre',
      'hero.badge':'Agence Immobilière Certifiée au Cameroun','hero.title':'Trouvez le bien qui concrétise vos projets d’avenir.','hero.subtitle':'Découvrez notre sélection rigoureuse d’appartements, villas et terrains titrés à Yaoundé, Douala et sur l’ensemble du territoire national.','hero.btnExplore':'Explorer nos biens','hero.btnContact':'Parler à un conseiller',
      'search.all':'Tous les biens','search.buy':'Acheter','search.rent':'Louer','search.cityLabel':'Ville / Région','search.categoryLabel':'Type de bien','search.budgetLabel':'Budget Max (FCFA)','search.submit':'Rechercher',
      'featured.subtitle':'Nos opportunités du moment','featured.title':'Biens Immobiliers Sélectionnés','featured.viewAll':'Voir tous les biens disponibles',
      'testimonials.subtitle':'La confiance au cœur de notre métier','testimonials.title':'Témoignages clients','testimonials.desc':'Un espace conçu pour présenter les retours authentiques des clients KEDIMAX, sans inventer de témoignages.','testimonials.card1':'Votre témoignage peut apparaître ici après validation par KEDIMAX IMMOBILIER.','testimonials.card2':'Ajoutez ici un avis réel issu de Facebook, Google ou d’un formulaire client validé.','testimonials.card3':'La section est prête à accueillir des témoignages authentiques avec photo, nom et contexte.','testimonials.author1':'Client KEDIMAX','testimonials.author2':'Client satisfait','testimonials.author3':'Votre prochain client','testimonials.role1':'Avis à publier','testimonials.role2':'Témoignage vérifié','testimonials.role3':'Espace témoignage','testimonials.facebook':'Voir KEDIMAX sur Facebook',
      'video.subtitle':'Immersion & actualités','video.title':'Découvrez KEDIMAX en vidéo','video.desc':'Une rubrique dédiée aux visites de biens, présentations, conseils immobiliers et actualités publiées par KEDIMAX.','video.facebook':'Voir les vidéos Facebook','video.coverTitle':'Visites, biens & conseils immobiliers','video.item1':'Visites de biens','video.item1sub':'Découvrez les espaces avant votre rendez-vous.','video.item2':'Conseils immobiliers','video.item2sub':'Des contenus utiles pour vos projets.','video.item3':'Actualités sociales','video.item3sub':'Retrouvez les publications vidéo KEDIMAX.',
      'properties.title':'Catalogue Immobilier','properties.subtitle':'Trouvez la propriété adaptée à vos attentes à Yaoundé, Douala et leurs environs.','properties.filters':'Filtrer les biens','properties.reset':'Réinitialiser','properties.transaction':'Mode de transaction','properties.category':'Catégorie','properties.city':'Ville','properties.bedrooms':'Chambres minimum','properties.price':'Prix Maximum (FCFA)','properties.allTypes':'Tous les types','properties.allCategories':'Toutes catégories','properties.allCities':'Toutes les villes','properties.indifferent':'Indifférent','properties.recent':'Récents','properties.priceAsc':'Prix : Croissant','properties.priceDesc':'Prix : Décroissant','properties.sort':'Trier par','properties.showing':'Affichage de','properties.count':'bien(s)','properties.noResults':'Aucun bien ne correspond à vos critères.','properties.noResultsText':'Modifiez vos filtres ou contactez un conseiller pour une recherche sur mesure.',
      'services.title':'Nos services immobiliers','services.subtitle':'Des solutions pour accompagner vos projets d’achat, de vente, de location et de gestion.','services.location':'Location résidentielle','services.locationText':'Accompagnement dans la recherche et la location de logements adaptés à vos besoins, avec mise en relation et organisation des visites.','services.viewRentals':'Voir les biens à louer','services.sale':'Achat & vente','services.saleText':'Découvrez des opportunités immobilières et bénéficiez d’un accompagnement dans votre projet d’acquisition ou de cession.','services.viewSales':'Voir les biens à acheter','services.management':'Gestion locative','services.managementText':'Confiez la gestion de votre bien et centralisez vos demandes auprès d’un interlocuteur dédié.','services.owner':'Confier mon bien','services.advice':'Conseil foncier & immobilier','services.adviceText':'Un accompagnement pour mieux structurer vos démarches et vos décisions immobilières.','services.advisor':'Parler à un conseiller',
      'about.title':'À propos de KEDIMAX','about.subtitle':'Une approche orientée accompagnement et proximité.','about.heading':'Votre projet immobilier mérite un accompagnement clair.','about.text':'KEDIMAX IMMOBILIER accompagne les particuliers et propriétaires dans leurs démarches immobilières au Cameroun, notamment pour l’achat, la vente, la location et la gestion.','about.item1':'Recherche et présentation de biens','about.item2':'Organisation des prises de contact et visites','about.item3':'Accompagnement des propriétaires','about.item4':'Conseil immobilier et foncier','about.need':'Besoin d’un conseiller ?','about.needText':'Expliquez-nous votre projet et nous vous orienterons vers la solution adaptée.','about.describe':'Décrire mon projet',
      'contact.title':'Contactez Nos Conseillers','contact.subtitle':'Nous sommes à votre disposition pour vous orienter dans vos démarches immobilières.','contact.phone':'Téléphone & WhatsApp','contact.email':'Email officiel','contact.presence':'Présence & Intervention','contact.coverage':'Couverture nationale pour projets fonciers','contact.formTitle':'Envoyez-nous un message','contact.name':'Nom et Prénom *','contact.phoneLabel':'Téléphone / WhatsApp *','contact.emailLabel':'Email','contact.subject':'Objet de votre demande','contact.message':'Message *','contact.send':'Envoyer le message','contact.namePlaceholder':'Votre nom','contact.emailPlaceholder':'exemple@domaine.cm','contact.messagePlaceholder':'Précisez votre besoin...',
      'common.buy':'Acheter','common.rent':'Louer','common.details':'Voir les détails','common.contact':'Contacter','common.loading':'Chargement...','common.error':'Une erreur est survenue.','common.retry':'Réessayer','common.all':'Tous',
      'footer.rights':'Tous droits réservés.'
    },
    en: {
      'nav.home':'Home','nav.properties':'Properties','nav.buy':'Buy','nav.rent':'Rent','nav.services':'Our Services','nav.about':'About Us','nav.contact':'Contact',
      'button.whatsapp':'WhatsApp','button.contact':'Contact KEDIMAX','button.advisor':'Talk to an advisor','button.explore':'Explore our properties','button.search':'Search','button.submit':'Submit',
      'hero.badge':'Certified Real Estate Agency in Cameroon','hero.title':'Find the property that brings your future plans to life.','hero.subtitle':'Discover our carefully selected apartments, villas and titled land in Yaoundé, Douala and throughout Cameroon.','hero.btnExplore':'Explore our properties','hero.btnContact':'Talk to an advisor',
      'search.all':'All properties','search.buy':'Buy','search.rent':'Rent','search.cityLabel':'City / Region','search.categoryLabel':'Property type','search.budgetLabel':'Maximum Budget (FCFA)','search.submit':'Search',
      'featured.subtitle':'Our current opportunities','featured.title':'Selected Properties','featured.viewAll':'View all available properties',
      'testimonials.subtitle':'Trust at the heart of our business','testimonials.title':'Client Testimonials','testimonials.desc':'A dedicated space for authentic KEDIMAX client feedback, without inventing testimonials.','testimonials.card1':'Your testimonial can appear here after validation by KEDIMAX IMMOBILIER.','testimonials.card2':'Add a genuine review from Facebook, Google or an approved client form here.','testimonials.card3':'This section is ready for authentic testimonials with photo, name and context.','testimonials.author1':'KEDIMAX Client','testimonials.author2':'Satisfied Client','testimonials.author3':'Your Next Client','testimonials.role1':'Review to be published','testimonials.role2':'Verified testimonial','testimonials.role3':'Testimonial space','testimonials.facebook':'View KEDIMAX on Facebook',
      'video.subtitle':'Immersion & News','video.title':'Discover KEDIMAX on Video','video.desc':'A section dedicated to property tours, presentations, real estate advice and news published by KEDIMAX.','video.facebook':'Watch Facebook videos','video.coverTitle':'Property tours, listings & real estate advice','video.item1':'Property tours','video.item1sub':'Discover the spaces before your appointment.','video.item2':'Real estate advice','video.item2sub':'Useful content for your projects.','video.item3':'Social updates','video.item3sub':'Watch KEDIMAX video publications.',
      'properties.title':'Property Catalogue','properties.subtitle':'Find the property that meets your expectations in Yaoundé, Douala and surrounding areas.','properties.filters':'Filter properties','properties.reset':'Reset','properties.transaction':'Transaction type','properties.category':'Category','properties.city':'City','properties.bedrooms':'Minimum bedrooms','properties.price':'Maximum Price (FCFA)','properties.allTypes':'All types','properties.allCategories':'All categories','properties.allCities':'All cities','properties.indifferent':'Any','properties.recent':'Newest','properties.priceAsc':'Price: Low to High','properties.priceDesc':'Price: High to Low','properties.sort':'Sort by','properties.showing':'Showing','properties.count':'property(ies)','properties.noResults':'No property matches your criteria.','properties.noResultsText':'Modify your filters or contact an advisor for a personalized search.',
      'services.title':'Our Real Estate Services','services.subtitle':'Solutions to support your purchase, sale, rental and property management projects.','services.location':'Residential Rental','services.locationText':'Support in finding and renting homes suited to your needs, including introductions and property viewing arrangements.','services.viewRentals':'View rental properties','services.sale':'Buying & Selling','services.saleText':'Discover real estate opportunities and receive professional support throughout your purchase or sale project.','services.viewSales':'View properties for sale','services.management':'Property Management','services.managementText':'Entrust us with the management of your property and centralize your requests through a dedicated contact.','services.owner':'Entrust my property','services.advice':'Land & Real Estate Advice','services.adviceText':'Professional support to help you structure your real estate procedures and make informed decisions.','services.advisor':'Talk to an advisor',
      'about.title':'About KEDIMAX','about.subtitle':'A support-oriented and local approach.','about.heading':'Your real estate project deserves clear support.','about.text':'KEDIMAX IMMOBILIER supports individuals and property owners with their real estate projects in Cameroon, including buying, selling, renting and management.','about.item1':'Property search and presentation','about.item2':'Contact and viewing arrangements','about.item3':'Support for property owners','about.item4':'Real estate and land advice','about.need':'Need an advisor?','about.needText':'Tell us about your project and we will guide you toward the right solution.','about.describe':'Describe my project',
      'contact.title':'Contact Our Advisors','contact.subtitle':'We are available to guide you through your real estate procedures.','contact.phone':'Phone & WhatsApp','contact.email':'Official Email','contact.presence':'Presence & Services','contact.coverage':'National coverage for land projects','contact.formTitle':'Send us a message','contact.name':'Full Name *','contact.phoneLabel':'Phone / WhatsApp *','contact.emailLabel':'Email','contact.subject':'Request subject','contact.message':'Message *','contact.send':'Send message','contact.namePlaceholder':'Your name','contact.emailPlaceholder':'example@domain.com','contact.messagePlaceholder':'Tell us what you need...',
      'common.buy':'Buy','common.rent':'Rent','common.details':'View details','common.contact':'Contact','common.loading':'Loading...','common.error':'An error occurred.','common.retry':'Retry','common.all':'All',
      'footer.rights':'All rights reserved.'
    }
  };

  function currentLanguage() {
    const saved = localStorage.getItem(STORAGE_LANGUAGE);
    return saved === 'en' || saved === 'fr' ? saved : DEFAULT_LANGUAGE;
  }

  function translateValue(lang, key) {
    return T[lang]?.[key] ?? T[DEFAULT_LANGUAGE]?.[key] ?? null;
  }

  function setElementText(el, value) {
    const icon = el.querySelector(':scope > i');
    if (icon) {
      el.textContent = '';
      el.appendChild(icon);
      el.appendChild(document.createTextNode(' ' + value));
    } else {
      el.textContent = value;
    }
  }

  function applyLanguage(lang) {
    const language = T[lang] ? lang : DEFAULT_LANGUAGE;
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = translateValue(language, key);
      if (value !== null) setElementText(el, value);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const value = translateValue(language, el.getAttribute('data-i18n-placeholder'));
      if (value !== null) el.setAttribute('placeholder', value);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const value = translateValue(language, el.getAttribute('data-i18n-title'));
      if (value !== null) el.setAttribute('title', value);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
      const value = translateValue(language, el.getAttribute('data-i18n-aria-label'));
      if (value !== null) el.setAttribute('aria-label', value);
    });

    document.querySelectorAll('.lang-toggle').forEach(btn => {
      const span = btn.querySelector('span') || document.createElement('span');
      span.textContent = language === 'fr' ? 'EN' : 'FR';
      if (!span.parentNode) btn.appendChild(span);
      btn.setAttribute('aria-label', language === 'fr' ? 'Passer en anglais' : 'Passer en français');
      btn.title = language === 'fr' ? 'English' : 'Français';
    });

    localStorage.setItem(STORAGE_LANGUAGE, language);
    window.dispatchEvent(new CustomEvent('kedimax:languageChanged', { detail: { language } }));
    return language;
  }

  function initLanguage() {
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      if (btn.dataset.languageBound === '1') return;
      btn.dataset.languageBound = '1';
      btn.type = 'button';
      btn.addEventListener('click', event => {
        event.preventDefault();
        applyLanguage(currentLanguage() === 'fr' ? 'en' : 'fr');
      });
    });
    applyLanguage(currentLanguage());
  }

  function initTheme() {
    const root = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    root.dataset.theme = localStorage.getItem(STORAGE_THEME) || 'light';
    const render = () => {
      const dark = root.dataset.theme === 'dark';
      toggle.innerHTML = dark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
      toggle.setAttribute('aria-label', dark ? 'Activer le mode clair' : 'Activer le mode sombre');
      toggle.title = dark ? 'Mode clair' : 'Mode sombre';
    };
    render();
    if (toggle.dataset.themeBound === '1') return;
    toggle.dataset.themeBound = '1';
    toggle.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem(STORAGE_THEME, root.dataset.theme);
      render();
    });
  }

  function initMobileMenu() {
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('nav-menu');
    if (!toggle || !menu || toggle.dataset.menuBound === '1') return;
    toggle.dataset.menuBound = '1';
    const close = () => {
      menu.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    };
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('active');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  }

  function initQuickSearch() {
    const form = document.getElementById('quick-search-form');
    const widget = document.getElementById('search-widget');
    if (!form || !widget || form.dataset.searchBound === '1') return;
    form.dataset.searchBound = '1';
    const tabs = [...widget.querySelectorAll('.search-tab')];
    let selectedType = '';
    const selectTab = tab => {
      selectedType = tab.dataset.type === 'Acheter' || tab.dataset.type === 'Louer' ? tab.dataset.type : '';
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
    };
    tabs.forEach(tab => {
      tab.type = 'button';
      tab.setAttribute('role', 'tab');
      tab.addEventListener('click', () => selectTab(tab));
    });
    form.addEventListener('submit', e => {
      e.preventDefault();
      const params = new URLSearchParams();
      if (selectedType) params.set('type', selectedType === 'Acheter' ? 'achat' : 'location');
      const city = document.getElementById('search-city')?.value || '';
      const category = document.getElementById('search-category')?.value || '';
      const budget = document.getElementById('search-budget')?.value || '';
      if (city) params.set('city', city);
      if (category) params.set('category', category);
      if (budget) params.set('max', budget);
      window.location.href = 'biens.html' + (params.toString() ? '?' + params.toString() : '');
    });
  }

  function wa(message) {
    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
  }

  function initOwnerForm() {
    const form = document.getElementById('owner-property-form');
    if (!form || form.dataset.bound === '1') return;
    form.dataset.bound = '1';
    form.addEventListener('submit', e => {
      e.preventDefault();
      const get = id => document.getElementById(id)?.value.trim() || '';
      const name=get('owner-name'), phone=get('owner-phone'), type=get('owner-type'), location=get('owner-location'), message=get('owner-message');
      if (!name || !phone || !location) return;
      wa(`Bonjour KEDIMAX IMMOBILIER,\nJe souhaite vous confier mon bien immobilier.\nNom : ${name}\nTéléphone : ${phone}\nDemande : ${type}\nLocalisation : ${location}\nDescription : ${message || 'Non renseignée'}`);
    });
  }

  function initContactForm() {
    const form = document.getElementById('main-contact-form');
    if (!form || form.dataset.bound === '1') return;
    form.dataset.bound = '1';
    form.addEventListener('submit', e => {
      e.preventDefault();
      const get = id => document.getElementById(id)?.value.trim() || '';
      const name=get('c-name'), phone=get('c-phone'), email=get('c-email'), subject=get('c-subject'), message=get('c-message');
      if (!name || !phone || !message) return;
      wa(`Bonjour KEDIMAX IMMOBILIER,\nNom : ${name}\nTéléphone : ${phone}\nEmail : ${email || 'Non renseigné'}\nObjet : ${subject}\nMessage : ${message}`);
    });
  }

  function init() {
    initTheme();
    initMobileMenu();
    initLanguage();
    initQuickSearch();
    initOwnerForm();
    initContactForm();
  }

  window.KEDIMAX_LANGUAGE = { set: applyLanguage, get: currentLanguage, translations: T };
  window.kedimaxApplyLanguage = applyLanguage;
  window.kedimaxWhatsApp = wa;

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
