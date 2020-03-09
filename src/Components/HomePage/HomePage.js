import React from "react";
import { Link } from 'react-router-dom'
import homeless from "./../../images/homeless.jpg"

export default function Home() {
    return (
        <div className="container" id="home-home">
            <div className="home-background">
                <img src={homeless} alt="Homeless Person" />
            </div>
            <h2 className="home-wel">Welcome to Reunite</h2>
            <div className="paragraphs">
                <div className="un-par" id="case">
                    <p>According to the United Nations, in 2005 some 100 million persons were homeless worldwide.
                    Today, with unceasing wars and conflicts within the african sub regions that figure would have risen even more.
                </p>
                </div>
                <div className="case-par" id="case">
                    <p>Would you like to help homeless ones reunite with their family? <Link to="/signup">volunteer here</Link></p>
                    <p>Do you Have a case about a loved one to report? <Link to="/">contact us </Link></p>
                    <p>View reported cases <Link to="/reunitecases">here</Link></p>
                </div>
            </div>
        </div>
    )
}