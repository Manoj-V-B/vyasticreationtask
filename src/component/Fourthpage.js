 import 'bootstrap/dist/css/bootstrap.min.css';
import image3 from './image/image3.png';
import image4 from './image/Group 237629.png'
import image5 from './image/Group 657.png'
import image6 from './image/Component 1.png'
import './home.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar, faStarAndCrescent, fastarchristmas, faStarOfLife} from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from '@fortawesome/free-regular-svg-icons';

 export function Fourthpage() {
    return(
        <>
        <div className='bgdark pb-5 mb-5 pt-5'>
            <div className='text-center '>
                <h6 className='textco'>Teamwork makes the dream work</h6>
                <h1>Discover the meaning of efficiency<br></br> with Univers Business</h1>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-1'>&nbsp;</div>
                    <div className='col-lg-4 bggreen'>
                        <h1>Send and receive <br></br>Without borders</h1>
                        <h6>Explore Payments</h6>
                    

                        <img src={image3} className='image3'/>
                        
                    </div>
                    <div className='col-lg-5 ml-4 bglightdark'>
                        <h1>Invoices that work smarter</h1>
                        <h5 className='text-success'>Learn more  about Invoices</h5>

                        <img src={image4} className="image4"/>
                    </div>
                    <div className='col-lg-1'>&nbsp;</div>

                    

                        <div className='col-lg-1'>&nbsp;</div>
                        <div className='col-lg-6 bgdar mt-5 pb-5'>
                            <div className='bg-'>
                                <h2>Smart company debit cards helps <br></br> you and your team go further </h2>
                                <a className='text-primary'>Learn more about Cards</a><br></br>

                                <img src={image5} className="image5" />
                            </div>
                        </div>
                        <div className='col-lg-4 mt-5'>
                            <h1>
                            <FontAwesomeIcon icon={faStarAndCrescent} />
                            </h1>
                            <h1>Exchange,<br></br> send and spend <br></br>at great rates</h1>

                            <div className='text-succes txtdown'>
                            <a >Explore Exchange</a>
                            </div>
                        </div>

                        <div className='col-lg-1'>&nbsp;</div>
                        <div className='container-fluid  mt-5'>
                            <div className='row'>
                            <div className='col-lg-1'>&nbsp;</div>
                            <div className='col-lg-6 '>
                                <h1>Set and change team <br></br> permissions with tap</h1>
                                <p>stay in total control of your team's spending by managing their permissions and levels of access. Create customs roles and choose the combination of apps and features youn want them to 
                                    use<br></br><br></br>
                                </p>
                                <a className='text-success'>Discover Revolut Bisness </a>
                            </div>
                            <div className='col-lg-5 '>
                                <img src={image6} className="image6"/>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className='text-center mt-5'>
                <h1 className='fontsize'>Control all your spend<br></br>with smart rules</h1>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-4'>&nbsp;</div>
                            <div className='col-lg-4 bg-light mt-3 pt-2 pb-2'>
                            
                                <h6 className='textdark'><span className='float-left '>cosmetics</span>  March 25, 2022 <span className='float-right bolder text-dark '>$100</span></h6>
                            </div>
                        
                        <div className='col-lg-4'>&nbsp;</div>
                        <div className='col-lg-4'>&nbsp;</div>
                            <div className='col-lg-4 bg-light mt-3 pt-2 pb-2'>
                            
                                <h6 className='textdark'><span className='float-left '>Food</span>  March 29, 2022 <span className='float-right text-dark bolder'>$45</span></h6>
                            </div>
                        
                        <div className='col-lg-4'>&nbsp;</div>
                        <div className='col-lg-4'>&nbsp;</div>
                            <div className='col-lg-4 bg-light mt-3 pt-2 pb-2'>
                            
                                <h6 className='textdark '><span className='float-left '>Shopping</span>  March 27, 2022 <span className='float-right text-dark bolder'>$241</span></h6>
                            </div>
                        
                        <div className='col-lg-4'>&nbsp;</div>
                        <div className='col-lg-4'>&nbsp;</div>
                            <div className='col-lg-4 bg-light mt-3 pt-2 pb-2'>
                            
                                <h6 className='textdark'><span className='float-left '>cosmetics</span>  March 25, 2022 <span className='float-right text-dark bolder'>$100</span></h6>
                            </div>
                        
                        <div className='col-lg-4'>&nbsp;</div>
                        <div className='col-lg-4'>&nbsp;</div>
                            <div className='col-lg-4 bg-light mt-3 pt-2 pb-2'>
                            
                                <h6 className='textdark'><span className='float-left '>cosmetics</span>  March 25, 2022 <span className='float-right text-dark bolder'>$100</span></h6>
                            </div>
                        
                        <div className='col-lg-4'>&nbsp;</div>
                    </div>
                </div>
            </div>

        </div>
            
        </>
    );
 }