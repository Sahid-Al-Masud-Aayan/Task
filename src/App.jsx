
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Products from './Pages/Products'
import LayoutOne from './Layout/LayoutOne'
import Details from './Pages/Details'
import Cart from './Pages/Cart'
import CartDetails from './Pages/CartDetails'

function App() {
  const mainRouter =  createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/laptops' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/buy' element={<Details/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/cart-details' element={<CartDetails/>}/>
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
