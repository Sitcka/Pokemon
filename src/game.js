// src/game.js
// Este archivo contiene toda la lógica del juego

// Función para la animación de la plataforma
function platform() {
    $("#platform2").animate({ top: "-=10px" }, 600).animate({ top: "+=10px" }, 600);
    $('#platform1').animate({ top: "-=10px" }, 600).animate({ top: "+=10px" }, 600);
    timer = setTimeout(platform, 1200);
}

function buscarPokemon(nombre, pokemones) {
    let pokemonEncontrado = null;
    pokemones.forEach(pokemon => {
        if (pokemon.nombre.toUpperCase() === nombre.toUpperCase()) {
            pokemonEncontrado = pokemon;
        }
    });
    return pokemonEncontrado;
}

function buscarMovimiento(nombre, movimientos) {
    return movimientos.find(movimiento => movimiento.nombre.toUpperCase() === nombre.toUpperCase());
}

function dañoMovimiento(nombre_pokemon, pokemon_contrario, nombre_ataque) {
    let pokemon_referencia = buscarPokemon(nombre_pokemon, pokemones);
    let pokemon_referencia_enemigo = buscarPokemon(pokemon_contrario, pokemones);
    let movimientos_buscar = pokemon_referencia.movimientos;
    let movimiento_ataque = buscarMovimiento(nombre_ataque, movimientos_buscar);
    movimiento_ataque.pp -= 1;
    let level = pokemon_referencia.level;
    let potencia = movimiento_ataque.potencia;
    let ataque = (movimiento_ataque.categoria === 'Especial') ? pokemon_referencia.ataque_especial : pokemon_referencia.ataque;
    let defensa = (movimiento_ataque.categoria === 'Especial') ? pokemon_referencia_enemigo.defensa_especial : pokemon_referencia_enemigo.defensa;
    let stab = (pokemon_referencia.tipo_primario === movimiento_ataque.tipo_movimiento || pokemon_referencia.tipo_secundario === movimiento_ataque.tipo_movimiento) ? 1.5 : 1;
    let tipo1 = pokemon_referencia.efectividad.get(pokemon_referencia_enemigo.tipo_primario);
    let tipo2 = (pokemon_referencia_enemigo.tipo_secundario === null) ? 1 : pokemon_referencia.efectividad.get(pokemon_referencia_enemigo.tipo_secundario);
    let valor_random = Math.round(Math.random() * (255 - 217) + 217) / 255;
    let con_presicion = (movimiento_ataque.precision === 0) ? 1 : movimiento_ataque.precision;
    let daño = Math.floor(((2 * level / 5 + 2) * potencia * (ataque / defensa) / 50 + 2) * stab * tipo1 * tipo2 * valor_random) * con_presicion;
    console.log(level + " Nivel " + potencia + " Potencia " + ataque + " Ataque " + defensa + " Defensa " + stab + " STAB" + " Tipo 1 " + tipo1 + " Tipo 2 " + tipo2 + " Valor random " + valor_random.toFixed(2) + " Presicion " + movimiento_ataque.precision);
    return daño;
}

function golpear(nombre_pokemon, pokemon_contrario, nombre_ataque) {
    let daño = dañoMovimiento(nombre_pokemon, pokemon_contrario, nombre_ataque);
    actualizarPuntosVidaEnemigo(daño);
}

function desaparecerArticuno() {
    let articunoImg = document.getElementById('enemy');
    articunoImg.style.transition = 'opacity 2s';
    articunoImg.style.opacity = '0';
    setTimeout(() => articunoImg.remove(), 4000);
}

function desaparecerArticunoCopia() {
    let articunoCopiaImg = document.getElementById('mypokemon');
    articunoCopiaImg.style.transition = 'opacity 2s';
    articunoCopiaImg.style.opacity = '0';
    setTimeout(() => articunoCopiaImg.remove(), 4000);
}

function desaparecerPikachu() {
    let pikachuImg = document.getElementById('mypokemon');
    pikachuImg.style.transition = 'opacity 2s';
    pikachuImg.style.opacity = '0';
    setTimeout(() => pikachuImg.remove(), 3000);
}

async function invocarPokemon(pokemonName, boleano, etiqueta_padre, enemigo) {
    await pokemon(pokemonName, boleano, etiqueta_padre, enemigo);
    let pokemonElement = etiqueta_padre.lastChild;
    pokemonElement.classList.add('slideInAnimation');
}

