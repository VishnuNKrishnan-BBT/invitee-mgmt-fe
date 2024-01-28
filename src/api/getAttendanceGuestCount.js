import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL

const requestGetAttendanceGuestCount = async (attendance = 'sure') => {
    try {
        const response = await axios.post(`${BASE_URL}/retrieve/guestCount`, { attendance: attendance })
        return response.data.data.count
    } catch (error) {
        console.error('Error posting to API:', error)
    }
}

export default requestGetAttendanceGuestCount