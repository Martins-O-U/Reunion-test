import React from "react";
import homeless from "./../../images/homeless.jpg"

export default function Home() {
    return (
        <div className="container">
            <div className="home-background">
                <img src={homeless} alt="Homeless Person" />
            </div>
            <p>According to the United Nations in 2005, some 100 million persons were homeless worldwide, today that figure would have risen even more with unceasing wars and conflicts within the african sub regions </p>
        </div>
    )
}