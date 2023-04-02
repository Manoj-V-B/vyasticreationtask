import { Fourthpage } from "./component/Fourthpage";
import { Home } from "./component/Home";
import { Lastpage } from "./component/Lastpage";
import {Thiredpage }from "./component/thirdpage";
import { Secondpage } from "./Secondpage";


export function Overall() {
    return(
        <>
        <div>
            <Home/>
            <Secondpage/>
            <Thiredpage/>
            <Fourthpage/>
            <Lastpage/>
        </div>
        </>
    )
}