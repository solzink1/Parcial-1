const API_KEY = "e45b39fa90da46d30883f5cc082fd869";
const API_KEY2 = "AIzaSyD-UrHTpoKaN5xGFpNqu9zSKXV4A4l9Xjw";

const button = document.getElementById("sendButton");
const contenido = document.getElementById("contenido");
const inputElement = document.getElementById("search"); 

 const valorUltimaBusqueda = JSON.parse(localStorage.getItem("valor"));
 console.log(valorUltimaBusqueda);

 if (valorUltimaBusqueda != null) {
    showElements(valorUltimaBusqueda);
}

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
        // saveResults(responseJson);

    } else {
        showNotFound();
    } 
    })
    .catch(function(error){
        console.log('Fallo!', error);
    })
}
 
 function saveResults(data){
    localStorage.setItem("valor", data);

    localStorage.getItem("valor");

    localStorage.setItem("valor", JSON.stringify(data));
    JSON.parse(localStorage.getItem("valor"));
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
    img1.className= ('img-fluid');

    this.getImg1 = () => {
        return img1;
    }

    let img2 = document.createElement('img');
    img2.className= ('img-fluid');

    this.getImg2 = () => {
        return img2;
    }

    let img3 = document.createElement('img');
    img3.className= ('img-fluid');

    this.getImg3 = () => {
        return img3;
    }
    let img4 = document.createElement('img');
    img4.className= ('img-fluid');

    this.getImg4 = () => {
        return img4;
    }

    let img5 = document.createElement('img');
    img5.className= ('img-fluid');

    this.getImg5 = () => {
        return img5;
    }

    let img6 = document.createElement('img');
    img6.className= ('img-fluid');

    this.getImg6 = () => {
        return img6;
    }

    let img7 = document.createElement('img');
    img7.className= ('img-fluid');

    this.getImg7 = () => {
        return img7;
    }

    let img8 = document.createElement('img');
    img8.className= ('img-fluid');

    this.getImg8 = () => {
        return img8;
    }

    let img9 = document.createElement('img');
    img9.className= ('img-fluid');

    this.getImg9 = () => {
        return img9;
    }
    let img10 = document.createElement('img');
    img10.className= ('img-fluid');

    this.getiImg10 = () => {
        return img10;
    }
} createElements();

function showElements(data){
    const contenido = document.getElementById("contenido");

    getCiudad().innerHTML = (`${data.name}<br>`);
    getTemp_max().innerHTML = (`${data.main.temp_max}°máxima<br>`);
    showIcons(data);
    getTemp_min().innerHTML = (`${data.main.temp_min}° minima<br>`);
    getDetalles().innerHTML = (`<hr> Detalles <br> <hr>`);
    getHumidity().innerHTML = (`<b>Humedad:</b> ${data.main.humidity}%<br>`);
    getFeels_like().innerHTML = (`<b>Sensación térmica:</b> ${data.main.feels_like}°<br>`);
    getPressure().innerHTML = (`<b>Presión atmosférica:</b> ${data.main.pressure} <br>`);
    getSpeed().innerHTML = (`<b>Velocidad de viento:</b> ${data.wind.speed}km<br>`);

    contenido.appendChild(getCiudad());
    contenido.appendChild(getTemp_max());
    contenido.appendChild(getTemp_min());
    contenido.appendChild(getDetalles());
    contenido.appendChild(getHumidity());
    contenido.appendChild(getFeels_like());
    contenido.appendChild(getPressure());
    contenido.appendChild(getSpeed());

    document.getElementById("search").value = "";
}

function showIcons(data){
    let id = data.weather[0].id;
    const contenido = document.getElementById("contenido");

    if(id < 250){
        getImg1().setAttribute("src", "icon/11d.png");
        contenido.appendChild(getImg1());
    }
    else if(id < 350){
        getImg2().setAttribute("src", "icon/09d.png");
        contenido.appendChild(getImg2());        
    }
    else if (id < 550){
        getImg3().setAttribute("src", "icon/10d.png");
        contenido.appendChild(getImg3());
    } else if(id < 650){
        getImg4().setAttribute("src", "icon/13d.png");
        contenido.appendChild(getImg4());
    } else if(id < 800){
        getImg5().setAttribute("src", "icon/50d.png");
        contenido.appendChild(getImg5());
    } else if(id === 800){
        getImg6().setAttribute("src", "icon/01d.png");
        contenido.appendChild(getImg6());
    } else if(id === 801 ){
        getImg7().setAttribute("src", "icon/02d.png");
        contenido.appendChild(getImg7());
    }else if(id === 802 ){
        getImg8().setAttribute("src", "icon/03d.png");
        contenido.appendChild(getImg8());
    }else if(id === 803){
        getImg9().setAttribute("src", "icon/04d.png");
        contenido.appendChild(getImg9());
    }else if(id === 804){
        getImg10().setAttribute("src", "icon/04d.png");
        contenido.appendChild(getImg10());
    }
}

function createNotFound(){
    let error = document.createElement('span');
    error.className= ('error');

    this.getError = () => {
        return error;
    }
} createNotFound();

function showNotFound(){

    const contenido = document.getElementById("contenido");

    getError().innerHTML = (`Ciudad no encontrada, ingrese una nueva.`);

    contenido.appendChild(getError());

    document.getElementById("search").value = "";
}