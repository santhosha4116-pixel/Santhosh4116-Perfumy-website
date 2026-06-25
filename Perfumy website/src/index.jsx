import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from './Components/Navbar'
import Search from './Components/Searchbar'
import Products from './Components/Productcard'
import AboutUs from './Components/AboutUs'
 



const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <Navbar></Navbar>
    <Search></Search>
    <Products></Products>
    <AboutUs></AboutUs>
  </StrictMode>,
)
