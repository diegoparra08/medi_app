import axios from "axios";

const endpoint = 'https://medi-app-server.vercel.app';

export const getAllDoctors = async () => {
    const response = await axios.get(`${endpoint}/doctor`)
    return response.data;
}

export const getDoctorById = async (id) => {
    const response = await axios.get(`${endpoint}/doctor/${id}`)
    console.log(response);
    return response.data;
}