// let Pikachu = {
//     hp: 142,
//     level: 50,
//     ataque: 100,
//     defensa: 83,
//     velocidad: 138,
//     ataque_especial: 94,
//     defensa_especial: 94,
//     movimientos : [
//         {
//             nombre: "Thunderbolt",
//             potencia: 90,
//             precision: 100 * 1,
//             pp: 15,
//             categoria: "Especial",
//             efecto: '10% de probabilidad de paralizar al oponente al impactar',
//             tipo_movimiento: "Electrico"
//         },
//         {
//             nombre: "Thunder Wave",
//             potencia: 0,
//             precision: 100 * 0.90,
//             pp: 20,
//             categoria: "Estatus",
//             efecto: 100 * 1,
//             tipo_movimiento: "Electrico"
//         },
//         {
//             nombre: "Agility",
//             potencia: 0,
//             precision: 0,
//             pp: 30,
//             categoria: "Estatus",
//             efecto: 100 * 1,
//             tipo_movimiento: "Normal"
//         },
//         {
//             nombre: "Tackle",
//             potencia: 35,
//             precision: 95,
//             pp: 35,
//             categoria: "Fisico",
//             efecto: 0,
//             tipo_movimiento: "Normal"
//         }
//     ]

// }

// let Ditto = {
//     hp: 155,
//     level: 50,
//     ataque: 61,
//     defensa: 110,
//     velocidad: 110,
//     ataque_especial: 61,
//     defensa_especial: 110,
//     movimientos : [
//         {
//             nombre: "Transformar",
//             potencia: 0,
//             precision: 0,
//             pp: 10,
//             categoria: "Estado",//No interesa
//             efecto: 5,
//             tipo_movimiento: "Normal"
//         }
//     ]

// }

let Articuno = {
    hp: 181,
    level: 50,
    ataque: 121,
    defensa: 136,
    velocidad: 121,
    ataque_especial: 131,
    defensa_especial: 161}
//     movimientos : [
//         {
//             nombre: "Ice Beam",
//             potencia: 95,
//             precision: 100 * 1,
//             pp: 10,
//             categoria: "Especial",//Dependera
//             efecto: 100 * 0.10,
//             tipo_movimiento: "Hielo"
//         },
//         {
//             nombre: "Agility",
//             potencia: 0,
//             precision: 0,
//             pp: 30,
//             categoria: "Especial",
//             efecto: 100 * 1,
//             tipo_movimiento: "Normal"
//         },
//         {
//             nombre: "Swift",
//             potencia: 60,
//             precision: 0,
//             pp: 20,
//             categoria: "Especial",
//             efecto: 0,
//             tipo_movimiento: "Normal"
//         },
//         {
//             nombre: "Steel Wing",
//             potencia: 70,
//             precision: 100 * 0.90,
//             pp: 25,
//             categoria: "Fisico",//Dependera defensa/ataque normal
//             efecto: 100 * 0.10,//Callbacks
//             tipo_movimiento: "Acero"
//         }
//     ]
// }

const movimiento = {
    thunderbolt: {
        nombre: "Thunderbolt",
        potencia: 90,
        precision: 100 * 1,
        pp: 15,
        categoria: "Especial",
        efecto: 100 * 0.10,
        tipo_movimiento: "Electrico"
    },
    thunderWave: {
        nombre: "Thunder Wave",
        potencia: 0,
        precision: 100 * 0.90,
        pp: 20,
        categoria: "Estatus",
        efecto: 100 * 1,
        tipo_movimiento: "Electrico"
    },
    agility: {
        nombre: "Agility",
        potencia: 0,
        precision: 0,
        pp: 30,
        categoria: "Estatus",
        efecto: 100 * 1,
        tipo_movimiento: "Normal"
    },
    tackle: {
        nombre: "Tackle",
        potencia: 35,
        precision: 95,
        pp: 35,
        categoria: "Fisico",
        efecto: 0,
        tipo_movimiento: "Normal"
    },
    transform: {
        nombre: "Transformar",
        potencia: 0,
        precision: 0,
        pp: 10,
        categoria: "Estado",
        efecto: 5,
        tipo_movimiento: "Normal"
    },
    iceBeam: {
        nombre: "Ice Beam",
        potencia: 95,
        precision: 100 * 1,
        pp: 10,
        categoria: "Especial",
        efecto: 100 * 0.10,
        tipo_movimiento: "Hielo"
    },
    swift: {
        nombre: "Swift",
        potencia: 60,
        precision: 0,
        pp: 20,
        categoria: "Especial",
        efecto: 0,
        tipo_movimiento: "Normal"
    },
    steelWing: {
        nombre: "Steel Wing",
        potencia: 70,
        precision: 100 * 0.90,
        pp: 25,
        categoria: "Fisico",
        efecto: 100 * 0.10,
        tipo_movimiento: "Acero"
    }
};

class Pokemon {
    constructor(nombre, hp, level, ataque, defensa, velocidad, ataque_especial, defensa_especial, movimientos) {
        this.nombre = nombre;
        this.hp = hp;
        this.level = level;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
        this.ataque_especial = ataque_especial;
        this.defensa_especial = defensa_especial;
        this.movimientos = movimientos;
    }
}

// Creamos los pokemones
const pikachu = new Pokemon("Pikachu", 142, 50, 100, 83, 138, 94, 94, [movimiento.thunderbolt, movimiento.thunderWave, movimiento.agility, movimiento.tackle]);
const ditto = new Pokemon("Ditto", 155, 50, 61, 110, 110, 61, 110, [movimiento.transform]);
const articuno = new Pokemon("Articuno", 181, 50, 121, 136, 121, 131, 161, [movimiento.iceBeam, movimiento.agility, movimiento.swift, movimiento.steelWing]); 