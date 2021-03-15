import React from "react";
import Card from "../components/Card/Card";
import Header from "../components/Layout/Header";
import LoopCarousel from "../components/LoopCarousel/LoopCarousel";

const Home = () => {
    return (
        <>
            <LoopCarousel />
            <Header />
            <Card />
        </>
    );
};

export default Home;
