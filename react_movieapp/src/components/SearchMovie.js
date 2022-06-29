import { Link } from "react-router-dom";
import { propTypes } from "prop-types";

function SearchMovie({ id, year, title, poster, rating, director, actor }) {
  return (
    <div className="movie">
      <a href={id} target="_blank">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie__data">
          <h3 className="movie_title">
            {title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
          </h3>
          <p className="movie__rating">
            <span>평점</span> {rating}/10
          </p>
          <p className="movie__year">
            <span>개봉일</span> {year}
          </p>
          <p className="movie_director">
            <span>감독</span> {director}
          </p>
          <p className="movie__actor">
            <span>배우</span> {actor}
          </p>
        </div>
      </a>
    </div>
  );
}

SearchMovie.propTypes = {
  id: propTypes.string.isRequired,
  year: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  rating: propTypes.string.isRequired,
  director: propTypes.string.isRequired,
  actor: propTypes.string.isRequired,
};

export default SearchMovie;
