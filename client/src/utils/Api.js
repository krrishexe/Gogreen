import axios from 'axios'

const params = {
    headers:{
        Authorization:"bearer "+ import.meta.env.VITE_STRIPE_APP_KEY
    },
}

export const fetchFromApi = async (url) =>{

    try {
        const {data} = await axios.get(import.meta.env.VITE_APP_DEV_URL+url, params)
        return data;
    } catch (error) {
       throw new error 
    }
}