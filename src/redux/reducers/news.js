import TYPES from '../actions/types'

const defaultState = {
    news: []
}

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case TYPES.CURRENT_NEWS: {
            return {
                ...state,
                news: state.news.concat(payload)
            }
        }
        default: 
            return state
    }
}

export default reducer