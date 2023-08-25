import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import testReducer from "./app/slices/formSlice"
import saga from "./app/saga"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: {
    test: testReducer,
  },
  middleware: [sagaMiddleware],
})
sagaMiddleware.run(saga)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
