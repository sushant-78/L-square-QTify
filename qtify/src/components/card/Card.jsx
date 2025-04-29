import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

export default function Card({ image, follows, likes, cardType = "album" }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt="" className={styles.image} />
      </div>
      <div className={styles.bottomSection}>
        {cardType === "song" ? (
          <Chip label={`${likes ?? 0} Likes`} className={styles.chip} />
        ) : (
          <Chip label={`${follows ?? 0} Follows`} className={styles.chip} />
        )}
      </div>
    </div>
  );
}
