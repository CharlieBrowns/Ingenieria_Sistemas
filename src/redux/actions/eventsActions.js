import axios from 'axios'
import TYPES from './types'

const getCurrentEvents = () => async(dispatch) => {
    const res = await axios.get('http://localhost:4000/event')
    dispatch({
        type: TYPES.CURRENT_EVENTS,
        payload: res.data
    })
}

export {
    getCurrentEvents
}