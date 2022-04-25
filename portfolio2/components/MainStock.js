import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Button, Card } from "react-native-elements";
import StockItem from "./StockItem";

export default function MainStock(props) {
  let { inventory, newInventory, setNewInventory } = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={inventory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <>
              <StockItem
                item={item}
                inventory={inventory}
                newInventory={newInventory}
                setNewInventory={setNewInventory}
              ></StockItem>
            </>
          );
        }}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  Button: {
    width: "fit-content",
  },
});
