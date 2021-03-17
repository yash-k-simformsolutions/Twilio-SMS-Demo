import { BUY_ICECREAM } from "./iceCreamType"

const initialState = {
    iceCream: 100,
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            iceCream: state.iceCream - 1,
        }

        default: return state
    }
}

export default iceCreamReducer;