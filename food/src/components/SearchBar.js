import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) =>{
  return(
    <View style={styles.backgroundStyle}>
      <FontAwesome name="search" style={styles.iconStyle}/>
      <TextInput 
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        autoCapitalize='none'
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  backgroundStyle:{
    backgroundColor:'#F0EEEE',
    height:50,
    borderRadius:10,
    marginHorizontal:15,
    flexDirection:'row',
    marginTop:15
  },
  inputStyle:{
    flex:1,
    fontSize:18
  },
  iconStyle:{
    fontSize:35,
    alignSelf:'center',
    marginHorizontal:15
  }
});

export default SearchBar;