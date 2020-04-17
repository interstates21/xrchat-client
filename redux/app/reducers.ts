import Immutable from 'immutable'
import {
    AppAction,
    AppState,
    SET_APP_MOUNTED,
    SetAppMountedAction
} from './actions'

export const initialState: AppState = {
    mounted: false,
}

const immutableState = Immutable.fromJS(initialState)

const appReducer = (state = immutableState, action: AppAction): any => {
    switch (action.type) {
        case SET_APP_MOUNTED:
            return state
                .set('mounted', (action as SetAppMountedAction).mounted)
    }

    return state
}

export default appReducer
