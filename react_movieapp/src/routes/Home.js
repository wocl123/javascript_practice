import React from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import styles from "../style/Home.module.scss";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("http://localhost:3000");
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className={styles.container}>
        {isLoading ? (
          <div className={styles.loader}>
            <span className={styles.loader__text}>Loading...</span>
          </div>
        ) : (
          <div>
            <h1>Like</h1>
            <div className={styles.movies}>
              {movies.map((movie) => (
                <MovieCard
                  key={movie.title}
                  title={movie.title}
                  link={movie.link}
                  image={movie.image}
                  pubDate={movie.pubDate}
                  userRating={movie.userRating}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Home;
