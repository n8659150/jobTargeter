import React from 'react';
import { Input, Button, Table, PageHeader, Tag } from 'antd/es';
import columns from './table_columns';
const jrpUI = (props) => {
    return (

        <div style={{ margin: '10px' }}>
            <PageHeader
                key={props.userhome}
                title="Original Location"
                subTitle={props.userhome}
                tags={<Tag color="green">Home</Tag>}
                extra={[
                    <Input
                        key="1"
                        placeholder={props.placeholder}
                        style={{ width: '300px', marginRight: '10px' }}
                        onChange={props.updateKeyword}
                        value={props.keywords}
                    />,
                    <Button key="2" type="primary" onClick={props.search.bind(this, props.keywords)}>Go!</Button>
                ]}>
            </PageHeader>

            <div style={{ marginTop: '10px' }}>
                <Table
                    dataSource={props.joblist}
                    columns={columns}
                />
            </div>

        </div>


    )
}
export default jrpUI
