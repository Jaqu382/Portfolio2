import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, Card, CheckBox, Input } from "react-native-elements";

export default function StockItem(props) {
  let { item, inventory, newInventory, setNewInventory } = props;
  let [updatedQty, setUpdatedQty] = useState(item.qty);
  let [updatedPrice, setUpdatedPrice] = useState(item.price);
  let [updateDiscount, setUpdateDiscount] = useState(item.discount);
  let [newPrice, setNewPrice] = useState();
  let [newDiscount, setNewDiscount] = useState();
  let [onSale, setOnSale] = useState(item.sale);
  const addStock = useCallback((addedStock) => {
    addedStock.qty = addedStock.qty + 1;
    setUpdatedQty(updatedQty + 1);
    setNewInventory(addedStock);
  });
  const removeStock = useCallback((removedStock) => {
    removedStock.qty = removedStock.qty - 1;
    setNewInventory(removedStock);
    setUpdatedQty(updatedQty - 1);
  });
  const changePrice = useCallback((newPrice, newItem) => {
    let priceContainer;
    if (newPrice == undefined) {
      priceContainer = newItem.price;
      newItem.price = priceContainer;
    } else {
      priceContainer = parseInt(newPrice);
      newItem.price = priceContainer;
    }
    setNewInventory(newItem);
    setUpdatedPrice(priceContainer);
  });
  const changeDiscount = useCallback((newDiscount, newItem) => {
    let discountContainer;
    if (newDiscount == undefined) {
      discountContainer = newItem.discount;
      newItem.discount = discountContainer;
      setUpdateDiscount(discountContainer);
    } else {
      discountContainer = parseInt(newDiscount);
      newItem.discount = discountContainer / 100;
      setUpdateDiscount(discountContainer / 100);
    }
    setNewInventory(newItem);
  });
  const toggleSale = useCallback((newItem) => {
    newItem.sale = !newItem.sale;
    setOnSale(newItem.sale);
    setNewInventory(newItem);
  });
  return (
    <Card style={styles.container}>
      <View>
        <Image source={item.image} style={styles.Image}></Image>
        <Card.Title>{item.bookName}</Card.Title>
      </View>
      <View style={styles.desc}>
        <Text>Author: {item.author}</Text>
        <Text>Price: ${updatedPrice}</Text>
        <Input
          label="Set new price"
          placeholder="20"
          onChangeText={(value) => setNewPrice(value)}
        ></Input>
        <Button
          style={styles.inventoryButton}
          title="Set Price"
          onPress={() => {
            changePrice(newPrice, item);
          }}
        ></Button>
        <Text>Sale: %{item.discount * 100}</Text>
        <Input
          label="Set new discount"
          placeholder="5"
          onChangeText={(value) => setNewDiscount(value)}
        ></Input>
        <Button
          style={styles.inventoryButton}
          title="Set Discount"
          onPress={() => {
            changeDiscount(newDiscount, item);
          }}
        ></Button>
        <CheckBox
          title="Is on Sale?"
          checked={onSale}
          onPress={() => toggleSale(item)}
        ></CheckBox>
        <Text>Remaining inventory: {updatedQty}</Text>
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
      </View>
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
  desc: {
    alignItems: "center",
    fontSize: 14,
  },
  inventoryButton: {
    width: 100,
    alignSelf: "center",
  },
});
