import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';//import all the components we are going to use
import { Card } from 'react-native-elements';


export default class MenuPage extends Component {
  render() {
      return (
        <ScrollView>
            <View style ={style.container}>
            <View style={styles.imageRow}>
           
              <Card >
              <Image
                  source={require("../assets/smile.png")}
                  resizeMode="contain"
                  style={styles.image2}
              ></Image>
              <View style={styles.imageStack}></View>
              <Image
                  source={require("../assets/edit.png")}
                  resizeMode="contain"
                  style={styles.image}
              ></Image>
                <Text style={styles.nickname}>Nickname</Text>
                <Text style={styles.email}>name.surname@gmail.com</Text>

                <Text style={styles.logIn}>Log in</Text>    
                <Text style={styles.changeEmail}>Change email:</Text>
                
                <Text style={styles.pass}>********</Text>
                <Text style={styles.changePassword}>Change password</Text>
           
             </Card>
             
               </View> 
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
    flexDirection:"row"
  },
  /*welcome: {
    flex: 1,
    margin: 20,
    backgroundColor: 'gray',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 70,
  }*/
  image: {
    top: 7,
    left: 97,
    width: 45,
    height: 13,
    position: "absolute"
  },
  image2: {
    width: 122,
    height: 100
  },
  nickname: {
    top: 0,
    left: 0,
    width: 141,
    height: 26,
    color: "#121212",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sans-serif",
  },
  imageStack: {
      width: 144,
      height: 26,
  },
  email: {
    width: 155,
    height: 20,
    color: "rgba(22,22,21,1)",
    fontSize: 12,
    fontFamily: "sans-serif",
    marginTop: 14
  },
  changeEmail: {
    width: 133,
    height: 17,
    color: "rgba(21,40,220,1)",
    fontSize: 12,
    fontFamily: "sans-serif",
    marginTop: -42,
    marginLeft: 175
  },
  imageStackColumn: {
    width: 155,
    marginLeft: 22,
    marginTop: 24,
    marginBottom: 16
  },
  imageRow: {
      height: 100,
      flexDirection: "row",
      flex: 1,
      marginTop: 80,
      marginLeft: 31,
      marginRight: 45
  },
  logIn: {
    width: 86,
    height: 24,
    color: "rgba(247,14,14,1)",
    fontSize: 14,
    fontFamily: "sans-serif",
    marginTop: 18,
    marginLeft: 67  
  },  
  pass: {
      width: 99,
      height: 12,
      color: "rgba(6,6,6,1)",
      fontSize: 12,
      fontFamily: "sans-serif",
      marginLeft: 22,
      marginTop: 6
  },
  passColumn: {
      width: 99,
      marginLeft: 22,
       marginTop: 6
  },
  changePassword: {
    width: 99,
    height: 16,
    color: "rgba(21,40,220,1)",
    fontSize: 12,
    fontFamily: "roboto-700",
    marginTop: 5
  },
    logInRow: {
      height: 24,
      flexDirection: "row",
      marginTop: 18,
      marginLeft: 67,
      marginRight: 101
    
    
  }
});


export default MenuPage;
