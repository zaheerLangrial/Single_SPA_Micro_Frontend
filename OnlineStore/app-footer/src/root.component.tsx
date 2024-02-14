import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #25274D;
  color: #FFF;
  padding: 20px;
  text-align: center;
`;
export default function Root() {
  return (
    <FooterContainer>
      &copy; 2024 My Shop. All rights reserved.
    </FooterContainer>
  );
}
