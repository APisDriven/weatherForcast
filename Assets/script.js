
var APIKey = "66c8301045a114f5c909447865310323";


function getWeather(city) {
    var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`;
    
    fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
        var lat = data.coord.lat;
        var lon = data.coord.lon;
        getForcast(lat, lon)
        // console.log("lat", lat, lon)

        var currentTemp = document.getElementById("temp")
        var currentWind = document.getElementById("wind")
        var currentHumid = document.getElementById("humidity")
        
        currentTemp.innerHTML = data.main.temp + " degrees"
        currentWind.innerHTML = data.wind.speed + " mph"
        currentHumid.innerHTML = data.main.humidity + "%"
        
        let cardSection = document.getElementById("cardSection");
        cardSection.innerHTML = "";

        let input = document.getElementById("city-input")
        input.value = "";
        
        // cityName = document.getElementById("cityTime").innerHTML
        // cityName.innerHTML = city
        
        // return console.log(data);
    })}
    
    
    function getForcast(lat, lon) {
        var queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`;
        
        fetch(queryURL)
        .then((response) => response.json())
        .then((data) => {
            for (let i = 3; i < data.list.length; i += 8) {
                console.log(data.list[i]);
                let forecast = data.list[i];
                // pnpforecast.dt_txt
                
                cardEl = document.createElement("div");
                
                cardEl.setAttribute("class", "eachDay card")
                // cardEl.setAttribute("class", "card")
                
                let cardSection = document.getElementById("cardSection")
                // futureWeather.innerHTML = ""
                cardSection.appendChild(cardEl)
                
                var dayDate = document.createElement("h2")
                dayDate.setAttribute("class", "dayDate")
                cardEl.appendChild(dayDate)
                dayDate.innerHTML = forecast.dt_txt
                
                var dayIcon = document.createElement("div")
                dayIcon.setAttribute("class", "dayIcon")
                cardEl.appendChild(dayIcon)
                // need to figure out how to add icon
                dayIcon.innerHTML = "img"
                
                var weatherStats = document.createElement("div")
                cardEl.appendChild(weatherStats)
                
                var tempLine = document.createElement("div")
                var tempTitle = document.createElement("h3")
                tempTitle.innerHTML = "Temp:"
                var dayTemp = document.createElement("span")
                dayTemp.setAttribute("class", "dayTemp")
                dayTemp.innerHTML = forecast.main.temp + " degrees"
                weatherStats.appendChild(tempLine)
                tempLine.appendChild(tempTitle)
                tempLine.appendChild(dayTemp)
                
                var windLine = document.createElement("div")
                var windTitle = document.createElement("h3")
                windTitle.innerHTML = "Wind:"
                var dayWind = document.createElement("span")
                dayWind.setAttribute("class", "dayWind")
                dayWind.innerHTML = forecast.wind.speed + " mph"
                weatherStats.appendChild(windLine)
                windLine.appendChild(windTitle)
                windLine.appendChild(dayWind)
                
                var humidLine = document.createElement("div")
                var humidTitle = document.createElement("h3")
                humidTitle.innerHTML = "Humidity:"
                var dayHumid = document.createElement("span")
                dayHumid.setAttribute("class", "dayHumid")
                dayHumid.innerHTML = forecast.main.humidity + "%"
                weatherStats.appendChild(humidLine)
                humidLine.appendChild(humidTitle)
                humidLine.appendChild(dayHumid)
                
                // return console.log(data);
    }})}
            
            // Function that adds the searched city to the getWeather funtion
            
            
            // Function to add the clicked previously searched city to the getWeather function

            
            // Function that passes searched city to function and stores to list
            let button = document.getElementById("citySearch")
            button.addEventListener('click', function(event) {
                event.preventDefault();

                const cityInput = document.getElementById("city-input")

                const cityQuery = cityInput.value

                const CityTitle = document.getElementById("cityTime")
                CityTitle.innerHTML = ""
                CityTitle.innerHTML = cityQuery
            
                getWeather(cityQuery)

                let storedCityList = document.getElementById("storedCityList")
                newStoredCity = document.createElement("button")
                newStoredCity.setAttribute("class", "btn storedCity")
                newStoredCity.innerHTML = cityQuery
                storedCityList.appendChild(newStoredCity)
            })

    let storedCityList = document.getElementById("storedCityList")
    storedCityList.addEventListener('click', function(event) {
        getWeather(newStoredCity.value);
    })
            // function getCity(city) {
            //     // function that gets the city input amd stores it in the storedCityList
            //     var searchedCity = document.input.innerHTML
            //     var searchedCityArray = []
            
            // }
// var searchedCity = getElementById("input")
// document.addEventListener("click", function (getWeather) )
// getWeather("Detroit");

// 1. get icons to work
// 2. get previous search button to work
