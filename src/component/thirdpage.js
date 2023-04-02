import 'bootstrap/dist/css/bootstrap.min.css';
import './thired.css'
import one from './image/Group.png'
import two from './image/Frame.png'

export  function Thiredpage(){

    return(
        <>
        <div className='container'>
            <div className=' main mt-5 mb-5 '>
                <div className='row'>
                    <div className='col-lg-6   p-5 '>
                    <h1 className=' mt-4  text-light'>Make an impression<br/>with metal</h1>
                        <p className=' mt-3 textgrey'>Get our iconic metel cards forged from <br/>
                        dtainless steel, for you and your power players.<br/>
                        Add your company name to the front for an<br/>
                        extra proffession touch. Exclusuvely for paid plans.<br/>
                        Subject to additionnal fees</p>

                        <h5 className='mt-5  mb-5 text-success'> Order a metel card → </h5>
                    </div>
                    <div className='col-lg-6 '>
                        <img src={one} className='oneimg mr-auto ml-auto'/>
                    </div>
                        <img src={two} className='twoimg mr-auto ml-auto col-sm-8'/>
                </div>
            </div>
        </div>






        
           
           
            <div className='container'>
            <div className='main  mt-5 mb-5 pl-5 pb-5'>
                <div className='row'>
                    <div className='col-lg-6'>
                    <h6 className='first text-secondary mt-5 mb-5'>Transfers</h6>
                    <h1 className='head text-light '>International<br/>payments for<br/>your business</h1>
                    <p className='mt-3 text-light '>Join thousand of business saving on fees<br/> with fast local and international<br/>transfers</p>
                    <button className='btn0 text-dark '>Get started</button>&nbsp; &nbsp;
                    <button className='btn1 btn-dark text-light'>Contact sales</button>
                    </div>

                    <div className='col-lg-6'>
                            <div className='col-lg-2'>&nbsp;</div>
                            <div className='empty col-lg-10'>

                            </div>
                            <div className='col-lg-2'>&nbsp;</div>  
                    </div>
                </div>
            </div>
       </div>
        </>
    )
}