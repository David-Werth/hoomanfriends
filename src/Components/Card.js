import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc dib pa3 ma2 grow shadow5 cards">
      <img
        src={`https://avatars.dicebear.com/4.5/api/human/${
          id + 20
        }.svg?w=200&h=200&mood[]=happy`}
        alt="human"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
