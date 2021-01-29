import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'

const Sixth = props => {
    return (
      
        <View style={styles.screen}>
             <Text>
                This is the Sixth Screen
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

export default Sixth;