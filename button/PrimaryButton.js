import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

function PrimaryButton({title = "타이틀", onPress, hasMarginBottom, marginBottomSize = 16, secondary}) {
    return (
      <Pressable 
        style={[styles.wrapper, hasMarginBottom && { marginBottom: marginBottomSize }, secondary && styles.wrapperSecondary]}
        android_ripple={{color: "ffffff", borderless: false}}
        onPress={onPress}
      >
        <Text style={[styles.text.button, secondary && styles.textSecondary]}>{title}</Text>
      </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#87A1FE"
  },
  text: {
    button: {
      fontSize: 16,   
      color: "white"
    },
  },
  wrapperSecondary: {
    height: 30,
    backgroundColor: "white"
  },
  textSecondary: {
    color: "#1F7A8C"
  }
})

export default PrimaryButton;