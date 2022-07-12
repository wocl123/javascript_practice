import React from "react";
import axios from "axios";
import styles from "./Home.module.css";
import Movie from "../components/Movie";
import Ranking from "../components/movie_rank/Ranking";
// import Test from "../components/movie_rank/Test";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    value: "",
  };

  getMovies = async () => {
    const ID_KEY = process.env.REACT_APP_NAVER_API_ID;
    const SECRET_KEY = process.env.REACT_APP_NAVER_API_SECRET;
    try {
      if (this.state.value === "") {
        this.setState({ movies: [], isLoading: false });
      } else {
        const {
          data: { items },
        } = await axios.get("/api/v1/search/movie.json", {
          params: {
            query: this.state.value,
            display: 20,
          },
          headers: {
            "X-Naver-Client-Id": ID_KEY,
            "X-Naver-Client-Secret": SECRET_KEY,
          },
        });
        this.setState({ movies: items, isLoading: false });
        console.log(items);
      }
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.getMovies();
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getMovies();
  };

  render() {
    const { movies, isLoading } = this.state;
    return (
      <div>
        <div className={styles.rank}>
          <Ranking />
          {/* <Test /> */}
        </div>
        <section className={styles.container}>
          {isLoading ? (
            <div className={styles.loader}>
              <span className={styles.loader_text}>Loading...</span>
            </div>
          ) : (
            <form onSubmit={this.handleSubmit}>
              <div className={styles.input_div}>
                <a href="/">
                  <h1>네이버 API 영화 검색</h1>
                </a>
                <input
                  className={styles.input_search}
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="영화를 검색해 주세요"
                />
              </div>
              <div className={styles.movie}>
                {movies.map((movie, index) => (
                  <Movie
                    key={index}
                    id={movie.link}
                    title={movie.title}
                    image={movie.image}
                    date={movie.pubDate}
                    director={movie.director}
                    rating={movie.userRating}
                  />
                ))}
              </div>
            </form>
          )}
        </section>
      </div>
    );
  }
}

export default Home;
