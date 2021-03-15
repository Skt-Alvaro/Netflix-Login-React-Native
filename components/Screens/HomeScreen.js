import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as RootNavigation from "../../RootNavigation";

function HomeScreen() {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text style={{ fontSize: 20 }}>Home Screen</Text>
            <TouchableOpacity onPress={() => RootNavigation.navigate("Perfil")}>
                <Text>Go to other</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;
