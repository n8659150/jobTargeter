import { put, take } from 'redux-saga/effects';

export default function* getDirection() {
    while(true){
        const action = yield take('getDirection');
        console.log(action);
        const destLat = 121.587922 + Number(action.origin);
        const destLong = 45.081577 + Number(action.dest);
        const json = yield fetch(`https://restapi.amap.com/v3/direction/driving?origin=116.45925,39.910031&destination=${destLat},${destLong}&output=json&key=d97b26422a082ad3e8111d9fe473a7bb`)
        .then(response => response.json());
        console.log(json);
        yield put({type:'setDirection', payload: json});
    }   
}
