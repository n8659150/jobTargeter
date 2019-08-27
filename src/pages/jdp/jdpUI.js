import React from 'react';
import { Input, Button } from 'antd/es';

const jdpUI = (props) => {
    console.log(props)
    return (
        <div>
            <Button type="primary" onClick={props.getJobDetail(props.params.jobDID)}>HAHAHA!</Button>
            {props.currentjob.Content}
            {props.currentjob.Company}
            {/* {props.currentjob.Location} */}
            {props.currentjob.Title}
        </div>


    )
}

export default jdpUI
