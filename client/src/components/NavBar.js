import React, { useContext } from "react";
import Button from'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { context } from "..";
import { SHOP_ROUTE } from "../utils/consts";

const NavBar = observer(() => {

  const {user} = useContext(context);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand style={{color: "pink"}} as={Link} to={SHOP_ROUTE}>GYM Store</Navbar.Brand>
        {user.isAuth ?
          <Nav className="al-auto" style={{color: "pink"}}>
            <Button variant={"outline-lite"}>Админ панель</Button>
            <Nav.Link href="#features" className="al-2">Выйти</Nav.Link>
          </Nav>
          :
          <Nav className="al-auto" style={{color: "pink"}}>
            <Button variant={"outline-lite"}>Админ панель</Button>
            <Nav.Link variant={"outline-lite"}>Предметы</Nav.Link>
            <Nav.Link href="#features" onClick={() => user.setAuth(true)}>Авторизация</Nav.Link>
          </Nav>
        }
      </Container>
    </Navbar>
  );
})

export default NavBar;