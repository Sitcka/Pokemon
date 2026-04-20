// src/core/moves.js
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
        precision: 95 / 100,
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
        efecto: 0,
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