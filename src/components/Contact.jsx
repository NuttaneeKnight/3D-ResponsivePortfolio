import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Left = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Title = styled.h1`
  height: 100vh;
  scroll-snap-align: center;
`;
const Form = styled.input`
  height: 100vh;
  scroll-snap-align: center;
`;
const Input = styled.input`
  height: 100vh;
  scroll-snap-align: center;
`;
const TextArea = styled.textarea`
  height: 100vh;
  scroll-snap-align: center;
`;
const Button = styled.button`
  height: 100vh;
  scroll-snap-align: center;
`;
const Right = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Contact = () => {
  return (
    <Section>
      <Container>
        <Left></Left>
        <Right></Right>
      </Container>
    </Section>
  );
};

export default Contact;
