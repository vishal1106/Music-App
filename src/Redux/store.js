import {applyMiddleware, combineReducers, legacy_createStore} from "redux"

import reducer from "./reducer"
import thunk from "redux-thunk"
import AuthReducer from "./AuthReducer/authreducer"
const rootReducer=combineReducers({reducer,AuthReducer})
const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store