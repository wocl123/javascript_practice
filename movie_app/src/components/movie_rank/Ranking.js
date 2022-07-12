import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Ranking.module.scss";

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
  var week_ago = weekYear + weekMonth + weekDay;

  return week_ago;
}

function Ranking() {
  const API_KEY = process.env.REACT_APP_MOVIE_RANKING_API;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const newsTicker = () => {
      const $ul = document.querySelector("#rankul");
      console.log($ul);
      window.setInterval(() => {
        $ul.style.transitionDuration = "400ms";
        $ul.style.marginTop = "-34px";

        window.setTimeout(() => {
          $ul.style.transitionDuration = "";
          $ul.style.marginTop = "";
          // send the first element to the back 400ms later.
          $ul.appendChild($ul.querySelector("li:first-child"));
        }, 400);
      }, 2500);
    };
    newsTicker();
  }, []);

  useEffect(() => {
    const get_date = getToday();
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=${get_date}`
        );
        setData(res.data.boxOfficeResult.dailyBoxOfficeList);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovies();
  }, []);

  // useEffect(() => {
  //   newsTicker();
  // }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.movie}>
          <h2>영화 랭킹</h2>
          <div className={styles.rolling}>
            <ul id="rankul">
              {data.map((movie, index) => (
                <li key={index} className={styles.rolling_list}>
                  <span className={styles.num}>{index + 1}위. </span>
                  <span>{movie.movieNm}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ranking;
