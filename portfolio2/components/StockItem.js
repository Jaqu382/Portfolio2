import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, Card, CheckBox, Input } from "react-native-elements";

export default function StockItem(props) {
  let { item, newInventory, setNewInventory } = props;
  let [currentQty, setCurrentQty] = useState(item.qty);
  let [newStockItem, setNewStockItem] = useState({});
  let [isOnSale, setIsOnSale] = useState(false);

  useEffect(() => {
    setCurrentQty(item.qty);
  });
  return (
    <Card style={styles.container}>
      <View>
        <Image source={item.image} style={styles.Image}></Image>
        <Card.Title>{item.bookName}</Card.Title>
      </View>
      <View style={styles.desc}>
        <Text>In Inventory: {currentQty}</Text>
        <Text>Author: {item.author}</Text>
        <Text>Price: ${item.price}</Text>
        <Text>Sale: %{item.discount * 100}</Text>
        <CheckBox
          title="Sale"
          checked={isOnSale}
          onPress={() => {
            setIsOnSale(!isOnSale);
          }}
        ></CheckBox>
      </View>
      <Button
        style={styles.inventoryButton}
        title="Add Inventory"
        onPress={() => {
          console.log("adding to inventory");
        }}
      ></Button>
      <Button
        style={styles.inventoryButton}
        title="Remove Inventory"
        onPress={() => {
          console.log("Removing from inventory");
        }}
      ></Button>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  sale: {
    color: "red",
  },
  onSale: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  desc: {
    alignItems: "center",
    fontSize: 14,
  },
  inventoryButton: {
    width: 100,
    alignSelf: "center",
  },
});
