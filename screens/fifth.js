import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const Fifth = props => {
    return (
        <View style={styles.screen}>
            <Text>
                This is the Fifth Screen
      </Text>
            
            <Button title="Go Back" onPress={() => { props.navigation.pop() }} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"lightcyan"
    }
});

export default Fifth;