//Import
import {AsyncStorage} from 'react-native';

//Actions
const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';
const SWITCH_TIMER = 'SWITCH_TIMER';

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
//Reducer

//localStorage로 workTime, restTime, words 저장해야함.
let TIMER_DURATION = 10;


const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timeDuration: TIMER_DURATION,
    toggleRest: false,
    workTime: 10,
    restTime: 5,
    words: '이댕댕'
};



function reducer(state=initialState, action){ // root reducer
    switch(action.type){
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        case SWITCH_TIMER:
            return applySwitchTimer(state);
        default:
            return state;
    }
}
//Reducer Functions

function applyStartTimer(state){
    return {
        ...state,
        isPlaying: true,
    }
}

function applyRestartTimer(state){
    return {
        ...state,
        isPlaying: false,
        elapsedTime: 0,
    }
}

function applyAddSecond(state){
    if(state.elapsedTime < state.timeDuration){
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1
        }
    } else {
        if(state.toggleRest){ // 쉰 상태이면은 일해야지
            alert('이제 일해라 닝겐아!!');
        } else {
            alert('이제 쉬어라 친구여');
        }
       return applySwitchTimer(state);
    }
}

function applySwitchTimer(state){
    if(!state.toggleRest){
        TIMER_DURATION = state.restTime;
    } else {
        TIMER_DURATION = state.workTime;
    }

    return {
        ...state,
        isPlaying: false,
        elapsedTime: 0,
        toggleRest: !state.toggleRest,
        timeDuration: TIMER_DURATION,
    }
}
//Export Action Creators

const actionCreators = {
    startTimer, restartTimer, addSecond, switchTimer
};

export {actionCreators};

export default reducer;
//Export Reducers