//Actions
export const LOAD_FONT = 'LOAD_FONT';
export const START_TIMER = 'START_TIMER';
export const RESTART_TIMER = 'RESTART_TIMER';
export const ADD_SECOND = 'ADD_SECOND';
export const SWITCH_TIMER = 'SWITCH_TIMER';
export const SAVE_DATA = 'SAVE_DATA';
export const SET_COLOR  = 'SET_COLOR';


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

function addSecond(time){
    return {
        type: ADD_SECOND,
        time
    }
}


function switchTimer(){
    return {
        type: SWITCH_TIMER,
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

function setColor(direction){
    return {
        type: SET_COLOR,
        direction
    }
}



const actionCreators = {
    startTimer, restartTimer, addSecond, switchTimer, loadFont, saveData, setColor
};

export {actionCreators};

