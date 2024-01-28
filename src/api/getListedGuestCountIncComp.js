import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL

const requestGetListedGuestCountIncComp = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/retrieve/guestCountIncCompanions`)
        return response.data.data.count
    } catch (error) {
        console.error('Error posting to API:', error)
    }
}

export default requestGetListedGuestCountIncComp