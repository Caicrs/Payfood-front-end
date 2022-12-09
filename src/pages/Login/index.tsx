import logo from "../../assets/logo2.svg";
import lock from "../../assets/lock.svg";
import gmail from "../../assets/gmail.svg";
import facebook from "../../assets/facebook.svg";
import apple from "../../assets/apple.svg";
import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../style/colors";
import { constants } from "../../style/constants";

const mobile: string = "600px";
const desktop: string = "1024px";
const tablet: string = "825px";

const Login  = () => {
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
          <Subcontainer>
            <LogoContainer>
              <Logo src={logo} height={18} />
            </LogoContainer>
            <TextImg>
              <TitleContainer>
                <Icondiv>
                  <Icon src={lock} height={16}></Icon>
                </Icondiv>
                <Text>Login Empresarial</Text>
              </TitleContainer>
              <Description>
                Acesso restrito para estabelecimentos cadastrados
              </Description>
            </TextImg>

            <InputGrid>
              <InputContainer>
                <Input  id={"id1"} type="text" autoComplete="off" />
                <Label>{"Email"}</Label>
              </InputContainer>
              <InputContainer>
                <Input id={"id2"} type="password" autoComplete="off" />
                <Label>{"Senha"}</Label>
              </InputContainer>
              <ForgetPassword>Esqueceu a senha ?</ForgetPassword>
              <EnterBtn>Entrar</EnterBtn>
            </InputGrid>
            <SocialContainer>
              Ou entre com
              <SocialSubContainer>
                <SocialIcons src={facebook} />
                <SocialIcons src={gmail} />
                <SocialIcons src={apple} />
              </SocialSubContainer>
            </SocialContainer>
          </Subcontainer>
        </motion.div>
      </Container>
    </>
  );
};

export default Login;

const InputGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 15px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  background: ${colors.base};
  font-size: smaller;
  font-weight: normal;
  padding: 0 0.5rem;
  position: absolute;
  order: 0;
  color: ${colors.orange};
  text-shadow: none;
  opacity: 1;
  text-transform: capitalize;
  transform-origin: left top;
  transform: scale(0.8) translate3d(1.3rem, -8px, 0);
  transition: 0.3s ease all;
`;

const Input = styled.input`

border-radius: 0;
display: flex;
font-size: 12px;
padding: 0.45rem 1.3rem 0.45rem 1.3rem;
text-shadow: none;
background: transparent;
outline: 1px solid ${colors.orange};
border: 0;
border-radius: 8px;
flex: 1 1 auto;
transition:0.3s;
order: 2;
line-height:25px;
&:focus {
  color: ${colors.orange};
}

&:not(:focus) {
  color: ${colors.orange};
}
}
::placeholder {
  opacity:0.5;
}
`;

export const EnterBtn = styled.div`
  color: ${colors.primaryWhite};
  background: ${colors.orange};
  width: 100%;
  color: ${colors.base};
  text-align: center;
  font-size: 14px;
  padding: 0.8rem 0;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  margin: 2rem auto 0 auto;
  -webkit-box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.24);
  box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.24);
  :hover {
    color: ${colors.orange};
    background: transparent;
    outline: 1px solid ${colors.orange};
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${colors.base};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // Mobile
  @media screen and (min-width: 0) and (max-width: ${mobile}) {
    display: block;
    padding: 4rem 0 0 0 ;
  }
`;

const ForgetPassword = styled.div`
  margin-left: auto;
  margin-right: 0;
  width: fit-content;
  text-align: right;
  font-size: 0.7rem;
  opacity: 0.5;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const Icon = styled.img`
  width: fit-content;
  height: 8px;
  background: transparent;
  padding-right: 0.5rem;
`;

const Icondiv = styled.div`
  line-height: 0;
`;

const Text = styled.div`
  padding-left: 1rem;
  font-size: 0.9rem;
  color: ${colors.primaryWhite};
  font-weight: 700;
`;

const Description = styled.div`
  color: ${colors.primaryWhite};
  font-size: 0.75rem;
  font-weight: 200;
  padding: 1rem 0 0;
  opacity: 0.5;
  text-align: center;
  // Mobile
  @media screen and (min-width: 0) and (max-width: ${mobile}) {
    padding: 0 ;

  }
`;

export const Input2 = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 1rem;
  font-size: 0.9rem;
  margin: 0 auto;
  border-radius: 4px;
  border: none;
  background-color: #f0efff;
  color: black;
  box-shadow: 0px 0px 0px rgba(255, 255, 255, 0.1);
  text-shadow: 0px 0px 12px rgba(255, 255, 255, 0.1);
  ::placeholder {
    color: color: ${colors.base};
    font-weight: 300;
    opacity: 0.5;
    font-size: 0.9rem;
    @media (max-width: ${tablet}) and (min-width: 0) {
      font-size: 1rem;
    }
  }
  &:focus {
    outline: none;
  }
`;

export const Subcontainer = styled.div`
  width: 260px;
  border-radius: 8px;
  text-align: center;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 35px;
  background: ${colors.base};
  padding: 2rem 2rem 0 2rem;
  -webkit-box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.24);
  box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.24);
  // Mobile
  @media screen and (min-width: 0) and (max-width: ${mobile}) {
    padding: 0 2rem;
    width: 100%;
    box-sizing:border-box;
    display: block;
    background:transparent;
    box-shadow:none;
  }
`;

export const SubTextContainer = styled.div``;

export const TextImg = styled.div`
  width: 100%;
  margin: 0 auto;
  // Mobile
  @media screen and (min-width: 0) and (max-width: ${mobile}) {
    padding: 50% 0 15% 0;

  }
`;

export const TitleContainer = styled.div`
  width: fit-content;
  display: flex;
  margin: 0 auto;
`;

export const SubDescription = styled.div`
background:green;
color: ${colors.primaryWhite}
font-weight:700;
position:relative;
`;

export const SocialContainer = styled.div`
  width: 100%;
  color: ${colors.primaryWhite};
  font-size: smaller;
  text-align: center;
  // Mobile
  @media screen and (min-width: 0) and (max-width: ${mobile}) {
    padding: 25% 0 0;

  }
`;

export const SocialSubContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
  padding: 1.5rem 2rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 0px;
`;

export const SocialIcons = styled.img`
  background: transparent;
  margin: 0 auto;
  opacity: 0.5;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    opacity: 1;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(255, 0, 255, 1);
    -moz-box-shadow: 10px 10px 5px 0px rgba(255, 0, 255, 1);
    box-shadow: 10px 10px 5px 0px rgba(255, 0, 255, 1);
  }
`;

export const Logo = styled.img`
  width: fit-content;
  height: 18px;
  margin: 0 auto;
  display: block;
  background: transparent;
`;

export const LinkBtn = styled.a`
  font-family: "Sora", sans-serif;
  color: red;
`;

// IMAGE LOGO _____________________________________________
export const LogoContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
  line-height: 0;
`;
