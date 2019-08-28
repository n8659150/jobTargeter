import { put, take } from 'redux-saga/effects';

export default function* getMap() {
    while(true){
        const action = yield take('getMap');
        const json = yield fetch(`https://restapi.amap.com/v3/staticmap?markers=mid,0xFF0000,A:116.37359,39.92437;116.47359,39.92437&key=d97b26422a082ad3e8111d9fe473a7bb`)
        .then(response => response);
        console.log(json)
        yield put({type:'setMap', payload: json});
    }
}
