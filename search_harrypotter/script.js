const charactersList = document.getElementById('charactersList');
let hpCharacter = [];

const loadCharacters = async () => {
  try {
    const res = await fetch('https://hp-api.herokuapp.com/api/characters');
    hpCharacter = await res.json();
    // console.log(hpCharacter);
    displayCharacters(hpCharacter);
  } catch (err) {
    console.log(err);
  }
};

const displayCharacters = (characters) => {
  const htmlString = characters.map((character) => {
    return `
    <li class="character">
      <h2>${character.name}</h2>
      <p>House: ${character.house}</p>
      <img src="${character.image}"></img>
    </li>
    `;
  }).join('');
  charactersList.innerHTML = htmlString;
}
loadCharacters();