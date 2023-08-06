import styled from "styled-components";
import TestimonailCard from "../testimonial-cards/testimonials-cards.component";

const Container = styled.div`
    width: 100%;
    margin-top: 70px;
`

const Wrapper = styled.div`
    width: 90%;
    margin: auto;
`

const Title = styled.h1`
    width: 90%;
    margin: auto;
    color: #588157;
    text-align: center;
    text-decoration: none;
    font-size: 2.2rem;
    text-transform: none;
    font-weight: 400;
`

const Subtitle = styled.p`
    width: 70%;
    margin: auto;
    text-align: center;
    color: #535353;
    margin-top: 30px;
    letter-spacing: 0.5px;
`
const TestimoniesContainer = styled.div`
    margin-top: 50px;
    overflow-x: scroll;
`
const TestimoniesWrapper = styled.div`
    width: 850px;
    display: flex;
    margin-bottom: 35px;
`

const TESTIMONIALS = [0,1,2]


const Testimonials = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                Client Testimonials
            </Title>
            <Subtitle>
                Have a look at what people say about us!
            </Subtitle>
            <TestimoniesContainer>
                <TestimoniesWrapper>
                    {
                        TESTIMONIALS.map((testimonial) => {
                            return (
                                <TestimonailCard key={testimonial} id={testimonial} />
                            )
                        })
                    }
                </TestimoniesWrapper>
            </TestimoniesContainer>
        </Wrapper>
    </Container>
  )
}

export default Testimonials