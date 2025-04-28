import styles from "./Logo.module.css";
import qtifyLogo from "../../assets/qtify_logo.svg.svg";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src={qtifyLogo} alt="QTify Logo" />
    </div>
  );
}
