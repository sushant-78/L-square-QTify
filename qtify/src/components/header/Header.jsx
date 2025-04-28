import styles from "./Header.module.css";
import Logo from "./Logo.jsx";
import Search from "./Search.jsx";
import Button from "./Button.jsx";

export default function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.center}>
        <Search />
      </div>
      <div className={styles.right}>
        <Button text="Give Feedback" />
      </div>
    </div>
  );
}
