import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";

const Auth = () => {

  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () =>  {
    if (isLogin) {
      const response = await login();
    } else {
      const response = await registration(email, password);
      console.log(response);
    }
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите email..."
            value={email}
            onChange={e => setEmail(e.target.value)}

          >
          </Form.Control>

          <Form.Control
            className="mt-3"
            placeholder="Введите пароль..."

            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          >
          </Form.Control>

          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            <div>
              {isLogin ?
                <>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink> </>
              :
                <>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink> </>
              }
            </div>

            <Button
              variant={"outline-success"}
              onClick={click}
            >
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>

        </Form>
      </Card>
    </Container>
  );
}

export default Auth;
