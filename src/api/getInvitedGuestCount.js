import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL

const requestGetInvitedGuestCount = async (invited = true) => {
    try {
        const response = await axios.post(`${BASE_URL}/retrieve/guestCount`, { invited: invited })
        return response.data.data.count
    } catch (error) {
        console.error('Error posting to API:', error)
    }
}

export default requestGetInvitedGuestCount