import { connect } from 'react-redux';
import { updateKeyword, search } from '../../store/actions';
import jrpUI from './jrpUI';
const mapStateToProps = state => {
    return {
        placeholder: "What jobs are you seeking for?",
        joblist: state.joblist,
        keywords: state.keywords,
        userhome: state.userhome
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateKeyword: (event) => {
            dispatch(updateKeyword(event))
        },
        search: (keywords) => {
            dispatch(search(keywords))
        }
    }
}

const ConnectedJRP = connect(
    mapStateToProps,
    mapDispatchToProps
)(jrpUI)




export default ConnectedJRP;
