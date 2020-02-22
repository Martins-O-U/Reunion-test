import React, { useState, useEffect } from 'react';
import axios from 'axios'




const HomeScreenCases = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        axios
            .get('https://miracle-messages2019.herokuapp.com/api/volunteers')
            .then(res => {
                console.log(res.data);
                setData(res.data);
            });
    }, []);


    return (
        <div className="App">
            <h1>Home Screen Cases</h1>

            {/* {data.map((data) => {
                return (
                    <div>
                        <h3>{data.name}</h3>
                        <h3>{data.lastLocation}</h3>
                        <h3>{data.currentCity}</h3>
                        <h3>{data.familyMemberName}</h3>
                        <h3>{data.relationship}</h3>
                        <h3>{data.famMemberLastLocation}</h3>
                        <h3>{data.volunteer}</h3>
                    </div>
                )

            })} */}

        </div>
    );
}


export default HomeScreenCases;

