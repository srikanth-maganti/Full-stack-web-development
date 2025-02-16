import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Layout from './Layout.jsx'

import './index.css'
import { Route,createBrowserRouter,RouterProvider,createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github ,{githubinfo} from './components/Github/Github.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path="contact" element={<Contact/>}/>
      <Route path='user/' element={<User/>}>
        <Route path=':userid' element={<User/>}></Route>
      </Route>
      <Route path='/github' loader ={githubinfo} element={<Github/>}></Route>
      
    </Route>
    
  )
)

// React 18
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
