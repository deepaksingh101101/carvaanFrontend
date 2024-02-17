
import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/home/about/About';

function App() {
  return (
    <>

     <BrowserRouter>
     {/* <Navbar/> */}
      <Routes>
        {/* <Route path="/" element={<Home />}> */}
        <Route path="/" element={<About />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
