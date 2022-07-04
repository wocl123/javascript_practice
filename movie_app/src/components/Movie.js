import React from "react";
import styles from "./Movie.module.css";

function Movie({ id, title, image, actor, date, rating }) {
  const re_title = title
    .replace(/&amp;/g, "&")
    .replace("<b>", "")
    .replace("</b>", "");
  const re_actor = actor.substring(0, actor.length - 1).split("|");

  return (
    <div className={styles.movie_data}>
      <h3 className={styles.movie_title}>영화 제목 : {re_title}</h3>
      <h5 className={styles.movie_date}>개봉 날짜 : {date}</h5>
      <p className={styles.movie_rating}>평점 : {rating} / 10</p>
      <p className={styles.movie_actor}>배우 : {re_actor}</p>
    </div>
  );
}

export default Movie;
