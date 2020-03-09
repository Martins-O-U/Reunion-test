import React from "react";
import { Link } from 'react-router-dom'
import homeless from "./../../images/homeless.jpg"

export default function Home() {
    return (
        <div className="container" id="home-home">
            <div className="home-background">
                <img src={homeless} alt="Homeless Person" />
            </div>
            <h2 className="home-wel">Welcome to Reunion</h2>
            <div className="paragraphs">
                <div className="un-par">
                    <p>According to the United Nations, in 2005 some 100 million persons were homeless worldwide.
                    Today, with unceasing wars and conflicts within the african sub regions that figure would have risen even more.
                </p>
                </div>
                <div className="case-par">
                    <p>Would you like to volunteer to help homeless ones reunite with their family? click <Link to="/signup">here</Link></p>
                    <p>Do you Have a case about a loved one or yourself to report? click <Link to="/volunteer-add-case">here</Link></p>
                </div>
            </div>
        </div>
    )
}