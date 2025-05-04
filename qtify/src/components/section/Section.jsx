import styles from "./Section.module.css";
import Card from "../card/Card.jsx";
import Carousel from "../Carousel/Carousel";
import { useState } from "react";
import { Typography } from "@mui/material";
const GENRES = ["All", "Rock", "Pop", "Jazz"];
export default function Section({
  title,
  data = [],
  cardType = "album", // 'album' or 'song'
  enableToggle = true, // Changed default to true for albums
  uniqueId = "", // required for carousel isolation
  setActiveGenre,
  activeGenre,
}) {
  const [showAll, setShowAll] = useState(false);
  const isSongsSection = title === "Songs";

  // Show toggle only for album sections with more than 6 items
  const shouldShowToggle = !isSongsSection && data.length > 6;

  const renderCard = (item) => (
    <div key={item.id} className={styles.cardWrapper}>
      <Card
        image={item.image}
        follows={item.follows}
        likes={item.likes}
        genre={item.genre}
        cardType={cardType}
      />
      <Typography className={styles.title}>{item.title}</Typography>
    </div>
  );

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        {shouldShowToggle && (
          <button
            className={styles.showAll}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Collapse" : "Show all"}
          </button>
        )}
      </div>

      {isSongsSection && (
        <div className={styles.genreButtons}>
          {GENRES.map((genre) => (
            <button
              key={genre}
              className={`${styles.genreButton} ${
                activeGenre === genre ? styles.active : ""
              }`}
              onClick={() => setActiveGenre && setActiveGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      )}

      {showAll ? (
        <div className={styles.grid}>{data.map(renderCard)}</div>
      ) : (
        <Carousel uniqueId={uniqueId}>{data.map(renderCard)}</Carousel>
      )}
    </div>
  );
}
