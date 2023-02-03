import { SET_FONT_SIZE } from "./actions";

const initialState = {
    font : 24,
}

function fontReducer (state = initialState, action) {
    switch(action.type) {
        case SET_FONT_SIZE:
            return {...state, font: action.payload};
        default: 
            return state;
    }
}


export default fontReducer;