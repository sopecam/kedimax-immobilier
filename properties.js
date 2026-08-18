/**
 * KEDIMAX IMMOBILIER - Base de Données des Biens & Moteur de Fiche
 * Données réelles / modèles conformes au marché immobilier camerounais (FCFA)
 */

const propertiesData = [
    {
        id: "ked-001",
        title: "Appartement de Haut Standing",
        type: "Louer",
        category: "Appartement",
        city: "Yaoundé",
        district: "Bastos",
        price: 450000,
        priceLabel: "450 000 FCFA / mois",
        bedrooms: 3,
        bathrooms: 2,
        surface: 140,
        featured: true,
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
        ],
        description: "Superbe appartement situé dans le quartier sécurisé de Bastos à Yaoundé. Finitions soignées, groupe électrogène, réserve d'eau et gardiennage 24/7.",
        amenities: ["Sécurité 24h/24", "Forage d'eau", "Groupe Électrogène", "Parking VIP", "Balcon"]
    },
    {
        id: "ked-002",
        title: "Duplex Moderne avec Jardin",
        type: "Acheter",
        category: "Villa",
        city: "Douala",
        district: "Bonapriso",
        price: 125000000,
        priceLabel: "125 000 000 FCFA",
        bedrooms: 4,
        bathrooms: 3,
        surface: 350,
        featured: true,
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
        ],
        description: "Propriété d'exception bâtie sur terrain titré. Titre foncier individuel disponible et vérifié. Climatisation centrale, suite parentale et dépendance gardien.",
        amenities: ["Titre Foncier", "Piscine", "Jardin Aménagé", "Garage 2 Véhicules", "Climatisation"]
    },
    {
        id: "ked-003",
        title: "Parcelle de Terrain Titré",
        type: "Acheter",
        category: "Terrain",
        city: "Yaoundé",
        district: "Odza",
        price: 18000000,
        priceLabel: "18 000 000 FCFA",
        bedrooms: 0,
        bathrooms: 0,
        surface: 500,
        featured: true,
        images: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
        ],
        description: "Terrain plat immédiatement constructible situé dans une zone résidentielle en pleine expansion à Odza. Mutation totale directe chez le notaire.",
        amenities: ["Titre Foncier Direct", "Accès Bitumé", "Eau & Électricité Proches"]
    },
    {
        id: "ked-004",
        title: "Bureaux Professionnels R+1",
        type: "Louer",
        category: "Bureau",
        city: "Douala",
        district: "Akwa",
        price: 800000,
        priceLabel: "800 000 FCFA / mois",
        bedrooms: 0,
        bathrooms: 2,
        surface: 200,
        featured: false,
        images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
        ],
        description: "Espace commercial/bureau stratégiquement positionné au cœur des affaires à Akwa. Idéal pour siège d'entreprise ou cabinet professionnel.",
        amenities: ["Fibre Optique", "Sécurité", "Emplacement Stratégique"]
    }
];

// Injections de cartes immobilières HTML
function renderPropertyCard(property) {
    const en = document.documentElement.lang === 'en';
    const typeLabel = en ? (property.type === 'Louer' ? 'Rent' : 'Buy') : property.type;
    const detailLabel = en ? 'View details' : 'Voir détail';
    const roomsLabel = en ? 'rooms' : 'ch.';
    const bathsLabel = en ? 'bathrooms' : 'douches';
    return `
        <div class="property-card" data-id="${property.id}">
            <div class="property-thumb">
                <span class="badge badge-type">${typeLabel}</span>
                <img src="${property.images[0]}" alt="${property.title}" loading="lazy">
                <div class="property-price-tag">${property.priceLabel}</div>
            </div>
            <div class="property-body">
                <h3 class="property-title">${property.title}</h3>
                <p class="property-location"><i class="fa-solid fa-location-dot"></i> ${property.city}, ${property.district}</p>
                <div class="property-specs">
                    ${property.bedrooms ? `<span><i class="fa-solid fa-bed"></i> ${property.bedrooms} ${roomsLabel}</span>` : ''}
                    ${property.bathrooms ? `<span><i class="fa-solid fa-bath"></i> ${property.bathrooms} ${bathsLabel}</span>` : ''}
                    <span><i class="fa-solid fa-maximize"></i> ${property.surface} m²</span>
                </div>
                <div class="property-footer">
                    <a href="bien-details.html?id=${property.id}" class="btn btn-outline-primary btn-full">${detailLabel}</a>
                    <a href="https://wa.me/237655909868?text=Bonjour%20KEDIMAX,%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20bien%20Ref:%20${property.id}" 
                       target="_blank" class="btn btn-whatsapp" aria-label="Contacter sur WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
    `;
}

