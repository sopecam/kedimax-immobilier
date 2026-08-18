document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('catalog-properties-container');
  if (!container || typeof propertiesData === 'undefined') return;

  const form = document.getElementById('catalog-filter-form');
  const type = document.getElementById('filter-type');
  const category = document.getElementById('filter-category');
  const city = document.getElementById('filter-city');
  const bedrooms = document.getElementById('filter-bedrooms');
  const max = document.getElementById('filter-max-price');
  const sort = document.getElementById('sort-select');
  const reset = document.getElementById('reset-filters');
  const count = document.getElementById('displayed-count');
  const empty = document.getElementById('no-results-msg');

  const normalize = value => (value || '').toString().toLowerCase().trim();
  const params = new URLSearchParams(location.search);

  if (type && params.get('type')) type.value = params.get('type') === 'achat' ? 'Acheter' : params.get('type') === 'location' ? 'Louer' : params.get('type');
  if (category && params.get('category')) category.value = params.get('category');
  if (city && params.get('city')) city.value = params.get('city');
  if (max && params.get('max')) max.value = params.get('max');

  function getFiltered() {
    let list = propertiesData.filter(p =>
      (!type?.value || normalize(p.type) === normalize(type.value)) &&
      (!category?.value || normalize(p.category) === normalize(category.value)) &&
      (!city?.value || normalize(p.city) === normalize(city.value)) &&
      (!bedrooms?.value || Number(p.bedrooms) >= Number(bedrooms.value)) &&
      (!max?.value || Number(p.price) <= Number(max.value))
    );

    switch (sort?.value) {
      case 'price-asc': list.sort((a,b) => a.price - b.price); break;
      case 'price-desc': list.sort((a,b) => b.price - a.price); break;
      default: break;
    }
    return list;
  }

  function render() {
    const list = getFiltered();
    if (count) count.textContent = list.length;
    if (empty) empty.classList.toggle('hidden', list.length > 0);
    container.innerHTML = list.map(renderPropertyCard).join('');
  }

  [type, category, city, bedrooms, max, sort].forEach(el => el?.addEventListener('change', render));
  max?.addEventListener('input', render);

  form?.addEventListener('submit', e => { e.preventDefault(); render(); });

  reset?.addEventListener('click', e => {
    e.preventDefault();
    if (form) form.reset();
    const cleanUrl = `${location.pathname}`;
    window.history.replaceState({}, '', cleanUrl);
    render();
  });

  render();
});
