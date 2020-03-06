import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, TextInput, Image, View, Button, Platform, Keyboard, ImageBackground } from 'react-native'
const { height: screenHeight } = Dimensions.get('window');
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
        username: "",
        password: "",
    }
}
  render() {
    const styles = Platform.OS === 'android' ? androidStyles : WebStyles;
    return [

      <ImageBackground source={require('../assets/background.png')} style={[styles.container, { width: '100%', height: '100%' }]}>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../assets/logo.jpg')} style={{ width: 70, height: 70, marginBottom: 100 }} />
        </View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Username"
          placeholderTextColor={"#000"}
          onChangeText={(text) => this.setState({ username: text })}
          value={this.state.username}
        />
        <TextInput
          style={[styles.inputStyle, { marginTop: 20 }]}
          placeholder="Password"
          placeholderTextColor={"#000"}
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password}
        />
        <View style={styles.buttonParentView}>
          <View style={{ width: '45%' }}>
            <Button
              color="#0275d8"
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}
              title="Login"
            />
          </View>

          <View style={{ width: '45%' }}>
            <Button
              onPress={() => { this.setState( {
                username: "",
                password: ""
              }); Keyboard.dismiss() }}
              color="#d9534f"
              title="Cancel"
            />
          </View>

        </View>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center',marginTop:30, marginBottom:150 }}>
          {/* <Button
              onPress={() => { Keyboard.dismiss() }}
              color="#f0ad4e"
              title="Forgot Password"
            /> */}
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#000' }}>
            Forgot Password?
            </Text>
        </View>
      </ImageBackground>
    ];
  }
}


const WebStyles = StyleSheet.create({
  container: { flex: 1, height: screenHeight, justifyContent: 'center', alignItems: 'center' },
  inputStyle: { height: 40, width: '30%', borderColor: 'gray', borderWidth: 1, padding: 20 },
  buttonParentView: { flexDirection: 'row', width: '20%', justifyContent: 'space-between', marginTop: 40 }
});


const androidStyles = StyleSheet.create({
  container: { flex: 1, height: screenHeight, justifyContent: 'center', alignItems: 'center' },
  inputStyle: { height: 50, width: '80%', borderColor: 'gray', borderWidth: 1, padding: 10 },
  buttonParentView: { flexDirection: 'row', width: '60%', justifyContent: 'space-between',marginTop:40}
});