import React, { useState } from "react";
import "./singleSchedule.css"

import DateAndTime from "./DateAndTime";
import { Drawer } from "antd";

import 'antd/dist/antd.css';


const SingleSchedule = ({ leader }) => {
    const [DrawerVisible, setDrawerVisible] = useState(false)
    const handleclickDrawerVisible = () => {
        setDrawerVisible(true)
    }
    const closedrawerVisible = () => {
        setDrawerVisible(false)
    }
    return (
        <>
            <Drawer placement="right" visible={DrawerVisible} width={520} onClose={() => closedrawerVisible()}>
                <DateAndTime leader={leader} />
            </Drawer>
            <div className="leaders">
                <div className="profile" >
                    <img src={leader?.profile} ></img> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <h5><b> {leader?.title}</b></h5>
                </div>
                <h5>Amazina : {leader?.name}</h5>
                <h5>Akazi:{leader?.description}</h5>
                <h5>Aho akorera:{leader?.address}</h5>
                <h5>numero ya telephone:{leader?.phone}</h5>
                <div className="booking" onClose={() => closedrawerVisible()}></div>
                <button onClick={() => handleclickDrawerVisible()}> book an appointment</button>
            </div>
        </>
    )
}
export default SingleSchedule