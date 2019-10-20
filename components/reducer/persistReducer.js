import * as types from '../actions';

const initialState = {
    words: `It's nice to meet you`,
    workHour: '0',
    workMinute: '25',
    breakHour: '0',
    breakMinute: '5',
    colors : 0,
};


function persistReducer(state=initialState, action){
    switch(action.type){
        case types.SAVE_DATA:
            return applySaveData(state, action.data, action.name);
        case types.SET_COLOR:
            return applySetColor(state, action.direction);
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

function applySetColor (state, direction){
    if (direction === 'right') {
        let colors = state.colors;
        colors = colors + 1;
        if(colors > 4){ // 전 color가 마지막일 경우, 0으로 초기화
            colors = 0;
        }
        return {
            ...state,
            colors
        }
    } else {
        let colors = state.colors;
        colors = colors - 1;
        if(colors < 0){ // 전 color가 처음일 경우, 마지막 칼라로 초기화
            colors = 4;
        }
        return {
            ...state,
            colors
        }
    }
}


export default persistReducer;