import React from "react";
import styles from "./Genre.module.css"; // Updated import for CSS Modules
import GenreBlock from "../../Components/GenreBlock/GenreBlock";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
              src="/src/assets/danger.png"
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
            genreImage="/src/assets/action.png"
            color="red"
            onGenreClick={handleGenreClick}
          />
           <GenreBlock
            genre="drama"
            genreImage="/src/assets/drama.png"
            color="pink"
            onGenreClick={handleGenreClick}
          />
          <GenreBlock
            genre="fiction"
            genreImage="/src/assets/fiction.png"
            color="green"
            onGenreClick={handleGenreClick}
          />
          <GenreBlock
            genre="horror"
            genreImage="/src/assets/horror.png"
            color="blue"
            onGenreClick={handleGenreClick}
          />
          <GenreBlock
            genre="romance"
            genreImage="/src/assets/romance.png"
            color="red"
            onGenreClick={handleGenreClick}
          />
          <GenreBlock
            genre="thriller"
            genreImage="/src/assets/thriller.png"
            color="brown"
            onGenreClick={handleGenreClick}
          />
          <GenreBlock
            genre="Western"
            genreImage="/src/assets/Western.png"
            color="red"
            onGenreClick={handleGenreClick}
          />
          <GenreBlock
            genre="fantasy"
            genreImage="/src/assets/fantasy.png"
            color="orange"
            onGenreClick={handleGenreClick}
          />
          <GenreBlock
            genre="drama"
            genreImage="/src/assets/drama.png"
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

