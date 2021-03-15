import React, { useRef } from "react";
import { Text, View, FlatList, Dimensions } from "react-native";
import data from "../../helpers/data";
import styled from "styled-components/native";
import { scale, moderateScale } from "react-native-size-matters";
import Card from "../Card/Card";

const { height, width } = Dimensions.get("window");

const Carousel = () => {
    return (
        <Container>
            <FlatList
                data={data}
                horizontal
                pagingEnabled
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Image
                                resizeMode={"cover"}
                                source={{ uri: item.imgUrl }}
                            />
                            <Card item={item} />
                        </View>
                    );
                }}
                keyExtractor={(_, i) => i.toString()}
            />
            <ButtonContainer>
                <Button>
                    <ButtonText>COMIENZA YA</ButtonText>
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default Carousel;

const Container = styled.View`
    flex: 1;
`;

const Image = styled.Image`
    width: ${width}px;
    height: ${height}px;
`;

const Button = styled.TouchableOpacity`
    padding-top: 10px;
    padding-bottom: 10px;
    background: red;
    color: #f1f1f1;
    width: ${moderateScale(360)}px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
`;

const ButtonText = styled.Text`
    text-align: center;
    color: #f1f1f1;
    font-size: ${scale(15)}px;
`;

const ButtonContainer = styled.View`
    align-items: center;
    position: absolute;
    bottom: ${scale(10)}px;
    width: 100%;
`;
