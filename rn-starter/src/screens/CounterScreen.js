import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const INCREMENT = 1;
const reducer = (state, action) => {
  switch(action.type){
    case 'increment':
      return {...state, count:state.count + 1};
    case 'decrement':
      return {...state, count:state.count - 1 };
    default:
      return state;
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const counter = state.count;

  return(
    <View>
      <Button title="Increase" onPress={() => dispatch({type:'increment'})}/>

      <Button title="Decrease" onPress={() => dispatch({type:'decrement'})}/>
      <Text>Current Count:{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;