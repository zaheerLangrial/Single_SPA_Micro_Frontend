import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";

const MainDiv = styled.div`
height: 50px;
  background-color: gray;
  display: flex;
  padding: 0 15px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export default function Root(props) {
  return (
    <BrowserRouter>
    <MainDiv>
      {/* <h1>{props.name}</h1> */}
      <Link to={'/'}>
        Employee App
      </Link>
        <div style={{display : "flex" , gap : 5 ,color : "white" ,}}>
          <Link to={'/'}>
            Home
          </Link>
          <Link to={'/employees'}>
            Employees
          </Link>
        </div>
    </MainDiv>
    </BrowserRouter>
  );
}
