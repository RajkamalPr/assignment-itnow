import Weather from "./views/Weather"
import Registration from "./views/Registration"
import "./App.css"
import { useState } from "react"

function App() {
  const [select, setSelect] = useState<string>("Reg")
  return (
    <div className='App'>
      <div className='d-flex justify-content-end m-2'>
        {select === "weather" ? (
          <button
            className='btn btn-primary m-1'
            onClick={() => setSelect("Reg")}
          >
            Registration
          </button>
        ) : (
          <button
            className='btn btn-primary m-1'
            onClick={() => setSelect("weather")}
          >
            Weather
          </button>
        )}
      </div>
      {select === "Reg" ? (
        <Registration />
      ) : (
        select === "weather" && <Weather />
      )}
    </div>
  )
}

export default App
