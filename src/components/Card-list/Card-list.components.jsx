import { Component } from "react";
import Card from "../Card/Card";
import "./Card-list.style.css";

class CardList extends Component {
  render() {
    // console.log("rendered from CardList components");
    // console.log(this.props);
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { id, name, username, email } = monster;
          return <Card id={id} name={name} username={username} email={email} />;
        })}
      </div>
    );
  }
}
export default CardList;
