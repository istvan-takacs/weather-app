import "./style.css"

let location = "Glasgow";

async function weatherQuery(location) {
    const API_KEY = "WLA2YBNPE5QUXBZRTW5TRJBCN";
    const queryURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&include=current%2Calerts%2Cevents&key=${API_KEY}&options=usefcst%2Cminuteinterval_30&contentType=json`;

    const response = await fetch(queryURL);
    const weatherData = await response.json();
    console.log(JSON.stringify(weatherData, null, 2));
}

weatherQuery(location);

// Data paramaters to extract:
// Date + time today, current temperature, high and low temp, location, cloudiness, feels like,
// wind, humidity, sunrise, sunset, precipitation?, UV index, moonphase, conditions