import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";

function PrimaryIconButton({title = "타이틀", icon, onPress, hasMarginBottom, marginBottomSize = 16}) {
    return (
      <View style={[styles.block, hasMarginBottom && { marginBottom: marginBottomSize }]}>
        <Pressable
          style={styles.wrapper}
          android_ripple={{color: "ffffff", borderless: false}}
          onPress={onPress}
        >
          <Image 
            style={styles.icon}
            source={icon}
          />
          <Text style={[styles.text.button]}>{title}</Text>
        </Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    borderRadius: 20,   
    overflow: "hidden",        
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#87A1FE",
    gap: 8,
  },
  text: {
    button: {
      fontSize: 16,   
      color: "white"
    },
  },
  icon: {
    height: 24,
    width: 24
  }
})

export default PrimaryIconButton;
