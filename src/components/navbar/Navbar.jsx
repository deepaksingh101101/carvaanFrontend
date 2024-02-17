import './Navbar.css';
import FullLogo from '../../assets/home/CarvaanLogo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../../themes/ThemeContext';

export default function Navbar() {
    const [btnActive, setBtnActive] = useState('btn2');

    const handleBtnClick = (btn) => {
        setBtnActive(btn);
    };
    const theme = useTheme();

    return (
        <>
            {/* <nav className="px-5 navbar navbar-expand-lg  w-100 "  style={{ backgroundColor: theme.defaultTheme.palette.default.text}}> */}
            <nav className="px-md-0 px-lg-0    navbar navbar-expand-lg position-fixed w-100 bg-transparent" style={{zIndex:"1"}} >
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
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <Link className="nav-link   active " aria-current="page" to="#">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link  sm " to="#">
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
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            Action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            Another action
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
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
                                <Link className="nav-link  " to="#">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex btnContainer"  role="search">
                            <button
                                className={`text-white res btn me-2 fw-bold  ${btnActive === 'btn1' ? 'navButton1' : ' '}`}
                                style={{ border: 0 }}
                                onMouseEnter={() => handleBtnClick('btn1')}
                            >
                                Login Or Sign up
                            </button>
                            <button
                                className={` text-white res btn me-2 fw-bold  ${btnActive === 'btn2' ? 'navButton1' : ' '}`}
                                style={{ border: 0 }}
                                onMouseEnter={() => handleBtnClick('btn2')}
                            >
                                Custom Packages
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
