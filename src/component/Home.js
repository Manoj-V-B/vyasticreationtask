import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import './home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image2 from './image/image2.png'
import {faDotCircle} from "@fortawesome/free-regular-svg-icons";

export function Home() {
    return(
        <>
      <div className='p-2'>
      <div className='bgimage '>
        

<nav className="navbar navbar-expand-lg navbar-light pt-4 ">
    <div className='col-lg-1'>&nbsp;</div>
        <a className="navbar-brand text-light" href="#">
            <FontAwesomeIcon icon={faDotCircle} />
            Univers</a>
        <a className="navbar-brand  butto " href="#">Personal</a>
        <a className="navbar-brand text-light" href="#">Business</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    <div className='col-lg-5'>&nbsp;</div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link text-light dropdown" href="#">Features <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light" href="#">Pricing</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light disabled" href="#">Help</a>
            </li>
            <li className='nav-item'>
                <a className="navbar-brand text-light" href="#">EN</a>
            </li>
        </ul>
        
    </div>
</nav>




    <div className=' container-fluid  text-light mt-5'>
            <div className='row text-center'>
                <div className='col-lg-6 text-center '><h1 className='textfont'>Digitize your <br></br> univers bank</h1></div>
                <div className='col-lg-6 text-center mt-5'>
                    <h5>Money should be easy, it is time  to say <br></br>goodbye to banks & financial services <br></br>companies that don't work for you</h5>
                    <button className='butto '>Digitize Now</button>

                </div>
                <div className='  col-sm-10 col-lg-12 '>
                    < img src={image2} className="image2   "/>

                </div>
                <div className='col-lg-1 col-sm-2'>
                    {/* <button className='butto p-2  '>l<br/>l<br/>o<br/>r<br/>c<br/>S</button> */}

                </div>
        
        </div>
    </div>




</div>
      </div>

            

       
        </>
    );
}