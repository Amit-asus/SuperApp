import React from "react";
import styles from "./Genre.module.css"; // Updated import for CSS Modules
import GenreBlock from "../../Components/GenreBlock/GenreBlock";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//image
import action from "../../assets/action.png";
import drama from "../../assets/drama.png";
import fantasy from "../../assets/fantasy.png";
import fiction from "../../assets/fiction.png";
import horror from "../../assets/horror.png";
import music from "../../assets/music.png";
import romance from "../../assets/romance.png";
import thriller from "../../assets/thriller.png";
import western from "../../assets/western.png";
import  danger from "../../assets/danger.png";

function GenrePage2() {
  const [categories, setCategories] = useState([]);
  const [lengthError, setLengthError] = useState(false);
  const navigate = useNavigate();

  const handleGenreClick = ({ genre, selected }) => {
    if (selected) {
      setCategories((prevCategories) => [...prevCategories, genre]);
    } else {
      setCategories((prevCategories) =>
        prevCategories.filter((item) => item !== genre)
      );
    }
  };

  const handleSignUp = () => {
    if (categories.length < 3) {
      setLengthError(true);
      return;
    } else {
      setLengthError(false);
      window.localStorage.setItem("genres", JSON.stringify([...categories]));
      navigate("/Browse");
    }
  };

  return (
    <div className={styles.halfPageContainer}>
      <div className={`${styles.halfPage} ${styles.leftHalf}`}>
        <h3>Super App</h3>
        <h2>
          Choose your <br />
          entertainment
          <br /> category
        </h2>
        {lengthError ? (
          <div className={styles.dangerSign}>
            <img
              src={danger}
              alt="dangervector"
              className={styles.dangerSignImg}
            />
            <span>Min 3 categories required</span>
          </div>
        ) : (
          <></>
        )}
        {categories.length > 0 && (
          <span>
            {categories.map((category, index) => (
              <span key={index} className={styles.categoryTag}>
                {category}
              </span>
            ))}
          </span>
        )}
      </div>
      <div className={`${styles.halfPage} ${styles.rightHalf}`}>
        <div className={styles.genreBlocksContainer}>
          <GenreBlock
            genre="Action"
            genreImage={action}
            color="red"
            onGenreClick={handleGenreClick}
          />
           <GenreBlock
            genre="Drama"
            genreImage={drama}
            color="pink"
            onGenreClick={handleGenreClick}
          />
          <GenreBlock
            genre="Fiction"
            genreImage={fiction}
            color="green"
            onGenreClick={handleGenreClick}
          />
          <GenreBlock
            genre="Horror"
            genreImage={horror}
            color="blue"
            onGenreClick={handleGenreClick}
          />
          <GenreBlock
            genre="Romance"
            genreImage={romance}
            color="red"
            onGenreClick={handleGenreClick}
          />
          <GenreBlock
            genre="Thriller"
            genreImage={thriller}
            color="brown"
            onGenreClick={handleGenreClick}
          />
          <GenreBlock
            genre="Western"
            genreImage={western}
            color="red"
            onGenreClick={handleGenreClick}
          />
          <GenreBlock
            genre="Fantasy"
            genreImage={fantasy}
            color="orange"
            onGenreClick={handleGenreClick}
          />
          <GenreBlock
            genre="Drama"
            genreImage={drama}
            color="green"
            onGenreClick={handleGenreClick}
          />
        </div>
        <div>
          <button type="submit" className={styles.btn} onClick={handleSignUp}>
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default GenrePage2;

