import React from 'react';
import { Input, Button, List } from 'antd/es';
import { Link } from 'react-router'
const jrpUI = (props) => {
    console.log(props);
    return (
   <div style={{ margin: '10px' }}>
        <div>
            <Input
                placeholder={props.placeholder}
                style={{ width: '250px', marginRight: '10px' }}
                onChange={props.updateKeyword}
                value={props.keywords}
            />
            <Button type="primary" onClick={props.add}>Go!</Button>
        </div>
        <div style={{ marginTop: '10px' }}>
            <List bordered
                dataSource={props.joblist}
                renderItem={(item, index) =>
                    <List.Item>
                        <List.Item.Meta
                            key={index}
                            title={<Link to={`detail/${item.id}`}>
                            {item.jobTitle}
                            </Link>}
                        />
                    </List.Item>
                }
            />
        </div>

    </div>


    )
}
export default jrpUI