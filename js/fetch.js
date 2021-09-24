const API_KEY = "e45b39fa90da46d30883f5cc082fd869";

const button = document.getElementById("sendButton");
const main = document.getElementById("main");
const inputElement = document.getElementById("search"); 

button.addEventListener("click", () =>  {
   //  console.log ("valor", inputElement.value);  ---> a inputElement le va a obtener el valor, pasa a la funcion.
    searchInAPI(inputElement.value);
});

function searchInAPI(wordToSearch){
    console.log ("valor", wordToSearch);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${wordToSearch}&appid=${API_KEY}`)
    .then(function(response){
        console.log(response);
        return response.json();
    }).then(function(responseJson){
        console.log('imprimo json', responseJson);
    })
    .catch(function(error){
        console.log('Fallo!', error);
    })
}