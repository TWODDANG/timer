//Actions
export const LOAD_FONT = 'LOAD_FONT';
export const START_TIMER = 'START_TIMER';
export const RESTART_TIMER = 'RESTART_TIMER';
export const ADD_SECOND = 'ADD_SECOND';
export const SWITCH_TIMER = 'SWITCH_TIMER';
export const SAVE_DATA = 'SAVE_DATA';
export const GET_DATA = 'GET_DATA';


//Action Creators
function startTimer(){
    return {
        type: START_TIMER
    };
}

function restartTimer(){
    return {
        type:RESTART_TIMER
    }
}

function addSecond(){
    return {
        type: ADD_SECOND
    }
}


function switchTimer(){
    return {
        type: SWITCH_TIMER
    }
}

function loadFont(){
    return {
        type: LOAD_FONT
    }
}

function saveData(data, name){
    return {
        type: SAVE_DATA,
        name,
        data,
    }
}

function getData(name){
    return {
        type: GET_DATA,
        name,
    }
}

const actionCreators = {
    startTimer, restartTimer, addSecond, switchTimer, loadFont, saveData, getData
};

export {actionCreators};

