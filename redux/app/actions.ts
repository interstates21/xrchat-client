export const SET_APP_MOUNTED = 'SET_APP_MOUNTED';

export const setAppMounted = (mounted: boolean): SetAppMountedAction => ({ type: SET_APP_MOUNTED, mounted });

export interface SetAppMountedAction {
  type: string
  mounted: boolean
}

export type AppAction = SetAppMountedAction; // | SomeOtherAction | AnotherAction

export interface AppState {
  mounted: boolean
}