import { SAVE_NEWS } from "./actions";

const initialState = {
    save : null,
}

function saveReducer (state = initialState, action) {
    switch(action.type) {
        case SAVE_NEWS:
            return {...state, save: action.payload};
        default: 
            return state;
    }
}


export default saveReducer;