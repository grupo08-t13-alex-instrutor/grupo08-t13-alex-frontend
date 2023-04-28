import { useNavigate } from "react-router-dom";
import { FooterHomePage, Header } from "../../components";
import StyledLogin from "./styled";
import ForgotPasswordForm from "../../components/ForgotPassword";
import { User, iRecoveriPasswordSendEmail } from "../../context";
import { IBodySession } from "../../interfaces/session";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { reconveriPasswordSendEmail, sessionVaidated } from "../../validations/login";
import { yupResolver } from "@hookform/resolvers/yup"
const ForgotPass = () => {
  const navigate = useNavigate();

  const { recoverPasswordSendEmail } = useContext(User)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iRecoveriPasswordSendEmail>({
    resolver: yupResolver(reconveriPasswordSendEmail),
  });

  const onSubmitFunction = async (email: iRecoveriPasswordSendEmail) => {
    recoverPasswordSendEmail(email)

    reset();

    navigate("/resetPassword")
  };

  return (
    <>
      <Header />
      <StyledLogin>
        <form className="container" onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="form-header">
            <h5>Recuperar Senha</h5>
          </div>

          <div className="form-inputs">
            <label htmlFor="login">E-mail de Recuperação</label>
            <input type="text" id="email" placeholder="Digite seu Email" {...register("email")} />
            <p>{errors.email?.message}</p>
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
