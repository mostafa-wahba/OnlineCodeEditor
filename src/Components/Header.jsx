import { AppBar, Toolbar, styled } from "@mui/material";
import logo from "../assets/1157109.png"
const Container = styled(AppBar)`
  background: #060606;
  position: static;
  border-bottom: 1px solid #2f2f2f;
  height: 9vh;
`;

const Header = () => {
  
  return (
    <Container>
      <Toolbar>
        <img src={logo} alt="logo" style={{ width: 40 }} />
        <div className="title">Online Code Editor</div>
      </Toolbar>
    </Container>
  );
};

export default Header;
