export const SET_FONT_SIZE = 'SET_FONT_SIZE';

export const setFont = font => dispatch => {
    dispatch({
        type: SET_FONT_SIZE,
        payload: font,
    });
};

export const SAVE_NEWS = 'SAVE_NEWS';

export const setSave = save => dispatch => {
    dispatch({
        type: SAVE_NEWS,
        payload: save,
    });
};