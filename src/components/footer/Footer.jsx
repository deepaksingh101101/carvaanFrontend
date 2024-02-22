
import './footer.css'
import logo from '../../assets/home/CarvaanLogo.png'
const Footer = () => {
    return (
        <div className="Footer w-100" >
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4 col-12 ft-1 mt-3">
                        <h3 className="py-2 fw-bold"><span className="py-2 text-highlighter fw-bold">
                            <img className='logo' src={logo} style={{ width: '130px' }} alt='Carvaan'/>
                            </span></h3>
                        <p className="fst-normal text-white">Your next goto companion for travel</p>
                        
                    </div>
                    <div className="col-md-6 col-lg-2 col-12 ft-2 mt-4">
                        <h5 className='text-highlighter'> Company</h5>
                        <ul className=' pl-0'>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline" href="/">Jobs</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline" href="/">Newsroom</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline" href="/">Advertising</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline" href="/contactUs">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6 col-lg-2 col-12 ft-2 mt-4">
                        <h5 className='text-highlighter'>Explore</h5>
                        <ul className='text-white'>
                            <li className="nav-item ">
                                <a className="text-decoration-none link-underline " href="/">Australia</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline " href="/">New Zeeland</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline " href="/">United States America(USA)</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline " href="/">Greece</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline " href="/">Maldives</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline " href="/">Singapore</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline " href="/">See More</a>
                            </li>
    
                           
                        </ul>
                    </div>

                    <div className="col-md-6 col-lg-2 col-12 ft-2 mt-4">
                        <h5 className='text-highlighter'>Terms and  Policies</h5>
                        <ul className='text-white'>
                            <li className="nav-item ">
                                <a className="text-decoration-none link-underline " href="/">Privacy Policy</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline " href="/">Term of use</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline " href="/">Acessibility</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline " href="/">Reward system policy</a>
                            </li>
                          
    
                           
                        </ul>
                    </div>
                   
                    <div className="col-md-6 col-lg-2 col-12 ft-2 mt-4">
                        <h5 className='text-highlighter'>Help</h5>
                        <ul className='text-white'>
                            <li className="nav-item ">
                                <a className="text-decoration-none link-underline " href="/">Support</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline " href="/">Cancel your booking</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline " href="/">Use Coupons</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline " href="/">Refund Policies</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-decoration-none link-underline " href="/">International Travel Documents</a>
                            </li>
                           
    
                           
                        </ul>
                    </div>

                    <div className='Last-footer text-white text-center pb-3 mt-5'>
                        <span className="mb-0">&#169; All rights reserved 2024 @Techavtar | Designed And Developed By <a className='text-decoration-none text-highlighter' href='w'>Techavtar</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer