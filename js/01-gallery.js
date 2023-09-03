import { galleryItems } from "./gallery-items.js";
// Change code below this line

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");

  gallery.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.tagName === "IMG") {
      const source = e.target.dataset.source;
      const image = `<img src="${source}" alt="Large Image"/>`;

      const modal = basicLightbox.create(image);
      modal.show();
    }
  });
});
