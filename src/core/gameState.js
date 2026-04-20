// src/core/gameState.js
// Variables globales e inicialización de Pokémon
let timer;
let bag = { pokeball: 1 };
let pikachu, ditto, articuno, copiaArticuno;
let pokemones = [];
let transformar_ejecutada = false;
var ataqueArticunoTexto;
let myzone;

// Inicializar Pokémon (usando las clases de Pokemon.js y los datos de moves.js)
function initPokemons() {
    const efectividadPikachu = new Map([['Hielo',1],['Volador',2]]);
    const efectividadDitto = new Map([['Hielo',1],['Volador',1]]);
    const efectividadArticuno = new Map([['Electrico',1],['Normal',1],['Hielo',0.5],['Volador',2]]);

    pikachu = new Pokemon("Pikachu", 'Electrico', null, 142, 50, 100, 83, 138, 94, 94,
        [movimiento.thunderbolt, movimiento.thunderWave, movimiento.agility, movimiento.tackle], efectividadPikachu);
    ditto = new Pokemon("Ditto", 'Normal', null, 155, 50, 61, 110, 110, 61, 110,
        [movimiento.transform], efectividadDitto);
    articuno = new Pokemon("Articuno", 'Hielo', 'Volador', 181, 50, 121, 136, 121, 131, 161,
        [movimiento.iceBeam, movimiento.agility, movimiento.swift, movimiento.steelWing], efectividadArticuno);
    
    copiaArticuno = { ...articuno };
    pokemones = [pikachu, ditto, articuno];
}