const boton = document.getElementById("boton");
const contenedor1 = document.getElementById('contenedor1');
const contenedor2 = document.getElementById('contenedor2');
const contenedor3 = document.getElementById('contenedor3');
const contenedor4 = document.getElementById('contenedor4');
const contenedor5 = document.getElementById('contenedor5');
const contenedor6 = document.getElementById('contenedor6');

for (let index = 1; index <= 6; index++) {

    id = obtenerNumeroAleatorio(898);
    function traerPokemons(id_pokemon)
    {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id_pokemon}/`)
        .then((respuesta)=> respuesta.json())
        .then((data)=> {crearPokemon(data);
        });
    }

    function crearPokemon(pokemon){

        const imagen = document.createElement('img');
        imagen.src = pokemon.sprites.front_default;

        const nombre = document.createElement('h2');
        nombre.textContent = pokemon.name;

        const cont = document.createElement('div'); 
        cont.appendChild(nombre);
        cont.appendChild(imagen);

        switch (index) {
            case 1:
                contenedor1.appendChild(cont);
                break;
            
            case 2:
                contenedor2.appendChild(cont);
                break;

            case 3:
                contenedor3.appendChild(cont);
                break;
            case 4:
                contenedor4.appendChild(cont);
                break;
            case 5:
                contenedor5.appendChild(cont);
                break;
            case 6:
                contenedor6.appendChild(cont);
                break;
        }
    }
    traerPokemons(id);
}

function obtenerNumeroAleatorio(m) {
    return Math.floor(Math.random() * m);
}

