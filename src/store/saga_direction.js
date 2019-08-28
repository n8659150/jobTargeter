import { put, take } from 'redux-saga/effects';

export default function* getDirection() {
    while(true){
        const action = yield take('getDirection');
        let json
        if (action.transType === "transit") {
                json = yield fetch(`https://restapi.amap.com/v3/direction/${action.transType}/integrated?origin=${action.origin}&city=shanghai&destination=${action.dest}&output=json&key=d97b26422a082ad3e8111d9fe473a7bb`)
                        .then(response => response.json());
        } else {
                json = yield fetch(`https://restapi.amap.com/v3/direction/${action.transType}?origin=${action.origin}&destination=${action.dest}&output=json&key=d97b26422a082ad3e8111d9fe473a7bb`)
                        .then(response => response.json());
        }
        json.transType = action.transType;
        yield put({type:'setDirection', payload: json});
    }
}
