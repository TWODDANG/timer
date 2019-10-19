import {connect} from 'react-redux';
import Timer from './presenter';
import {bindActionCreators} from "redux";
import {actionCreators as tomatoActions} from '../actions';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";

function mapStateToProps(state){
    const {isPlaying, elapsedTime, toggleRest, fontLoaded, timeDuration} = state.other;
    console.log(state);
    return {
        isPlaying,
        elapsedTime,
        timeDuration,
        toggleRest,
        fontLoaded
    }
}

function mapDispatchToProps(dispatch){
    return {
        startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
        restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
        addSecond: bindActionCreators(tomatoActions.addSecond, dispatch),
        switchTimer: bindActionCreators(tomatoActions.switchTimer, dispatch),
        fontLoader: bindActionCreators(tomatoActions.loadFont, dispatch),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Timer)