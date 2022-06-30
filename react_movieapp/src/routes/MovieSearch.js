import { Input, Row, Col } from "antd";
import styles from "../style/input.module.scss";
import { Fragment, useState } from "react";
import MovieCard from "../components/MovieCard";
// import jsonData from "../container/item.json";
import axios from "axios";

function MovieSearch() {
  const { Search } = Input;
  const [query, setQuery] = useState("");
  const [items, setItems] = useState();
  const ID_KEY = "17_OfwnPcqdWNWUTP_bH";
  const SECRET_KEY = "mwqqAu4SJM";
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  const handleButton = async () => {
    try {
      const res = await axios.get(
        `https://openapi.naver.com/v1/search/movie.json`,
        {
          params: {
            query: query,
            display: 20,
          },
          headers: {
            "X-Naver-Client-Id": ID_KEY,
            "X-Naver-Client-Secret": SECRET_KEY,
          },
        }
      );
      if (res && res.status === 200) {
        const { data } = res;
        console.log(data);
        setItems(data.items);
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <Fragment>
      <div className={styles.input}>
        <Search
          placeholder="검색할 영화를 입력하세요"
          onSearch={(value) => console.log(value)}
          onChange={handleQuery}
          onClick={handleButton}
          style={{ width: 250 }}
        />
      </div>
      <div>
        <Row>
          {items &&
            items.map((item) => {
              return (
                <Col xs={24} sm={12} md={6} lg={4} xl={4}>
                  <MovieCard item={item}></MovieCard>;
                </Col>
              );
            })}
        </Row>
      </div>
    </Fragment>
  );
}

export default MovieSearch;
