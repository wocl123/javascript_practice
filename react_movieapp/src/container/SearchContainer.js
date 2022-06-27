import { Input, Row, Col } from "antd";
import { Fragment, useState } from "react";
import styles from "../style/Input.module.css";
import MovieCard from "../components/MovieCard";
import Data from "./item.json";
import axios from "axios";

function SearchContainer() {
  const { Search } = Input;
  const [query, setQuery] = useState("");
  const [items, setItems] = useState();

  const onChange = (event) => {
    // setQuery(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Fragment>
      <div className={styles.input}>
        <Search
          placeholder="검색할 영화를 입력하세요"
          enterButton
          onChange={onChange}
          style={{ width: 250 }}
        />
      </div>
      <div>
        <Row>
          {Data.items.map((item, id) => {
            return (
              <Col xs={24} sm={12} md={6} lg={4} xl={4}>
                <MovieCard item={item}></MovieCard>
              </Col>
            );
          })}
        </Row>
      </div>
    </Fragment>
  );
}

export default SearchContainer;
