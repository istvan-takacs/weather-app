import "./style.css"
import { renderLocationForm } from "./page.js";

export async function weatherQuery(location) {
    const API_KEY = "WLA2YBNPE5QUXBZRTW5TRJBCN";
    const queryURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&include=current%2Calerts%2Cevents&key=${API_KEY}&options=usefcst%2Cminuteinterval_30&contentType=json`;

    const response = await fetch(queryURL);
    const weatherData = await response.json();
    return weatherData;
}

function getQueryFields(weatherData) {
    const { resolvedAddress, description } = weatherData;
    const { feelslike, humidity, precip, precipprob, preciptype, windspeed, conditions, icon, sunrise, sunset, moonphase } = weatherData.currentConditions;
    const { tempmax, tempmin, temp } = weatherData.days[0];
    const { datetime: currentTime } = weatherData.currentConditions;
    const { datetime: date } = weatherData.days[0];
    return {
        location: resolvedAddress,
        temp,
        high: tempmax,
        low: tempmin,
        description,
        feelslike,
        humidity,
        precip,
        precipType: preciptype,
        precipProb: precipprob,
        windSpeed: windspeed,
        conditions,
        icon,
        sunset,
        sunrise,
        moonphase,
        currentTime,
        date
    };
}

export async function showData(location) {
    const weatherData = await weatherQuery(location);
    console.log(weatherData);
    console.log(getQueryFields(weatherData));    
}


let location = "London";
showData(location);
renderLocationForm();



// Data paramaters to extract:
// Date + time today, current temperature, high and low temp, location, cloudiness, feels like,
// wind, humidity, sunrise, sunset, precipitation?, UV index, moonphase, conditions
