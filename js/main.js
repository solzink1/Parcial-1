const API_KEY = "e45b39fa90da46d30883f5cc082fd869";

const button = document.getElementById("sendButton");
const contenido = document.getElementById("contenido");
const inputElement = document.getElementById("search"); 

const valorUltimaBusqueda = JSON.parse(localStorage.getItem("valor"));

if (valorUltimaBusqueda != null) {
    showResults(valorUltimaBusqueda);
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
        showResults(responseJson);
        saveResults(responseJson);
    } else {
        notFound();
    } 
    })
    .catch(function(error){
        console.log('Fallo!', error);
    })
}

function showResults(data){
    const contenido = document.getElementById("contenido");

    let ciudad = document.createElement("span");
    let descripcion = document.createElement("span");
    let temp_max = document.createElement("span");
    let temp_min = document.createElement("span");
    showIcons(data);
    let detalles = document.createElement("span");
    let humidity = document.createElement("span");
    let feels_like = document.createElement("span");
    let pressure = document.createElement("span");
    let speed = document.createElement("span");

    ciudad.innerHTML = (`${data.name}<br>`);
    descripcion.innerHTML = (`${data.weather[0].description} <br>`);
    temp_max.innerHTML = (`${data.main.temp_max}° máxima<br>`);
    temp_min.innerHTML = (`${data.main.temp_min}° minima<br>`);
    detalles.innerHTML = (`<hr> Detalles <br> <hr>`);
    humidity.innerHTML = (`Humedad ${data.main.humidity}%<br>`);
    feels_like.innerHTML = (`Sensación térmica ${data.main.feels_like}°<br>`);
    pressure.innerHTML = (`Presión atmosférica ${data.main.pressure} <br>`);
    speed.innerHTML = (`Velocidad de viento ${data.wind.speed}km<br>`);

    contenido.appendChild(ciudad);
    contenido.appendChild(descripcion);
    contenido.appendChild(temp_max);
    contenido.appendChild(temp_min);
    contenido.appendChild(detalles);
    contenido.appendChild(humidity);
    contenido.appendChild(feels_like);
    contenido.appendChild(pressure);
    contenido.appendChild(speed);

    ciudad.setAttribute("id", "ciudad");
    descripcion.classList.add('descripcion');
    temp_max.classList.add('temp-max');
    temp_min.classList.add('temp-min');
    detalles.classList.add('detalles');
    humidity.classList.add('humidity');
    feels_like.classList.add('feels-like');
    pressure.classList.add('pressure');
    speed.classList.add('speed');

    document.getElementById("search").value = "";
}

function showIcons(data){
    let id = data.weather[0].id;
    const contenido = document.getElementById("contenido");

    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let img4 = document.createElement("img");
    let img5 = document.createElement("img");
    let img6 = document.createElement("img");
    let img7 = document.createElement("img");
    let img8 = document.createElement("img");
    let img9 = document.createElement("img");
    let img10 = document.createElement("img");

    
    img1.classList.add('img-fluid');
    img2.classList.add('img-fluid');
    img3.classList.add('img-fluid');
    img4.classList.add('img-fluid');
    img5.classList.add('img-fluid');
    img6.classList.add('img-fluid');
    img7.classList.add('img-fluid');
    img8.classList.add('img-fluid');
    img9.classList.add('img-fluid');
    img10.classList.add('img-fluid');


    if(id < 250){
        img1.setAttribute("src", "icon/11d.png");
        contenido.appendChild(img1);
    }
    else if(id < 350){
        img2.setAttribute("src", "icon/09d.png");
        contenido.appendChild(img2);        
    }
    else if (id < 550){
        img3.setAttribute("src", "icon/10d.png");
        contenido.appendChild(img3);
    } else if(id < 650){
        img4.setAttribute("src", "icon/13d.png");
        contenido.appendChild(img4);
    } else if(id < 800){
        img5.setAttribute("src", "icon/50d.png");
        contenido.appendChild(img5);
    } else if(id === 800){
        img6.setAttribute("src", "icon/01d.png");
        contenido.appendChild(img6);
    } else if(id === 801 ){
        img7.setAttribute("src", "icon/02d.png");
        contenido.appendChild(img7);
    }else if(id === 802 ){
        img8.setAttribute("src", "icon/03d.png");
        contenido.appendChild(img8);
    }else if(id === 803){
        img9.setAttribute("src", "icon/04d.png");
        contenido.appendChild(img9);
    }else if(id === 804){
        img10.setAttribute("src", "icon/04d.png");
        contenido.appendChild(img10);
    }

}

function notFound(){
    const contenido = document.getElementById("contenido");
    let error = document.createElement("span");

    error.innerHTML = (`Ciudad no encontrada, ingrese una nueva.`);

    contenido.appendChild(error);

    error.classList.add('error');
}

function saveResults(data){
    localStorage.setItem("valor", data);

    localStorage.getItem("valor");

    localStorage.setItem("valor", JSON.stringify(data));
    JSON.parse(localStorage.getItem("valor"));
}