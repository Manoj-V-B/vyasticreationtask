import 'bootstrap/dist/css/bootstrap.min.css';
import './last.css'


export function Lastpage() {
    return(
        <>
        <div className='mb-5 pb-5'>
            <div className='text-center mb-5 pb-5'>
                <h6>What are you waiting for?</h6>
                <h1>Make your business <br/>spending smarter</h1>
                <button className='btna'>Try Revolut business now</button> <button className='btnb'>Contact sales</button>
            </div>
            <div className='container text-center bgdarka pt-5 pb-5'>
                <h1>Connect your finance <br/>with Carty</h1>
                <button className='btna'><h2>Rejoignez I'univers</h2></button>

                <div className=''>
                <nav className="navbar navbar-expand-lg navbar-light  ">
        <div className='col-lg-1'>&nbsp;</div>
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
      <a className="navbar-brand text-light" href="#">En</a>
      </li>
    </ul>
    
  </div>
</nav>

                </div>
            </div>
        </div>
        </>
    )
}