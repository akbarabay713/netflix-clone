import styles from "./banner.module.css";
import React, { useEffect, useState } from "react";
import axios from "../../axios";
import request from "./../../request";
import movieTrailer from "movie-trailer";
import ModalMovie from "../modal/modal-movie/ModalMovie";

const Banner = () => {
  const [items, setItems] = useState([]);
  const [urlTrailer, setUrlTrailer] = useState("");
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(request.fetchTranding);
      const filter = data.results.filter(
        (movie) => movie.media_type === "movie" || !movie.media_type
      );
      setItems(filter[Math.floor(Math.random() * 15)]);
    }
    getData();
  }, []);
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  const bannerStyles = {
    backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),url(
      "https://image.tmdb.org/t/p/original${items?.backdrop_path}"
    )`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const handleClick = (id) => {
    setIsShow(true);
    if (urlTrailer) {
      setUrlTrailer("");
    } else {
      movieTrailer(null, { tmdbId: id })
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setUrlTrailer(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
          setIsShow(false);
          setUrlTrailer("");
        });
    }
  };

  const handleClose = () => {
    setUrlTrailer("");
    setIsShow(false);
  };
  return (
    <header className={styles.header} style={bannerStyles}>
      <div className={styles.content}>
        {isShow && <ModalMovie onClose={handleClose} urlTrailer={urlTrailer} />}
        <h1>{items?.title}</h1>
        <div className={styles.buttons}>
          <button onClick={() => handleClick(items?.id)}>
            <img src="play_button.png" alt="button" />
            play
          </button>
        </div>
        <p>{truncate(`${items?.overview}`, 150)}</p>
      </div>
      <div className={styles.fadeBottom}></div>
    </header>
  );
};

export default Banner;
