import { put, take } from 'redux-saga/effects';

export default function* getHomeLocation() {
    while(true){
        const action = yield take('getHomeLocation');
        console.log(JSON.stringify(action))
        const json = yield fetch(`https://restapi.amap.com/v3/geocode/geo?address=${action.homeAddress}&output=json&key=d97b26422a082ad3e8111d9fe473a7bb`)
        .then(response => response.json());
        console.log(JSON.stringify(json))
        yield put({type:'setHomeLocation', payload: json});
    }
}
