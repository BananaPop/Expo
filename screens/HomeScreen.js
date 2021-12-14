import React, { Component } from 'react'
import { Text, View ,StyleSheet,TouchableOpacity} from 'react-native'
import firebase from "firebase"

export default class HomeScreen extends Component {
    state = {
        email: "",
        displayName: ""
    };

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }


    signOutUser = () => {
        firebase.auth().signOut();
    }

    
    
    render() {
        return (
            <View>
                <View>
                <Text> Hello {this.state.displayName} </Text>
                <Text><h1>HI {this.state.email} </h1></Text>
                </View>
            <TouchableOpacity style={styles.button} onPress={this.signOutUser} >
                <Text>LogOut</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    error:{
        color:"#E9446A",
        textAlign:"center",
    },
    input :{
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button:{
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
   
})
