
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'


export default function App() {



  return (<>
    <BrowserRouter>
      {/* <Header></Header> */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      {/* <footer></footer> */}
    </BrowserRouter>


  </>)
}

