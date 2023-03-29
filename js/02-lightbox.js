import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const newGallery = document.querySelector(".gallery");

newGallery.innerHTML = "";

for (const photo of galleryItems) {
  const newPhoto = `<a class="gallery__link" href="${photo.original}">
    <img
      class="gallery__image"
      src="${photo.preview}"
      alt="${photo.description}"
data-source="${photo.original}"


    />
</a>`;

  newGallery.innerHTML += newPhoto;
}


var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionsData: 250
});