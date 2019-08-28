import { put, take } from 'redux-saga/effects';

export default function* getDirection() {
        const action = yield take('getDirection');
        const json = yield fetch(`https://restapi.amap.com/v3/direction/driving?origin=116.45925,39.910031&destination=116.587922,40.081577&output=json&key=d97b26422a082ad3e8111d9fe473a7bb`)
        .then(response => response.json(), );
        yield put({type:'setDirection', payload: json});
    }
