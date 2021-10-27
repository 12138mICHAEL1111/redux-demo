import {addFoodReducer} from '../reducers/reducer'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'  // 异步中间件

const store = createStore(addFoodReducer,applyMiddleware(thunk))

export default store