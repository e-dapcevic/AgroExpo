import React, { Component, useState } from "react";
import { StyleSheet, Modal, Image, Text, Button, TouchableHighlight, View, Alert} from 'react-native';

function CameraPermission() {
    const [modalVisible, setModalVisible] = useState(false);

    setModalVisible (visible) => {
        this.setState({modalVisible: visible});
      }
    

    return (
        <View style={styles.container}>
            <Image
                source={require("./assets/camera.png")}
                resizeMode="contain"
                style={styles.image}
            ></Image>
            <Text style={styles.loremIpsum}>
                For the app to function,{"\n"}we need to turn on your{"\n"}back
                 <Text style={{ color: '#01875F' }}>
                    {''} camera
                </Text>
            </Text>
            <View style={styles.button}>
                <Button
                    title="Ok"
                    color="#01875F"
                    onPress={() => toggleModal()}
                />
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    toggleModal(!modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <TouchableHighlight
                    onPress={() => {
                        toggleModal(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: 181,
        height: 101,
        marginTop: 245,
        marginLeft: 120
    },
    loremIpsum: {
        width: 237,
        height: 73,
        color: "#121212",
        fontWeight: "bold",
        marginTop: 35,
        marginLeft: 100,
        fontSize: 21
    },
    materialButtonSuccess1: {
        width: 159,
        height: 50,
        marginTop: 82,
        alignSelf: "center"
    },
    button: {
        width: 159,
        marginTop: 60,
        marginLeft: 120,
    }
});
export default CameraPermission;