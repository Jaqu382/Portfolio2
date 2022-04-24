import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Card, Input } from "react-native-elements";

const user = {
    username: "D",
    password: "4",
  };

export default function Login({ route, navigation }) {
    let [error, setError] = useState("");
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    return (
      <View style={styles.container}>
        <Card>
          <Card.Title>Login:</Card.Title>
          <Input label="Username" onChangeText={(value) => {setUsername(value)}}></Input>
          <Input label="Password" secureTextEntry = 'true' onChangeText={(value) => {setPassword(value)}}></Input>
          <Text style ={styles.error}>{error}</Text>
          <Card.Divider></Card.Divider>
          <Button title="Login" onPress={() => {
              if(username == user.username && password == user.password) {navigation.navigate('Home',{username: username})}
              else setError('Your username or password is incorrect')
          }}></Button>
        </Card>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    error : {
        color: 'red'
    }
  });