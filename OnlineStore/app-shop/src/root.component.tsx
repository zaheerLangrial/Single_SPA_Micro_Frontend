import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Heading = styled.h1`
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  color: #666;
  font-size: 1.2rem;
  line-height: 1.5;
`;


export default function Root() {
  return (
    <Container>
      <Heading>Welcome to our Shop</Heading>
      <Paragraph>
        We offer a wide range of products to meet your needs. 
        Our friendly staff are here to help you find exactly what you're looking for.
      </Paragraph>
    </Container>
  );
}
