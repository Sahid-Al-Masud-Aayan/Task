
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Products from './Pages/Products'
import LayoutOne from './Layout/LayoutOne'

function App() {
  const mainRouter =  createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/laptops' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={mainRouter}/>
    </>
  )
}

export default App
