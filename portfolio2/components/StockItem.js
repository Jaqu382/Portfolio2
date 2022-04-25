import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, Card, CheckBox, Input } from "react-native-elements";
import Inventory from "../screens/Inventory";

export default function StockItem(props) {
  let { item, inventory, newInventory, setNewInventory } = props;
  let [newStockItem, setNewStockItem] = useState({});
  let [changed, setChanged] = useState(false);

  let addStock = useCallback((addedStock) => {
    setChanged(true);
    addedStock.qty = addedStock.qty + 1;
    setNewInventory(addedStock);
  });
  let removeStock = useCallback((removedStock) => {
    setChanged(true);
    removedStock.qty = removedStock.qty - 1;
    setNewInventory(removedStock);
  });
  return (
    <Card style={styles.container}>
      <View>
        <Image source={item.image} style={styles.Image}></Image>
        <Card.Title>{item.bookName}</Card.Title>
      </View>
      <View style={changed ? styles.changed : styles.desc}>
        <Text>Author: {item.author}</Text>
        <Text>Price: ${item.price}</Text>
        <Input label="Set new price" placeholder="20"></Input>
        <Text>Sale: %{item.discount * 100}</Text>
        <Input label="Set new discount" placeholder="5"></Input>
        <CheckBox title="Is on Sale?"></CheckBox>
        <Text>Remaining inventory: {item.qty}</Text>
      </View>
      <Button
        style={styles.inventoryButton}
        title="Add Inventory"
        onPress={() => {
          addStock(item);
        }}
      ></Button>
      <Button
        style={styles.inventoryButton}
        title="Remove Inventory"
        onPress={() => {
          removeStock(item);
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
  changed: {
    alignItems: "center",
    fontSize: 14,
    color: "Green",
  },
  inventoryButton: {
    width: 100,
    alignSelf: "center",
  },
});
