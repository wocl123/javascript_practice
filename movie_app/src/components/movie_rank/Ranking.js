import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
import styles from "./Ranking.module.css";

function getToday() {
  var date = new Date();
  var weekDate = date.getTime() - 7 * 24 * 60 * 60 * 1000;
  date.setTime(weekDate);

  var weekYear = date.getFullYear();
  var weekMonth = date.getMonth() + 1;
  var weekDay = date.getDate();
  if (weekMonth < 10) {
    weekMonth = "0" + weekMonth;
  }
  if (weekDay < 10) {
    weekDay = "0" + weekDay;
  }
  var result = weekYear + weekMonth + weekDay;
  return result;
}

function Ranking() {
  const API_KEY = process.env.REACT_APP_MOVIE_RANKING_API;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get_date = getToday();
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=${get_date}`
          // {
          //   params: {
          //     key: API_KEY,
          //     targetDt: today_date,
          //   },
          // }
        );
        setData(res.data.boxOfficeResult.dailyBoxOfficeList);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.movie}>
          {data.map((movie, index) => (
            <MovieItem
              key={index}
              rank={movie.rank}
              movieNm={movie.movieNm}
              rankOldAndNew={movie.rankOldAndNew}
              rankInten={movie.rankInten}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Ranking;
