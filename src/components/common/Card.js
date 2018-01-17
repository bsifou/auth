import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.ContainerStyle}>
            {props.children}
        </View>
    );
};

export { Card };

const styles = StyleSheet.create({
    ContainerStyle: {


        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,

        elevation: 2,

        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,

        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',

        borderBottomWidth: 0,

    }
});
