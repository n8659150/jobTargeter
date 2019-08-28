import React, { Component } from 'react';
import { PageHeader, Tag, Spin, Descriptions, Button, Card } from 'antd/es';
import { connect } from 'react-redux';
import { getJobDetail, getDirection, getHomeLocation } from '../../store/actions';
import { Map, Polygon } from 'react-amap';


class Jdp extends Component {

    componentDidMount() {
        this.props.getJobDetail(this.props.params.jobDID)
        this.props.getHomeLocation('浦东南路500号');
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
                <Descriptions title="" bordered>
                    <Descriptions.Item label="Job Title" span={1}>{this.props.currentjob.Title}</Descriptions.Item>
                    <Descriptions.Item label="Company" >{this.props.currentjob.Campany}</Descriptions.Item>
                    <Descriptions.Item label="Employee Type" >Contract to hire</Descriptions.Item>
                    <Descriptions.Item label="Location" >Annapolis Junction, MD</Descriptions.Item>
                    <Descriptions.Item label="Date Posted" >{this.props.currentjob.DatePosted}</Descriptions.Item>
                    <Descriptions.Item label="Pay Rate" span={5}>{this.props.currentjob.PayRate}</Descriptions.Item>
                    <Descriptions.Item label="Summary" span={3}>{this.props.currentjob.Content}</Descriptions.Item>
                    <Descriptions.Item label="Job Requirements" >
                    This position provides manual support to the companies rental construction business.
                    <br />
                    This person will also have to engage in record keeping for the shipping and receiving department.
                    <br />
                    They will also be using a Pressure Washer for cleaning purposes.
                    <br />
                    Other Duties:
                    <br />
                    Painting equipment.
                    <br />
                    Power washing
                    <br />
                    Region: East China 1
                    <br />
                    This position provides manual support to the companies rental construction business.
                    <br />
                    This person will also have to engage in record keeping for the shipping and receiving department.
                    <br />
                    They will also be using a Pressure Washer for cleaning purposes.
                    <br />
                    Other Duties:
                    <br />
                    Painting equipment.
                    <br />
                    Power washing
                    <br />
                    Region: East China 1
                    <br />
                    This position provides manual support to the companies rental construction business.
                    <br />
                    This person will also have to engage in record keeping for the shipping and receiving department.
                    <br />
                    They will also be using a Pressure Washer for cleaning purposes.
                    <br />
                    Other Duties:
                    <br />
                    Painting equipment.
                    <br />
                    Power washing
                    <br />
                    Region: East China 1
                    </Descriptions.Item>
                    <Descriptions.Item label="Direction Suggestions">

                        <Button onClick={
                            () => {
                                this.props.getDirection(`${this.props.currentjob.Location && this.props.currentjob.Location.Latitude},${this.props.currentjob.Location && this.props.currentjob.Location.Longitude}`,`123`, 'walking')
                            }
                        }> walk </Button>

                        <Button onClick={
                            () => {
                                this.props.getDirection(`${this.props.currentjob.Location && this.props.currentjob.Location.Latitude},${this.props.currentjob.Location && this.props.currentjob.Location.Longitude}`,`123`, 'driving')
                            }
                        }> drive </Button>

                        <Button onClick={
                            () => {
                                this.props.getDirection(`${this.props.currentjob.Location && this.props.currentjob.Location.Latitude},${this.props.currentjob.Location && this.props.currentjob.Location.Longitude}`,`123`, 'transit')
                            }
                        }> public transport </Button>

                        <br />

                        <Card title="direction" style={{ width: 300 }}>
                            home location : {this.props.userhomeLocation} <br/>
                            It is <Spin spinning={this.props.loading}>{this.props.distance/1000}</Spin>km away from your home
                            AND
                            It will take <Spin spinning={this.props.loading}>
                                {this.props.formatedDuration}</Spin> to the office by {this.props.transType}
                        </Card>
                        <div style={{width: '100%', height: '200px'}}>
                            <Map amapkey={'d97b26422a082ad3e8111d9fe473a7bb'} center={{longitude: 113.587922, latitude:40.081577}}>
                                <Polygon path={[{longitude: 113.587922, latitude:40.081577}, {longitude: 116.587922, latitude:45.081577}]}/>
                            </Map>
                        </div>
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
            userhome: state.userhome,
            userhomeLocation: state.userhomeLocation,
            formatedDuration: state.formatedDuration,
            transType: state.transType,
            distance: state.distance
        }
    }

    function mapDispatchToProps(dispatch) {
        return {
            getJobDetail: (jobDID) => {
                dispatch(getJobDetail(jobDID))
            },
            getDirection: (origin, dest, transType) => {
                dispatch(getDirection(origin, dest, transType))
            },
            getHomeLocation: (homeAddress) => {
                dispatch(getHomeLocation(homeAddress))
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Jdp);

