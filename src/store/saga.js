import { put, take } from 'redux-saga/effects';


export default function* getJobDetail() {
    while (true) {
        const action = yield take('getJobDetail');
        const json = yield fetch(`http://localhost:3000/${action.jobDID}`)
            .then(response => response.json());
        yield put({ type: 'setJobDetail', payload: json.Details });
    }

}



