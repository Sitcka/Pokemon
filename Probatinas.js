const movimiento = {
    thunderbolt: {
        nombre: "Thunderbolt",
        potencia: 90,
        precision: 100 / 100,
        pp: 15,
        categoria: "Especial",
        efecto: 100 * 0.10,
        tipo_movimiento: "Electrico"
    },
    thunderWave: {
        nombre: "Thunder Wave",
        potencia: 0,
        precision: 10 / 100,
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
        precision: 95 / 100,//Los pongo de manera que sea la probabilidad entre 0 y 1
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
        precision: 100 / 100,
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
        precision: 90 / 100,
        pp: 25,
        categoria: "Fisico",
        efecto: 100 * 0.10,
        tipo_movimiento: "Acero"
    }
};

class Pokemon {
    constructor(nombre, tipo_primario, tipo_secundario, hp, level, ataque, defensa, velocidad, ataque_especial, defensa_especial, movimientos, efectividad) {
        this.nombre = nombre;
        this.tipo_primario = tipo_primario;
        this.tipo_secundario = tipo_secundario;
        this.hp = hp;
        this.level = level;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
        this.ataque_especial = ataque_especial;
        this.defensa_especial = defensa_especial;
        this.movimientos = movimientos;
        this.efectividad = efectividad
    }
}

// Creamos los pokemones
const pikachu = new Pokemon("Pikachu", 'Electrico', null, 142, 50, 100, 83, 138, 94, 94, [movimiento.thunderbolt, movimiento.thunderWave, movimiento.agility, movimiento.tackle], new Map([
    ['Hielo', 1],
    ['Volador', 2]
]));
const ditto = new Pokemon("Ditto", 'Normal', null, 155, 50, 61, 110, 110, 61, 110, [movimiento.transform], new Map([
    ['Hielo', 1],
    ['Volador', 1]
]));
const articuno = new Pokemon("Articuno", 'Hielo', 'Volador', 181, 50, 121, 136, 121, 131, 161, [movimiento.iceBeam, movimiento.agility, movimiento.swift, movimiento.steelWing], new Map([
    ['Electrico', 1],
    ['Normal', 1],
    ['Hielo', 0.5],
    ['Volador', 2],
]));

let probatina_pikachu = pikachu;
let movimiento_ataque = probatina_pikachu.movimientos.find(mov => mov.nombre.toUpperCase() === 'thunderbolt'.toUpperCase());
// console.log(movimiento_ataque);
movimiento_ataque.pp -= 1;
console.log(pikachu);

// PARA CUANDO USE LO DE DITTO

// Crear una copia modificable de pikachu
const copiaPikachu = { ...pikachu };

// Modificar la copia
copiaPikachu.movimientos.movimiento_ataque.pp -= 1;
