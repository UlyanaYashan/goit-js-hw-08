
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
const mainDivEl = document.querySelector('.gallery');

function creatListImage (galleryItems) {
return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}"><img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      /></a>
  </div>`
}).join('');
}

const listMarkupImage = creatListImage(galleryItems);
mainDivEl.insertAdjacentHTML('beforeend', listMarkupImage) ;


    var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', 
    captionPosition:'bottom', captionDelay: 250, animationSlide: true });
