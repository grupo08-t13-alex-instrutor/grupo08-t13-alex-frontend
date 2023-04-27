import { useNavigate } from "react-router-dom";
import { FooterHomePage, Header } from "../../components";
import StyledLogin from "./styled";
import ForgotPasswordForm from "../../components/ForgotPassword";
import { User } from "../../context";
import { IBodySession } from "../../interfaces/session";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { sessionVaidated } from "../../validations/login";
import { yupResolver } from "@hookform/resolvers/yup"

const ForgotPass = () => {
  const navigate = useNavigate();


  return (
    <>
      <Header />
      <StyledLogin>
        <form className="container">
          <div className="form-header">
            <h5>Recuperar Senha</h5>
          </div>

          <div className="form-inputs">
            <label htmlFor="login">E-mail de Recuperação</label>
            <input type="text" id="email" placeholder="Digite seu Email"  />
         
          </div>

          <div className="form-footer">
            <button type="submit" className="send">
              Enviar
            </button>

            <span className="text-body-2">Ainda não possui conta?</span>

          
            <button
              type="button"
              className="register"
              onClick={() => navigate("/register")}
            >
              
              Cadastrar
            </button>
            <button
              type="button"
              className="login"
              onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        </form>
      </StyledLogin >
      <FooterHomePage />

    </>
  );
};

export default ForgotPass;
