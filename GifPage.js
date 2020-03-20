import React, { useState } from "react";
import { StyleSheet, Image, Text, Button, View } from 'react-native';
import { TouchableHighlight} from 'react-native';


function GifPage() {
   
    return (
        <View style={[styles.container, modalVisible ? { backgroundColor: 'rgba(0,0,0,0.3)' } : '']}>
            <Image
                source={require("./assets/trumpet.gif")}
                resizeMode="contain"
                style={styles.image}
            ></Image>
            <Text style={styles.loremIpsum}>
                    Now you can start <Text style={{ color: '#01875F' }}>
                    {''} learning German,
                    {"\n"}by scanning objects{"\n"}around you!
                </Text>
            </Text>
          
            <View style={styles.button}>
                <Button
                    
                    color="#01875F"
                    onPress={() => {
                      title="Let's do it!"
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
    button: {
        width: 159,
        marginTop: 50,
        marginLeft: 120,
    },
   
});
export default GifPage;
