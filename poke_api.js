// Esta funcion asincrona hace una peticion a la pokeapi y devuelve los sprites pedidos por parametro
// El primer parametro tiene como valor el nombre del pokemon, y el segundo parametro
// es para saber si quiere de espaldas la imagen del pokemon que en si sera por defecto, si es false dara una imagen del pokemon frontal
async function pokemon(pokemon, boleano = true, dom){
    let resultados = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(resultados.status === 200){
        let caracteristicas_pokemon = await resultados.json();
        let imagen_gif_frontal = caracteristicas_pokemon.sprites.other.showdown.back_female;
        if(imagen_gif_frontal === null){
            imagen_gif_frontal = caracteristicas_pokemon.sprites.other.showdown.back_default;
        }
        let imagen_gif_espalda = caracteristicas_pokemon.sprites.other.showdown.front_default;
        let etiqueta_imagen = document.createElement('img');
        let valor = ' ';
        boleano ? valor = imagen_gif_frontal : valor = imagen_gif_espalda;
        etiqueta_imagen.setAttribute('src', valor);
        dom.appendChild(etiqueta_imagen);
    }
}
