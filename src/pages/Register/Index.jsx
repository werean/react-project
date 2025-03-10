import { useState } from "react";
import { isEmail } from "validator";
import { get } from "lodash";
import { Container } from "../../styles/GlobalStyles";
import { toast } from "react-toastify";
import { Form } from "./styled";
import axios from "../../services/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      formErrors = true;
      toast.error("Nome deve ter entre 3 e 255 caracteres");
    }
    if (!isEmail(email)) {
      formErrors = true;
      toast.error("E-mail inválido");
    }
    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error("Senha deve ter entre 6 e 50 caracteres");
    }
    if (formErrors) return;

    try {
      await axios.post("/users/", {
        name,
        password,
        email,
      });
      toast.success("Você realizou o seu cadastro!");
      navigate("/login"); // para redirecionar para a rota q eu quero eu preciso primeiro instanciar o useNavigate e usar a variavel para mover pelas rotas.
    } catch (error) {
      //esse trecho de codigo abaixo usa o get do lodash

      const errors = get(error, "response.data.errors", []);
      errors.map((error) => toast.error(error));
    }
  }
  return (
    <Container>
      <h1>
        Crie sua conta {name} {email} {password}
      </h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
          />
        </label>

        <label htmlFor="email">
          E-mail:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
        </label>

        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  );
}
