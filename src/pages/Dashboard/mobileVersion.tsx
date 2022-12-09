import styled from "styled-components";
import { colors } from "../../style/colors";

const MobileVersion = () => {
  return (
    <>
      <Container>
        <h1>Mobile version</h1>
      </Container>
    </>
  );
};

export default MobileVersion;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${colors.base};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
