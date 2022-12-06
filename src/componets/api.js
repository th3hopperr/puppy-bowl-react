import React from "react";

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-ft/`;

export const fetchAllPlayers = async (setPuppies) => {
    try{
        const response = await fetch(`${APIURL}players`);
        const result = await response.json();
        setPuppies(result.data.players)
        if(result.error){
            throw result.error;
        } return result.data.players
    } catch (err) {
    console.error("dag nabbit the dogs are all gone")
    }
}

 