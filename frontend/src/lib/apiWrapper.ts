import axios from 'axios';
import { TripFormDataType } from '../Types';

const baseURL:string = 'https://maps.googleapis.com/maps/api/place/textsearch/json'
const apiKey:string = 'AIzaSyBhKZEnvUKqg2bVHd6cfF6JdeuPqlPSxuo'

function URLify(params: string): string {
    if (params.includes(' ')){
        const words:string[]= params.split(' ')
        let returnStr:string = ''
        for (let word of words) {
            returnStr+= (word + '%20')
        }
    return returnStr
    } else {
        return params
    }
}

async function getPOIs(city:string): Promise<APIResponse<>> {
    let data;
    let error;
    try{
        const response = await apiClientNoAuth().post(userEndpoint, newUserData);
        data = response.data
    } catch(err) {
        if (axios.isAxiosError(err)){
            error = err.response?.data.error
        } else {
            error = 'Something went wrong'
        }
    }
    return { data, error }
}
