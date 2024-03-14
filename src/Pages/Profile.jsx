import React from "react";
import NavBar from "../Components/NavBar";
import Main from "../Components/Main";
import image from "../assets/image.png";
import styled from "styled-components";

import { Link } from "react-router-dom";
import MiniStat from "../Components/MiniStat";
import gfgLogo from "../assets/gfg.png";
import leetcodeLogo from "../assets/leetcode.png";
import codeforcesLogo from "../assets/codeforces.png";

const Cumulative = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: max-content;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 200px;
  padding-bottom: 20px;
  overflow: hidden;
  border-bottom: solid 1px ${(props) => props.theme.text};
  margin-bottom: 40px;
  .info-section {
    display: flex;
    flex-direction: column;
    h3 {
      color: ${(props) => props.theme.accent};
    }
  }
  img {
    height: 100%;
  }
`;

const Individuals = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: max-content;

  h2 {
    margin-bottom: 30px;
  }

  a {
    width: 100%;
  }
`;

const Profile = ({ themeDark, setThemeDark }) => {
  return (
    <>
      <NavBar themeDark={themeDark} setThemeDark={setThemeDark} />
      <Main>
        <Info>
          <div className="info-section">
            <h1>Name Name</h1>
            <h3>@username</h3>
            <p>email@mail.com</p>
          </div>
          <img src={image} alt="profile pic" />
        </Info>
        <Individuals>
          <h2>Individual Progress</h2>
          <Link to="/info/gfg">
            <MiniStat siteLogo={gfgLogo} />
          </Link>
          <Link to="/info/leetcode">
            <MiniStat siteLogo={leetcodeLogo} />
          </Link>
          <Link to="/info/codeforces">
            <MiniStat siteLogo={codeforcesLogo} />
          </Link>
        </Individuals>

        <Cumulative>
          <h2>Cumulative Profress</h2>
        </Cumulative>
      </Main>
    </>
  );
};

export default Profile;
