import React from "react";
import styles from "./Movie.module.scss";
import PropTypes from "prop-types";
import styled from "styled-components";

function Movie({ id, title, image, date, rating, director }) {
  const re_title = title
    .replace(/&amp;/g, "&")
    .replace("<b>", "")
    .replace("</b>", "");
  // const re_director = director.substring(0, director.length - 1).split("|");

  return (
    <div className={styles.container}>
      <a href={id} target="_blank">
        <CardImg image={image} />
      </a>
      <div className={styles.movie_data}>
        <h3 className={styles.movie_title}>{re_title}</h3>
        <h5 className={styles.movie_date}>개봉일 : {date}</h5>
        <div className={styles.movie_rating_title}>
          <p>평점</p>
          <span className={styles.movie_rating}>{rating} / 10</span>
        </div>
      </div>
    </div>
  );
}

const CardImg = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 111 !important;
  border-top-left-radius: 4px;
  border-top-right-ragius: 4px;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, rgba(152, 149, 160, 1)),
    color-stop(0.35, rgba(152, 149, 160, 1)),
    color-stop(0.5, rgba(152, 149, 160, 1)),
    color-stop(0.65, rgba(152, 149, 160, 1)),
    color-stop(0.85, rgba(152, 149, 160, 0.6)),
    color-stop(1, rgba(152, 149, 160, 0))
  );
  position: relative;
`;

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
};

export default Movie;
