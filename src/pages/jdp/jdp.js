import React, { Component } from 'react';
import { Layout, Button } from 'antd/es';
import { connect } from 'react-redux';
import { getJobDetail } from '../../store/actions';
const { Header, Content, Footer, Sider } = Layout;

class Jdp extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getJobDetail(this.props.params.jobDID)
    }

    render() {
        return (
            <div>
                {/* {this.props.currentjob.Content}
                {this.props.currentjob.Company} */}
                {/* {this.props.currentjob.Location} */}
                {/* {this.props.currentjob.Title} */}

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
            jobTitle: state.title,
            jobContent: state.content,
            jobLocation: state.location
        }
    }

    function mapDispatchToProps(dispatch) {
        return {
            getJobDetail: (jobDID) => {
                dispatch(getJobDetail(jobDID))
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Jdp);

