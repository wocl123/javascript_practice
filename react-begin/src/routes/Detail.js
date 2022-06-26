import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>제목 : {movie.title_long}</h1>
          <hr />
          <img src={movie.large_cover_image} />
          <p>
            상세 설명
            <br />
            {movie.description_full}
          </p>
          <p>평점 : {movie.rating}점</p>
          <p>업로드 날짜 : {movie.date_uploaded}</p>
          <p>Runtime : {movie.runtime}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
