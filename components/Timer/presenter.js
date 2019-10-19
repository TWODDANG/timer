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
            console.log('카운트 시작');
            const timerInterval = setInterval(()=>{
                currentProps.addSecond()
            },1000);
            this.setState({
                timerInterval
            })
        } else if(currentProps.isPlaying && !nextProps.isPlaying){
            console.log('카운트 안함');
            //isplaying 안 바뀜
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
        const{isPlaying, elapsedTime, timeDuration,
            startTimer, restartTimer,addSecond, toggleRest, switchTimer, fontLoaded} = this.props;
        console.log(this.props);
        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'}/>
                <View style={styles.setting}>
                    <Button iconName='cog'  onPress={() => this.props.navigation.navigate('Setting')}/>
                </View>
                <View style={styles.upper}>
                    <Text style={styles.time}>{formatTime(timeDuration-elapsedTime)}</Text>
                </View>
                <FontText style={styles.twoddang}> It's nice to meet you</FontText>
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