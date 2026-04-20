// src/api/pokemonApi.js
async function pokemon(pokemon, boleano, etiqueta_padre, enemigo) {
    let resultados = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (resultados.status === 200) {
        let caracteristicas_pokemon = await resultados.json();
        let imagen_gif_frontal = caracteristicas_pokemon.sprites.other.showdown.back_female;
        if (imagen_gif_frontal === null) {
            imagen_gif_frontal = caracteristicas_pokemon.sprites.other.showdown.back_default;
        }
        let imagen_gif_espalda = caracteristicas_pokemon.sprites.other.showdown.front_default;
        let etiqueta_imagen = document.createElement('img');
        let valor = ' ';
        boleano ? valor = imagen_gif_frontal : valor = imagen_gif_espalda;
        etiqueta_imagen.setAttribute('src', valor);
        let id = ' ';
        enemigo ? id = 'enemy' : id = 'mypokemon';
        etiqueta_imagen.setAttribute('id', id);
        etiqueta_padre.appendChild(etiqueta_imagen);
    }
}

async function pokemonElegir(pokemon, etiqueta_padre, personalizacion) {
    let resultados = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (resultados.status === 200) {
        let caracteristicas_pokemon = await resultados.json();
        let imagen = caracteristicas_pokemon.sprites.front_default;
        let etiqueta_imagen = document.createElement('img');
        etiqueta_imagen.setAttribute('src', imagen);
        etiqueta_imagen.setAttribute('id', personalizacion);
        etiqueta_imagen.setAttribute('class', 'img-fluid');
        etiqueta_padre.appendChild(etiqueta_imagen);
    }
}