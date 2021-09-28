const API_KEY = "e45b39fa90da46d30883f5cc082fd869";

const button = document.getElementById("sendButton");
const contenido = document.getElementById("contenido");
const inputElement = document.getElementById("search"); 

button.addEventListener("click", () =>  {
   //  console.log ("valor", inputElement.value);  ---> a inputElement le va a obtener el valor, pasa a la funcion.
    searchInAPI(inputElement.value);
});

function searchInAPI(wordToSearch){
    console.log ("valor", wordToSearch);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${wordToSearch}&units=metric&appid=${API_KEY}`)
    .then(function(response){
        console.log(response);
        return response.json();
    }).then(function(responseJson){
        console.log(responseJson);
        showResults(responseJson);
    })
    .catch(function(error){
        console.log('Fallo!', error);
    })
}

function showResults(data){
    const contenido = document.getElementById("contenido");

    let ciudad = document.createElement("span");
    let temp_max = document.createElement("span");
    let temp_min = document.createElement("span");
    let humidity = document.createElement("span");
    let feels_like = document.createElement("span");
    let pressure = document.createElement("span");
    let speed = document.createElement("span");

    ciudad.innerHTML = (`Ciudad: ${data.name}<br>`)
    temp_max.innerHTML = (`Temperatura máxima: ${data.main.temp_max}°<br>`);
    temp_min.innerHTML = (`Temperatura minima: ${data.main.temp_min}°<br>`);
    humidity.innerHTML = (`Humedad: ${data.main.humidity}%<br>`);
    feels_like.innerHTML = (`Sensación térmica: ${data.main.feels_like}°<br>`);
    pressure.innerHTML = (`Presión atmosférica: ${data.main.pressure} <br>`);
    speed.innerHTML = (`Velocidad de viento: ${data.wind.speed}km<br>`);

    contenido.appendChild(ciudad);
    contenido.appendChild(temp_max);
    contenido.appendChild(temp_min);
    contenido.appendChild(humidity);
    contenido.appendChild(feels_like);
    contenido.appendChild(pressure);
    contenido.appendChild(speed);

    ciudad.setAttribute("id", "ciudad");
    temp_max.classList.add('data');
    temp_min.classList.add('data');
    humidity.classList.add('data');
    feels_like.classList.add('data');
    pressure.classList.add('data');
    speed.classList.add('data');
}
