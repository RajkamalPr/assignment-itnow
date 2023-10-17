import { useEffect, useState } from "react"
import Table from "../../components/Table"

const Weather = () => {
  const [location, setLocation]: any = useState(null)
  const [weather, setWeather]: any = useState(null)
  const [search, setSearch] = useState<string>("")

  const handleLocationClick = () => {
    if (search && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error)
    } else {
      alert("City Name required")
      console.log("Geolocation not supported")
    }
  }

  const success = (position: any) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    setLocation({ latitude, longitude })
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)

    // Make API call to OpenWeatherMap
    /*
    const requestOptions = {
      method: "GET",
      // redirect: "follow",
    } as any

    fetch(
      `http://api.weatherstack.com/current?access_key=f65abe4d038621b03ab8825bd3bfe55b&query=${search}`,
      requestOptions
    )
      .then((response) => setWeather(response.text()))
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error))
      */

    const weatherData = {
      request: {
        type: "City",
        query: "New York, United States of America",
        language: "en",
        unit: "m",
      },
      location: {
        name: "New York",
        country: "United States of America",
        region: "New York",
        lat: "40.714",
        lon: "-74.006",
        timezone_id: "America/New_York",
        localtime: "2023-08-25 10:20",
        localtime_epoch: 1692958800,
        utc_offset: "-4.0",
      },
      current: {
        observation_time: "02:20 PM",
        temperature: 22,
        weather_code: 143,
        weather_icons: [
          "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0006_mist.png",
        ],
        weather_descriptions: ["Mist"],
        wind_speed: 4,
        wind_degree: 203,
        wind_dir: "SSW",
        pressure: 1013,
        precip: 0,
        humidity: 94,
        cloudcover: 100,
        feelslike: 25,
        uv_index: 5,
        visibility: 10,
        is_day: "yes",
      },
    }
    setWeather(weatherData)
  }
  console.log("weather ", weather)
  console.log("search ", search)

  const error = () => {
    console.log("Unable to retrieve your location")
  }
  useEffect(() => {
    console.log("www", weather)
    // console.log("name ==>", weather.location.name)
  }, [])

  const tableHeaderLocation = () => {
    return (
      <>
        <th>Country</th>
        <th>Lat</th>
        <th>Local time</th>
        <th>Localtime epoch</th>
        <th>Lon</th>
        <th>Name</th>
        <th>Region</th>
        <th>Timezone Id</th>
        <th>UTC Offset</th>
      </>
    )
  }
  const tableBodyLocation = () => {
    return (
      <>
        {weather ? (
          <tbody>
            <tr>
              <td>{weather.location.country}</td>
              <td>{weather.location.lat}</td>
              <td>{weather.location.localtime}</td>
              <td>{weather.location.localtime_epoch}</td>
              <td>{weather.location.lon}</td>
              <td>{weather.location.name}</td>
              <td>{weather.location.region}</td>
              <td>{weather.location.timezone_id}</td>
              <td>{weather.location.utc_offset}</td>
            </tr>
          </tbody>
        ) : (
          <tr className='text-dark text-center'>
            <td colSpan={6}>No Data avilable</td>
          </tr>
        )}
      </>
    )
  }
  const tableHeader = () => {
    return (
      <>
        <th>Cloude Cover</th>
        <th>Flees Like</th>
        <th>Humidity</th>
        <th>Is Day</th>
        <th>Observation Time</th>
        <th>Precip</th>
        <th>Pressure</th>
        <th>Temperature</th>
        <th>Visibility</th>
        <th>Weather Descriptions</th>
        <th>Wind Degree</th>
        <th>Wind Dir</th>
        <th>Wind Speed</th>
      </>
    )
  }

  const tableBody = () => {
    return (
      <>
        {weather ? (
          <tbody>
            <tr>
              <td>{weather.current.cloudcover}</td>
              <td>{weather.current.fleeslike}</td>
              <td>{weather.current.humidity}</td>
              <td>{weather.current.is_day}</td>
              <td>{weather.current.observation_time}</td>
              <td>{weather.current.precip}</td>
              <td>{weather.current.pressure}</td>
              <td>{weather.current.temperature}</td>
              <td>{weather.current.visibility}</td>
              <td>
                {weather.current.weather_descriptions.map(
                  (desc: string) => desc
                )}
              </td>
              <td>{weather.current.wind_degree}</td>
              <td>{weather.current.wind_dir}</td>
              <td>{weather.current.wind_speed}</td>
            </tr>
          </tbody>
        ) : (
          <tr className='text-dark text-center'>
            <td colSpan={6}>No Data avilable</td>
          </tr>
        )}
      </>
    )
  }

  return (
    <div className='container'>
      <h2>Weather Report</h2>
      <hr />
      {!location ? (
        <>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Search by City Name'
              value={search}
              onChange={(e: any) => setSearch(e.target.value)}
              required
            />
          </div>
          <button className='btn btn-primary' onClick={handleLocationClick}>
            Get Weather Report
          </button>
        </>
      ) : null}
      {location && !weather ? <p>Loading weather data...</p> : null}
      {weather ? (
        <>
          <h4>Current Weather</h4>
          <Table
            className='table-bordered'
            header={tableHeader}
            body={tableBody}
            search={(text: string) => setSearch(text)}
            isSearch={false}
          />
          <h4>Location</h4>
          <Table
            className='table-bordered'
            header={tableHeaderLocation}
            body={tableBodyLocation}
            search={(text: string) => setSearch(text)}
            isSearch={false}
          />
        </>
      ) : null}
      {search && (
        <p>
          <span className='text-gray'>Note:</span> Because of https restriction
          on API, data is avilable through dummy data.
        </p>
      )}
    </div>
  )
}

export default Weather
