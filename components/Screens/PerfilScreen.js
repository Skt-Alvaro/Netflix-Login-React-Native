import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import * as RootNavigation from "../../RootNavigation";

function PerfilScreen() {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text style={{ fontSize: 20 }}>Perfil Screen</Text>
            <TouchableOpacity onPress={() => RootNavigation.navigate("Home")}>
                <Text>Go to Home</Text>
            </TouchableOpacity>
        </View>
    );
}

export default PerfilScreen;
