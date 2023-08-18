const propiedades = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    metros: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    metros: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    metros: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    metros: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    metros: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    metros: 500,
  },
];

const departamentos = document.querySelector(".departamentos");
const contadorSpan = document.querySelector(".contador");
let cuartos = document.getElementById("cuartos");
let desde = document.getElementById("desde");
let hasta = document.getElementById("hasta");
const button = document.getElementById("button");

for (let propiedad of propiedades) {
  const template = `
    <div class="card shadow mb-5 bg-white rounded text-dark mb-3 mx-sm-3">
      <div class="card-img-top pb-0 ">
        <img
          class="w-100"
          src="${propiedad.src}"
        />
      </div>
      <div class="card-body">
        <h5 class="card-title">${propiedad.name}</h5>
        <div class="metrica">
        <p class="card-text">Habitaciones: ${propiedad.rooms}</p>
        <p class="card-text">Metros cuadrados: ${propiedad.metros}</p>
        </div>
        <p class="card-text">${propiedad.description}</p>
        <div>
          <button class="btn text-white">Ver más</button>
        </div>
      </div>
    </div>
  `;
  departamentos.innerHTML += template;
}
contadorSpan.textContent = "Total: " + propiedades.length;
function mostrarMensaje() {
  const valueCuartos = parseInt(cuartos.value);
  const valueDesde = parseInt(desde.value);
  const valueHasta = parseInt(hasta.value);
  if (!valueCuartos || !valueDesde || !valueHasta) {
    alert("Porfavor rellene los campos");
  } else {
    departamentos.innerHTML = "";
    let propiedadesFiltradas = [];
    for (let propiedad of propiedades) {
      if (
        propiedad.rooms >= valueCuartos &&
        propiedad.metros >= valueDesde &&
        propiedad.metros <= valueHasta
      ) {
        const template = `
              <div class="card shadow mb-5 bg-white rounded text-dark mb-3 mx-sm-3">
                <div class="card-img-top pb-0 ">
                  <img
                    class="w-100"
                    src="${propiedad.src}"
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">${propiedad.name}</h5>
                  <div class="metrica">
                    <p class="card-text">Habitaciones: ${propiedad.rooms}</p>
                    <p class="card-text">Metros cuadrados: ${propiedad.metros}</p>
                  </div>
                  <p class="card-text">${propiedad.description}</p>
                  <div>
                    <button class="btn text-white">Ver más</button>
                  </div>
                </div>
              </div>
            `;
        departamentos.innerHTML += template;
        propiedadesFiltradas.push(propiedad);
      }
    }
    contadorSpan.textContent = "Total: " + propiedadesFiltradas.length;
  }
}
button.addEventListener("click", mostrarMensaje);
