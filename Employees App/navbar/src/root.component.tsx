import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  height: 50px;
  background-color: gray;
  display: flex;
  padding: 0 15px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const NavLinkContainer = styled.div`
  display: flex;
  gap: 5px;
  color: white;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Root(props) {
  return (
    <BrowserRouter>
      <HeaderContainer>
        <Link to={'/'}>
          Employee App
        </Link>
        <NavLinkContainer>
          <NavLink to={'/'}>
            Home
          </NavLink>
          <NavLink to={'/employees'}>
            Employees
          </NavLink>
        </NavLinkContainer>
      </HeaderContainer>
    </BrowserRouter>
  );
}
