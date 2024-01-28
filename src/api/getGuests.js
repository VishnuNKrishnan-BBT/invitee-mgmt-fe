import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL

const requestGetGuests = async (filter = {}) => {
    try {
        const response = await axios.post(`${BASE_URL}/retrieve/guests`, filter)
        return response.data.data
    } catch (error) {
        console.error('Error posting to API:', error)
    }
}

export default requestGetGuests