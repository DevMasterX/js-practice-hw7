import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");

galleryListEl.addEventListener("click", onGalleryClick);

const markup = createGalleryMarkup(galleryItems);

galleryListEl.insertAdjacentHTML("beforeend", markup);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, description, original }) => {
      return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
        `;
    })
    .join("");
}

function onGalleryClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}" alt="${e.target.alt}" width="800" height="600">
`);

  instance.show();
  window.addEventListener("keydown", onEscapeKeyClick);

  function onEscapeKeyClick(e) {
    if (e.code === "Escape" && instance) {
      instance.close();
      window.removeEventListener("keydown", onEscapeKeyClick);
    }
  }
}
