

var APIKey = "66c8301045a114f5c909447865310323";

function getWeather(city) {
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";

    fetch(queryURL)
        .then((response) => response.json())
        .then((data) => {
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            getForcast(lat, lon)

            var currentTemp = document.getElementById("temp")
            var currentWind = document.getElementById("wind")
            var currentHumid = document.getElementById("humidity")
    
            currentTemp.innerHTML = data.main.temp + " degrees"
            currentWind.innerHTML = data.wind.speed + " mph"
            currentHumid.innerHTML = data.main.humidity + "%"
          
            return console.log(data);
        })



}

function getForcast(lat, lon) {
    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`;

    fetch(queryURL)
        .then((response) => response.json())
        .then((data) => {
            for (let i = 3; i < data.list.length; i += 8) {
                console.log(data.list[i]);
                let forecast = data.list[i];
                // pnpforecast.dt_txt

                cardEl = document.createElement("div");

                cardEl.setAttribute("id", "eachDay")
                cardEl.setAttribute("class", "card")

                var dayDate = document.createElement("h2")
                dayDate.setAttribute("id", "dayDate")
                cardEl.appendChild(dayDate)
                dayDate.innerHTML = data.dt_txt

                var dayIcon = document.createElement("div")
                dayIcon.setAttribute("id", "dayIcon")
                cardEl.appendChild(dayIcon)
                // need to figure out how to add icon
                dayIcon.innerHTML = "img"

                var weatherStats = document.createElement("ul")
                cardEl.appendChild(weatherStats)

                var tempLine = document.createElement("li")
                var tempTitle = document.createElement("h3")
                tempTitle.innerHTML = "Temp:"
                var dayTemp = document.createElement("div")
                dayTemp.setAttribute("id", "dayTemp")
                // need to check that this is the correct path for innerHTML
                dayTemp.innerHTML = data.main.temp
                weatherStats.appendChild(tempLine)
                tempLine.appendChild(tempTitle)
                tempLine.appendChild(dayTemp)

                var windLine = document.createElement(li)
                var windTitle = document.createElement("h3")
                windTitle.innerHTML = "Wind:"
                var dayWind = document.createElement("div")
                dayWind.setAttribute("id", "dayWind")
                // need to check that this is the correct path for innerHTML
                dayWind.innerHTML = data.wind.speed
                weatherStats.appendChild(windLine)
                windLine.appendChild(windTitle)
                windLine.appendChild(dayWind)

                var humidLine = document.createElement(li)
                var humidTitle = document.createElement("h3")
                humidTitle.innerHTML = "Humidity:"
                var dayHumid = document.createElement("div")
                dayHumid.setAttribute("id", "dayHumid")
                // need to check that this is the correct path for innerHTML
                dayHumid.innerHTML = data.main.humidity
                weatherStats.appendChild(humidLine)
                humidLine.appendChild(humidTitle)
                humidLine.appendChild(dayHumid)
                
                return console.log(data);
}})         }

getWeather("Detroit");
