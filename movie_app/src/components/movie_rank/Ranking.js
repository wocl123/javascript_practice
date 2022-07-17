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

const Ranking = () => {
  const API_KEY = process.env.REACT_APP_MOVIE_RANKING_API;
  const [data, setData] = useState([]);

  const newsTicker = (timer) => {
    const ul = document.querySelector("#rank");
    console.log(ul);

    window.setInterval(() => {
      ul.style.transitionDuration = "400ms";
      ul.style.marginTop = "-45px";

      window.setTimeout(() => {
        ul.removeAttribute("style");
        ul.appendChild(ul.firstElementChild);
      }, 400);
    }, timer);
  };

  const fetchMovies = async () => {
    const get_date = getToday();
    try {
      const res = await axios.get(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=${get_date}`
      );
      setData(res.data.boxOfficeResult.dailyBoxOfficeList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    newsTicker(3000);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.movie}>
        <h2>영화 랭킹</h2>
        <div className={styles.rolling}>
          <ul id="rank">
            {data.map((movie, index) => (
              <li key={index} className={styles.rolling_list}>
                <span className={styles.num}>{index + 1}위. </span>
                <span>{movie.movieNm}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
