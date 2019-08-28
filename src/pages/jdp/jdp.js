import React, { Component } from 'react';
import { PageHeader, Tag, Spin, Descriptions, Badge } from 'antd/es';
import { connect } from 'react-redux';
import { getJobDetail, getDirection } from '../../store/actions';


class Jdp extends Component {

    componentDidMount() {
        this.props.getJobDetail(this.props.params.jobDID)
        this.props.getDirection(Math.random().toString().slice(-1), Math.random().toString().slice(-3))
    }

    render() {
        return (
            <div style={{ margin:"10px" }}>
                <PageHeader
                onBack={() => window.history.back()}
                key={this.props.userhome}
                title="Original Location"
                subTitle={this.props.userhome}
                tags={<Tag color="green">Home</Tag>}
                >
                </PageHeader>
                <Spin spinning={this.props.loading}>
                    {this.props.direction.route && this.props.direction.route.paths[0].duration}
                </Spin>
                {/* {this.props.currentjob.Title} */}
                <Descriptions title="" bordered>
                    <Descriptions.Item label="Job Title">{this.props.currentjob.Title}</Descriptions.Item>
                    <Descriptions.Item label="Employee Type">Contract to hire</Descriptions.Item>
                    <Descriptions.Item label="Location">Annapolis Junction, MD</Descriptions.Item>
                    <Descriptions.Item label="Date Posted">2018-04-24 18:00:00</Descriptions.Item>
                    <Descriptions.Item label="Usage Time" span={2}>
                    2019-04-24 18:00:00
                    </Descriptions.Item>
                    <Descriptions.Item label="Status" span={3}>
                    <Badge status="processing" text="Running" />
                    </Descriptions.Item>
                    <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
                    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                    <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
                    <Descriptions.Item label="Config Info">
                    Data disk type: MongoDB
                    <br />
                    Database version: 3.4
                    <br />
                    Package: dds.mongo.mid
                    <br />
                    Storage space: 10 GB
                    <br />
                    Replication_factor:3
                    <br />
                    Region: East China 1<br />
                    </Descriptions.Item>
                </Descriptions>
            </div>
        )
    }
}
    function mapStateToProps(state) {
        return {
            currentjob: state.currentjob,
            direction: state.direction,
            loading: state.loading,
            userhome: state.userhome
        }
    }

    function mapDispatchToProps(dispatch) {
        return {
            getJobDetail: (jobDID) => {
                dispatch(getJobDetail(jobDID))
            },
            getDirection: (origin, dest) => {
                dispatch(getDirection(origin, dest))
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Jdp);

