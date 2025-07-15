import React from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";

function IconInput({icon, color}) {
  let isValid = isValid ? color : "#EA1E31"

  return (
    <View style={styles.block}>
      <View style={styles.wrapper}>
        <Image style={styles.icon} source={icon}/>
        <TextInput style={styles.input}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1
  },
  wrapper: {
    width: "100%",
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1
  },
  input: {
    flex: 1,
    height: 50,
  },
  icon: {
    marginLeft: 10,
    marginRight: 10
  }
})

export default IconInput;