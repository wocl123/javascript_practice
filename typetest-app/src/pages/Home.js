import React from "react";
import styles from "../styles/Home.module.scss";
import styled from "styled-components";
import LogoImage from "../asset/main-image.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  const handleClickButton = () => {
    nav("/question");
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>성인 애착유형 테스트</span>
      </div>
      <MainImage>
        <img src={LogoImage} alt="메인이미지" className={styles.image} />
      </MainImage>
      <p>이 테스트는 자신에 대한 이해도를 높입니다.</p>
      <p>
        나와 다른사람과의 관계, 그리고 내 자신과의 관계는 어떻게 형성되어
        있을까요?
      </p>
      <button onClick={handleClickButton}>테스트 시작하기</button>
    </div>
  );
};

export default Home;

const MainImage = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;
