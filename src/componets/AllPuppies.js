import React from "react";

export const AllPuppies = (props) => {
    return (
  <div>
  {props.puppies ?  
    props.puppies.map((pup) => {
    return (
        <div  key={pup.id}>
            <h1 className="pupName">This is {pup.name}</h1>
            <p className="breed">{pup.breed}</p>
            <p className="pupId">{pup.id}</p>
            <p className="teamId"> {pup.teamId}</p>
            <img className="image" src={pup.imageUrl}/>
        </div>
     );
  })
   : (
    <h2>no puppies heererererre</h2>
  )}
  </div>
    );
  };


    

  

    