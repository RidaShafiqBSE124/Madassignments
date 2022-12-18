//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,Buttton} from 'react-native';

// create a component
const HomeComponent = () => {
    return (
        <View style={styles.maincontainer}>
            <Text style={styles.mainheader}>
              welcome to home page</Text>
              <Buttton title="Go back"/> </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    maincontainer: {
        height: "100%",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "purple",
    },

        mainheader : {
        fontsize:50,
        color:'pink',
    marginTop:0,
          
        },      });

//make this component available to the app
export default HomeComponent;
