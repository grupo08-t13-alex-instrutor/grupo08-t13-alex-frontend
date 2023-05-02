import { useNavigate } from "react-router-dom";
import { FooterHomePage, Header } from "../../components";
import StyledLogin from "./styled";
import { User } from "../../context";
import { IBodySession } from "../../interfaces/session";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { sessionVaidated } from "../../validations/login";
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { sessionUser } = useContext(User)
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IBodySession>({
    resolver: yupResolver(sessionVaidated),
  });

  const onSubmitFunction = async (data: IBodySession) => {
  
    sessionUser(data)

    reset();
  };

  return (
    <>
      <Header />
      <StyledLogin>
        <form className="container" onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="form-header">
            <h5>Login</h5>
          </div>

          <div className="form-inputs">
            <label htmlFor="login">Usuário</label>
            <input type="text" id="email" placeholder="Digitar usuário"  {...register("email")} />
            <p> {errors.email?.message}</p>

            {!showPassword ?
              <>
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Digitar senha" {...register("password")} />

              </> :
              <>
                <label htmlFor="password">Senha</label>
                <input type="text" id="password" placeholder="Digitar senha" {...register("password")} />
              </>
            }
            <p> {errors.password?.message}</p>

            <span className="text-body-2-500"><Link to="/forgot">Esqueci minha senha</Link></span>
          </div>

          {!showPassword ?
            <span className="SHOW" onClick={() => setShowPassword(true)}>SHOW</span>
            :
            <span className="HIDDEN" onClick={() => setShowPassword(false)}>HIDDEN</span>
          }

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
        </form>
      </StyledLogin >
      <FooterHomePage />

    </>
  );
};

export default Login;
