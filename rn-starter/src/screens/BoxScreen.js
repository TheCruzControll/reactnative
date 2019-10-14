import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return(
    <View style={styles.viewStyle}>
      <View style={styles.boxOneStyle}/>
      <View style={styles.boxTwoStyle}/>
      <View style={styles.boxThreeStyle}/>
    </View>
  )
};

const styles = StyleSheet.create({
  viewStyle:{
    height:200,
    borderWidth:3, 
    borderColor:'black',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  boxOneStyle:{
    height:50,
    width:50,
    backgroundColor:'red'
  },
  boxTwoStyle:{
    height:50,
    width:50,
    backgroundColor:'green'
  },
  boxThreeStyle:{
    height:50,
    width:50,
    backgroundColor:'blue'
  }
});

export default BoxScreen;