import type { NextPage } from "next";
import logo from "/public/logo.svg";
import gmail from "/public/gmail.svg";
import facebook from "/public/facebook.svg";
import apple from "/public/apple.svg";
import { motion } from "framer-motion";

import {
  Container,
  Social,
  LogoContainer,
  DonthaveaaccountRegist,
  LinkBtn,
  Div,
  Div14,
  Div3,
  Div4,
  Div6,
  Div7,
  Div8,
  Div9,
  Div10,
  Div11,
  Div12,
  Div13,
} from "./components/style";
import Footer from "../../components/footer";

const Login: NextPage = () => {
  const transition = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  return (
    <>
     
        <Container>
        <motion.div variants={transition} initial="hidden" animate="show">
          <Div>
            <LogoContainer>
              <Div14 src={logo}></Div14>
            </LogoContainer>
            <Div3>
              <Div4 placeholder="Email" />
              <Div4 placeholder="Senha" />
            </Div3>
            <Div6>
              <LinkBtn href={"/"}>Recover Password ?</LinkBtn>
            </Div6>
            <Div7>
              <Div8>Sign In</Div8>
              <Div9>
                <Div10 />
                <Div11>Or continue with</Div11>
                <Div12 />
              </Div9>
              <Div13>
                <Social>
                  <Div14 src={facebook}></Div14>
                </Social>
                <Social>
                  <Div14 src={gmail}></Div14>
                </Social>
                <Social>
                  <Div14 src={apple}></Div14>
                </Social>
              </Div13>
            </Div7>
            <DonthaveaaccountRegist>
              Don’t have a account ?
              <LinkBtn href={"/signup"}> Register here!</LinkBtn>
            </DonthaveaaccountRegist>
          </Div>
          </motion.div>
        </Container>
       
        <Footer />
      
    </>
  );
};

export default Login;
