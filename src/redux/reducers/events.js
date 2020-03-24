import TYPES from '../actions/types'

const defaultState = {
    events : []
}

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case TYPES.CURRENT_EVENTS: {
            return {
                ...state,
                events: state.events.concat(payload)
            }
        }
        default:
            return state
    }
}

export default reducer