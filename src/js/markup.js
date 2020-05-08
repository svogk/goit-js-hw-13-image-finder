import photoCardsTpl from '../templates/photo-cards.hbs';
import refs from '../js/refs';
import spinnerTpl from '../templates/spinner.hbs';

refs.spinner.insertAdjacentHTML('beforeend', spinnerTpl());

function updateMarkup(hits) {
    const markup = photoCardsTpl(hits);
    refs.photoCardsContainer.insertAdjacentHTML('beforeend', markup);
};

export default updateMarkup;