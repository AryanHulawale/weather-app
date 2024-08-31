const Apikey = "93cb31d34afb6737ca172b0cc4b5bde4";
const Apiurl = "https://api.openweathermap.org/data/2.5/weather?$units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search-img");

const weathericon = document.querySelector(".weather-img img")

async function main(city) {
    const data = await fetch(Apiurl + city + `&appid=${Apikey}`);
    const response = await data.json();
    console.log(response);

    let temp = response.main.temp/10;
    let wind = response.wind.speed;
    let humidity = response.main.humidity;
    let name = response.name;
    console.log(response.weather[0].main)

    weathericon.src = "Assets/clear.png"
    if(response.weather[0].main == "Clear" || response.weather[0].main == "Haze" ){
        weathericon.src = "Assets/clear.png"
    }
    if(response.weather[0].main == "Clouds"){
        weathericon.src = "Assets/cloudy.png"
    }
    if(response.weather[0].main == "Mist"){
        weathericon.src = "Assets/mist.png"
    }
    if(response.weather[0].main == "Rain"){
        weathericon.src = "Assets/rain.png"
    }
    if(response.weather[0].main == "Snow"){
        weathericon.src = "Assets/snow.png"
    }

    document.querySelector(".degree").firstElementChild.innerHTML = temp.toFixed(1) + "°C";
    document.querySelector(".city-name").firstElementChild.innerHTML = name;
    document.querySelector(".humidity").innerHTML = humidity + "%";
    document.querySelector(".wind").innerHTML = wind + " km/h";
}



searchbtn.addEventListener("click", () => {
    main(searchbox.value);
});

searchbox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        main(searchbox.value);
    }
});
