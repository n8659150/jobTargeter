import React, { Component } from 'react';
import { Layout, Spin } from 'antd/es';
import { connect } from 'react-redux';
import { getJobDetail, getDirection } from '../../store/actions';
const { Header, Content, Footer, Sider } = Layout;

class Jdp extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getJobDetail(this.props.params.jobDID)
        this.props.getDirection('1', '2')
    }

    render() {
        return (
            <div>
                <Spin spinning={this.props.loading}>
                    {this.props.direction.route && this.props.direction.route.paths[0].duration}
                </Spin>
                <Layout>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>{this.props.currentjob.Title}</Header>
                    <Content>{this.props.currentjob.Content}</Content>
                    <Footer>{this.props.currentjob.Company}</Footer>
                </Layout>
                </Layout>
            </div>
        )
    }
}
    function mapStateToProps(state) {
        return {
            currentjob: state.currentjob,
            direction: state.direction,
            loading: state.loading
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

