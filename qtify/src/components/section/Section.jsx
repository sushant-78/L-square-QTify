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
  enableToggle = false, // true for albums, false for songs
  uniqueId = "", // required for carousel isolation
  setActiveGenre,
  activeGenre,
}) {
  const [showAll, setShowAll] = useState(false);
  const isSongsSection = title === "Songs";

  const shouldEnableToggle = enableToggle && data.length > 6;

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        {!isSongsSection && <span className={styles.showAll}>Show all</span>}
      </div>

      {isSongsSection && (
        <div className={styles.genreButtons}>
          {GENRES.map((genre) => (
            <button
              key={genre}
              className={`${styles.genreButton} ${
                activeGenre === genre ? styles.active : ""
              }`}
              // onClick={() => setActiveGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      )}

      {showAll ? (
        <div className={styles.grid}>
          {data.map((item) => (
            <div>
              <Card
                key={item.id}
                title={item.title}
                image={item.image}
                follows={item.follows}
                likes={item.likes}
                genre={item.genre}
                cardType={cardType}
              />
              <Typography className={styles.title}>{item.title}</Typography>
            </div>
          ))}
        </div>
      ) : (
        <Carousel uniqueId={uniqueId}>
          {data.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              follows={item.follows}
              likes={item.likes}
              cardType={cardType}
            />
          ))}
        </Carousel>
      )}
    </div>
  );
}
