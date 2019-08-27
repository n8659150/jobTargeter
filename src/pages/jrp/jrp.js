import { connect } from 'react-redux';
import { updateKeyword, search } from '../../store/actions';
import jrpUI from './jrpUI';
const mapStateToProps = state => {
    return {
        placeholder: "What kind of job are you seeking for?",
        joblist: state.joblist,
        keywords: state.keywords
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateKeyword: (event) => {
            dispatch(updateKeyword(event))
        },
        search: () => {
            dispatch(search())
        }
    }
}

const ConnectedJRP = connect(
    mapStateToProps,
    mapDispatchToProps
)(jrpUI)




export default ConnectedJRP;
