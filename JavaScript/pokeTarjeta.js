import btnAbout from "./btn-about.js";
import btnEvo from "./btn-evo.js";
import btnRegIni from "./btn-regresar.js";
import btnStast from "./btn-stats.js";
import btnMoves from "./btn-moves.js";

const DibujarTarjeta = (pokemon) => {
    const tarjeta = document.createElement("div");
    tarjeta.setAttribute("POKE-TARJETA", "");

    const pokearea = document.querySelector("[POKE-AREA]");
    const regre = document.createElement("button");

    regre.innerHTML = `regresar`;
    regre.setAttribute("BTN-REG-PRINC", "");
    
    const input = document.querySelector("#pokeinput");
    input.disabled = true;

    let tiposP = pokemon.types;
    let tipos = [];
                
    for (let i = 0; i < tiposP.length; i++) {
        tipos[i] = `<h3 class="${tiposP[i].type.name} text-center align-self-center py-1 px-2" style="font-size: 16px; width: 80px;">${tiposP[i].type.name}</h3>`;
    }

    tipos = tipos.join('');

    tarjeta.innerHTML = `
        <nav class="d-flex flex-row-reverse justify-content-between align-items-stretch z-3" style="height: 5vh;" POKE-NAV>
            <div class="d-flex align-items-stretch" BTN-OTROS>
                <button BTN-ADD-FAVO>favoritos</button>
                <button BTN-ADD-POKE>capturar</button>
            </div>
        </nav>
        <div class="" style="height: 30vh;" POKE-IMG>
            
            <div class="container">
                <div class="row">
                    <div class="col-md-7 position-relative">
                        <h3 class="position-absolute z-2">${pokemon.name}</h3>
                        <img class="ms-4" style="height: 30vh;" src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
                    </div>
                    <div class="col-md-5 poke-nombre-tipos">
                        <h1 class="mt-4 text-center" style="height: 20px;">${pokemon.id}</h1>
                        <div class="d-flex flex-column gap-1 p-1 mb-1">
                            ${tipos}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div POKE-STATS>
            <nav class="d-flex justify-content-evenly" style="height: 5vh;" POKE-NAV>
                <button class"btn-sts" BTN-POKE-ABOUT>about</button>
                <button class"btn-sts" BTN-BASE-STATS>base stats</button>
                <button class"btn-sts" BTN-EVOLUTION>evolution</button>
                <button class"btn-sts" BTN-POKE-MOVES>moves</button>
            </nav>
            <div class="d-flex flex-column p-1" style="height: 40vh;" POKE-DATOS>
                
            </div>
        </div>
    `;

    tarjeta.setAttribute("class", "m-auto position-fixed z-3 border border-white");
    tarjeta.setAttribute("style", "width: 400px; height: 80vh; top: 14vh;");

    const block = document.createElement("div");
    block.setAttribute("class", "block-conten");

    pokearea.appendChild(block);
    pokearea.appendChild(tarjeta);

    const about = document.querySelector("[BTN-POKE-ABOUT]");
    about.addEventListener("click", function (){
        btnAbout(pokemon);
    });

    const stats = document.querySelector("[BTN-BASE-STATS]");
    stats.addEventListener("click", function (){
        btnStast(pokemon);
    });

    const evo = document.querySelector("[BTN-EVOLUTION]");
    evo.addEventListener("click", function (){
        btnEvo(pokemon);
    });

    const moves = document.querySelector("[BTN-POKE-MOVES]");
    moves.addEventListener("click", function (){
        btnMoves(pokemon);
    });

    const navb = document.querySelector("[POKE-NAV]");

    regre.addEventListener("click", function () {
        btnRegIni();
    });

    navb.appendChild(regre);

    
}
export default DibujarTarjeta;