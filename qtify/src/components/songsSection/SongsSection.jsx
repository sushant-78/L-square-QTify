import { useEffect, useState } from "react";
import { fetchAllSongs, fetchGenres } from "../../services/songs";
import Section from "../section/Section";
import { Tabs, Tab } from "@mui/material";
import styles from "./SongsSection.module.css";

export default function SongsSection() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    const loadData = async () => {
      try {
        const [allSongs, genreList] = await Promise.all([
          fetchAllSongs(),
          fetchGenres(),
        ]);
        setSongs(allSongs);
        setGenres(["All", ...genreList]);
      } catch (error) {
        console.error("Error loading songs data:", error);
      }
    };
    loadData();
  }, []);

  const filteredSongs =
    selectedGenre === "All"
      ? songs
      : songs.filter(
          (song) => song.genre.toLowerCase() === selectedGenre.toLowerCase()
        );

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h2>Songs</h2>
      </div>

      <div className={styles.filterSection}>
        <Tabs
          value={selectedGenre}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#34c94b",
              height: "4px",
            },
          }}
          sx={{
            minHeight: "unset",
            "& .MuiTabs-scroller": {
              overflow: "visible !important",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#34c94b",
            },
            "& .MuiTab-root": {
              color: "#fff",
              textTransform: "none",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "16px",
              padding: "0 32px 8px",
              minWidth: "auto",
              marginRight: "24px",
              minHeight: "unset",
              opacity: 0.7,
              "&.Mui-selected": {
                color: "#34c94b",
                opacity: 1,
              },
            },
          }}
        >
          {genres.map((genre) => (
            <Tab key={genre} label={genre} value={genre} />
          ))}
        </Tabs>
      </div>

      <Section
        title="Songs"
        data={filteredSongs.map((song) => ({
          id: song.id,
          title: song.title,
          image: song.image,
          likes: song.likes,
          genre: song.genre,
        }))}
        cardType="song"
        uniqueId="songs-section"
        enableToggle={false}
      />
    </div>
  );
}
