import List from "../Components/SingleCard";
// import Navbar from "./Navbar";
import IMAGES from "../players-images/index.js";

const Cards = ({ albums }) => {
  //   const { playerList } = albums;
  //   const PFName, SkillsDesc
  console.log(albums);
  return (
    <>
      <div className="card-list">
        {/* Render the List component for each album in the albums array*/}
        {Object.values(albums).map(function (item, key) {
          return (
            <div>
              <List item={item} key={key} />;
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
