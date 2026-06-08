const personajes = [
  { 
    id: 1, 
    nombre: "A-Bomb", 
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg"
  },
  { 
    id: 2,
    nombre: "Abe Sapien", 
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg" },
  { 
    id: 3,
    nombre: "Abin Sur", 
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg" 

  },
  { 
    id: 4,
    nombre: "Abomination",
    imagen:"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg"
  },
  {
    id: 5, 
    nombre: "Abraxas",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg"
  }
];
let nuevoArreglo=[...personajes];

const formulario=document.querySelector("#formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const valorNombre=document.querySelector("#nombre").value;
  const valorImagen=document.querySelector("#imagen").value;

  const nuevoPersonaje={
    id:personajes.length>0? personajes[personaje.length-1].id +1:1,
    nombre:valorNombre,
    imagen:valorImagen
  };
  personajes.push(nuevoPersonaje);
  mostrarPersonajes(personajes);

});

const rowPersonajes=document.querySelector('#personajes');
rowPersonajes.addEventListener("click", (e)=>{
  if (e.target.classlist.constains("btn-eliminar")){
    const card=e.target.closest(".card");
    if (card){
      card.remove()
    }
  }
});

