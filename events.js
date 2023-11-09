// events.js
export function addModalCloseEvent(modal) {
  modal.querySelector('.modal-background').addEventListener('click', () => {
    modal.classList.remove('is-active');
  });
}

export function addImageHoverEvents(images) {
  images.forEach((image) => {
    image.addEventListener('mouseenter', () => {
      image.style.cursor = 'pointer';
    });
  });
}
