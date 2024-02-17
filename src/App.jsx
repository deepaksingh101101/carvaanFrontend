
import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';

function App() {
  return (
    <>

     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
