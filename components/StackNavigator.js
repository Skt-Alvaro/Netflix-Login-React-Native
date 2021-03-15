import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text style={{ fontSize: 20 }}>Home Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Other")}>
                <Text>Go to other</Text>
            </TouchableOpacity>
        </View>
    );
}

function OtherScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text style={{ fontSize: 20 }}>Other Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text>Go to Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Other" component={OtherScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;
