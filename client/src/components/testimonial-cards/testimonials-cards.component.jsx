import styled from "styled-components";
import { Slide } from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
    width: 240px;
    margin: 10px 20px;
`

const Wrapper = styled.div`
    width: 100%;
`

const ReviewContainer = styled.div`
    position: relative;
    background-color: #588157;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 10px;
`
const Review = styled.p`
    color: white;
    font-size: 15px;
    line-height:1.3;
    
`
const Pointer = styled.div`
    position: absolute;
    width: 50px;
    height: 30px;
    background-color: #588157;
    rotate: -32deg;
    bottom: -7px;
    z-index: -1;
    left: 18px;
`

const ReviewerContainer = styled.div`
    display: flex;
    margin-top: 20px;
    box-sizing: border-box;
    padding: 5px 10px;
    align-items: center;
`
const ReviewerImageContainer = styled.div`
`

const ReviewerImage = styled.div`
    width: 40px;
    height: 40px;
    background-color: lightgray;
    border-radius: 50%;
    box-sizing: border-box;
    padding: 2px 7.5px;
`
const ReviewerInfo = styled.div`
    width:100%;
`
const ReviewerName = styled.p`
    letter-spacing: 1px;
    margin:0 0 0 10px;
`

const ReviewerWork = styled.p`
    margin: 0 0 0 10px;
    font-size: 14px;
    color: gray;
`

const TestimonailCard = ({id}) => {
  return (
    <Slide right delay={id*200}>
    <Container>
        <Wrapper>
            <ReviewContainer>
                <Review>
                    down on paper. melody.down on paper. bring your music. : sounds that have rhythm, harmony, and melody.
                </Review>
                <Pointer></Pointer>
            </ReviewContainer>
            <ReviewerContainer>
                <ReviewerImageContainer>
                <ReviewerImage>
                <FontAwesomeIcon icon="fa-solid fa-user" size="2xl" />
                </ReviewerImage>
                </ReviewerImageContainer>
                <ReviewerInfo>
                    <ReviewerName>
                        Shailja Pandey
                    </ReviewerName>
                    <ReviewerWork>
                        UI Design
                    </ReviewerWork>
                </ReviewerInfo>
            </ReviewerContainer>
        </Wrapper>
    </Container>
    </Slide>
  )
}

export default TestimonailCard