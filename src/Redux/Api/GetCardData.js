import axios from "axios";
import { BaseUrl } from "./CommonApi";


export const GetCradsData = async () => {
    try{
        const response = await axios.get(`${BaseUrl}/cards.json`)
        console.log("This is Data from the FireBase ----->", response);
        const jsonData = response.data;
        if(jsonData === null) {
            return []
        }
        else{
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        }
    }

    catch(error) {
        console.log('error in  get api data', error.message)
        return [];
    }
}


export const GetBannerData = async () => {
    try{
        const response = await axios.get(`${BaseUrl}/banner.json`)
        console.log("This is Data from the FireBase ----->", response);
        const jsonData = response.data;
        if(jsonData === null) {
            console.log("I'm Touch..!")
            return []
        }
        else{
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        }
    }

    catch(error) {
        console.log('error in  get api data', error.message)
        return [];
    }
}