import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import s from "../../assets/style";
import DrawerMenuItems from "./DrawerMenuItems";
import * as RootNavigation from "../../RootNavigation";

const DrawerMenu = () => {
    return (
        <View style={s.container}>
            <View style={s.bgContainer}>
                <TouchableOpacity>
                    <View style={s.userContainer}>
                        <Image
                            style={s.userImagen}
                            source={require("../../assets/logo-brainapps.png")}
                        />
                        <View style={s.camaraContainer}>
                            <Image
                                style={s.camaraIcon}
                                source={require("../../assets/photo-camera.png")}
                            />
                        </View>
                    </View>

                    <View style={s.userNombre}>
                        <Text style={s.userTitulo}>Alvaro</Text>
                        <Text style={s.userSubTitulo}>Ver Perfil</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <DrawerMenuItems
                iconName="home"
                titleName="Home"
                navigation={() => RootNavigation.navigate("Home")}
            />
            <DrawerMenuItems
                iconName="user"
                titleName="Perfil"
                navigation={() => RootNavigation.navigate("Perfil")}
            />
            <DrawerMenuItems
                iconName="heart"
                titleName="Loop Carousel"
                navigation={() => RootNavigation.navigate("LoopCarousel")}
            />
        </View>
    );
};

export default DrawerMenu;
