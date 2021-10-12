// window.addEventListener("scroll", () => {
//   const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
//   if (scrollTop + clientHeight > scrollHeight - 500) {
//     nextPage();
//   }
// });
// QUERY SELECTOR
const display = document.querySelector(".display");
// FETCH
const getPokemon = async () => {
  pokemonData = [];
  for (let index = 1; index < 151; index++) {
    data = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    dataJson = await data.json();

    console.log(dataJson);
    pokemonData.push(dataJson);
  }
  //MAPEO DATA
  const pokemons = pokemonData.map((element) => ({
    id: element.id,
    experience: element["base_experience"],
    name: element.name,
    image: element.sprites.other["official-artwork"]["front_default"],
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
        <h2>#${pokemon.id}</h2>
        <h2>Experience: ${pokemon.experience}</h2>
        </li>`
    )
    .join("");
  display.innerHTML = pokemonHTML;
};

getPokemon();
