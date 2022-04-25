import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import MainInventory from "../components/MainInventory";

 let inventory = [{
    bookName: "The Midnight Library",
    author: "Matt Haig",
    price: 20.00,
    sale: false,
    discount: .05,
    qty:5,
    image:require("../img/midnightLibrary.jpg"),
    id:0,
},
{
    bookName: "The House On The Cerulean Sea",
    author: "TJ Klune",
    price: 15.00,
    sale: false,
    discount: .1,
    qty:4,
    image:require("../img/houseOnTheCeruleanSea.jpg"),
    id:1,
},
{
    bookName: "The HitchHikers's Guide to the Galaxy",
    author: "Douglas Adams",
    price: 15.00,
    sale: true,
    discount: .15,
    qty:2,
    image:require("../img/hitchhikers.jpg"),
    id:2,    
},
{
  bookName: "We Hunt the Flame",
  author: "Hafsah Faizel",
  price: 20.00,
  sale: false,
  discount: .10,
  qty:0,
  image:require("../img/weHuntTheFlame.jpg"),
  id:3,    
},
{
  bookName: "A Pho Love Story",
  author: "Loan le",
  price: 20.00,
  sale: false,
  discount: .05,
  qty:0,
  image:require("../img/aPhoLoveStory.jpg"),
  id:4,    
},]

export default function Inventory({ route, navigation }) {
    const {username} = route.params;
    let [newInventory,setNewInventory] = useState([...inventory])
    return (
    <View style = {styles.container}>
      <MainInventory username={username} inventory ={newInventory}></MainInventory>
      <View style={styles.navigator}>
        <Button
        style = {styles.Button}
          title="Manage Stock"
          onPress={() => navigation.navigate("Stock" , {newInventory, setNewInventory, username})}
        ></Button>
        <Button 
        style ={styles.Button}
        title="Logout" 
        onPress={() => navigation.navigate("Login")}></Button>
      </View>
    </View>
    );
  }

  const styles =StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    Button: {
      width: "fit-content",
    },
    navigator: {
      alignItems:"center"
    }
  })