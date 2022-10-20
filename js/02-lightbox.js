import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryDiv = document.querySelector(".gallery");

const gallery = galleryItems
  .map(
    (img) =>
      `<a class="gallery__item" href="${img.original}"><img class="gallery__image" src="${img.preview}" data-source="${img.original}" alt="${img.description}"/></a>`
  )
  .join("");

galleryDiv.innerHTML = gallery;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
