import { createSelector } from 'reselect'
const { getIn } = require('immutable')

const selectState = (state: any) => state.get('app')
export const selectSceneState = createSelector([selectState], app => app)

const selectMounted = (state: any) => getIn(state, ['app', 'mounted'])
export const selectAppMounted = createSelector([selectMounted], mounted => mounted);