function actualizarPuntosVidaEnemigo(daño) {
    articuno.hp -= daño;
    let vidaEnemigo = document.getElementById('vida-enemigo');
    let puntosVidaEnemigo = document.getElementById('puntos-vida-enemigo');
    let puntosVida = parseInt(puntosVidaEnemigo.innerText) - daño;
    if (puntosVida <= 0) {
        puntosVida = 0;
        desaparecerArticuno();
    }
    puntosVidaEnemigo.innerText = puntosVida;
    let porcentajeVida = (puntosVida / puntosVidaEnemigo.dataset.vidaTotal) * 100;
    vidaEnemigo.style.width = porcentajeVida + '%';
}

function actualizarPuntosVidaPikachu(daño) {
    let vidaPikachu = document.getElementById('vida-pikachu');
    let puntosVidaPikachu = document.getElementById('puntos-vida-pikachu');
    let puntosVida = parseInt(puntosVidaPikachu.innerText) - daño;
    pikachu.hp -= daño;
    if (puntosVida <= 0) {
        puntosVida = 0;
        pikachu.hp = 0;
        desaparecerPikachu();
        if (pikachu.hp === 0 && copiaArticuno.hp === 0) {
            perdiste();
        } else if (puntosVida === 0) {
            if (transformar_ejecutada === true) {
                cambiarPokemonArticuno();
            } else {
                cambiarPokemon();
            }
        }
    }
    puntosVidaPikachu.innerText = puntosVida;
    let porcentajeVida = (puntosVida / parseInt(puntosVidaPikachu.dataset.vidaTotal)) * 100;
    vidaPikachu.style.width = porcentajeVida + '%';
}

function actualizarPuntosVidaArticunoCopia(daño) {
    let vidaArticuno = document.getElementById('vida-articuno-copia');
    let puntosVidaArticuno = document.getElementById('puntos-vida-articuno-copia');
    let puntosVida = parseInt(puntosVidaArticuno.innerText) - daño;
    copiaArticuno.hp -= daño;
    if (puntosVida <= 0) {
        puntosVida = 0;
        copiaArticuno.hp = 0;
        desaparecerArticunoCopia();
        if (pikachu.hp === 0 && copiaArticuno.hp === 0) {
            perdiste();
        } else if (puntosVida === 0) {
            cambiarPokemonPikachu();
        }
    }
    puntosVidaArticuno.innerText = puntosVida;
    let porcentajeVida = (puntosVida / parseInt(puntosVidaArticuno.dataset.vidaTotal)) * 100;
    vidaArticuno.style.width = porcentajeVida + '%';
}

function actualizarPuntosVidaDitto(daño) {
    let vidaArticuno = document.getElementById('vida-ditto');
    let puntosVidaArticuno = document.getElementById('puntos-vida-ditto');
    let puntosVida = parseInt(puntosVidaArticuno.innerText) - daño;
    actualizarPuntosVidaArticunoCopia(daño);
    if (puntosVida <= 0) {
        puntosVida = 0;
        copiaArticuno.hp = 0;
        if (pikachu.hp === 0 && copiaArticuno.hp === 0) {
            perdiste();
        } else if (puntosVida === 0 && contrincacnteArticuno().toUpperCase() !== 'PIKACHU') {
            cambiarPokemonPikachu();
        }
    }
    puntosVidaArticuno.innerText = puntosVida;
    let porcentajeVida = (puntosVida / parseInt(puntosVidaArticuno.dataset.vidaTotal)) * 100;
    vidaArticuno.style.width = porcentajeVida + '%';
}

function contrincacnteArticuno() {
    let cuadrosPokemon = document.querySelectorAll('.cuadro-vida-mypokemon');
    let nombrePokemon;
    cuadrosPokemon.forEach(cuadro => {
        if (cuadro.style.display === 'block') {
            nombrePokemon = cuadro.querySelector('.cuadro-vida-texto > h1').textContent;
        }
    });
    return nombrePokemon;
}

function ataqueArticuno() {
    let movimientos = articuno.movimientos;
    let movimientosKeys = Object.keys(movimientos);
    let randomIndex = Math.floor(Math.random() * movimientosKeys.length);
    let movimientoSeleccionado = movimientos[movimientosKeys[randomIndex]];
    let nombreContrincacnte = contrincacnteArticuno();
    ataqueArticunoTexto = movimientoSeleccionado.nombre;
    let daño = dañoMovimiento('Articuno', nombreContrincacnte, movimientoSeleccionado.nombre);
    $('#enemy').animate({ left: "-=200px" }, 200).animate({ left: "+=200px" }, 200);
    $('#mypokemon').addClass('wiggle');
    setTimeout(() => $('#mypokemon').removeClass('wiggle'), 1000);
    if (nombreContrincacnte.toUpperCase() === 'PIKACHU') {
        actualizarPuntosVidaPikachu(daño);
        actualizarPuntosVidaPikachuElegir(daño);
    } else if (nombreContrincacnte.toUpperCase() === 'ARTICUNO') {
        actualizarPuntosVidaArticunoCopia(daño);
        actualizarPuntosVidaArticunoCopiaElegir(daño);
    } else {
        actualizarPuntosVidaDitto(daño);
        actualizarPuntosVidaArticunoCopiaElegir(daño);
    }
}

