import React from "react";
import Card from "./Card";

const CardList = ({ humans }) => {
  return (
    <div>
      {humans.map((user, i) => {
        return (
          <Card
            key={i}
            id={humans[i].id}
            name={humans[i].name}
            email={humans[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
