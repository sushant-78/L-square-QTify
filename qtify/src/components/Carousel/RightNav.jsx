import rightIcon from "../../assets/right_chev.svg";
import styles from "./Navigation.module.css";

export default function RightNav({ uniqueId }) {
  return (
    <div className={`swiper-button-next-${uniqueId} ${styles.navButton}`}>
      <img src={rightIcon} alt="Right" className={styles.navIcon} />
    </div>
  );
}
