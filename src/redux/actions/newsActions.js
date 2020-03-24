import axios from 'axios'
import TYPES from './types'

const getCurrentNews = () => async(dispatch) => {
    const res = await axios.get('http://localhost:4000/news')
    dispatch({
        type: TYPES.CURRENT_NEWS,
        payload: res.data
    })
}

export {
    getCurrentNews
}