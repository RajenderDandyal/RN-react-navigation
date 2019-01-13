import React, {Component} from 'react';
import {View, StyleSheet, Text} from "react-native";

class MyComponent extends Component {
  state={
    rnsc:""
  }
  render() {
    return (
        <View styles={styles.container}>
          <Text>
            Hello
          </Text>
        </View>
    );
  }
}

export default MyComponent;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});