import { put, take } from 'redux-saga/effects';
export default function* getJobResult() {
const action = yield take('search');
const result = yield fetch(`http://localhost:3000/all?q=${action.keywords}`)
        .then(response => response.json());
yield put({type:'getJobResult', payload: result})
}
