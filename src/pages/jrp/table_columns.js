import React from 'react';
import { Link } from 'react-router';
const columns = [
    {
        title: 'Title',
        dataIndex: 'Details.Title',
        key: 'Details.Title',
        render: (text, record) => (
            <span>
                <Link className="topo-data" to={`/detail/${record.JobDID}`}>{text}</Link>
            </span>
        )
    },
    {
        title: 'Company',
        dataIndex: 'Details.Campany',
        key: 'Details.Campany'
    },
    {
        title: 'Date Posted',
        dataIndex: 'Details.DatePosted',
        key: 'Details.DatePosted'
    }
];
export default columns;
