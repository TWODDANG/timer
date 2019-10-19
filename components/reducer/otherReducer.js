import * as types from '../actions';let TIMER_DURATION = 5; //TIMER_DURATION 문제 생길텐데,, 좀 있다 고치셈.
import * as Haptics from 'expo-haptics';

const initialState = {
        isPlaying: false,
        elapsedTime: 0,
        toggleRest: false,
        myData: null,
        fontLoaded: false,
        workTime: 10,
        restTime: 5,
};

function otherReducer(state=initialState, action){
    switch(action.type){
        case types.LOAD_FONT:
            return applyLoadFont(state);
        case types.START_TIMER:
            return applyStartTimer(state);
        case types.RESTART_TIMER:
            return applyRestartTimer(state);
        case types.ADD_SECOND:
            return applyAddSecond(state, action.time);
        case types.SWITCH_TIMER:
            return applySwitchTimer(state, action.time);
        default :
            return state;
    }
}

function applyStartTimer(state){
    return {
        ...state,
        isPlaying: true,
    }
}
//
function applyRestartTimer(state){
    return {
        ...state,
        isPlaying: false,
        elapsedTime: 0,
    }
}

function applyAddSecond(state, time){
    if(state.elapsedTime < time){
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1
        }
    } else {
        if(state.toggleRest){ // 쉰 상태이면은 일해야지
            alert('Do That Work! HUMAN!');
            Haptics.impactAsync('heavy');
        } else {
            alert('Now You Can Take A Break');
            Haptics.impactAsync('heavy');
    }
        return applySwitchTimer(state);
    }
}

function applySwitchTimer(state){

    return {
        ...state,
        isPlaying: false,
        elapsedTime: 0,
        toggleRest: !state.toggleRest,
    }
}

function applyLoadFont(state){
    return {
        ...state,
        fontLoaded: true,
    }
}

export default otherReducer;
