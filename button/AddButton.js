import React from "react";
import { StyleSheet, View, Pressable } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

function AddButton() {
  return (
    <View style={styles.wrapper}>
      <Pressable 
        style={styles.pressable}
        android_ripple={{color: "ffffff", borderless: true}}
      >
      <Icon name="add" size={30} color="white" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    height: 60,
    width: 60,
    borderWidth: 1,
    borderRadius: 64,
    bottom: 50,
    right: 50,
    backgroundColor: "#1F7A8C",
    overflow: "hidden"
  },
  pressable: {
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default AddButton;
