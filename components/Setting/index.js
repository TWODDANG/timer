import React, {Component} from 'react';
import {Header} from 'react-navigation-stack';
import {View, Text, StyleSheet, TextInput, Button, KeyboardAvoidingView, ScrollView} from 'react-native';
import {bindActionCreators} from "redux";
import {actionCreators as tomatoActions} from "../actions";
import {connect} from 'react-redux';


//  let seconds = parseInt(time % 60, 10);
const getHour = (time) => {
    let hours = Math.floor(time/3600);
    return `${hours < 10 ? `0${hours}` : null}`
};

const getMinute = (time) => {
    let hours = Math.floor(time/3600);
    time -= hours * 3600;
    let minutes = Math.floor(time / 60);
    return `${minutes < 10 ? `0${minutes}` : minutes}`
};


function mapStateToProps(state){
    const {workHour, workMinute, breakHour, breakMinute, words} = state.persisted;
    return {workHour, workMinute, breakHour, breakMinute, words};
}

function mapDispatchToProps(dispatch){
    return {
        saveData: (data,name) => dispatch(tomatoActions.saveData(data,name)),
        getData: (name) => dispatch(tomatoActions.getData(name)),
    }
}

class Setting extends Component {
    state = {
        words: '',
        workHour: '',
        workMinute: '',
        breakHour: '',
        breakMinute: '',
    };

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#00ccff',
            elevation: 0,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: '900',
        },
    };

    render() {
        const {workHour, workMinute, breakHour, breakMinute, words, saveData} = this.props;
        return (
            <KeyboardAvoidingView
                keyboardVerticalOffset = {Header.HEIGHT + 20}
                style={styles.keyboardAvoidingView}
                behavior='padding'>
                <ScrollView style={styles.scrollView}>
               <View style={styles.container}>
                   <View style={styles.workingTime}>
                       <View style={{margin: 50}}><Text style={styles.text}>My Working Time</Text></View>
                       <View style={styles.inputView}>
                           <TextInput onChangeText={workHour => this.setState({ workHour })}
                                      value={this.state.workHour}
                                      keyboardType='number-pad'
                                        style={styles.textInput}
                                      textAlign={'right'}
                           placeholder={workHour}
                           onBlur={event => {saveData(this.state.workHour, 'workHour')
                           }}/>
                           <Text style={styles.text}> : </Text>
                           <TextInput onChangeText={workMinute => this.setState({ workMinute })}
                                      value={this.state.workMinute}
                                      keyboardType='number-pad'
                                      style={styles.textInput}
                           placeholder={workMinute}
                           onBlur={event => saveData(this.state.workMinute, 'workMinute')}/>
                       </View>
                   </View>
                   <View style={styles.restingTime}>
                       <View style={{margin: 50}}><Text style={styles.text}>My Break Time</Text></View>
                       <View style={styles.inputView}>
                           <TextInput onChangeText={breakHour => this.setState({ breakHour })}
                                      value={this.state.breakHour}
                                      keyboardType='number-pad'
                                      style={styles.textInput}
                                      textAlign={'right'}
                                      placeholder={breakHour}
                                      onBlur={event => saveData(this.state.breakHour, 'breakHour')}
                           />
                           <Text style={styles.text}> : </Text>
                           <TextInput onChangeText={breakMinute => this.setState({ breakMinute })}
                                      value={this.state.breakMinute}
                                      keyboardType='number-pad'
                                      style={styles.textInput}
                                      onBlur={event => saveData(this.state.breakMinute, 'breakMinute')}
                                      placeholder={breakMinute}/>
                       </View>
                   </View>
                   <View style={styles.words}>
                       <View style={{marginBottom: 50}}><Text style={styles.text}>My Words</Text></View>
                       <TextInput
                           style={{color: 'white',
                               fontSize: 30,
                               fontWeight: '100'}}
                           onChangeText={words => this.setState({ words })}
                           value={this.state.words}
                           textAlign={'center'}
                           placeholder={words}
                           onBlur={event => saveData(this.state.words, 'words')}
                       />
                   </View>
               </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )

    }
}

const styles = StyleSheet.create({
    keyboardAvoidngView: {
        backgroundColor: '#00ccff',
        flex: 1
    },
    scrollView: {
        backgroundColor: '#00ccff',
    },
    container: {
        flex: 1,
        backgroundColor: '#00ccff'
    },
    inner: {
        justifyContent: 'flex-end',
        backgroundColor: '#00ccff',
    },
    workingTime: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    restingTime: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    words: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 90,
    },
    text : {
        color: 'white',
        fontSize: 30,
        fontWeight: '100',

    },
    inputView : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        color: 'white',
        fontSize: 40,
        fontWeight: '100',
    }
});


export default connect(mapStateToProps,mapDispatchToProps)(Setting);
