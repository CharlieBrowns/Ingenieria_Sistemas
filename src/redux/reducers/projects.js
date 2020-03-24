import TYPES from '../actions/types'

const defaultState = {
    projects : []
}


function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case TYPES.CURRENT_PROJECT: {
            return {
                ...state,
                projects: state.projects.concat(payload)
            }
        }
        default:
            return state
    }
}

export default reducer