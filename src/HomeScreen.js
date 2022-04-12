import React from "react";
import './HomeScreen.css';
import Nav from "./Nav";
import Banner from "./Banner"

const HomeScreen=()=>{
    return <div className="HomeScreen">
        {/* Navbar */}
        <Nav/>

        {/* Banner */}
        <Banner/>
        <h1>Hello World</h1>
        {/* Rows */}
    </div>
}

export default HomeScreen;