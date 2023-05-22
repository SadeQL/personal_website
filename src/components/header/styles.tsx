import styled from "styled-components";
import { Link } from "react-router-dom";

const Colors = {
  bg: "#27363B",
  text: "#F7FADC",
  hover: "#333D3D",
};

export const NavWrapper = styled.div`
  display: flex;
  background-color: ${Colors.bg};
  height: 10vh;
`;

export const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 15px;
  text-decoration: none;
  color: ${Colors.text};
  font-size: 1.2em;
  align-items: center;
  &:hover,
  &:focus {
    background-color: ${Colors.hover};
  }
`;

export const Logo = styled.div`
  max-width: 5%;
  & > img {
    max-width: 50%;
    max-heigth: 50%;
    object-fit: contain;
  }
`;
