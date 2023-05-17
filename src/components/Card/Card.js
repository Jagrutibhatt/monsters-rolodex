import { Component } from "react";
import "./Card.css";

const Card = ({ monster }) => {
  const { id, name, username, email } = monster;

  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set1&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{`Username: ${username}`}</p>
      <p>{email}</p>
    </div>
  );
};

export default Card;
