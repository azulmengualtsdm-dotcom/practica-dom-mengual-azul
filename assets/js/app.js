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

const rowPersonajes=document.querySelector('#personajes');
const mostrarPersonajes=()=>{
personajes.forEach((personaje)=> {
    rowPersonajes.innerHTML+=`
    <div class="col-3 m-3">
          <div class="card" style="width: 18rem">
            <img src="${personaje.imagen}" class="card-img-top" alt="${personaje.nombre}" />
            <div class="card-body">
              <h5 class="card-title">${personaje.nombre}</h5>
              <a href="#" class="btn btn-eliminar bg-warning">Eliminar</a>
            </div>
          </div>
        </div>
    `
}
)
}
mostrarPersonajes();

rowPersonajes.addEventListener('click', (e)=> {
    if (e.target.classList.contains('btn-eliminar')) {
         const card=e.target.closest('.card');
         if (card){
            card.remove()
         }
        }
       });
       
       const inputFiltro=document.querySelector ("#filtro")
inputFiltro.addEventListener('sumbit', (e)=> {
    
  })