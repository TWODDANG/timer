import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {FontAwesome, AntDesign} from '@expo/vector-icons';

function Button({iconName, onPress}){
    let size;
    if(iconName === 'stop-circle' || iconName === 'play-circle'){
        size = 80;
    } else if(iconName === 'cog'){
        size = 30;
    } else {
        size = 60;
    }
    return (
        <TouchableOpacity onPress={onPress}>
             <FontAwesome name={iconName} size={size} color='white'/>
        </TouchableOpacity>
    );
}

Button.propTypes = {
    iconName : PropTypes.string.isRequired,
    onPress : PropTypes.func.isRequired,
};

export default Button;