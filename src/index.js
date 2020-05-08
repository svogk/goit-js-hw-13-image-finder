import './styles.css';
import apiService from './js/apiService';
import updateMarkup from './js/markup';
import refs from './js/refs';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  refs.photoCardsContainer.innerHTML = '';
  apiService.resetPage();
  fetchHits();
  form.reset();
});

refs.loadMoreBtn.addEventListener('click', fetchHits);

function fetchHits() {
  refs.loadMoreBtn.classList.add('is-hidden');
  refs.spinner.classList.remove('is-hidden');

  apiService
    .fetchHits()
    .then(hits => {
      updateMarkup(hits);
      refs.loadMoreBtn.classList.remove('is-hidden');
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    })
    .finally(() => {
      refs.spinner.classList.add('is-hidden');
    });
}
