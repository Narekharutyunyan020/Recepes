
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Recipe from './pages/Recipe/Recipe';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AllRecipes from './pages/AllRecipes/AllRecipes';
import AboutUs from './pages/AboutUs/AboutUs';




export default function App() {



  return (<>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe/:id' element={<Recipe />} />
         <Route path='/recipes/' element={<AllRecipes />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>

  </>)
}

