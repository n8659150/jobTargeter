import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import saga from './saga';
import sagaSearch from './saga_search';
import sagaDirection from './saga_direction';
import sagaMap from './saga_map';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
    );

sagaMiddleware.run(saga);
sagaMiddleware.run(sagaSearch);
sagaMiddleware.run(sagaDirection);
sagaMiddleware.run(sagaMap);

export default store;
