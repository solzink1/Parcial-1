const API_KEY = "e45b39fa90da46d30883f5cc082fd869";
const API_KEY_MAPS = "AIzaSyChryZ6Va6QytJrGdxXPrBIhn1sCMyOxLs";

const button = document.getElementById("sendButton");
const contenido = document.getElementById("contenido");
const inputElement = document.getElementById("search"); 

const valorUltimaBusqueda = JSON.parse(localStorage.getItem("valor"));
inputElement.value = valorUltimaBusqueda;


button.addEventListener("click", () =>  {
    searchInAPI(inputElement.value);
});

function searchInAPI(wordToSearch){
    console.log ("valor", wordToSearch);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${wordToSearch}&units=metric&lang=es&appid=${API_KEY}`)
    .then(function(response){
        console.log(response);
        return response.json();
    }).then(function(responseJson){
        if (responseJson.cod == 200){
        console.log(responseJson);
        showElements(responseJson);
        saveResults(responseJson);
    } else {
        showNotFound();
    } 
    })
    .catch(function(error){
        console.log('Fallo!', error);
    })
}

function createMaps(){
    let iframe = document.createElement('iframe');
    iframe.id = ('mapa');

    this.getIframe = () => {
        return iframe;
    }
} createMaps();

function createNotFound(){
    let error = document.createElement('span');
    error.className= ('error');
    error.innerHTML = (`Ciudad no encontrada, ingrese una nueva.`);
 
    this.getError = () => {
        return error;
    }
} createNotFound();

function showNotFound(){
    let ultimaCiudad;
    document.getElementById("search").value = "";

if (ultimaCiudad != undefined) {    
    getError().remove();    
} else  {
    getCiudad().remove();
    getTemp_max().remove();
    getTemp_min().remove();
    getDescripcion().remove();
    getDetalles().remove();
    getHumidity().remove();
    getFeels_like().remove();
    getPressure().remove();
    getSpeed().remove();
    getImg1().remove();
    getImg2().remove();
    getImg3().remove();
    getImg4().remove();
    getImg5().remove();
    getImg6().remove();
    getImg7().remove();
    getImg8().remove();
    getImg9().remove();
    getImg10().remove();
    getIframe().remove();
    contenido.appendChild(getError());
}
}

function createElements(){     
    let ciudad = document.createElement('span');
    ciudad.id= ('ciudad');

    this.getCiudad = () => {
        return ciudad;
    }


    let temp_max = document.createElement('span');
    temp_max.className= ('temp-max');

    this.getTemp_max = () => {
        return temp_max;
    }

    let temp_min = document.createElement('span');
    temp_min.className= ('temp-min');

    this.getTemp_min = () => {
        return temp_min;
    }

    let descripcion = document.createElement('span');
    descripcion.className= ('descripcion');

    this.getDescripcion = () => {
        return descripcion;
    }

    
    let detalles = document.createElement('span');
    detalles.className= ('detalles');

    this.getDetalles = () => {
        return detalles;
    }

    let humidity = document.createElement('span');
    humidity.className= ('humidity');

    this.getHumidity = () => {
        return humidity;
    }

    let feels_like = document.createElement('span');
    feels_like.className= ('feels-like');

    this.getFeels_like = () => {
        return feels_like;
    }

    let pressure = document.createElement('span');
    pressure.className= ('pressure');

    this.getPressure = () => {
        return pressure;
    }

    let speed = document.createElement('span');
    speed.className= ('speed');

    this.getSpeed = () => {
        return speed;
    }
    
    let img1 = document.createElement('img');
    img1.setAttribute("src", "icon/11d.png");
    img1.className= ('img-fluid');

    this.getImg1 = () => {
        return img1;
    }

    let img2 = document.createElement('img');
    img2.setAttribute("src", "icon/09d.png");
    img2.className= ('img-fluid');

    this.getImg2 = () => {
        return img2;
    }

    let img3 = document.createElement('img');
    img3.setAttribute("src", "icon/10d.png");
    img3.className= ('img-fluid');

    this.getImg3 = () => {
        return img3;
    }
    let img4 = document.createElement('img');
    img4.setAttribute("src", "icon/13d.png");
    img4.className= ('img-fluid');

    this.getImg4 = () => {
        return img4;
    }

    let img5 = document.createElement('img');
    img5.setAttribute("src", "icon/50d.png");
    img5.className= ('img-fluid');

    this.getImg5 = () => {
        return img5;
    }

    let img6 = document.createElement('img');
    img6.setAttribute("src", "icon/01d.png");
    img6.className= ('img-fluid');

    this.getImg6 = () => {
        return img6;
    }

    let img7 = document.createElement('img');
    img7.setAttribute("src", "icon/02d.png");
    img7.className= ('img-fluid');

    this.getImg7 = () => {
        return img7;
    }

    let img8 = document.createElement('img');
    img8.setAttribute("src", "icon/03d.png");
    img8.className= ('img-fluid');

    this.getImg8 = () => {
        return img8;
    }

    let img9 = document.createElement('img');
    img9.setAttribute("src", "icon/04d.png");
    img9.className= ('img-fluid');

    this.getImg9 = () => {
        return img9;
    }

    let img10 = document.createElement('img');
    img10.setAttribute("src", "icon/04d.png");
    img10.className= ('img-fluid');

    this.getImg10 = () => {
        return img10;
    }
} createElements();

if (valorUltimaBusqueda != null) {
    showElements(valorUltimaBusqueda);
}

function saveResults(data){
    localStorage.setItem("valor", data);

    localStorage.getItem("valor");

    localStorage.setItem("valor", JSON.stringify(data));
    JSON.parse(localStorage.getItem("valor"));
} 


function showElements(data){
    const contenido = document.getElementById("contenido");
    getError().remove();

    getCiudad().innerHTML = (`${data.name}<br>`);
    getTemp_max().innerHTML = (`${data.main.temp_max}°máxima<br>`);
    showIcons(data);
    getTemp_min().innerHTML = (`${data.main.temp_min}° minima<br>`);
    getDescripcion().innerHTML = (`${data.weather[0].description}<br>`);
    getDetalles().innerHTML = (`<hr> Detalles <br> <hr>`);
    getHumidity().innerHTML = (`<b>Humedad:</b> ${data.main.humidity}%<br>`);
    getFeels_like().innerHTML = (`<b>Sensación térmica:</b> ${data.main.feels_like}°<br>`);
    getPressure().innerHTML = (`<b>Presión atmosférica:</b> ${data.main.pressure} <br>`);
    getSpeed().innerHTML = (`<b>Velocidad de viento:</b> ${data.wind.speed}km<br>`);
    getIframe().src = (`https://www.google.com/maps/embed/v1/place?key=${API_KEY_MAPS}&q=${inputElement.value}`)

    contenido.appendChild(getCiudad());
    contenido.appendChild(getDescripcion());
    contenido.appendChild(getTemp_max());
    contenido.appendChild(getTemp_min());
    contenido.appendChild(getDetalles());
    contenido.appendChild(getHumidity());
    contenido.appendChild(getFeels_like());
    contenido.appendChild(getPressure());
    contenido.appendChild(getSpeed());
    contenido.appendChild(getIframe());

    document.getElementById("search").value = "";
}

