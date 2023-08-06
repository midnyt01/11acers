import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sendmessage from "../../assets/mail.png";
import "./contact.styles.css";

const Container = styled.div`
  width: 90%;
  margin: 50px auto;
  @media(max-width: 800px) {
    width: 95%
  }
`;

const Contactpagecontainer = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  @media(min-width: 800px) {
    flex-direction: row;
    padding: 15px;
  }
  
`;
const Contacticon = styled.div`
  flex: 1;
    img{
      width: 400px;
      height: 400px;
    }
    @media(max-width: 800px) {
      img{
        width: 180px;
        height: 180px;
        margin-bottom: 40px;
      }
    }
`;
const Contactcontainer = styled.div`
  flex: 2;
`;
const Title = styled.h1`
  width: 90%;
  margin: auto;
  color: #000;
  text-transform: uppercase;
  text-align: center;
  text-decoration: underline;
  letter-spacing: 1px;
  font-family: NunitoSans;
  font-size: 27px;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 70px auto;
  background-color: #588157;
  color: white;
  border-radius: 1px;
  box-sizing: border-box;
  padding-bottom: 50px;
  @media(max-width: 800px) {
    width: 100%;
  }
`;

const WrapperTitle = styled.h2`
  width: 90%;
  margin: 35px auto;
  font-weight: 200;
  text-align: center;
  @media(max-width: 800px) {
    width: 95%;
    font-size: 18px;
  }
`;
const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 5px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  width: 90%;
  margin: 17px auto;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  box-sizing: border-box;
  padding: 7px 10px;
  @media(max-width: 800px) {
    font-size: 16px;
  }
`;
const TextArea = styled.textarea`
  width: 90%;
  margin: 17px auto;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  box-sizing: border-box;
  padding: 7px 10px;
  height: 120px;
  @media(max-width: 800px) {
    font-size: 16px;
  }
`;
const SendButton = styled.div`
  margin: 40px auto;
  margin-bottom: 20px;
  background-color: #588157;
  box-sizing: border-box;
  padding: 7px 70px;
  font-weight: bold;
  border-radius: 10px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  @media(max-width: 800px) {
    padding: 10px 50px;
    font-size: 18px;
  }
`;
const HR = styled.hr`
    width: 50%;
    margin: 30px auto;
`;

const SocialContainer = styled.div`
  background: #588157;
  width: 90%;
  margin: auto;
  color: #FFF;
  display: flex;
  border-radius: 4px;
  padding: 20px;
  flex-direction: column;
  align-items: center;
`;
const SocialHead = styled.h3`
  width: 90%;
  margin: 30px auto;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
`;

const Locationwrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media(min-width: 800px) {
    flex-direction: row;
  }
`;

const LocationIcons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
`;

const Locationtext = styled.a`
    font-size: 18px;
    color: #fff;
    margin: 8px 0;
`;

const SocialsWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;

const Socials = styled.a`
  color: #fff;
`;

const ContactPage = () => { 
  return (
    <Container>
      <Contactpagecontainer>
        <Contacticon>
        <img src={Sendmessage} alt="tms" className="swami-pic" />
        </Contacticon>
        <Contactcontainer>
          <Title>Contact Us</Title>
          <Wrapper>
            <div className="mt-2"></div>
            <WrapperTitle>Send Us a Message</WrapperTitle>
            <Form>
              <Input placeholder="First Name" />
              <br />
              <Input placeholder="Last Name" />
              <br />
              <Input placeholder="Email" />
              <br />
              <TextArea placeholder="write your message here" />
              <br />
              <SendButton>Get In Touch</SendButton>
            </Form>
          </Wrapper>
        </Contactcontainer>
      </Contactpagecontainer>
      <SocialContainer>
        <Locationwrapper>
          <LocationIcons>
            <FontAwesomeIcon icon="fa-solid fa-map-location-dot" size="2xl" />
            <Locationtext>Anywhere, Locality Nagar, City name</Locationtext>
          </LocationIcons>
          <LocationIcons>
            <FontAwesomeIcon icon="fa-solid fa-phone" size="2xl" />
            <Locationtext>123 456-7890</Locationtext>
          </LocationIcons>
          <LocationIcons>
            <FontAwesomeIcon icon="fa-solid fa-paper-plane" size="2xl" />
            <Locationtext>11acres@gmail.com</Locationtext>
          </LocationIcons>
        </Locationwrapper>
        <HR />
        <SocialHead>Find us On</SocialHead>
        <SocialsWrapper>
          <Socials>
            <FontAwesomeIcon icon="fa-brands fa-instagram" size="2xl" />
          </Socials>
          <Socials>
            <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2xl" />
          </Socials>
          <Socials>
            <FontAwesomeIcon icon="fa-brands fa-twitter" size="2xl" />
          </Socials>
        </SocialsWrapper>
      </SocialContainer>
    </Container>
  );
};

export default ContactPage;

