import { useNavigate } from "react-router-dom";
import { Header } from "../../components";
import StyledLogin from "./styled";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <StyledLogin>
        <div className="container">
          <div className="form-header">
            <h5>Login</h5>
          </div>

          <div className="form-inputs">
            <label htmlFor="login">Usuário</label>
            <input type="text" placeholder="Digitar usuário" />

            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="Digitar senha" />

            <span className="text-body-2-500">Esqueci minha senha</span>
          </div>

          <div className="form-footer">
            <button type="submit" className="login">
              Entrar
            </button>

            <span className="text-body-2">Ainda não possui conta?</span>

            <button
              type="button"
              className="register"
              onClick={() => navigate("/register")}
            >
              Cadastrar
            </button>
          </div>
        </div>
      </StyledLogin>
    </>
  );
};

export default Login;
