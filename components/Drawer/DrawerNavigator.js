import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { StatusBar } from "react-native";
import { navigationRef } from "../../RootNavigation";
import { NavigationContainer } from "@react-navigation/native";
import PerfilScreen from "../Screens/PerfilScreen";
import DrawerMenu from "./DrawerMenu";
import LoopCarousel from "../LoopCarousel/LoopCarousel";
import Home from "../../views/Home";

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <NavigationContainer ref={navigationRef}>
            <StatusBar barStyle="light-content" backgroundColor="#000" />
            <Drawer.Navigator drawerContent={() => <DrawerMenu />}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Perfil" component={PerfilScreen} />
                <Drawer.Screen name="LoopCarousel" component={LoopCarousel} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default MyDrawer;
