// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createImages(data) {
  const lightbox = new SimpleLightbox('.gallery-list a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
  const list = document.querySelector('.gallery-list');
  let images = data.hits
    .map(
      hit =>
        `<div class="image-frame"><a href="${hit.largeImageURL}"><img class="image" src="${hit.webformatURL}" alt="${hit.tags}" /></a><div class ="text-wraper"><div class="text-block"><h5>likes</h5><p>${hit.likes}</p></div><div class="text-block"><h5>views</h5><p>${hit.views}</p></div><div class="text-block"><h5>comments</h5><p>${hit.comments}</p></div><div class="text-block"><h5>downloads</h5><p>${hit.downloads}</p></div></div></div>`
    )
    .join('');
  list.insertAdjacentHTML('afterbegin', images);
  lightbox.refresh();
}

export function clearImages() {
  const list = document.querySelector('.gallery-list');
  list.innerHTML = '';
}
