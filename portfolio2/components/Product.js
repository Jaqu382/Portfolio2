import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card } from "react-native-elements";

export default function Product(props) {
  const { item } = props;
  const [newPrice, setNewPrice] = useState("");
  useEffect(() => {
    item.sale
      ? setNewPrice(item.price - item.price * item.discount)
      : setNewPrice("");
  });

  return (
    <Card style={styles.container}>
      <View>
        <Image source={item.image} style={styles.Image}></Image>
        <Card.Title>{item.bookName}</Card.Title>
      </View>
      <View style={styles.desc}>
        <Text>Author: {item.author}</Text>
        <Text style={item.sale ? styles.onSale : undefined}>
          Price: ${item.price}
        </Text>
        <Text style={styles.sale}>{newPrice}</Text>
        <Text>remaining: {item.qty}</Text>
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
  Button: {
    width: "fit-content",
  },
});
