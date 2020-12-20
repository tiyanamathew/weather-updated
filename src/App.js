import React, { useState } from "react";
import "./App.css";
import axios from "axios";
export default function SearchEngine() {
  let [temperature, setTemperature] = useState("");
 
  let [wind, setWind] = useState("");
  let [humidity, setHumidity] = useState("");
  const [city, setCity] = useState("");
// eslint-disable-next-line
  const [text, setText] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(showTemperature);
 
  }
  let today = new Date();
  let hours = addZero(today.getHours());
  let minutes = addZero(today.getMinutes());

function addZero(num) {
  return num < 10 ? `0${num}` : num;
}



  function showTemperature(response) {
    setText(response.data.name);
    setTemperature(`currently ${Math.round(response.data.main.temp)}ºC.`);
    setHumidity(response.data.main.humidity)%;
    setWind(response.data.wind.speed) km/h;
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

        </div>
      </div>
      <div className="container mt-3">
        <div className="row mt-3">
          <div className="col">
            <div className="row no-gutters">
              <div className="col-12">
                <div className="card-body">

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
              <p id="city" className="card-text sunny its">
                    {temperature}
                  </p>
              <h2 className="its" id="weather-description">
                Precipitation:
                <span id="humidity"> {humidity}</span>
                <br />
                Wind:
                <span id="wind"> {wind}</span>
              </h2>
              <div className="card-body" id="te">
                  <p id="date-time">Date And Time: <br /> {hours}:{minutes}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <p id="github">
        <a href="https://github.com/tiyanamathew/weather-updated">Link to GitHub</a>
      </p>
    </div>
);
}
