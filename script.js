function obtenerResultado (resultado) {

    let stringResultado = `
    <div class="container">
        <div class="titulo-resultado margen-arriba">
            <h2> `+ resultado.estrellas +` </h2>
        </div>
        <div class="izquierda">
            <img src="images/`+ resultado.imagen +`" alt="">
        </div>
        <div class="contenido-resultado">
            <p>` + resultado.mensaje+ `</p>
        </div>
        <div class="cartas-resultado">
        `+ resultado.recomendacion +`
        </div>
    </div>`;


    $('#resultado').html(
        stringResultado
    );
}

let stringTodasLasCartas = '';
todasLasCartas.forEach((carta, index) => {
    stringTodasLasCartas += 
    `<div class="col-md-3 carta" id="carta` + index + `">
        <div class="row">
            <div class="imagen-container">
                <img class="imagen" src="images/` + carta.imagen + `" alt="">
            </div>

            <div class="nombre margen-arriba">
                <h2>` + carta.nombre + `</h2>
            </div>

            <div class="datos grid-container">
                <div class="empatia-carta">
                    <img class="logo-empatia" src="images/empatialogo.JPG" alt="">
                    <p class="valor-empatia">` + carta.empatia + `</p> 
                </div>
                <div class="pasion-carta">
                    <img class="logo-pasion" src="images/pasionlogo.JPG" alt="">
                    <p class="valor-pasion"> ` + carta.pasion + ` </p>
                </div>
                <div class="stamina-carta">
                    <img class="logo-stamina" src="images/staminalogo.JPG" alt="">
                    <p class="valor-stamina">` + carta.stamina + `</p>
                </div>
                <div class="sabiduria-carta">
                    <img class="logo-sabiduria" src="images/sabidurialogo.JPG" alt="">
                    <p class="valor-sabiduria">` + carta.sabiduria + `</p>
                </div>
                <div class="nivel-carta">
                    <label for="nivel">Nivel:</label>
                    <input type="number" class="nivel">
                </div>
            </div>

            <div class="botones margen-arriba">
                <button type="button" class="btn btn-success btn-agregar">Agregar</button> 
                <button type="button" class="btn btn-outline-secondary btn-quitar">Quitar</button>
                <input type="hidden" class="index" value="` + index + `">
            </div>
        </div>
    </div>`
});


$('#faltan').html(
    stringTodasLasCartas
);


$('.carta input.nivel').on('keyup change', function() {
    console.log(parseInt($(this).val()));
    console.log($(this).closest('.row').find('.nombre h2').html());
    $(this).closest('.datos').find('.valor-empatia').html('camila');
});

$('.carta .btn-agregar').click(function() {
    console.log(todasLasCartas[$(this).siblings('.index').val()]);
    estado.cartasElegidas.push(todasLasCartas[$(this).siblings('.index').val()]);
    console.log(estado.cartasElegidas);
});

//---- OBTENCION DE DATOS


//HISTORIA
$('#historia').change(function() {
    console.log("HISTORIA: " +$(this).val());
    estado.historia = $(this).val();
    estado.selectedNivelArray = updateSelect(estado.historia);
    console.log(estado);
});


function updateSelect (historia){
    let selectNivel = `
    <select id="nivel" class="form-control" required="">
        <option value="">Seleccione Nivel</option>`;
    let selectedArray = [];

    switch (historia){
        case 'principal':
            nivelPrincipal.forEach((nivel, index) => {
                selectNivel += `<option value="` + index + `">` + nivel.nivel + ` - ` + nivel.stage + `</option>`;
            });
            selectedArray = nivelPrincipal;
            break;
        case 'anotherRM':
            nivelesRM.forEach((nivel, index) => {
                selectNivel += `<option value="` + index + `">` + nivel.nivel + ` - ` + nivel.stage + `</option>`;
            });
            selectedArray = nivelesRM;
            break;
        case 'anotherJin':
            nivelesJin.forEach((nivel, index) => {
                selectNivel += `<option value="` + index + `">` + nivel.nivel + ` - ` + nivel.stage + `</option>`;
            });
            selectedArray = nivelesJin;
            break;
        case 'anotherSuga':
            nivelesSuga.forEach((nivel, index) => {
                selectNivel += `<option value="` + index + `">` + nivel.nivel + ` - ` + nivel.stage + `</option>`;
            });
            selectedArray = nivelesSuga;
            break;
        case 'anotherjhope':
            nivelesJhope.forEach((nivel, index) => {
                selectNivel += `<option value="` + index + `">` + nivel.nivel + ` - ` + nivel.stage + `</option>`;
            });
            selectedArray = nivelesJhope;
            break;
        case 'anotherJimin':
            nivelesJimin.forEach((nivel, index) => {
                selectNivel += `<option value="` + index + `">` + nivel.nivel + ` - ` + nivel.stage + `</option>`;
            });
            selectedArray = nivelesJimin;
            break;
        case 'anotherV':
            nivelesV.forEach((nivel, index) => {
                selectNivel += `<option value="` + index + `">` + nivel.nivel + ` - ` + nivel.stage + `</option>`;
            });
            selectedArray = nivelesV;
            break;
        case 'anotherJungkook':
            nivelesJungkook.forEach((nivel, index) => {
                selectNivel += `<option value="` + index + `">` + nivel.nivel + ` - ` + nivel.stage + `</option>`;
            });
            selectedArray = nivelesJungkook;
            break;
    }

    selectNivel += `</select>`;
    $('#select-nivel').html(selectNivel);
    registerNivelSelects();
    return selectedArray;
}

//NIVEL
function registerNivelSelects () {
    $('#nivel').change(function() {
        console.log("NIVEL: " + $(this).val());
        let nivelIndexArray = $(this).val();
        estado.nivel = estado.selectedNivelArray[nivelIndexArray];
        console.log(estado);
    });
}


//BONUS DIARIO
//MIEMBRO
$('#miembro').change(function() {
    console.log("MIEMBRO: " +$(this).val());
    estado.miembro = $(this).val();
    console.log(estado);
});

//STAT
$('#stat').change(function() {
    console.log("STAT: " +$(this).val());
    estado.stat = $(this).val();
    console.log(estado);
});
//VALOR
$('#valor').change(function() {
    console.log("VALOR: " +$(this).val());
    estado.valor = parseFloat($(this).val());
    console.log(estado);
});


//AGENCIA
//PASION
$('#pasion').change(function() {
    console.log("PASION: " +$(this).val());
    estado.pasion = parseInt($(this).val());
    console.log(estado);
});
//EMPATIA
$('#empatia').change(function() {
    console.log("EMPATIA: " +$(this).val());
    estado.empatia = parseInt($(this).val());
    console.log(estado);
});
//STAMINA
$('#stamina').change(function() {
    console.log("STAMINA: " +$(this).val());
    estado.stamina = parseInt($(this).val());
    console.log(estado);
});
//SABIDURIA
$('#sabiduria').change(function() {
    console.log("SABIDURIA: " +$(this).val());
    estado.sabiduria = parseInt($(this).val());
    console.log(estado);
});

$('#boton-simular').click(function() {
    bonusDiario();
    statsAgencia();
    //obtenerResultado();
});

function bonusDiario() {

};

function statsAgencia() {

};

//estado.valor = 
