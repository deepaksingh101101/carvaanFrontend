
import './App.css'
// import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import LoginModal from './components/loginModal/LoginModal';
import ContactUs from './pages/contactUs/ContactUs';
import CustomPackages from './pages/customPackages/CustomPackages';
import ExistingPackage from './pages/existingPackage/ExistingPackage';
import CardView from './pages/cardView/CardView';
import CheckOut from './pages/checkOut/CheckOut';

function App() {
  return (
    <>



     <BrowserRouter>
     {/* <Navbar/> */}
     <LoginModal/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contactUs" element={<ContactUs />}/>
        <Route path="/customPackages" element={<CustomPackages />}/>
        <Route path="/existingPackage" element={<ExistingPackage />}/>
        <Route path="/cardView" element={<CardView />}/>
        <Route path="/checkOut" element={<CheckOut/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
