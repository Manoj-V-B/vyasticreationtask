import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import { Home } from './component/Home';
import { MobSms } from './component/mobilesms';
import { Fourthpage} from './component/Fourthpage';
import Thiredpage from './component/thirdpage';
import { Overall } from './overall';

function App() {
  return (
   <>
   <div>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={[<Home/>,<Secondpage/>]}/> */}
      {/* <Route path='/' element={<Fourthpage/>}/> */}
      <Route path='/' element={<Overall/>}/>
    </Routes>
    </BrowserRouter>
   </div>
   </>
  );
}

export default App;
