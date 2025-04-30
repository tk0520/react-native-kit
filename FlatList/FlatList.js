import React from "react";
import { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import FlatListItemName from "./FlatListItem";

function FlatListName() {
  return (
    <View style={styles.block}>
      <FlatList style={styles.list} 
      data={partnerLogs}
      renderItem={({item}) => (<PartnerLogItem item={item} />)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1
  },
  list: {
    flex: 1
  }
})

export default FlatListName;