import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector(".gallery");

galleryListEl.addEventListener("click", onGalleryClick);

const markup = galleryItems
  .map(({ preview, description, original }) => {
    return `
  <li class="gallery__item">
      <img class="gallery__image"  src="${preview}" alt="${description}" data-origin='${original}'/>
  </li> 
        `;
  })
  .join("");

galleryListEl.insertAdjacentHTML("beforeend", markup);

function onGalleryClick(e) {
  console.log(e.target.dataset.origin);
}
