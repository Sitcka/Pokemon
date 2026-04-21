# ⚡ Pokémon Fight | Juego de Combates por Turnos

[![Demo](https://img.shields.io/badge/Demo-Vercel-000?style=for-the-badge&logo=vercel)](https://pokemon-tau-dun.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repositorio-181717?style=for-the-badge&logo=github)](https://github.com/Sitcka/Pokemon)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![jQuery](https://img.shields.io/badge/jQuery-3.4.1-0769AD?style=for-the-badge&logo=jquery)](https://jquery.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?style=for-the-badge&logo=bootstrap)](https://getbootstrap.com/)

---

## 📖 Descripción

**Pokémon Fight** es un juego de combates por turnos desarrollado en **JavaScript** con integración de la **PokéAPI**. Controla a Pikachu en una batalla épica contra Articuno, con mecánicas fieles a los juegos originales de Pokémon.

### 🎯 Características Principales

| Mecánica | Descripción |
|----------|-------------|
| ⚔️ **Combates por turnos** | Sistema de turnos donde jugador y enemigo se alternan |
| 📊 **Cálculo de daño realista** | Fórmula oficial de Pokémon (nivel, STAB, efectividad, random) |
| 🔄 **Cambio de Pokémon** | Intercambia entre Pikachu, Ditto y Articuno en plena batalla |
| 🌀 **Transformación de Ditto** | Ditto puede transformarse en Articuno copiando sus movimientos |
| 🎣 **Captura** | Usa Pokéballs para capturar a Articuno (probabilidad real) |
| 🏃 **Huida** | Intenta escapar del combate (20% de probabilidad de éxito) |
| 🎨 **Animaciones** | Efectos visuales (wiggle, fadeOut, slideIn, plataformas móviles) |

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** – Estructura semántica
- **CSS3** – Estilos, animaciones, diseño responsive
- **JavaScript (ES6+)** – Lógica del juego
- **jQuery 3.4.1** – Animaciones y manipulación del DOM
- **Bootstrap 5** – Diseño responsive y componentes UI
- **PokéAPI** – Sprites oficiales de Pokémon
- **Vercel** – Hosting y despliegue

---

## 📁 Estructura del Proyecto
```
Pokemon/
├── src/
│ ├── core/
│ │ ├── moves.js # Datos de movimientos
│ │ ├── Pokemon.js # Clase Pokemon con stats
│ │ └── gameState.js # Estado global del juego
│ ├── api/
│ │ └── pokemonApi.js # Integración con PokéAPI
│ ├── css/
│ │ └── style.css # Estilos y animaciones
│ └── game.js # Lógica principal del juego
├── img/ # Recursos gráficos
├── index.html # Punto de entrada
└── README.md # Documentación
```

# 🚀 Instalación y Ejecución

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Edge)
- Conexión a Internet (para cargar sprites desde PokéAPI)

### Pasos para ejecutar localmente

# 1. Clonar el repositorio
``` git clone https://github.com/Sitcka/Pokemon.git ```

# 2. Entrar al directorio
``` cd Pokemon ```

# 3. Abrir el juego
- open index.html   # o haz doble clic en el archivo
- Despliegue en Vercel
# Instalar Vercel CLI
``` npm i -g vercel ```

# Desplegar
vercel
## 🎮 Cómo Jugar
- Controles
- Acción Método
- Iniciar partida	Haz clic en el triángulo ▶️
- Seleccionar acción	Pasa el ratón sobre FIGHT/BAG/POKEMON/RUN y haz clic
- Usar ataque	Selecciona FIGHT → elige un movimiento
- Cambiar Pokémon	Selecciona POKEMON → elige a Ditto o Pikachu
- Capturar	Selecciona BAG → haz clic en CAPTURE
- Huir	Selecciona RUN
- Mecánicas de Combate
- Turno del jugador: Elige un movimiento para atacar a Articuno

- Turno del enemigo: Articuno ataca con un movimiento aleatorio

- Cambio de Pokémon: Puedes cambiar a Ditto o Articuno (si está disponible)

- Transformación: Ditto puede usar "Transformar" para copiar a Articuno

- Derrota/Victoria: El juego termina cuando un equipo se queda sin Pokémon

### 📊 Fórmula de Daño Implementada
Daño = ((2 * Nivel / 5 + 2) * Potencia * (Ataque / Defensa) / 50 + 2) 
        * STAB * Efectividad * Random(217-255)/255


### Factores incluidos:

✅ STAB: 1.5x si el tipo del movimiento coincide con el Pokémon

✅ Efectividad: Superefectivo (2x), normal (1x), resistente (0.5x)

✅ Precisión: Los movimientos pueden fallar

✅ Factor aleatorio: Entre 0.85 y 1.00

## 🧪 Tests Unitarios (Próximamente)
- El proyecto está preparado para incluir tests unitarios con Jest en futuras versiones. Se testearán:

- Clase Pokemon (HP, daño, curación)

- Calculadora de daño (STAB, efectividad, precisión)

## 🔮 Mejoras Futuras
- Más Pokémon y movimientos

- Sistema de niveles y experiencia

- Efectos de estado (paralizar, dormir, quemar)

- Modo multijugador local

- Guardado de partida (localStorage)

- Tests unitarios completos

## 📝 Licencia:
Este proyecto está bajo la licencia MIT.

### 👨‍💻 Autor:
Josep Pinos

GitHub: @Sitcka

<p align="center"> <b>Hecho con ❤️ y JavaScript</b> </p>