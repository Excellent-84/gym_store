import React, { useContext, useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { observer } from 'mobx-react-lite';
import { context } from "..";

const Auth = observer(() => {

  const {user} = useContext(context);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () =>  {
    let data;
    if (isLogin) {
      data = await login(email, password);
    } else {
      data = await registration(email, password);
      console.log(data);
    }
    user.setUser(user)
    user.setIsAuth(true)
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
})

export default Auth;
