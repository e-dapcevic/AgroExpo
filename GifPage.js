import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
import { black } from "color-name";

function GifPage({ navigation }) {
    const [spinner, setSpinner] = useState(false);

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

                    <View style={{ display: 'flex', flexDir: 'row', alignItems: 'center' }}>
                        <Text style={styles.loremIpsum}>
                            Now you can start </Text>
                        <Text style={styles.loremIpsumGreen}>
                            {''}learning German {''} </Text>
                        <Text style={styles.loremIpsum}>by scanning objects around you!</Text>
                    </View>

                    <View style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
                        <Spinner
                            visible={spinner}
                            textStyle={styles.spinnerTextStyle}
                        />
                    </View>
                </View>
            </View>

            <View style={{ textAlign: 'center', position: 'absolute', bottom: 40, left: '24%' }}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                    setSpinner(true);

                    const interval = setInterval(() => {
                        // TODO add next page: navigation.navigate('PageName');
                        setSpinner(false);
                        clearInterval(interval);
                    }, 2000);
                }}>
                    <Text style={styles.buttonText}>Let's do it!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 321,
        height: 261,
        marginTop: 210,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 'auto'
    },
    loremIpsum: {
        width: 237,
        color: "#121212",
        fontWeight: "bold",
        fontSize: 21,
        textAlign: 'center'
    },
    loremIpsumGreen: {
        color: "#01875F",
        fontWeight: "bold",
        fontSize: 21,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 60,
        paddingRight: 60,
        backgroundColor: '#01875F',
        borderRadius: 40,
    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    }
});
export default GifPage;
