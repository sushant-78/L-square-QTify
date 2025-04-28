import styles from "./HeroSection.module.css";
import heroImage from "../../assets/hero_image_1.png"; // Save the headphones image as hero_image.png inside assets

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.textContent}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h2>Over thousands podcast episodes</h2>
      </div>
      <div className={styles.imageContent}>
        <img src={heroImage} alt="Headphones" />
      </div>
    </div>
  );
}
