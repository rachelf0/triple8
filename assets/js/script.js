var apiKey = "3247a9e8b9789c09ccfc53d466289d4";

function currentWeather (){
    navigator.geolocation.getCurrentPosition(function (position){
        longitude = position.coords.longitude;
        latitude = position.coords.latitude;
    })
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" +  apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
        var iconCode = response.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w" + iconCode + ".png";
        $(".city").html("<h1> " + response.name + " </h1>");
        $(".temp").text("Temperature: " + ((response.main.temp - 273.15) * 1.8 + 32).toFixed(0) + " °F");
        $(".humidity").text("Humidity: " + response.main.humidity + " %");
        $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
        $("#wicon").attr("src", iconurl);
    })
};

currentWeather();

// 5 day weather forecast

function fiveDayForecast() {
    var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=San+Diego&appid=" + apiKey;

    $.ajax({
        url: fiveDayURL,
        method: "GET"
    }).then(function(responseTwo) {
        var icon1 = responseTwo.list[4].weather[0].icon;
        var icon1url = "http://openweathermap.org/img/w/" + icon1 + ".png";
    })
}