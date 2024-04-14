import "./homePage.scss";
import SearchBar from "../../components/searchBar/SearchBar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find a Real Estate and get your Dream Place</h1>
          <p>
            Discovering a dream home is like unveiling a hidden treasure, a
            sanctuary that resonates with your heart and mirrors your deepest
            desires. It's a harmonious blend of comfort and personal style, a
            haven where every corner tells your story.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Properties Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
