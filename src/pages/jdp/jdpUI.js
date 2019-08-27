import React from 'react';
import { Input, Button } from 'antd/es';

const jdpUI = (props) => {
    console.log(props)
    return (
        <div>
            <Button type="primary" onClick={props.getJobDetail}>HAHAHA!</Button>
            {props.location.pathname}


        </div>


    )
}

export default jdpUI
