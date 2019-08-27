import { connect } from 'react-redux';
import { getJobDetail, updateKeyword } from '../../store/actions';
import jdpUI from './jdpUI';

const mapStateToProps = state => {
    return {
        currentjob: state.currentjob,
        jobTitle: state.title,
        jobContent: state.content,
        jobLocation: state.location
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getJobDetail: (state) => {
            dispatch(getJobDetail(state))
        }
    }
}

const ConnectedJDP = connect(
    mapStateToProps,
    mapDispatchToProps
)(jdpUI)

export default ConnectedJDP;
