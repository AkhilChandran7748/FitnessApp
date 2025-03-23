import React from "react";
import { Splitter, SplitterPanel } from 'primereact/splitter'

const PersonalInfo = ({ client }) => {
    return (<>
        <div className="personal-info padding-30p">
            <div><h2>{client?.Name}</h2></div>
            <Splitter style={{ height: '100px' }} >
                <SplitterPanel className="flex align-items-center justify-content-center" size={45}>
                    <div style={{ fontSize: 'small', fontWeight: 500 }} className="padding-t-15p padding-l-20p">
                        <div className="blue" >
                            <span className="pi pi-envelope grey  margin-r-10" style={{ float: 'left' }} />
                            <span>  <h6>{client?.Email}</h6></span>
                        </div>
                        <div >
                            <span className="pi pi-phone grey  margin-r-10" style={{ float: 'left' }} />
                            <h6>{client?.MobileNumber}</h6>
                        </div>

                    </div>
                </SplitterPanel>
            </Splitter>

        </div></>)
}
export default PersonalInfo