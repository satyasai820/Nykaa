

const initialState = {
    Bannerdata:[],
}


export const Reducer2 = (state = initialState , action) => {
    switch (action.type){
        case 'GET_BANNER' :
            console.log("This is banner Reducer...")
            return{
                ...state,
                Bannerdata:action.payload,
            }
        default:
            return state;
    }
}