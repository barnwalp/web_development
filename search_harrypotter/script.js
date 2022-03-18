const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacter = [];

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredList = hpCharacter.filter( (character) => {
    return character.name.toLowerCase().includes(searchString) || character.house.toLowerCase().includes(searchString)
  });
  // console.log(filteredList);
  displayCharacters(filteredList);
});

const loadCharacters = async () => {
  try {
    const res = await fetch('https://hp-api.herokuapp.com/api/characters');
    hpCharacter = await res.json();
    console.log(hpCharacter);
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