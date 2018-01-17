// import libraries 
import React from 'react';
import { Text, View } from 'react-native';


//  make a component 

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
     </View >
    );    
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60, 
        paddingTop: 15,
        // only on iOS 
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 20 },
        shadowOpacity: 0.9,
        // ???
        elevation: 2, 
        position: 'relative'

    
    },

    textStyle: {
        fontSize: 30
    }
};

// make the components available to others 
export { Header };

