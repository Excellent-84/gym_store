import React, { useContext } from "react";
import Button from'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { observer } from 'mobx-react-lite';
import { Link, useNavigate } from 'react-router-dom';
import { context } from "..";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";

const NavBar = observer(() => {

  const {user} = useContext(context);
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand style={{color: "pink"}} as={Link} to={SHOP_ROUTE}>GYM Store</Navbar.Brand>
        {user.setIsAuth ?
          <Nav className="al-auto" style={{color: "pink"}}>
            <Button
              variant={"outline-lite"}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button
              variant={"outline-lite"}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Выйти
            </Button>
          </Nav>
          :
          <Nav className="al-auto" style={{color: "pink"}}>
            <Button
              variant={"outline-lite"}
              onClick={() => user.setAuth(true)}
            >
              Авторизация
            </Button>
          </Nav>
        }
      </Container>
    </Navbar>
  );
})

export default NavBar;