// Rendus Détails Dynamique
function renderPropertyDetails(id) {
    const container = document.getElementById('detail-content-area');
    if (!container) return;

    const property = propertiesData.find(p => p.id === id) || propertiesData[0];

    container.innerHTML = `
        <div class="detail-header mb-4">
            <span class="badge badge-accent mb-2">${property.type} - ${property.category}</span>
            <h1 class="page-title text-main">${property.title}</h1>
            <p class="text-muted"><i class="fa-solid fa-location-dot"></i> ${property.district}, ${property.city} | Réf: <strong>${property.id}</strong></p>
        </div>

        <div class="detail-gallery">
            <div class="gallery-main">
                <img src="${property.images[0]}" alt="${property.title}">
            </div>
            <div class="gallery-sub">
                <img src="${property.images[1] || property.images[0]}" alt="${property.title}">
                <img src="${property.images[0]}" alt="${property.title}">
            </div>
        </div>

        <div class="detail-grid">
            <div class="detail-main-info">
                <div class="search-widget-card mb-4">
                    <h3>Prix : <span class="text-accent">${property.priceLabel}</span></h3>
                </div>

                <h3>Description du bien</h3>
                <p class="mt-2 text-muted" style="font-size:1.05rem">${property.description}</p>

                <h3 class="mt-5">Équipements & Atouts</h3>
                <ul class="owner-benefits-list mt-3">
                    ${property.amenities.map(a => `<li><i class="fa-solid fa-check text-accent"></i> ${a}</li>`).join('')}
                </ul>
            </div>

            <aside class="detail-sidebar">
                <div class="filter-card">
                    <h3>Organiser une visite</h3>
                    <p class="text-muted-sm mb-3">Contactez directement notre agent référent via WhatsApp pour planifier une visite sur place.</p>
                    <a href="https://wa.me/237655909868?text=Bonjour%20KEDIMAX,%20je%20souhaite%20planifier%20une%20visite%20pour%20le%20bien%20${property.title}%20(R%C3%A9f:%20${property.id})" 
                       target="_blank" class="btn btn-whatsapp btn-full mb-3">
                        <i class="fa-brands fa-whatsapp"></i> Demander une visite
                    </a>
                    <a href="tel:+237655909868" class="btn btn-outline-primary btn-full">
                        <i class="fa-solid fa-phone"></i> Appeler l'agence
                    </a>
                </div>
            </aside>
        </div>
    `;
}

window.addEventListener('kedimax:language',()=>{ const c=document.getElementById('catalog-properties-container'); const f=document.getElementById('featured-properties-container'); if(c&&typeof propertiesData!=='undefined'){ const type=document.getElementById('filter-type'),cat=document.getElementById('filter-category'),city=document.getElementById('filter-city'),max=document.getElementById('filter-max-price'); const list=propertiesData.filter(p=>(!type?.value||p.type===type.value)&&(!cat?.value||p.category===cat.value)&&(!city?.value||p.city===city.value)&&(!max?.value||p.price<=Number(max.value))); c.innerHTML=list.map(renderPropertyCard).join(''); } if(f&&typeof propertiesData!=='undefined') f.innerHTML=propertiesData.filter(p=>p.featured).map(renderPropertyCard).join(''); });
