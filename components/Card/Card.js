import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { scale, moderateScale } from "react-native-size-matters";
import Pagination from "../LoopCarousel/Pagination";
import data from "../../helpers/data";

const Card = ({ item }) => {
    return (
        <Container>
            <PrincipalText>{item?.title}</PrincipalText>
            <SecondaryText>{item?.body}</SecondaryText>
        </Container>
    );
};

export default Card;

const Container = styled.View`
    align-items: center;
    position: absolute;
    bottom: ${scale(45)}px;
    left: 0;
    right: 0;
`;

const PrincipalText = styled.Text`
    font-size: ${scale(30)}px;
    width: ${moderateScale(279)}px;
    text-align: center;
    color: #f1f1f1;
    margin-bottom: 15px;
`;

const SecondaryText = styled.Text`
    font-size: ${scale(15)}px;
    width: ${moderateScale(300)}px;
    color: #f1f1f1;
    text-align: center;
    margin-bottom: 30px;
`;

const Button = styled.TouchableOpacity`
    padding-top: 10px;
    padding-bottom: 10px;
    background: red;
    color: #f1f1f1;
    width: ${moderateScale(360)}px;
    border-radius: 4px;
`;

const ButtonText = styled.Text`
    text-align: center;
    color: #f1f1f1;
    font-size: ${scale(15)}px;
`;
