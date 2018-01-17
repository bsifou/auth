import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => { 
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

export  { Button };

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        marginLeft: 5, 
        marginRight: 5, 
        borderWidth: 1, 
        borderColor: '#007aff',
        borderRadius: 5, 
    }, 

    textStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 16,
        fontWeight: '600',
        color: '#007aff',
        alignSelf: 'center',
    }
};