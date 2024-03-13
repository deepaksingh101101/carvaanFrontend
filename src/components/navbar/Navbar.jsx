import './Navbar.css';
import FullLogo from '../../assets/home/CarvaanLogo.png';
import avtar from '../../assets/profile/avtar.png'
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { useSelector, useDispatch } from 'react-redux';

import { useState, useEffect } from 'react';
import { setIsAuthenticated } from '../../store/slices/isAuthenticated';

export default function Navbar(props) {
    const [btnActive, setBtnActive] = useState('btn2');
    const [scrolled, setScrolled] = useState(false);
    const [hasLocalStorage, setHasLocalStorage] = useState(false);

    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.isAuthenticated.isLoggedIn);
  
    const handleBtnClick = (btn) => {
        setBtnActive(btn);
    };

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            setHasLocalStorage(true)
            dispatch(setIsAuthenticated())
        }
    }, [isLoggedIn])

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* <nav className="px-md-0 px-lg-0 navbar navbar-expand-lg position-fixed  w-100 " style={{ zIndex: "1000",transition: "background 0.3s ease-in-out", background: scrolled ? "#13182F" : "" }}> */}
            {/* <nav className="px-md-0 px-lg-0 navbar navbar-expand-lg position-fixed w-100" style={{ zIndex: 1000, transition: "background 0.3s ease-in-out", background: props.bg ? props.bg : "#13182F" }}> */}
            <nav className="px-md-0 px-lg-0 navbar top-0   navbar-expand-lg position-fixed w-100" style={{ zIndex: 1000, transition: "background 0.3s ease-in-out", background: scrolled ? "#13182F" : props.bg }}>
                <div className="container-fluid ">
                    <Link className="navbar-brand" to="/">
                        <img className='logo' src={FullLogo} style={{ width: '130px' }} alt="Carvaan" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <FaBars className='text-white border-0' />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-5 mt-lg-0 gap-3 gap-lg-0 ">
                            <li className="nav-item mx-3">
                                <Link className="nav-link   active " aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link  sm " to="/existingPackage">
                                    Existing Packages
                                </Link>
                            </li>
                            <li className="nav-item mx-3 dropdown">
                                <Link
                                    className="nav-link  dropdown-toggle"
                                    to="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Special Deals
                                </Link>
                                <ul className="dropdown-menu  border-0">
                                    <li>
                                        <Link className="dropdown-item navDropdown text-white" to="#">
                                            Action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item navDropdown text-white" to="#">
                                            Another action
                                        </Link>
                                    </li>
                                    <li>
                                        {/* <hr className="dropdown-divider" /> */}
                                    </li>
                                    <li>
                                        <Link className="dropdown-item navDropdown text-white" to="#">
                                            Something else here
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link  " to="#">
                                    FAQ
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link  " to="/about">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex btnContainer flex-wrap gap-3 gap-lg-0 " role="search">




                            {
                                isLoggedIn ? (<div className="d-flex justify-content-between align-items-center me-4">
                                    <img className='' style={{ width: "40px", height: "40px", borderRadius: "50%" }} src={avtar} alt='profile' />
                                    <button
                                        type='button'
                                        className={`text_white res btn  fw-bold my-1`}
                                        style={{ border: 0 }}
                                    >
                                        <span className='d-none d-lg-inline my_text' >My</span> Profile
                                    </button>
                                    <IoIosArrowDown className='text_white' />

                                </div>) : (<button
                                    type='button'
                                    className={`text-white res btn me-2 fw-bold my-1 ${btnActive === 'btn1' ? 'navButton1' : ''}`}
                                    style={{ border: 0 }}
                                    onMouseEnter={() => handleBtnClick('btn1')}
                                    data-bs-toggle="modal" data-bs-target="#exampleModalCenter"
                                >
                                    Login Or Sign up
                                </button>)
                            }

                           <Link to='/customPackages'> <button
                                className={` text-white res btn me-2 fw-bold my-1 ${btnActive === 'btn2' ? 'navButton1' : ' '}`}
                                style={{ border: 0 }}
                                onMouseEnter={() => handleBtnClick('btn2')}
                            >
                                Custom Packages
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
