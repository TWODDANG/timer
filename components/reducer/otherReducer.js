import * as types from '../actions';
let TIMER_DURATION = 4500; //TIMER_DURATION 문제 생길텐데,, 좀 있다 고치셈.


const initialState = {
        isPlaying: false,
        elapsedTime: 0,
        toggleRest: false,
        myData: null,
        fontLoaded: false,
        timeDuration : TIMER_DURATION,
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
            return applyAddSecond(state);
        case types.SWITCH_TIMER:
            return applySwitchTimer(state);
        default :
            return state;
    }
}

function applyStartTimer(state){
    console.log('applystarttimer');
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

function applyLoadFont(state){
    return {
        ...state,
        fontLoaded: true,
    }
}

export default otherReducer;
