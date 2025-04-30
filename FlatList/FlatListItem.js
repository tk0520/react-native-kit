import React from "react";
import { StyleSheet, View, Text } from "react-native";

function FlatListItemName({item}) {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    height: 60,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
    borderWidth: 1
  },
  text: {
    fontSize: 15
  }
})

export default FlatListItemName;