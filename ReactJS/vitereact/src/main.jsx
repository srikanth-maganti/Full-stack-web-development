import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'


let reactElement={
  type:"a",
  props:{
      href:"https//google.com",
      target:"_black"
  },
  children:"click here to google"
}

let areactelement=React.createElement(
  "a",
  {href:"https//google.com",
    target:"_blank"
  },
  "click here to google"
)

let Element=(
  <a href="*" target="_blank">hello</a>
);

createRoot(document.getElementById('root')).render(
    // Element
    // <a href="*" target="_blank">hello</a>
    // areactelement
    <App/>

)
