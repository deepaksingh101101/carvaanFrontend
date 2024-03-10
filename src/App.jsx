
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
import ScrollToTop from './helpers/ScrollToTop';
import SearchResult from './pages/searchResult/SearchResult';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <>



     <BrowserRouter>
     <ScrollToTop/>
     {/* <Navbar/> */}
     <LoginModal/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contactUs" element={<ContactUs />}/>
        <Route path="/customPackages" element={<CustomPackages />}/>
        <Route path="/existingPackage" element={<ExistingPackage />}/>
        <Route path="/searchResult" element={<SearchResult />}/>

        {/* private routes */}
        <Route path="/profile" element={<Profile />}/>
      
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
