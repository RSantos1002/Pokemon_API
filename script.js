const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', getRandomPokemon);

function getRandomPokemon() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;/*Pokemon API URL*/

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const html =`
            <h2>${data.name}<h2>
            <img src="${data.sprites.other.dream_world.front_default}" alt="${data.name}>"
            <div class="pokemon-info_text">
                <h2>${data.name}<h2>
                <p>Type: ${data.types[0].type.name}</p>
                <p>Height: ${data.height}m</p>
                <p>Weight: ${data.weight}lb</p>
            </div>
            `;
            result.innerHTML = html;
        })
        .catch(error => console.error(error));
}