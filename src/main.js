// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації

import searchImagesByQuery from './js/pixabay-api';
import { createImages, clearImages } from './js/render-functions';

const form = document.querySelector('.gallery-form');
const input = document.querySelector('.input-for-gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  clearImages();
  event.preventDefault();
  loader.classList.remove('hiden');
  message.classList.remove('show-text');
  let wordForSearch = input.value.trim();
  wordFromStart = wordForSearch;
  page = 1;
  if (wordForSearch === '') {
    iziToast.error({
      position: 'topRight',
      message: 'Please fill the input',
    });
    loader.classList.add('hiden');
    return;
  }
  searchImagesByQuery(`${wordForSearch}`, page).then(async data => {
    if (data.total === 0) {
      iziToast.error({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      loader.classList.add('hiden');
      return;
    } else {
      await createImages(data);
      button.classList.remove('hiden');
    }
  });
}
