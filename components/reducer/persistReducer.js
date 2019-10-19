import * as types from '../actions';

const initialState = {
    words: 'hihi',
    workHour: '00',
    workMinute: '20',
    breakHour: '00',
    breakMinute: '10',
};


function persistReducer(state=initialState, action){
    switch(action.type){
        case types.SAVE_DATA:
            return applySaveData(state, action.data, action.name);
        default:
            return state;
    }
}

function applySaveData(state, data, name){

    switch (name){
        case 'workHour':
            return {
                ...state,
                workHour: data,
            };
        case 'workMinute':
            return {
                ...state,
                workMinute: data,
            };
        case 'breakHour':
            return {
                ...state,
                breakHour: data,
            };
        case 'breakMinute':
            return {
                ...state,
                breakMinute: data,
            };
        case 'words':
            return {
                ...state,
                words: data,
            };
        default:
            return state;
    }

}


export default persistReducer;