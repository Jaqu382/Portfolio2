import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Button } from "react-native-elements";
import MainStock from "../components/MainStock";

export default function Menu({ route, navigation }) {
    let {newInventory, setNewInventory, username} = route.params;
    return(
        <View>
            <MainStock newInventory = {newInventory} setNewInventory = {setNewInventory}></MainStock>
            <View style={styles.navigator}>
        <Button
        style = {styles.Button}
          title="Inventory"
          onPress={() => navigation.navigate("Inventory", {username})}
        ></Button>
        <Button 
        style ={styles.Button}
        title="Logout" 
        onPress={() => navigation.navigate("Login")}></Button>
      </View>
            
        </View>
    )

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
    },
  })