// src/core/Pokemon.js
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
        this.efectividad = efectividad;
    }
}