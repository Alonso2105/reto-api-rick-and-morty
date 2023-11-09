// main.js
import { fetchLocation, fetchCharacter } from './api.js';
import { setBackgroundColor, createCharacterCard, showCharacterInfo } from './ui.js';
import { addModalCloseEvent, addImageHoverEvents } from './events.js';

document.addEventListener('DOMContentLoaded', async () => {
  const locationForm = document.getElementById('location-form');
  const locationIdInput = document.getElementById('location-id');
  const characterCards = document.getElementById('character-cards');
  const characterModal = document.getElementById('character-modal');

  locationForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const locationIdValue = locationIdInput.value.trim();

      if (locationIdValue === '') {
          alert('Por favor, ingresa un valor en el campo de Localización ID.');
          return;
      }

      try {
          const location = await fetchLocation(locationIdValue);
          setBackgroundColor(location.id);

          characterCards.innerHTML = '';

          const residentsData = await Promise.all(location.residents.slice(0, 5).map(fetchCharacter));

          residentsData.forEach((residentData) => {
              const episodesList = residentData.episode.slice(0, 3).map(episode => `<a href="${episode}">${episode}</a>`).join(', ');

              const card = createCharacterCard(residentData, () => {
                  showCharacterInfo(residentData, episodesList);
                  characterModal.classList.add('is-active');
                  console.log('modal abierto')
              });
              characterCards.appendChild(card);
          });
      } catch (error) {
          console.error(error);
      }
  });

  addModalCloseEvent(characterModal);
  addImageHoverEvents(document.querySelectorAll('.character-image'));
});


