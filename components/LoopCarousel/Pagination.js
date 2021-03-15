import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import data from "../../helpers/data";

const Pagination = () => {
    return (
        <Container>
            {data.map((_, i) => {
                return <Points key={i.toString()} />;
            })}
        </Container>
    );
};

export default Pagination;

const Container = styled.View`
    flex-direction: row;
    height: 64px;
`;

const Points = styled.View`
    height: 10px;
    border-radius: 5px;
    background-color: #493d8a;
    margin-left: 20px;
    margin-right: 20px;
    width: 10px;
`;
