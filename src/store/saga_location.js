import { put, take } from 'redux-saga/effects';

export default function* getHomeLocation() {
    while(true){
        const action = yield take('getHomeLocation');
        const json = yield fetch(`https://restapi.amap.com/v3/geocode/geo?address=%E6%B5%A6%E4%B8%9C%E5%8D%97%E8%B7%AF500%E5%8F%B7&output=json&key=d97b26422a082ad3e8111d9fe473a7bb`)
        .then(response => response.json());
        yield put({type:'setHomeLocation', payload: json});
    }
}
