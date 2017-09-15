import "./index.css"
import React from "react"
import ReactDOM from "react-dom"
import Demo from "./Demo"

const root = document.getElementById("root")

ReactDOM.render(<Demo />, root)

if (module.hot) {
  module.hot.accept("./Demo", () => {
    const NextDemo = require("./Demo").default
    ReactDOM.render(<NextDemo />, root)
  })
}
