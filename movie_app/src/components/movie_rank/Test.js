import React from "react";
import styles from "./Test.module.scss";

function Test() {
  const newsTicker = (timer) => {
    const $ul = document.querySelector("#ul");
    console.log($ul);
    window.setInterval(() => {
      $ul.style.transitionDuration = "400ms";
      $ul.style.marginTop = "-20px";
      //   ul.style.transitionDuration("400ms");
      window.setTimeout(() => {
        $ul.style.transitionDuration = "";
        $ul.style.marginTop = "";
        // send the first element to the back 400ms later.
        $ul.appendChild($ul.querySelector("li:first-child"));
      }, 400);
    }, timer);
  };
  newsTicker(3000);
  return (
    <div>
      <h1>실검 예제</h1>
      <div className={styles.rolling}>
        <ul id="ul" styles={styles.rolling_list}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
        </ul>
      </div>
    </div>
  );
}

export default Test;