function llenarAtaquesDitto(movimientosDitto) {
    let nombreAtaqueElement = document.getElementById('ataque1').querySelector('.actionText');
    nombreAtaqueElement.textContent = movimientosDitto[0].nombre;
    for (let i = 1; i <= 3; i++) {
        let elem = document.getElementById('ataque' + (i + 1)).querySelector('.actionText');
        elem.textContent = "";
    }
}

function llenarAtauqesArticuno() {
    copiaArticuno.movimientos.forEach((movimiento, index) => {
        const attackBox = document.getElementById(`ataque${index + 1}`);
        if (attackBox) attackBox.querySelector('.actionText').textContent = movimiento.nombre;
    });
}

function cambiarPokemon() {
    let cuadrosVida = document.querySelectorAll('.cuadro-vida-mypokemon');
    cuadrosVida[1].style.display = "block";
    cuadrosVida[0].style.display = "none";
    let pikachuImg = document.getElementById('mypokemon');
    if (pikachuImg) pikachuImg.remove();
    invocarPokemon('ditto', true, myzone, false);
    llenarAtaquesDitto(ditto.movimientos);
}

function cambiarPokemonPikachu() {
    let cuadrosVida = document.querySelectorAll('.cuadro-vida-mypokemon');
    cuadrosVida[0].style.display = "block";
    cuadrosVida[1].style.display = "none";
    cuadrosVida[2].style.display = "none";
    let dittoImg = document.getElementById('mypokemon');
    if (dittoImg) dittoImg.remove();
    invocarPokemon('pikachu', true, myzone, false);
    pikachu.movimientos.forEach((movimiento, index) => {
        const attackBox = document.getElementById(`ataque${index + 1}`);
        if (attackBox) attackBox.querySelector('.actionText').textContent = movimiento.nombre;
    });
}

function cambiarPokemonArticuno() {
    let cuadrosVida = document.querySelectorAll('.cuadro-vida-mypokemon');
    cuadrosVida[0].style.display = "none";
    cuadrosVida[1].style.display = "none";
    cuadrosVida[2].style.display = "block";
    let img = document.getElementById('mypokemon');
    if (img) img.remove();
    invocarPokemon('articuno', true, myzone, false);
    llenarAtauqesArticuno();
}

function transformar_efecto() {
    transformar_ejecutada = true;
    let cuadrosVida = document.querySelectorAll('.cuadro-vida-mypokemon');
    cuadrosVida[1].style.display = "none";
    cuadrosVida[0].style.display = "none";
    cuadrosVida[2].style.display = "block";
    copiaArticuno.hp = ditto.hp;
    copiaArticuno.movimientos.forEach(m => m.pp = 5);
    let imagenDitto = document.getElementById('mypokemon');
    if (imagenDitto) imagenDitto.remove();
    invocarPokemon('articuno', true, myzone, false);
    llenarAtauqesArticuno();
}

function actualizarPuntosVidaPikachuElegir(daño) {
    let vidaPikachu = document.getElementById('vida-pikachu-elegir');
    let puntosVidaPikachu = document.getElementById('puntos-vida-pikachu-elegir');
    let puntosVida = parseInt(puntosVidaPikachu.innerText) - daño;
    if (puntosVida < 0) puntosVida = 0;
    puntosVidaPikachu.innerText = puntosVida;
    vidaPikachu.style.width = (puntosVida / 142) * 100 + '%';
}

function actualizarPuntosVidaArticunoCopiaElegir(daño) {
    let vidaArticuno = document.getElementById('vida-articuno-copia-elegir');
    let puntosVidaArticuno = document.getElementById('puntos-vida-articuno-copia-elegir');
    let puntosVida = parseInt(puntosVidaArticuno.innerText) - daño;
    if (puntosVida < 0) puntosVida = 0;
    puntosVidaArticuno.innerText = puntosVida;
    vidaArticuno.style.width = (puntosVida / 155) * 100 + '%';
}

function intentarCapturar() {
    bag.pokeball -= 1;
    let f = (articuno.hp / 181) * (255 / 3);
    let m = Math.floor(Math.random() * 256);
    return m > f;
}

