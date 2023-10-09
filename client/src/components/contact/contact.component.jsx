import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sendmessage from "../../assets/two-appraisers-working-on-architecture.jpeg";
import "./contact.styles.css";

const Container = styled.div`
  width: 90%;
  margin: 50px auto;
  @media(max-width: 800px) {
    width: 96%
  }
`;

const Contactpagecontainer = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: column-reverse;
  @media(min-width: 800px) {
    flex-direction: row;
  }
`;
const Contacticon = styled.div`
  flex: 1;
    img{
      width: 100%;
    }
    @media(max-width: 800px) {
      img{
        width: 100%;
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
  color: #588157;
  font-size: 2.2rem;
  font-weight: 400;
  text-align: center;
  font-family: NunitoSans;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 70px auto;
  background-color: #588157;
  color: white;
  border-radius: 1px;
  box-sizing: border-box;
  padding-bottom: 50px;
  margin-left: 25px;
  @media(max-width: 800px) {
    margin-left: 0;
  }
`;

const Form = styled.form`
  box-sizing: border-box;
  padding: 5px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  width: 95%;
  margin: 15px auto;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  box-sizing: border-box;
  padding: 7px 10px;
  @media(max-width: 800px) {
    font-size: 16px;
  }
`;
const TextArea = styled.textarea`
  width: 95%;
  margin: 15px auto;
  border: none;
  border-radius: 4px;
  font-size: 18px;
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
  border: 2px solid #fff;
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
  width: 20%;
  display: flex;
  justify-content: space-around;
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
            <div className="mt-2"><br /></div>
            <Form>
              <Input placeholder="First Name" />
              <br />
              <Input placeholder="Last Name" />
              <br />
              <Input placeholder="Mobile" />
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
            <Locationtext>Lot No 20 &amp; 21 Gajanan Nagar,<br />Wardha Road, Nagpur, 440015</Locationtext>
          </LocationIcons>
          <LocationIcons>
            <FontAwesomeIcon icon="fa-solid fa-phone" size="2xl" />
            <Locationtext>996-027-7584</Locationtext>
            <Locationtext>917-557-7584</Locationtext>
          </LocationIcons>
          <LocationIcons>
            <FontAwesomeIcon icon="fa-solid fa-paper-plane" size="2xl" />
            <Locationtext>11acre.in@gmail.com</Locationtext>
          </LocationIcons>
        </Locationwrapper>
        <HR />
        <SocialHead>Find us On</SocialHead>
        <SocialsWrapper>
          <Socials href="https://www.instagram.com/11acre_realestate/">
            <FontAwesomeIcon icon="fa-brands fa-instagram" size="2xl" />
          </Socials>
          <Socials href="https://www.facebook.com/profile.php?id=61551818773260">
            <FontAwesomeIcon icon="fa-brands fa-facebook" size="2xl" />
          </Socials>
        </SocialsWrapper>
      </SocialContainer>
    </Container>
  );
};

export default ContactPage;

