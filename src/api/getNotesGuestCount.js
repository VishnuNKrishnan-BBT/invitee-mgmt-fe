import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL

const requestGetNotesGuestCount = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/retrieve/guestCount`, { notes: { $ne: "" } })
        return response.data.data.count
    } catch (error) {
        console.error('Error posting to API:', error)
    }
}

export default requestGetNotesGuestCount