import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from 'react-native-material-dropdown';

function DropdownPage({ navigation }) {
    let data = [{
        value: 'German',
    }, {
        value: 'Spanish',
    }, {
        value: 'French',
    }, {
        value: 'Japanese',
    }, {
        value: 'Russian',
    }];
    return (
        <View style={styles.container}>
            <Text onPress={() => navigation.navigate('CameraPermission')} style={styles.loremIpsum}>
                Which  {''}
                 <Text style={{ color: '#01875F' }}>
                    language {''}
                </Text>
                 do you want to learn?
           </Text>
            <Dropdown
                inputContainerStyle={{ borderBottomColor:"#01875F", borderBottomWidth: 1 }}
                containerStyle={styles.dropdown}
                label='Choose'
                data={data}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loremIpsum: {
        marginTop: 300,
        marginLeft: 16,
        color: "#121212",
        fontSize: 23,
        textAlign: "center",
        fontWeight: "bold",
    },
    dropdown: {
        width: '80%',
        marginLeft: 50,
        marginTop: 60, 

    }
});

export default DropdownPage;