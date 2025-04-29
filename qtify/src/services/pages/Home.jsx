import { useEffect, useState } from "react";
import Section from "../../components/section/Section.jsx";
import { fetchTopAlbums, fetchNewAlbums } from "../albums.js";
import { fetchAllSongs } from "../songs.js";
import styles from "./Home.module.css";

function filterSongsByGenre(songs, genre) {
  if (genre === "All") return songs;
  return songs.filter(
    (song) => song.genre.toLowerCase() === genre.toLowerCase()
  );
}

export default function Home() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [activeGenre, setActiveGenre] = useState("All");

  useEffect(() => {
    const loadAlbums = async () => {
      try {
        const [top, newly] = await Promise.all([
          fetchTopAlbums(),
          fetchNewAlbums(),
        ]);
        setTopAlbums(top);
        setNewAlbums(newly);
      } catch (err) {
        console.error("Error fetching albums:", err);
      }
    };

    const loadSongs = async () => {
      try {
        const songList = await fetchAllSongs();
        setSongs(songList);
      } catch (err) {
        console.error("Error fetching songs:", err);
      }
    };

    loadAlbums();
    loadSongs();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Section
          title="Top Albums"
          data={topAlbums}
          uniqueId="top-albums"
          cardType="album"
        />
      </div>
      <div className={styles.section}>
        <Section
          title="New Albums"
          data={newAlbums}
          uniqueId="new-albums"
          cardType="album"
        />
      </div>

      <div className={styles.songsContainer}>
        {/* <div className={styles.genreButtons}>
          {GENRES.map((genre) => (
            <button
              key={genre}
              className={`${styles.genreButton} ${
                activeGenre === genre ? styles.active : ""
              }`}
              onClick={() => setActiveGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div> */}

        <Section
          title={`Songs`}
          data={filterSongsByGenre(songs, activeGenre).map((song) => ({
            id: song.id,
            title: song.title,
            image: song.image,
            follows: undefined,
            genre: song.genre,
          }))}
          uniqueId="genre-songs"
          cardType="song"
          setActiveGenre={setActiveGenre}
          activeGenre={activeGenre}
        />
      </div>
    </div>
  );
}
