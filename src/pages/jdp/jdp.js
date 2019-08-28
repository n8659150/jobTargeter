import React, { Component } from 'react';
import { PageHeader, Tag, Spin, Descriptions, Button } from 'antd/es';
import { connect } from 'react-redux';
import { getJobDetail, getDirection } from '../../store/actions';


class Jdp extends Component {

    componentDidMount() {
        this.props.getJobDetail(this.props.params.jobDID)
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
                <Descriptions title="" bordered>
                    <Descriptions.Item label="Job Title" span={1}>{this.props.currentjob.Title}</Descriptions.Item>
                    <Descriptions.Item label="Company" >{this.props.currentjob.Campany}</Descriptions.Item>
                    <Descriptions.Item label="Employee Type" >Contract to hire</Descriptions.Item>
                    <Descriptions.Item label="Location" >Annapolis Junction, MD</Descriptions.Item>
                    <Descriptions.Item label="Date Posted" >2018-04-24 18:00:00</Descriptions.Item>
                    <Descriptions.Item label="Pay Rate" span={5}>{this.props.currentjob.payRate}</Descriptions.Item>
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
                        <div>1</div>
                    </Descriptions.Item>
                </Descriptions>

                <Button onClick={
                    () => {
                        this.props.getDirection(`${this.props.currentjob.Location && this.props.currentjob.Location.Latitude},${this.props.currentjob.Location && this.props.currentjob.Location.Longitude}`,`123`)
                    }
                }> walk </Button>
                <Spin spinning={this.props.loading}>
                    {this.props.direction.route && this.props.direction.route.paths[0].duration}
                </Spin>
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

