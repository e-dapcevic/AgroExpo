import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';//import all the components we are going to use
import { Card } from 'react-native-elements';


export default class MenuPage extends Component {
  render() {
      return (
        <ScrollView>
            <View style ={style.container}>
              <Card >
                 <Image
                   source={require("./assets/smile.png")}
                   resizeMode="contain"
                   style={styles.welcome}
                 ></Image>
              <Text>

              </Text>
           
              </Card>

              
             
              </View> 
         </ScrollView>
    );
  }
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex: 1,
    margin: 20,
    backgroundColor: 'gray',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 70,
  }
});





