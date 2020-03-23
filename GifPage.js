import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
function GifPage({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.textRow}>
                <Text style={styles.text}></Text>
                <View style={styles.imageStack}>
                    <Image
                        source={require("./assets/trumpet.gif")}
                        resizeMode="contain"
                        style={styles.image}
                    ></Image>
                    <Text style={styles.loremIpsum}>
                        Now you can start </Text>
                    <Text style={styles.loremIpsumGreen}>
                        {''}learning German {''} </Text>
                    <Text style={styles.loremIpsum}>by scanning objects around you!</Text>
                    <Button
                        onPress={this.buttonClickListener}
                        title="Let's do it!"
                        color="#01875F"
                    />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 181,
        height: 101,
        marginTop: 210,
        marginLeft: 120,
        marginBottom: 30
    },
    loremIpsum: {
        width: 237,
        color: "#121212",
        fontWeight: "bold",
        marginLeft: 100,
        fontSize: 21
    },
    loremIpsumGreen: {
        color: "#01875F",
        fontWeight: "bold",
        marginTop: 0,
        marginLeft: 100,
        fontSize: 21
    },
});
export default GifPage;
