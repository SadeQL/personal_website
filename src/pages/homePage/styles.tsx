import styled from "styled-components";
import { Link } from "react-router-dom";

const Colors = {
  text: "#F7FADC",
  btnBg: "#FFFAF4",
  btnText: "#6C756F",
};

export const Wrapper = styled.div`
  background-image: url(${(props) => props.img});
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 4em;
  color: ${Colors.text};
  text-align: center;
`;

export const Description = styled.p`
  margin-top: auto;
  font-size: 1.5em;
  color: ${Colors.text};
  text-align: center;
`;

export const StyledLink = styled(Link)`
  padding: 15px;
  text-decoration: none;
  color: ${Colors.btnText};
  background-color: ${Colors.btnBg};
  border-radius: 10px;
  font-size: 1em;
  align-items: center;
  &:hover,
  &:focus {
    background-color: ${Colors.text};
  }
`;
