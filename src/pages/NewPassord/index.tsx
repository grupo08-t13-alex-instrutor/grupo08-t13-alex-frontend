import { useNavigate } from "react-router-dom";
import { FooterHomePage, Header } from "../../components";
import StyledLogin from "./styled";
// import ForgotPasswordForm from "../../components/ForgotPassword";
import { User } from "../../context";
import { IBodySession } from "../../interfaces/session";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { sessionVaidated } from "../../validations/login";
import { yupResolver } from "@hookform/resolvers/yup"

const NewPass = () => {
  const navigate = useNavigate();


  return (
    <>
      <Header />
      <StyledLogin>
        <form className="container">
          <div className="form-header">
            <h5>Nova Senha</h5>
          </div>

          <div className="form-inputs">
            <label htmlFor="login">Nova Senha</label>
            <input type="password" id="newPassword" placeholder="Digite sua nova Senha"  />
         
          </div>

          <div className="form-footer">
            <button type="submit" className="resetPass">
              Redefinir Senha
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

export default NewPass;
