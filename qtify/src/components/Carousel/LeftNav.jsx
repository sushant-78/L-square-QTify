import leftIcon from "../../assets/left_chev.svg";
import styles from "./Navigation.module.css";

export default function LeftNav({ uniqueId }) {
  return (
    <div className={`swiper-button-prev-${uniqueId} ${styles.navButton}`}>
      <img src={leftIcon} alt="Left" className={styles.navIcon} />
    </div>
  );
}
