import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 88vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;
`;
export default function Root(props) {
  return (
    <Container>
      <Title>Hello World</Title>
      <Paragraph>
        This is a simple example of using styled-components in React to create a home screen.
      </Paragraph>
    </Container>
  //   <div className="jumbotron">
  //   <h1 className="display-4">Hello, world!</h1>
  //   <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  //   <hr className="my-4"/>
  //   <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
  //   <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  // </div>
    );
}
