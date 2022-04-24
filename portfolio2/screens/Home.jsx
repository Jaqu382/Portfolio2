import { FlatList, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import Product from "../components/Product";

const inventory = [{
    bookName: "The Midnight Library",
    author: "Matt Haig",
    price: 20.00,
    sale: false,
    discount: .05,
    image:require("../img/midnightLibrary.jpg"),
    id:0
},
{
    bookName: "The House On The Cerulean Sea",
    author: "TJ Klune",
    price: 15.00,
    sale: false,
    discount: .1,
    image:require("../img/houseOnTheCeruleanSea.jpg"),
    id:1
},
{
    bookName: "The HitchHikers's Guide to the Galaxy",
    author: "Douglas Adams",
    price: 15.00,
    sale: true,
    discount: .15,
    image:require("../img/hitchhikers.jpg"),
    id:2
},]


export default function Home({ route, navigation }) {
    const {username} = route.params;
    return (
      <View style={styles.container}>
          <Text style = {styles.title}>Welcome, {username}</Text>
          <FlatList 
          data={inventory}
          keyExtractor={item => item.id}
          renderItem={({item}) => {return (<Product item = {item}></Product>)}}></FlatList>
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
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    }
  });