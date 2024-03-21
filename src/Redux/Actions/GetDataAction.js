import { GET_DATA } from "./ActionTypes"

export const Getdata = (data) => {
    return{
        type: GET_DATA,
        payload:data,
    }
}