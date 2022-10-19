import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Створення і рендер розмітки на підставі масиву даних
const galleryDiv = document.querySelector(".gallery");

const gallery = galleryItems
  .map(
    (img) =>
      `<div class="gallery__item"><a class="gallery__link" href="${img.original}"><img class="gallery__image" src="${img.preview}" data-source="${img.original}" alt="${img.description}"/></a></div>`
  )
  .join("");

galleryDiv.innerHTML = gallery;

// Реалізація делегування на div.gallery і отримання url великого зображення.

galleryDiv.addEventListener("click", openImg);

function openImg(event) {
  event.preventDefault();
  if (event.target.nodeName === "DIV") {
    return;
  }
  // модалка
  const instance = basicLightbox.create(`
    <div class="modal">
        <img src=${event.target.dataset.source} width="80%" style="margin: auto; display: block"> 
    </div>
`);
  instance.show();
  modalCheck();
}

function closeModal(event) {
  console.log("l");
  if (event.key === "Escape") {
    instance.close();
    document.removeEventListener("keydown", closeModal);
  }
}
function modalCheck() {
  document.addEventListener("keydown", closeModal;
}

https: console.log(galleryItems);
