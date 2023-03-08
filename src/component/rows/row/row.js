import styles from "./row.module.css";
import React, { useState } from "react";
import movieTrailer from "movie-trailer";
import ModalMovie from "./../../modal/modal-movie/ModalMovie";
import useGetData from "./../../../hooks/useGetData";

const Row = ({ fetchUrl, title, isLarge }) => {
  const [urlTrailer, setUrlTrailer] = useState("");
  const [isShow, setIsShow] = useState(false);
  const items = useGetData(fetchUrl);

  const large = isLarge === true ? styles.Large : styles.row;

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
    <div className={styles.rows}>
      <h3>{title}</h3>
      <div className={[styles.row, large].join(" ")}>
        {items.map((item) => {
          return (
            <div key={item.id} onClick={() => handleClick(item.id)}>
              <img
                src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
                alt="something"
              />
            </div>
          );
        })}
        {isShow && <ModalMovie onClose={handleClose} urlTrailer={urlTrailer} />}
      </div>
    </div>
  );
};

export default Row;
