import React, {useState} from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Button, Alert} from 'react-native';

const Login = props => {

  const [email, setEmail] = useState("");
  const [password, setPasword] = useState('')
  return (
    <View>
      <View style={styles.screen}>
        <TouchableOpacity onPress={() => { props.navigation.navigate("LoginScreen") }}>
          <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {props.navigation.navigate("SignUp") }}>
          <Text style={{ fontSize: 15, marginTop: 10, color: 'black' }}>Signup</Text>
        </TouchableOpacity>
      </View>
      <View>
      <Image
        style = {{top:80,alignSelf:"center", width: 100,height: 100,}}
        source={require('./source/assets/profilephoto.png')}
      />
        <TextInput
          style={styles.inputText}
          placeholder="Enter your email address"
          placeholderTextColor="black"
          onChangeText={email} />
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="black"
          onChangeText={password} 

          />
          
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => {props.navigation.navigate("AfterLogin")}}>
          <Text style={styles.loginText}>Log in</Text>
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
      </View >
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: "flex-start",
    marginTop: 60
  },

  inputText: {
    top: 120,
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
  forgot: {
    top: 150,
    paddingStart: 120,
    color: "black",
    fontSize: 15
  },
  loginBtn: {
    width: "50%",
    backgroundColor: "skyblue",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 180,
    marginStart: 80
  },
  loginText: {
    color: "black",
    fontSize: 20
  },
});
export default Login;