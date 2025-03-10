import { Container } from "../../styles/GlobalStyles";
import { isEmail } from "validator";
import { useDispatch } from "react-redux";
import { Form } from "./styled";
import { useState } from "react";
import { toast } from "react-toastify";
import * as actions from "../../store/modules/auth/actions";

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;
    if (!isEmail(email)) {
      formErrors = true;
      toast.error("E-mail inválido");
    }
    if (password.length < 3 || password.length > 50) {
      formErrors = true;
      toast.error("Senha inválida");
    }
    if (formErrors) return;
    dispatch(actions.loginRequest({ email, password }));
  }
  return (
    <Container>
      <h1>
        Login {email} {password}
      </h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          name=""
          id=""
        />
        <input
          type="text"
          value={password}
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
          name=""
          id=""
        />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}
