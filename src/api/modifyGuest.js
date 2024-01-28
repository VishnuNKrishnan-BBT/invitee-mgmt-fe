import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL

const requestModifyGuest = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/modify/guest`, data)
        return response
    } catch (error) {
        console.error('Error posting to API:', error)
    }
}

export default requestModifyGuest