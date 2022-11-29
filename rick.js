const apiRick=async (pagina)=>{
    let url = "https://rickandmortyapi.com/api/character/?page=" + pagina;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);
    divRes = document.querySelector("#resultado");
    divRes.innerHTML= "";
    data.results.map(item=>{
        divItem = document.createElement('div')
        divItem.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text"><b>Estado: </b>${item.status}</p>
                <p class="card-text"><b>Especie: </b>${item.species}</p>
                <p class="card-text"><b>Género: </b>${item.gender}</p>
                <div id="afrus-container-form" data-form="63eb5735-0d30-4503-8f5e-63f7c16b036e"></div>
                <script src="https://my.afrus.app/template/index.js"></script>
                <a href="${item.url}" class="card-link">Ver detalle</a>
            </div>
        </div>
        `
        divRes.appendChild(divItem);

    });
}

apiRick(1)

const episodios=async (pagina)=>{
    let url = "https://rickandmortyapi.com/api/episode?page=" + pagina;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);
    divRes = document.querySelector("#epi");
    divRes.innerHTML= "";
    data.results.map(item=>{
        divItem = document.createElement('div')
        divItem.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <p class="card-title"><b>ID: </b>${item.id}</p>
                <p class="card-title"><b>Episodio: </b>${item.episode}</p>
                <p class="card-title"><b>Nombre: </b>${item.name}</p>
                <p class="card-title"><b>Fecha de lanzamiento: </b>${item.air_date}</p>
                <a href="${item.url}" class="card-link">Ver episodio</a>
            </div>
        </div>
        `
        divRes.appendChild(divItem);

    });
}

episodios(1)

const locaciones=async (pagina)=>{
    let url = "https://rickandmortyapi.com/api/location?page=" + pagina;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);
    divRes = document.querySelector("#loc");
    divRes.innerHTML= "";
    data.results.map(item=>{
        divItem = document.createElement('div')
        divItem.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <p class="card-title"><b>ID: </b>${item.id}</p>
                <p class="card-title"><b>Nombre: </b>${item.name}</p>
                <p class="card-title"><b>Tipo: </b>${item.type}</p>
                <p class="card-title"><b>Dimensión: </b>${item.dimension}</p>
                <a href="${item.url}" class="card-link">Ver ubicación</a>
            </div>
        </div>
        `
        divRes.appendChild(divItem);

    });
}

locaciones(1)