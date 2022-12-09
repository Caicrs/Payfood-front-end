import styled from "styled-components";
import { colors } from "../../style/colors";

const DesktopVersion = () => {
  return (
    <>
      <Container>
        <h1>Desktop version</h1>
      </Container>
    </>
  );
};

export default DesktopVersion;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${colors.base};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
