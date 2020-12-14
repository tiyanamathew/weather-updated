import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import forecastino from "./WeatherForecast.js"
export default function SearchEngine() {
  let [temperature, setTemperature] = useState("");
  let [forecast, setForecast] = useState("");
  let [wind, setWind] = useState("");
  let [humidity, setHumidity] = useState("");
  const [city, setCity] = useState("");
  
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(showTemperature);
    let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(urlForecast).then(showForecast);
  }
  
  let today = new Date();
  let hours = (today.getHours());



  function showTemperature(response) {

    setTemperature(`Currently ${Math.round(response.data.main.temp)}ºC.`);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
  }

  function showForecast(response) {

    setForecast(response.data.main.forecast);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <div className="container mt-3">
        <div className="row mt-3">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city..."
              id="searchBar"
              onChange={updateCity}
            />
            <input type="submit" value="Search" className="btn" />
          </form>

          <div className="btn-group-vertical">
            <div className="col-2">
              <button id="celcius">C°</button>
              <button id="farenhiet">F°</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row mt-3">
          <div className="col">
            <div className="row no-gutters">
              <div className="col-12">
                <div className="card-body">
                  <p id="city" className="card-text sunny its">

                  </p>
                </div>
              </div>
              <div className="col-md-6">

              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="col mb-3">
            <div className="card-body">
              <h2 className="its">It is...</h2>
              <p className="sunny">{temperature}
    <br />
    {hours}h
    </p>
    

              <h2 className="its" id="weather-description">
                Humidity:
                <span id="humidity"> {humidity}%</span> 
                <br />
                Wind:
                <span id="wind"> {wind}km/h</span>
              </h2>
            </div>
          </div>
        </div>
      </div>


            <p className="card-text five">{forecastino}</p>
          </div>
        </div>
      </div>
      <p id="github">
        <a href="https://github.com/tiyanamathew/">Link to GitHub</a>
      </p>
    </div>
  );
}
