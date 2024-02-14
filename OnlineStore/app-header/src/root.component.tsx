import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: #25274D;
  color: #FFF;
  padding: 15px 20px;
`;

const NavbarBrand = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
`;
export default function Root(props) {
  return (
    <NavbarContainer>
      <NavbarBrand href="/">My Shop</NavbarBrand>
    </NavbarContainer>
  );
}
