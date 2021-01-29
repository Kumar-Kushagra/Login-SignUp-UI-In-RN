import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, Button, TextInput } from 'react-native';
import { useState } from 'react';
import SafeAreaView from "react-native-safe-area-context";

const Register = props => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState("");
    const [repeatpassword, setRepeatPasword] = useState('')
    return (
        // <SafeAreaView style = {{flex:1}} forceInset={{ top: 'always' }}>
        <View>
            <TouchableOpacity onPress={() => { props.navigation.navigate("Login") }}>
                <Text style={{ top:20,fontSize: 30, color: 'black', fontWeight: 'bold', alignSelf: 'center' }}>Profile</Text>
            </TouchableOpacity>
            <Image
                style={{ top: 50, alignSelf: "center", width: 100, height: 100, }}
                source={require('./source/assets/camera.png')}
            />
            <TextInput
                style={styles.inputText}
                placeholder="Enter your email address"
                placeholderTextColor="black"
                onChangeText={email} />
            <TextInput
                style={styles.inputText}
                placeholder="Username"
                placeholderTextColor="black"
                onChangeText={username}
            />
            <TextInput
                style={styles.inputText}
                secureTextEntry="True"
                placeholder="Password"
                placeholderTextColor="black"
                onChangeText={password} />
            <TextInput
                style={styles.inputText}
                secureTextEntry="True"
                placeholder="Repeat Password"
                placeholderTextColor="black"
                onChangeText={repeatpassword}
            />
          
            <TouchableOpacity style={styles.loginBtn} onPress={() => { props.navigation.navigate("AfterSignup") }}>
                <Text style={styles.loginText}>Sign in</Text>
            </TouchableOpacity>
            
            <Text style={{ color: "black", top: 20, fontSize: 15, marginLeft: 160 }}>OR</Text>
            <View style={{ flexDirection: "row", top: 40, marginLeft: 70 }}>
                <View style={{ borderRadius: 50, borderWidth: 1, borderColor: "skyblue", margin: 10 }}>
                    <TouchableOpacity>
                        <Image
                            style={styles.social}
                            source={require('./source/assets/google.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ borderRadius: 50, borderWidth: 2, borderColor: "skyblue", margin: 10 }}>
                    <TouchableOpacity>
                        <Image
                            style={styles.social}
                            source={require('./source/assets/facebook.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ borderRadius: 50, borderWidth: 2, borderColor: "skyblue", margin: 10 }}>
                    <TouchableOpacity>
                        <Image
                            style={styles.social}
                            source={require('./source/assets/twitter.png')}
                        />
                    </TouchableOpacity>
                </View>

            </View>
            <Text style={{ color: "black", top: 80, fontSize: 15, marginLeft: 110 }}>Terms of Services</Text>
        </View>
        // </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    inputText: {
        top: 50,
        marginRight: 30,
        marginLeft: 30,
        borderRadius: 20,
        padding: 20,
        borderBottomWidth: 0.5,
        borderColor: "black",
        height: 50,
        color: 'black'
    },
    social: {
        justifyContent: 'center',
        margin: 10,
        width: 30,
        height: 30,
    },
    loginBtn: {
        width: "50%",
        backgroundColor: "skyblue",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
        marginStart: 80
    },
    loginText: {
        color: "black",
        fontSize: 20
    },
});
export default Register;