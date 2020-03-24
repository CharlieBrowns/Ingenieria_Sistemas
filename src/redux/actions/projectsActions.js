import axios from 'axios'
import TYPES from './types'
// export const type = 'getCurrentProjects'

const getCurrentProjects = () => async (dispatch) => {
    const res = await axios.get('http://localhost:4000/project')
    dispatch({
        // type: 'getCurrentProjects',
        type: TYPES.CURRENT_PROJECT,
        payload: res.data
    })
}

export {
    getCurrentProjects
} 