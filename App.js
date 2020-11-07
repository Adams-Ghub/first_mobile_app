import React from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';

function App(){
  return <View style={styles.container} >
      <Image source={require('./assets/profile.png')} style={styles.image}/>
      <View style={styles.detailedtext}>
        <Text style={styles.label} >Name:</Text>
        <Text style={[styles.label,styles.info]}>Tony Stark</Text>
      </View>

      <View style={styles.detailedtext}>
        <Text style={styles.label} >Email:</Text>
        <Text style={[styles.label,styles.info]}>stark@tony.com</Text>
      </View>

      <View style={styles.detailedtext}>
        <Text style={styles.label} >Gender:</Text>
        <Text style={[styles.label,styles.info]}>Male</Text>
      </View>
  
     </View>
}
  const styles= StyleSheet.create({
    container:{
      flex:1,
      marginHorizontal:5
    },
      image:{
        width:150,
        height:150,
        marginTop:100,
        borderRadius:75,
        marginHorizontal:100,
        marginVertical:50
      },
      detailedtext:{
        flexDirection:"row",
        marginVertical:5
      },
      label:{
        borderColor:"black",
        borderWidth:1,
        flex:3,
        fontSize:20,
        paddingHorizontal:5
      },
      info:{
        flex:7
      }
    })
  
export default App;