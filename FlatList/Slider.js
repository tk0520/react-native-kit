import React from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";

import SliderItem from "./SliderItem";

function Slider({slides}) {
  const { width } = Dimensions.get("window");
  
  return (
    <FlatList 
      contentContainerStyle={styles.slideBlock}
      renderItem={({item}) => (
        <View style={[styles.slideItemBlock, {width: width}]}>
          {item.content}
        </View>
      )}
      data={slides}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      pagingEnabled
    />
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    borderWidth: 3
  },
  slideItemBlock: {
    height: "100%",
  },
})

export default Slider;
