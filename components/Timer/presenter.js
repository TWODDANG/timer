import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Button from '../Button';
import FontText from "../FontText";
import * as Font from "expo-font";

// {fontLoaded ? <Text style={{...styles.twoddang, fontFamily:'Montserrat-MediumItalic'}}>It's nice to meet you</Text> : null}
//<FontText style={styles.twoddang}> It's nice to meet you</FontText>

const formatTime = (time) => {
    let minutes = Math.floor(time/60);
    time -= minutes * 60;
    let seconds = parseInt(time % 60, 10);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

class Timer extends Component {
    static navigationOptions = {
        title: 'Timer',
    };

    componentWillReceiveProps(nextProps, nextContext) {
        const currentProps = this.props;
        if(!currentProps.isPlaying && nextProps.isPlaying){
            // 타이머 멈춰있고, 시작하려고 할때
            let timerInterval;
            if(nextProps.toggleRest){
               timerInterval = setInterval(()=>{
                    currentProps.addSecond(nextProps.restTime)
                },1000);
            } else {
                timerInterval = setInterval(()=>{
                    currentProps.addSecond(nextProps.workTime)
                },1000);
            }
            this.setState({
                timerInterval
            })
        } else if(currentProps.isPlaying && !nextProps.isPlaying){
            // 타이머 작동하고 있고, 끌려고 할때
                clearInterval(this.state.timerInterval);
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
            'Montserrat-MediumItalic': require('../../assets/fonts/Montserrat-MediumItalic.ttf'),
        });
        this.props.fontLoader();
    }

    render() {
        const{isPlaying, elapsedTime,
            startTimer, restartTimer, toggleRest, switchTimer, workTime, restTime, words} = this.props;
        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'}/>
                <View style={styles.setting}>
                    <Button iconName='cog'  onPress={() => this.props.navigation.navigate('Setting')}/>
                </View>
                <View style={styles.upper}>
                    {!toggleRest ?  <Text style={styles.time}>{formatTime(workTime-elapsedTime)}</Text> : null}
                    {toggleRest ? <Text style={styles.time}>{formatTime(restTime-elapsedTime)}</Text> : null}
                </View>
                <FontText style={styles.twoddang}> {words}</FontText>
                <View style={styles.lower}>

                    <View style={styles.button}>
                    {!isPlaying &&
                    (<View style={styles.startbutton}>
                        <Button  iconName='play-circle' onPress={startTimer}/>
                    </View>)
                        }
                    {isPlaying &&
                    (<View style={styles.startbutton}>
                        <Button  iconName='stop-circle' onPress={restartTimer}/>
                    </View>)}
                    {toggleRest &&  <Button iconName='toggle-off' onPress={switchTimer}/>}
                    {!toggleRest && <Button iconName='toggle-on' onPress={switchTimer}/>}
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#00ccff'
    },
    upper: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lower: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    time: {
        color: 'white',
        fontSize: 120,
        fontWeight: '100',
    },
    twoddang: {
        color: 'white',
        fontSize: 20,
        fontFamily:'Montserrat-MediumItalic',
        textAlign: 'center'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        marginTop: 0
    },
    startbutton : {
       marginRight: 10
    },
    setting: {
        padding: 20,
        marginTop: 10,
        alignItems: 'flex-end',
        opacity: 0.8,
    }
});

export default Timer;