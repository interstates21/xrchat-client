import { combineReducers } from 'redux-immutable'
import authReducer from './auth/reducers'
import videoReducer from "./video/reducers"
import alertReducer from "./alert/reducers"
import appReducer from './app/reducers'

export default combineReducers({
    auth: authReducer,
    videos: videoReducer,
    alert: alertReducer,
    app: appReducer,
})
