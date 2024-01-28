import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL

const requestCreateGroup = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/create/group`, data)
        return response
    } catch (error) {
        console.error('Error posting to API:', error)
    }
}

export default requestCreateGroup