import './Navbar.css';
import FullLogo from '../../assets/home/CarvaanLogo.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar(props) {
    const [btnActive, setBtnActive] = useState('btn2');
    const [scrolled, setScrolled] = useState(false);

    const handleBtnClick = (btn) => {
        setBtnActive(btn);
    };

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
            <nav className="px-md-0 px-lg-0 navbar navbar-expand-lg position-fixed top-0 mb-5 w-100" style={{ zIndex: 1000, transition: "background 0.3s ease-in-out", background: scrolled ? "#13182F" : props.bg }}>
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
                                <ul className="dropdown-menu border-0">
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
                                        {/* <hr className="dropdown-divider" /> */}
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
                                <Link className="nav-link  " to="/about">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex btnContainer flex-wrap " role="search">
                            <button
                                type='button'
                                className={`text-white res btn me-2 fw-bold my-1 ${btnActive === 'btn1' ? 'navButton1' : ''}`}
                                style={{ border: 0 }}
                                onMouseEnter={() => handleBtnClick('btn1')}
                                data-bs-toggle="modal" data-bs-target="#exampleModalCenter"
                            >
                                Login Or Sign up
                            </button>
                            <button
                                className={` text-white res btn me-2 fw-bold my-1 ${btnActive === 'btn2' ? 'navButton1' : ' '}`}
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