function showIcons(data){
    let id = data.weather[0].id;
    const contenido = document.getElementById("contenido");

    if(id < 250){
        contenido.appendChild(getImg1());
        getError().remove();
        getImg2().remove();
        getImg3().remove();
        getImg4().remove();
        getImg5().remove();
        getImg6().remove();
        getImg7().remove();
        getImg8().remove();
        getImg9().remove();
        getImg10().remove();
    }
    else if(id < 350){
        contenido.appendChild(getImg2());    
        getImg1().remove();
        getImg3().remove();
        getImg4().remove();
        getImg5().remove();
        getImg6().remove();
        getImg7().remove();
        getImg8().remove();
        getImg9().remove();
        getImg10().remove();
    }
    else if (id < 550){
        contenido.appendChild(getImg3());
        getImg1().remove();
        getImg2().remove();
        getImg4().remove();
        getImg5().remove();
        getImg6().remove();
        getImg7().remove();
        getImg8().remove();
        getImg9().remove();
        getImg10().remove();
    } else if(id < 650){
        contenido.appendChild(getImg4());    
        getImg1().remove();
        getImg2().remove();
        getImg3().remove();
        getImg5().remove();
        getImg6().remove();
        getImg7().remove();
        getImg8().remove();
        getImg9().remove();
        getImg10().remove();
    } else if(id < 800){
        contenido.appendChild(getImg5());
        getImg1().remove();
        getImg2().remove();
        getImg3().remove();
        getImg4().remove();
        getImg6().remove();
        getImg7().remove();
        getImg8().remove();
        getImg9().remove();
        getImg10().remove();
    } else if(id === 800){
        contenido.appendChild(getImg6());
        getImg1().remove();
        getImg2().remove();
        getImg3().remove();
        getImg4().remove();
        getImg5().remove();
        getImg7().remove();
        getImg8().remove();
        getImg9().remove();
        getImg10().remove();
    } else if(id === 801 ){
        contenido.appendChild(getImg7());
        getImg1().remove();
        getImg2().remove();
        getImg3().remove();
        getImg4().remove();
        getImg5().remove();
        getImg6().remove();
        getImg8().remove();
        getImg9().remove();
        getImg10().remove();
    }else if(id === 802 ){
        contenido.appendChild(getImg8());
        getImg1().remove();
        getImg2().remove();
        getImg3().remove();
        getImg4().remove();
        getImg5().remove();
        getImg6().remove();
        getImg7().remove();
        getImg9().remove();
        getImg10().remove();
    }else if(id === 803){
        contenido.appendChild(getImg9());
        getImg1().remove();
        getImg2().remove();
        getImg3().remove();
        getImg4().remove();
        getImg5().remove();
        getImg6().remove();
        getImg7().remove();
        getImg8().remove();
        getImg10().remove();
    }else if(id === 804){
        contenido.appendChild(getImg10());
        getImg1().remove();
        getImg2().remove();
        getImg3().remove();
        getImg4().remove();
        getImg5().remove();
        getImg6().remove();
        getImg7().remove();
        getImg8().remove();
        getImg9().remove();
    }
}