function intentarHuir() {
    return Math.floor(Math.random() * 100) <= 20;
}

function ataqueRealizado(nombrePokemon, nombrAtaque, texto) {
    $('#mainBox').show();
    $("#mainBox").text(`${nombrePokemon} ${texto} ${nombrAtaque}`);
    $(".elegir-pokemon").hide();
    $('.bag').hide();
    $("#attacks").css("display", "none");
}

function ganaste() {
    var pantallaNegra = $("<div></div>").css({
        "position": "fixed",
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "100%",
        "background-color": "black",
        "z-index": "9999",
        "display": "none"
    }).appendTo("body");
    var ganaste_texto = $("<div>¡You win!</div>").css({
        "position": "fixed",
        "top": "50%",
        "left": "50%",
        "transform": "translate(-50%, -50%)",
        "color": "white",
        "font-size": "3em",
        "font-weight": "bold",
        "text-align": "center",
        "z-index": "10000",
        "display": "none"
    }).appendTo("body");
    pantallaNegra.fadeIn(1000);
    ganaste_texto.delay(1000).fadeIn(1000);
}

function perdiste() {
    var pantallaNegra = $("<div></div>").css({
        "position": "fixed",
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "100%",
        "background-color": "black",
        "z-index": "9999",
        "display": "none"
    }).appendTo("body");
    var perdiste_texto = $("<div>You louse :'(</div>").css({
        "position": "fixed",
        "top": "50%",
        "left": "50%",
        "transform": "translate(-50%, -50%)",
        "color": "white",
        "font-size": "3em",
        "font-weight": "bold",
        "text-align": "center",
        "z-index": "10000",
        "display": "none"
    }).appendTo("body");
    pantallaNegra.fadeIn(1000);
    perdiste_texto.delay(1000).fadeIn(1000);
}

