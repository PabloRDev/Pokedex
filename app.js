// QUERY SELETOR
const display = document.querySelector(".display");
// FETCH
const getPokemon = async (pokemon) => {
  let result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
  let data = await result.json();
  //MAPEO DATA
  const pokemons = data.results.map((element, img, id) => ({
    name: element.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      img + 1
    }.png`,
  }));

  displayPokemons(pokemons);
};
// DISPLAY POKEMONS
const displayPokemons = (pokemons) => {
  const pokemonHTML = pokemons
    .map(
      (pokemon) =>
        `<li class="display__element">
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.image}" alt="${pokemon.name}"/>
        </li>`
    )
    .join("");
  display.innerHTML = pokemonHTML;
};

getPokemon();
