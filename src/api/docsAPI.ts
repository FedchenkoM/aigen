import { apiErrorHandler } from './../errors/apiErrorsHandler';
import axios from 'axios';
import { IapiResponse } from '../interfaces/interfaces';
const BASE_URL: string = `http://localhost:5000/docs`;

export const getDocs = async (id?: string, date?: string, name?: string): Promise<IapiResponse> => {
    try {
        const response = await axios.get(BASE_URL, { params: setParams(id, date, name) })
        return {
            status: 200,
            data: response.data
        }
    } catch (err) {
        return apiErrorHandler(err)
    }
}

const setParams = (id?: string, date?: string, name?: string) => {
    if (id) return { id }
    const params = {}
    if (date) Object.assign(params, { date })
    if (name) Object.assign(params, { name })

    return params
}



