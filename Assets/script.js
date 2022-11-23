

var APIKey = "66c8301045a114f5c909447865310323";

function getWeather(city) {
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";

    fetch(queryURL)
        .then((response) => response.json())
        .then((data) => {
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            getForcast(lat, lon)

            return console.log(data);
        })

}

function getForcast(lat, lon) {
    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`;

    fetch(queryURL)
        .then((response) => response.json())
        .then((data) => {
            for (let i = 3; i < data.list.length; i+=8) {
                console.log(data.list[i]);
                let forecast = data.list[i];
                // pnpforecast.dt_txt


            
            return console.log(data);
        })

}

getWeather("Detroit")