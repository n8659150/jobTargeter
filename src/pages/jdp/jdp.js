import { connect } from 'react-redux';
import { getJobDetail } from '../../store/actions';
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
        getJobDetail: () => {
            dispatch(getJobDetail())
        }
    }
}

const ConnectedJDP = connect(
    mapStateToProps,
    mapDispatchToProps
)(jdpUI)

export default ConnectedJDP;
