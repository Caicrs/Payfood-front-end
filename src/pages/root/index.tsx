import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../style/colors";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../types/routes";

const Root = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Subcontainer>
        <Link to={"/general"}>
          <Room>General</Room>
        </Link>
        <Link to={"/mk1"}>
          <Room>Marketplace-1</Room>
        </Link>
        <Link to={"/mk2"}>
          <Room>Marketplace-2</Room>
        </Link>
        <Link to={"/mk3"}>
          <Room>Marketplace-3</Room>
        </Link>
      </Subcontainer>
    </Container>
  );
};

export default Root;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Subcontainer = styled.div`
  text-align: center;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 25px;
`;

export const Room = styled.div`
  color: white;
  box-sizing: border-box;
  width: 100%;
  padding: 2rem 2rem;
  border-radius: 8px;
  background: ${colors.base};
  -webkit-box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.24);
  box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.24);
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: ${colors.primaryWhite};
    color: ${colors.base};
    transform: scale(1.1);
  }
`;
