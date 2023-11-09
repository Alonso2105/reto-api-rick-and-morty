// ui.js
export function setBackgroundColor(locationId) {
  const body = document.body;
  if (locationId < 50) {
    body.style.backgroundColor = '#50E871';
  } else if (locationId < 80) {
    body.style.backgroundColor = '#2578F1';
  } else {
    body.style.backgroundColor = '#F74F4F';
  }
}

export function createCharacterCard(character, onClickCallback) {
  const card = document.createElement('div');
  card.className = 'column is-one-fifth';

  const episodesList = character.episode.slice(0, 3).map(episode => {
    return `<a href="${episode}">${episode}</a>`;
  }).join(', ');

  card.innerHTML = `
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img class="character-image" src="${character.image}" alt="${character.name}">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <p><strong>Name:</strong> ${character.name}</p>
          <p><strong>Status:</strong> ${character.status}</p>
          <p><strong>Species:</strong> ${character.species}</p>
          <p><strong>Origin:</strong> ${character.origin.name}</p>
          <p><strong>Episodes:</strong> ${episodesList}</p>
        </div>
      </div>
    </div>
  `;

  const characterImage = card.querySelector('.character-image');
  characterImage.addEventListener('click', onClickCallback);

  return card;
}

export function showCharacterInfo(character, episodesList) {
  const characterInfo = document.getElementById('character-info');
  characterInfo.innerHTML = `
    <p><strong>Name:</strong> ${character.name}</p>
    <p><strong>Status:</strong> ${character.status}</p>
    <p><strong>Species:</strong> ${character.species}</p>
    <p><strong>Origin:</strong> ${character.origin.name}</p>
    <p><strong>Episodes:</strong> ${episodesList}</p>
  `;
}