// Inicialización cuando el DOM esté listo
$(document).ready(function () {
    initPokemons();
    myzone = document.getElementById('myzone');
    pokemon('pikachu', true, myzone, false);
    let oponent = document.getElementById('opponent');
    pokemon('articuno', false, oponent, true);
    let elegir = document.getElementsByClassName('myzone-elegir')[0];
    pokemonElegir('ditto', elegir, 'ditto-elegir');
    let elegir2 = document.getElementsByClassName('myzone-elegir')[1];
    pokemonElegir('pikachu', elegir2, 'pikachu-elegir');
    
    pikachu.movimientos.forEach((movimiento, index) => {
        const attackBox = document.getElementById(`ataque${index + 1}`);
        if (attackBox) attackBox.querySelector('.actionText').textContent = movimiento.nombre;
    });

    $('#fight').hide();
    $('#ui').hide();
    
    $('#contenedor-play').on('click', function () {
        $('#fondo-pokemon').hide();
        $(this).hide();
        $('#fight').show();
        platform();
        $('#opponent').animate({ right: "-=1100px" }, 600);
        $('#myzone').animate({ left: "-=1100px" }, 600);
        setTimeout(() => $('#ui').show('slow'), 1000);
    });

    $(".actionBox").on("mouseenter", function () {
        $(".selector").hide();
        let id = $(".actionBox").index(this);
        $("#selector" + (id + 1)).show();
    });
    
    $(".attackBox").on("mouseenter", function () {
        $(".triangle").hide();
        let id = $(".attackBox").index(this);
        $("#triangle" + (id + 1)).show();
    });

    $("#selector1").on("click", function () {
        $("#mainBox").hide();
        $("#attacks").css("display", "flex");
        $(".triangle").hide();
        $("#triangle1").show();
        $(".elegir-pokemon").hide();
        $('.bag').hide();
    });

    $('.attackBox').on("click", function (event) {
        $('#mypokemon').animate({ top: "-=200px", left: "+=500px" }, 300)
            .animate({ top: "+=200px", left: "-=500px" }, 300, function () {
                if (articuno.hp > 0) {
                    ataqueArticuno();
                    $('#actions').hide();
                    setTimeout(() => $('#actions').show(), 1000);
                    setTimeout(ataqueRealizado('Articuno', `${ataqueArticunoTexto}. Your turn:`, ' performed the attack: '), 1500);
                } else {
                    ganaste();
                }
            });
        let pokemon_enemigo = $('#enemy');
        pokemon_enemigo.addClass('wiggle');
        setTimeout(() => pokemon_enemigo.removeClass('wiggle'), 500);
        let ataque = $(this).find('.actionText').text();
        if ($(this).attr('id') === 'ataque1') {
            if (buscarMovimiento(ataque, ditto.movimientos)) {
                transformar_efecto();
                golpear('ditto', 'articuno', ataque);
                ataqueRealizado('Ditto', ataque, ' performed the attack: ');
            } else if (buscarMovimiento(ataque, copiaArticuno.movimientos)) {
                golpear('articuno', 'articuno', ataque);
                ataqueRealizado('Ditto', ataque, ' performed the attack: ');
            } else {
                golpear('pikachu', 'articuno', ataque);
                ataqueRealizado('Pikachu', ataque, ' performed the attack: ');
            }
        }
        if ($(this).attr('id') === 'ataque2' || $(this).attr('id') === 'ataque3' || $(this).attr('id') === 'ataque4') {
            if (buscarMovimiento(ataque, copiaArticuno.movimientos)) {
                golpear('articuno', 'articuno', ataque);
                ataqueRealizado('Ditto', ataque, ' performed the attack: ');
            } else {
                golpear('pikachu', 'articuno', ataque);
                ataqueRealizado('Pikachu', ataque, ' performed the attack: ');
            }
        }
    });

    $("#selector3").on("click", function () {
        if (pikachu.hp === 0 || copiaArticuno.hp === 0) {
            $("#mainBox").show();
            $("#mainBox").text('You no longer have any Pokémon left alive, choose another option:');
            $(".elegir-pokemon").hide();
            $("#attacks").css("display", "none");
            $('.bag').hide();
        } else {
            $("#mainBox").hide();
            $(".elegir-pokemon").show();
            $("#attacks").css("display", "none");
            $('.bag').hide();
        }
    });
    
    var contenedorDitto = $('.container.elegir-pokemon .row:first-child .col-md-6:first-child .row:first-child .col-md-12:nth-child(1)');
    var contenedorPikachu = $('.container.elegir-pokemon .row:first-child .col-md-6:first-child .row:first-child .col-md-12:nth-child(2)');
    
    contenedorDitto.on('click', function () {
        if (contrincacnteArticuno().toUpperCase() === "PIKACHU" && transformar_ejecutada === false) {
            cambiarPokemon();
            ataqueRealizado('Pikachu', ' Ditto ', ' changed to');
        } else if (contrincacnteArticuno().toUpperCase() === "PIKACHU" && transformar_ejecutada === true) {
            cambiarPokemonArticuno();
            ataqueRealizado('Pikachu', ' Ditto ', ' changed to');
        }
    });
    
    contenedorPikachu.on('click', function () {
        if (contrincacnteArticuno().toUpperCase() === "ARTICUNO" || contrincacnteArticuno().toUpperCase() === "DITTO") {
            cambiarPokemonPikachu();
            ataqueRealizado('Ditto', ' Pikachu ', ' changed to');
        }
    });

    let clickSelector2 = 0;
    $("#selector2").on("click", function () {
        if (bag.pokeball === 0) {
            $("#mainBox").show();
            $("#mainBox").text('¡The bag is empty!');
            $(".elegir-pokemon").hide();
            $("#attacks").css("display", "none");
            $('.bag').hide();
        } else {
            clickSelector2 += 1;
            $("#mainBox").hide();
            $(".elegir-pokemon").hide();
            $("#attacks").css("display", "none");
            $('.bag').show();
            if (clickSelector2 === 1) {
                setTimeout(() => alert('Podras capturar al pokemon dando click en la palabra "CAPTURE"'), 500);
            }
        }
    });

    $('.bag h3').on('click', function () {
        if (intentarCapturar() === true) {
            ataqueRealizado('Has', ' Articuno. ', ' capturado a ');
            setTimeout(ganaste(), 8000);
        } else {
            ataqueRealizado('Has fallado', ' otra opcion: ', ' eligue ');
        }
    });

    $('#selector4').on('click', function () {
        $("#mainBox").hide();
        $(".elegir-pokemon").hide();
        $("#attacks").css("display", "none");
        $('.bag').hide();
        if (intentarHuir() === true) {
            ataqueRealizado('You ', ' escape..... ', " could ");
            setTimeout(ganaste(), 5000);
        } else {
            ataqueRealizado('You ', ' escape. Lose your turn.', " couldn't ");
            $('#actions').hide();
            setTimeout(() => {
                if (articuno.hp > 0) {
                    ataqueArticuno();
                    $('#actions').hide();
                    setTimeout(() => $('#actions').show(), 1000);
                    setTimeout(ataqueRealizado('Articuno', `${ataqueArticunoTexto}. Your turn:`, ' performed the attack: '), 1500);
                }
            }, 2000);
        }
    });
});