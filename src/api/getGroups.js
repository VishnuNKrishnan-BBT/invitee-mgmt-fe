import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL

const requestGetGroups = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/groups`)
        return response
    } catch (error) {
        console.error('Error posting to API:', error)
    }
}

export default requestGetGroups