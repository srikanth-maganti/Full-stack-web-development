import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Signup from "./components/Signup.jsx"
import Login from './components/login.jsx'
import {BrowserRouter,Routes,Route} from "react-router"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route index element={<App />} />
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
      </Route>
      
    </Routes>
    </BrowserRouter>
    
  </StrictMode>
)
