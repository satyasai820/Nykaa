import { GET_BANNERS } from "./ActionTypes"


 export const GetBanners = (data) => {
    console.log("This is data >>>>>>", data)
    console.log('banner action')
    return{
        
        type : 'GET_BANNER',
        payload : data,
    }
}