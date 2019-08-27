import { put, take } from 'redux-saga/effects';
export default function* getJobResult() {
const action = yield take('search');
console.log(action);
const result = yield fetch('http://localhost:3000/J3S76T793769S74BKJW')
        .then(response => response.json());
yield put({type:'getJobResult', payload: result.Details})
}
