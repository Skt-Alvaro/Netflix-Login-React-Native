import React from "react";
import Index from "./index";
import { AppRegistry } from "react-native";
import "react-native-gesture-handler";

export default function App() {
    return <Index />;
}
AppRegistry.registerComponent(App, () => App);
