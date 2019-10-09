import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }

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
        return (
            <View style={styles.container}>
                <View style={styles.workingTime}>
                    <Text style={styles.text}>hihi</Text>
                    <TextInput
                        style={{ height: 50, borderColor: 'white', borderWidth: 3 }}
                        onChangeText={text => this.setState({ text })}
                        value={this.state.text}
                    />
                </View>
                <View style={styles.restingTime}><Text style={styles.text}>hihi</Text></View>
                <View style={styles.words}><Text style={styles.text}>hihi</Text></View>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00ccff'
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
    },
    text : {
        color: 'white',
        fontSize: 30,
        fontWeight: '100'
    }
});


export default Setting;
