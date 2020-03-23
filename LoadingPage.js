import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import LoadingBar from './LoadingBar'


function LoadingPage({ navigation }) {
return (
<View style={styles.container}>
    <View style={styles.textRow}>
        <View style={styles.imageStack}>    
            <Image
                source={require("./assets/argo.png")}
                resizeMode="contain"
                style={styles.image}>
            </Image>

            <Text style={styles.argo}>ARGO</Text>
        </View>
    </View>

    <Text style={styles.loremIpsum}  onPress={() => navigation.navigate('DropdownPage')}>Learn words on the go</Text>

    <LoadingBar />
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
margin:10,
},
text: {
color: "#121212",
fontSize: 24,
textAlign: "center",
marginTop: 123
},
image: {
top: -20,
left: 20,
width: 219,
height: 226,
position: "absolute"
},
argo: {
top: 200,
left: 96,
width: 68,
height: 31,
color: "#121212",
position: "absolute",
fontWeight:"bold",
fontSize: 23
},
imageStack: {
width: 219,
height: 242,
marginLeft: 30
},
textRow: {
height: 242,
flexDirection: "row",
marginTop: 223,
marginLeft: 45,
marginRight: 81
},
loremIpsum: {
width: 209,
height: 37,
left: 5,
color: "#121212",
marginLeft: 104, 
fontStyle: "italic",
fontSize: 20, 

}
});

export default LoadingPage;
