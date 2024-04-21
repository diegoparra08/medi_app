import axios from 'axios';

const endpoint = 'https://medi-app-server.vercel.app'

export const getAllSpecialties = async () => {
    const response = await axios.get(`${endpoint}/specialty`)
    return response.data;
}