import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Button, Card } from "react-native-elements";
import Product from "./Product";

export default function MainInventory(props) {
  let { inventory, username } = props;
  return (
    <View>
      <Text style={styles.title}>Welcome, {username}</Text>
      <FlatList
        data={inventory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          if (item.qty != 0) return <Product item={item}></Product>;
        }}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
