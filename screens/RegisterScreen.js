import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import firebase from "firebase"

export default class RegisterScreen extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    };

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                });
            })
            .catch(error => this.setState({ errorMessage: error.message }));
    };




    render() {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center" }}><h1>สมัครสมาชิกสิ!</h1></Text>

                <View>
                    {this.state.errorMessage && <Text style={StyleSheet.error}>{this.state.errorMessage}</Text>}
                </View><br />

                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text >Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={name => this.setState({ name })}
                        value={this.state.name} />
                </View><br />

                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text >Email</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email} />
                </View><br />

                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text>PassWord</Text>
                    <TextInput style={styles.input}
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password} />
                </View><br /><br /><br />

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{ fontWeight: 700, fontSize: 50 }} >Signup</Text>
                </TouchableOpacity><br />

                <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}
                    style={{ textAlign: "center" }}>
                    <Text>มีบัญชีอยู่แล้ว <Text style={{ color: 'red', fontWeight: 700 }}>Login</Text></Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    error: {
        color: "#E9446A",
        textAlign: "center",
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },

})
