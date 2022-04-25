import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Product from "./components/Product";
import Menu from "./screens/Inventory";
import Inventory from "./screens/Inventory";
import Stock from "./screens/Stock";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Inventory" component={Inventory} />
        <Stack.Screen name="Stock" component={Stock} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
