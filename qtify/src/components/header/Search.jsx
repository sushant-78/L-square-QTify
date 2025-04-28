import styles from "./Search.module.css";
import { FiSearch } from "react-icons/fi";

export default function Search() {
  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        placeholder="Search a album of your choice"
        className={styles.searchInput}
      />
      <div className={styles.searchIcon}>
        <FiSearch />
      </div>
    </div>
  );
}
