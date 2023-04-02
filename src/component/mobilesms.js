import React from "react";

import 'bootstrap/dist/css/bootstrap.css';

export function MobSms() {
    return(
        <>
        <div className=" ">
            <h1>Notifications</h1>
            <div className="contaner-fluid column">
                
            <div className=" row mt-3">

                <div className="col-lg-4">&nbsp;</div>

                <div className="bg-primary col-lg-4">

                <h3>Information Message</h3>
                </div>
                <div className="col-lg-4">&nbsp;</div>
            </div><br/>

            
            <div className="row">
            <div className="col-lg-4">&nbsp;</div>
            <div className="bg-success col-lg-4">

                <h3> Success Message</h3>
            </div>
            <div className="col-lg-4">&nbsp;</div>
            </div><br/>

            <div className="row">
            <div className="col-lg-4">&nbsp;</div>
            <div className="bg-warning col-lg-4">

                <h3>Waring Message</h3>
            </div>
            <div className="col-lg-4">&nbsp;</div>
                
            </div><br/>

            <div className="row">
            <div className="col-lg-4">&nbsp;</div>
            <div className="bg-danger col-lg-4">

                <h3> Error Message</h3>
            </div>
            <div className="col-lg-4">&nbsp;</div>
            </div>

            </div>
        </div>
        </>
    );
    
}