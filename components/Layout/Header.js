import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components/native";
import netflix from "../../assets/netflix.png";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const Header = () => {
    return (
        <Container>
            <Logo source={netflix} />
            <RightContainer>
                <TouchableOpacity>
                    <RightText>PRIVACIDAD</RightText>
                </TouchableOpacity>
                <TouchableOpacity>
                    <RightText>INICIAR SESIÓN</RightText>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        size={20}
                        style={{
                            color: "gray",
                            marginLeft: 10,
                            marginRight: 10,
                        }}
                        name={"ellipsis-v"}
                    />
                </TouchableOpacity>
            </RightContainer>
        </Container>
    );
};

export default Header;

const Container = styled.View`
    padding: 15px;
    width: 100%;
    position: absolute;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const RightContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

const RightText = styled.Text`
    margin-right: 22px;
    font-size: ${scale(12)}px;
    color: #f1f1f1;
`;

const Logo = styled.Image`
    width: 25px;
    height: 25px;
`;
