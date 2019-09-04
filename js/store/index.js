import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';
import {middleware} from '../navigator/AppNavigators';

// 自定义中间件
const logger = store => next => action => {
    if(typeof action == 'function') {
        console.log('dispatching a function');
    }else {
        console.log('dispatching ,' + action)
    }
    const result = next(action);
    console.log('nextState ',store.getState());
}

const middlewares = [
    middleware,
    logger,
    thunk
]

export default createStore(reducer,applyMiddleware(...middlewares));