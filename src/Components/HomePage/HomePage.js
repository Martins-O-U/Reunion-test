import React from "react";
import homeless from "./../../images/homeless.jpg"

export default function Home() {
    return (
        <div className="container">
            <div className="hero-background">
                <img src={homeless} alt="Homeless Person" height="20%" />
            </div>
            <h1>This is home</h1>
        </div>
    )
}