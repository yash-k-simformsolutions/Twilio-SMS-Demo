import { BUY_CAKE } from "./cakeTypes"

const initialState = {
    cake: 50,
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            cake: state.cake - action.payload,
        }

        default: return state
    }
}  

export default cakeReducer;