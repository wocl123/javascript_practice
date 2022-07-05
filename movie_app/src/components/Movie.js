import React from "react";
import styles from "./Movie.module.css";

function Movie({ id, title, image, date, rating, director }) {
  const re_title = title
    .replace(/&amp;/g, "&")
    .replace("<b>", "")
    .replace("</b>", "");
  const re_director = director.substring(0, director.length - 1).split("|");

  return (
    <div className={styles.movie}>
      <a href={id} target="_blank">
        <img src={image} alt={re_title} title={re_title} />
      </a>
      <div className={styles.movie_data}>
        <h3 className={styles.movie_title}>{re_title}</h3>
        <h5 className={styles.movie_date}>개봉일 : {date}</h5>
        <p className={styles.movie_rating}>평점 : {rating} / 10</p>
        <p>감독 : {re_director}</p>
      </div>
    </div>
  );
}

export default Movie;
