import React, { useState } from "react";
import { StyleSheet, Image, Text, Button, View } from 'react-native';
import { Modal, TouchableHighlight, Alert } from 'react-native';

function CameraPermission() {
    const [modalVisible, setModalVisible] = useState(false);

    Toggle = (visible) => {
        setModalVisible({ modalVisible: visible });
    }

    return (
        <View style={[styles.container, modalVisible ? { backgroundColor: 'rgba(0,0,0,0.3)' } : '']}>
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
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={styles.modalView}>
                    <View style={styles.container}>
                        <View style={styles.imagesmall}>
                            <Image
                                source={require("./assets/camera.png")}
                                resizeMode="contain"
                                style={styles.imagesmall}
                            ></Image>
                        </View>
                        <View style={styles.itemtext}>
                            <Text style={styles.allow}>Allow
                              <Text style={{ fontWeight: 'bold' }}>
                                    {''} AGRO APP {''} 
                                </Text>
                                to take pictures and record video?</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.item}>
                            <Button
                                title="Deny"
                                color="#01875F"
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }} /></View>
                        <View style={styles.item}>
                            <Button
                                title="Allow"
                                color="#01875F"
                                width="50%" /></View>
                    </View>
                </View>

            </Modal>
            <View style={styles.button}>
                <Button
                    title="Ok"
                    color="#01875F"
                    onPress={() => {
                        setModalVisible(true);
                    }}>
                </Button>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        width: '40%', 
        marginLeft: 20, 
        marginTop: 40 
    },
    itemtext: {
        width: '85%',
        marginLeft: 10
    },
    image: {
        width: 181,
        height: 101,
        marginTop: 210,
        marginLeft: 120
    },
    imagesmall: {
        width: 35,
        height: 60,
        marginTop: 15
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
    allow: {
        width: 237,
        height: 73,
        color: "#121212",
        marginTop: 35,
        marginBottom: 35,
        marginLeft: 20,
        fontSize: 21,
        width: "70%"
    },
    button: {
        width: 159,
        marginTop: 50,
        marginLeft: 120,
    },
    modalView: {
        margin: 20,
        marginTop: 180,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        height: 303,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
});

export default CameraPermission;
