import Card from "../Card/Card";
import "./Card-list.style.css";

// const CardList = (props) => {
//   // console.log("rendered from CardList components");
//   // console.log(this.props);
//   const { monsters } = props;
//   return (
//     <div className="card-list">
//       {monsters.map((monster) => {
//         return <Card key={monster.id} monster={monster} />;
//       })}
//     </div>
//   );
// };

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
