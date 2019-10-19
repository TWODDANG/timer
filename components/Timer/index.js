import {connect} from 'react-redux';
import Timer from './presenter';
import {bindActionCreators} from "redux";
import {actionCreators as tomatoActions} from '../actions';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";

function mapStateToProps(state){
    const {isPlaying, elapsedTime, toggleRest, fontLoaded} = state.other;
    const {words, workMinute, workHour, breakHour, breakMinute} = state.persisted;
    return {
        isPlaying,
        elapsedTime,
        toggleRest,
        fontLoaded,
        words,
        workTime: Number(workHour) * 3600 + Number(workMinute) * 60,
        restTime: Number(breakHour) * 3600 + Number(breakMinute) * 60,
    }
}

function mapDispatchToProps(dispatch){
    return {
        startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
        restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
        addSecond: (time) => dispatch(tomatoActions.addSecond(time)),
        switchTimer: () => dispatch(tomatoActions.switchTimer()),
        fontLoader: bindActionCreators(tomatoActions.loadFont, dispatch),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Timer)