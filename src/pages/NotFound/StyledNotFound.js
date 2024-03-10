import styled from 'styled-components';
import img from './404-Website-Page-Template.jpg';

export const ImgWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  text-align: center;

  h2 {
    margin-top: 50px;
  }

  span {
    min-width: 200px;
    a {
      padding: 2px;
      color: white;
      transition: color 0.5s, background-color 0.5s;
      border-radius: 3px;
      &:hover {
        background-color: white;
        color: #573b4a;
      }
    }
  }
`;
