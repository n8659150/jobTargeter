import { put, take, takeLatest, all } from 'redux-saga/effects';


export default function* getJobDetail() {

        const action= yield take('getJobDetail');
        const json = yield fetch('http://localhost:3000/J3S76T793769S74BKJW')
        .then(response => response.json(), );
        console.log('hhh'+JSON.stringify(json));
        yield put({type:'setJobDetail', payload: json.Details});

}
