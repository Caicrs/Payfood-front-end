import styled from "styled-components";
import { colors } from "../../../styles/colors";
import Link from "next/link";
import Image from "next/image";
import { constants } from "../../../styles/constants";

const mobile: string = "768px";
const desktop: string = "1024px";
const tablet: string = "825px";

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  background: rgb(20, 24, 27);
  background: linear-gradient(
    0deg,
    rgba(20, 24, 27, 1) 0%,
    rgba(49, 54, 58, 1) 100%
  );
  @media (min-width: ${desktop}) {
    width: 100%;
    height: 100vh;
  }
`;

export const LinkBtn = styled(Link)`
  font-family: "Sora", sans-serif;
  color: red;
`;

export const Div = styled.div`
  @media (min-width: 0) and (max-width: ${mobile}) {
    width: 100vw;
    align-items: center;
    padding: 25px;
    justify-content: center;
    display: block;
    width: 82%;
    margin: 0 auto;
  }
  @media (min-width: ${mobile}) and (max-width: ${desktop}) {
    align-items: center;
    padding: 25% 0 0 0;
    justify-content: center;
    display: block;
    width: 62%;
    height: 85vh;
    margin: 0 auto;
  }
  @media (min-width: ${desktop}) {
    align-items: center;
    padding: 25px;
    padding-top: 8%;
    justify-content: center;
    display: block;
    width: 20%;
    margin: 0 auto;
    height: fit-content;
  }
`;

// IMAGE LOGO _____________________________________________
export const LogoContainer = styled.div`
  width: fit-content;
  margin: 2rem auto 0 auto;
  @media (min-width: ${desktop}) {
    margin: 0 auto 2rem auto;
  }
`;

export const Div2 = styled(Image)`
  width: 100%;
  height: 100%;
`;
// INPUT TEXT _____________________________________________
export const Div3 = styled.div`
  display: grid;
  padding: 20% 0 0 0;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 20px;
  @media (min-width: ${desktop}) {
    padding: 10% 0 0 0;
  }
`;

export const Div4 = styled.input`
  width: 100%;
  border: none;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${colors.orange_1};
  background-color: transparent;
  &:focus {
    outline: none;
  }
  ::placeholder{
    color:${colors.orange_1};
  }
`;
// RECOVERY PASSWORD _____________________________________________
export const Div6 = styled.div`
  width: 100%;
  padding: 1rem 0 0 0;
  font-size: small;
  opacity: 0.5;
  text-align: right;
`;
// IMAGE LOGO _____________________________________________
export const Div7 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  width: 100%;
  align-items: center;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
  @media (min-width: ${desktop}) {
    padding: 20px auto;
  }
`;

export const Div8 = styled.button`
  width: 100%;
  padding: 1rem 0;
  margin: 0 auto 20% auto;
  border: none;
  border-radius: 5px;
  background-color: ${colors.orange_1};
  color: ${colors.baseBg1};
  font-size: 16px;
  text-align: center;
  font-family: "Sora", sans-serif;
  -webkit-box-shadow: ${constants.boxShadow};
  -moz-box-shadow: ${constants.boxShadow};
  box-shadow: ${constants.boxShadow};
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: ${colors.orange_1};
    outline: 1px solid ${colors.orange_1};
  }
  @media (min-width: ${desktop}) {
    width: 100%;
    margin: 0 auto 10% auto;
  }
`;

export const Div9 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: stretch;
  width: 100%;
  align-items: center;
  padding-top: 35px;
  padding-bottom: 15px;
`;

export const Div10 = styled.div`
  display: flex;
  max-width: 64px;
  height: 0.1rem;
  width: 64px;
  background-color: ${colors.orange_1};
`;

export const Div11 = styled.div`
  max-width: 138px;
  margin-left: 11px;
  color: ${colors.orange_1};
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 9%;
  text-align: left;
  font-family: "Sora", sans-serif;
`;

export const Div12 = styled.div`
  display: flex;
  max-width: 64px;
  height: 0.1rem;
  width: 64px;
  margin-left: 11px;
  background-color: ${colors.orange_1};
`;

export const Div13 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 0px;
  width: 100%;
  @media (min-width: ${desktop}) {
    padding: 0;
  }
`;

export const Social = styled.div`
  height: 55px;
  text-align: center;
  -webkit-box-shadow: ${constants.boxShadow};
  -moz-box-shadow: ${constants.boxShadow};
  box-shadow: ${constants.boxShadow};
  letter-spacing: 0;
  word-spacing: 0;
  font-size: 0;
  display: flex;
  border: 1px solid ${colors.baseBg1};
  justify-content: center;
  border-radius: 5px;
  transition:0.3s;
  cursor: pointer;
  &:hover{
    -webkit-box-shadow: ${constants.boxShadow2};
  -moz-box-shadow: ${constants.boxShadow2};
  box-shadow: ${constants.boxShadow2};
  }
`;

export const Div14 = styled(Image)`
  width: fit-content;
  height: 100%;
  margin: 0 auto;
  display: block;
`;

export const Div15 = styled.div`
  display: flex;
  max-width: 66.66666412353516px;
  height: 35px;
  width: 66.66666412353516px;
  margin-left: 23px;
  border-radius: 10px;
  box-shadow: 0px 10px 13px 0px rgba(0, 0, 0, 0.12999999523162842);
  background-color: rgba(255, 255, 255, 1);
`;

export const Div16 = styled.div`
  display: flex;
  max-width: 66.66666412353516px;
  height: 35px;
  width: 66.66666412353516px;
  margin-left: 23px;
  border-radius: 10px;
  box-shadow: 0px 10px 13px 0px rgba(0, 0, 0, 0.12999999523162842);
  background-color: rgba(255, 255, 255, 1);
`;

export const DonthaveaaccountRegist = styled.div`
  margin: 0 auto 4rem auto;
  font-size: small;
  opacity: 0.5;
  letter-spacing: 0%;
  text-align: center;
  @media (min-width: ${desktop}) {
    margin: 0 auto;
  }
`;
