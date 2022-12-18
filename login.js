//import liraries
import React, { Component,  } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

// create a component
const MyComponent = ({navigation}) => {
  
    const submit =()=>{

    Alert.alert('Thanku Rida!');
    navigation.navigate("home");

        
    }
     
    return (
        <View style={styles.maincontainer}>
            <Text style={styles.mainheader}>
                Login Form</Text> 
  
        <view style={styles.inputContainer}>
            <Text style={styles.labels}>Enter your name</Text>
            <TextInput style={styles.inputstyle}
            autoCapitalize="none"
            autoComplete={false}/>

        </view>
        <view style={styles.inputContainer}>
            <Text style={styles.labels}>
                Enter password
                
            </Text>
            <TextInput style={styles.inputstyle}
            secureTextEntry={true}>

            </TextInput>

        </view>
    <TouchableOpacity style={[
        styles.loginBtn,
        {backgroundColor:'pink'},
    ]} 
    onPress={()=>submit()}
    >

        <Text>
            Login
        </Text>

    </TouchableOpacity>

        </View>
    );
};


// define your styles
const styles = StyleSheet.create({
    maincontainer: {
        height: "100%",
        paddingHorizontal: 30,
        paddingTop:30,
        backgroundColor: "purple",
    },

        mainheader : {
        fontsize:50,
        color:'pink',
        fontWeight:"500",
        paddingTop:40,
        paddingBottom:15,
        textTransform:"capitalize",
        fontFamily:"bold",
    
          
        },
       
        labels: {
          marginBottom: 5,
          fontSize:18,
          color:"pink",
          marginTop:10,
          lineHeight:25,
          fontFamily:'regular',
        },
       inputContainer:{
        marginTop:20,
       },
        inputView: {
          backgroundColor: "#FFC0CB",
          borderRadius: 30,
          width: "70%",
          height: 45,
          marginBottom:40,
       
          alignItems: "center",
        },
       inputstyle:{
        borderWidth:1,
        borderColor:"green",
        paddingHorizontal:15,
        paddingVertical:7,
        borderRadius:1,
        fontFamily:"regular",
        fontsize:18,
       },
        TextInput: {
          height: 50,
          flex: 1,
          padding: 10,
          marginLeft: 20,
        },
       
        forgot_button: {
          height: 30,
          marginBottom: 30,
        },
       
        loginBtn: {
          width: "80%",
          borderRadius: 25,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40,
          backgroundColor: "#FF1493",
        },
        
        });

//make this component available to the app
export default MyComponent;
