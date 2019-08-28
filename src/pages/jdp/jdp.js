import React, { Component } from 'react';
import { PageHeader, Tag, Spin, Descriptions, Button, Radio, Input } from 'antd/es';
import { connect } from 'react-redux';
import { getJobDetail, getDirection, getHomeLocation, updateUserHome } from '../../store/actions';
import { Map, Polygon } from 'react-amap';


class Jdp extends Component {

    componentDidMount() {
        this.props.getJobDetail(this.props.params.jobDID)
        this.props.getHomeLocation(this.props.userhome);
    }

    render() {
        let jobLong = this.props.currentjob.Location && this.props.currentjob.Location.Longitude;
        let jobLat = this.props.currentjob.Location && this.props.currentjob.Location.Latitude;
        let homeLat = this.props.userhomeLocation ? this.props.userhomeLocation.split(',')[0] : '';
        let homeLong = this.props.userhomeLocation ? this.props.userhomeLocation.split(',')[1] : '';

        // let jobLngLat = new AMap.LngLat(homeLong, homeLat);
        // let homeLngLat = new AMap.LngLat(homeLong, homeLat);
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
                    <Descriptions.Item label="Date Posted">2019-08-27</Descriptions.Item>
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
                            home location:
                            {jobLong},{jobLat},{homeLong},{homeLat}
                            <Input onChange={this.props.updateUserHome} value={this.props.userhome}></Input>
                            <Button onClick={() => {this.props.getHomeLocation(this.props.userhome)}}>update</Button>
                            <div style={{width: '100%', height: '360px'}}>
                                home location :  <br/>
                                It is <Spin spinning={this.props.loading} wrapperClassName="mapFix">{this.props.distance/1000}</Spin>&nbsp;<span>km away from your home</span>
                                <br />
                                It will take &nbsp;<Spin wrapperClassName="mapFix" spinning={this.props.loading}>{this.props.formatedDuration}</Spin>&nbsp;<span>to the office by {this.props.transType}</span>
                                <Map amapkey={'d97b26422a082ad3e8111d9fe473a7bb'} city={"上海"} zoom={14} center={{longitude: Number.parseFloat(jobLat), latitude: Number.parseFloat(jobLong)}}>
                                    <Polygon path={[{
                                        longitude: Number.parseFloat(jobLat),
                                        latitude: Number.parseFloat(jobLong)
                                    }, {
                                        longitude: Number.parseFloat(homeLat),
                                        latitude: Number.parseFloat(homeLong)
                                    }]}/>
                                </Map>
                            </div>

                            <Radio.Group defaultValue="walking" onChange={(e)=> {
                                this.props.getDirection(`${this.props.currentjob.Location && this.props.currentjob.Location.Latitude},${this.props.currentjob.Location && this.props.currentjob.Location.Longitude}`,`${this.props.userhomeLocation}`, e.target.value)
                            }}>
                                <Radio.Button value="walking">Walk</Radio.Button>
                                <Radio.Button value="driving">Drive</Radio.Button>
                                <Radio.Button value="transit">Public Transport</Radio.Button>
                            </Radio.Group>
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
            },
            updateUserHome: (event) => {
                dispatch(updateUserHome(event))
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Jdp);

