import './App.css';
import axios from 'axios'
import React, { useState } from 'react'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url =  `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=794ee95e63c5a32aaf88cd813fa2e425`
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div>
      <div>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div>
        <div>
          <div>
            <p>{data.name}</p>
          </div>
          <div>
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div>
            <div>
              {data.main ? <p>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div>
              {data.main ? <p>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div>
              {data.wind ? <p>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }



      </div>
    </div>
  );
}

export default App;
