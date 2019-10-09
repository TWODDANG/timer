import {connect} from 'react-redux';
import Timer from './presenter';
import {bindActionCreators} from "redux";
import {actionCreators as tomatoActions} from '../../reducer';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";

function mapStateToProps(state){
    const {isPlaying, elapsedTime, timeDuration, toggleRest} = state;
    return {
        isPlaying,
        elapsedTime,
        timeDuration,
        toggleRest
    }
}

function mapDispatchToProps(dispatch){
    return {
        startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
        restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
        addSecond: bindActionCreators(tomatoActions.addSecond, dispatch),
        switchTimer: bindActionCreators(tomatoActions.switchTimer, dispatch),

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Timer)