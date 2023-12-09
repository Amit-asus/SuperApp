import React, { useState } from 'react';
import styles from './GenreBlock.module.css'; // Updated import for CSS Modules

const GenreComponent = ({ genre, genreImage, color, onGenreClick }) => {
  const [selected, setSelected] = useState(false);

  const genreStyle = {
    backgroundColor: color,
    border: selected ? '4px solid white' : 'none', // Apply green border when selected
  };

  const handleClick = () => {
    setSelected(!selected);
    onGenreClick({ genre, selected: !selected });
  };

  return (
    <div className={`${styles.genreComponent} ${selected ? styles.selected : ''}`} style={genreStyle} onClick={handleClick}>
      <h4>{genre}</h4>
      <img src={genreImage} alt={genre} className={styles.imgGenre} />
    </div>
  );
};

export default GenreComponent;
