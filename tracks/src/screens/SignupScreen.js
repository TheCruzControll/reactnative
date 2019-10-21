import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>SignupScreen</Text>
      <Button
        title="go to Signin"
        onPress={() => navigation.navigate('Signin')}
      />
      <Button
        title="go to main flow"
        onPress={() => navigation.navigate('mainFlow')}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
