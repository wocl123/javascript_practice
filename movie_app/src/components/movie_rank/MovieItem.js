import React from "react";
import styels from "./MovieItem.module.css";

function MovieItem({ rank, movieNm, rankOldAndNew, rankInten }) {
  return (
    <div>
      <div className={styels.container}>
        <span>
          {rank}위 : {movieNm}
          <span className={styels.rankOldNew}> 순위 변동 : {rankInten}</span>
        </span>
      </div>
    </div>
  );
}
export default MovieItem;
