import React, {useState, useEffect } from "react";
import { AllPuppies } from "./AllPuppies";
import { fetchAllPlayers } from "./api";


export const Main = () => {
    const [puppies, setPuppies] = useState([]);

    useEffect(() => {
        fetchAllPlayers(setPuppies)
    }, []);

    return (
        <div>
            <h1>Welcome to the Puppers Bowl</h1>
            <div id="navbar">
            </div>
            <div className="puppers">
                <AllPuppies puppies={puppies}/>
            </div>
        </div>
    );
};