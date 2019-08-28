import { put, take } from 'redux-saga/effects';

export default function* getDirection() {
    while(true){
        const action = yield take('getDirection');
        let json
        if (action.transType === "transit") {
                json = yield fetch(`https://restapi.amap.com/v3/direction/${action.transType}/integrated?origin=116.587922,40.081577&city=shanghai&destination=${action.origin}&output=json&key=d97b26422a082ad3e8111d9fe473a7bb`)
                        .then(response => response.json());
        } else {
                json = yield fetch(`https://restapi.amap.com/v3/direction/${action.transType}?origin=116.587922,40.081577&destination=${action.origin}&output=json&key=d97b26422a082ad3e8111d9fe473a7bb`)
                        .then(response => response.json());
        }
        console.log(json)
        json.transType = action.transType;
        yield put({type:'setDirection', payload: json});
    }
}
