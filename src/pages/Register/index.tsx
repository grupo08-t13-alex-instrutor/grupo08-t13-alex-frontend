import { useContext, useState } from "react";
import { FooterHomePage, Header } from "../../components";
import StyledRegister from "./styled";
import { User } from "../../context";
import { useForm } from "react-hook-form";
import { iUserRegisterReq, iUserRegisterValidatedReq } from "../../interfaces/register";
import { validacaoCadastro } from "../../validations/user";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup"

const Register = () => {
 
  const [buyerValue, setBuyerValue] = useState(true)

  const { registerUser } = useContext(User)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iUserRegisterValidatedReq>({
    resolver: yupResolver(validacaoCadastro),
  });


  const onSubmitFunction = (data: iUserRegisterReq) => {
    registerUser({ ...data, buyer: buyerValue })

    reset();
  };
  return (
    <>
      <Header />
      <StyledRegister>
        <form action="" className="register-form" onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="form-header">
            <h5 className="subtitle">Cadastro</h5>
          </div>
          <div className="form-inputs">
            <span className="text-body-2-500">Informações pessoais</span>

            <label htmlFor="name">Nome</label>
            <input id="name" type="text" placeholder="Ex: Fulano Silva" {...register("name")} />
            <p> {errors.name?.message}</p>

            <label htmlFor="email">Email</label>
            <input
              id="email"
              {...register("email")}
              type="text"
              placeholder="Ex: fulano@email.com"
            />
            <p> {errors.email?.message}</p>

            <label htmlFor="cpf">Cpf</label>
            <input type="text" id="cpf" placeholder="000.000.000-00" {...register("cpf")} />
            <p> {errors.cpf?.message}</p>

            <label htmlFor="telephone">Celular</label>
            <input
              type="text"
              id="telephone"
              {...register("telephone")}
              placeholder="(DDD) 90000-0000"
            />
            <p> {errors.telephone?.message}</p>

            <label htmlFor="birth">Data de nascimento</label>

            <input type="text" id="date_of_birth" placeholder="00/00/00" {...register("date_of_birth")} />
            <p> {errors.date_of_birth?.message}</p>

            <label htmlFor="description">Descrição</label>
            <textarea
              placeholder="Digitar descrição"
              id="description"
              {...register("description")}
              maxLength={300}
            />
            <p> {errors.description?.message}</p>
            <span>Informações de endereço</span>

            <label htmlFor="cep">Cep</label>
            <input type="text" placeholder="00000-00" id="cep" {...register("cep")} />
            <p> {errors.cep?.message}</p>

            <div className="container-2-columns">
              <div className="column">
                <label htmlFor="state">Estado</label>
                <input type="text" placeholder="Digitar estado" id="state"  {...register("state")} />
                <p> {errors.state?.message}</p>
              </div>
              <div className="column">
                <label htmlFor="city">Cidade</label>
                <input type="text" placeholder="Digitar cidade" id="city" {...register("city")} />
                <p> {errors.city?.message}</p>
              </div>
            </div>

            <label htmlFor="street">Rua</label>
            <input type="text" placeholder="Digitar rua" id="street" {...register("street")} />
            <p> {errors.street?.message}</p>
            <div className="container-2-columns">
              <div className="column">
                <label htmlFor="number">Número</label>
                <input type="text" placeholder="Digitar número" id="number" {...register("number")} />
                <p> {errors.number?.message}</p>
              </div>
              <div className="column">
                <label htmlFor="complement">Complemento</label>
                <input
                  type="text"
                  id="complement"
                  {...register("complement")}
                  placeholder="Ex: apart 307"
                />
                <p> {errors.complement?.message}</p>
              </div>
            </div>
            <div className="account-type">
              <span>Tipo de conta</span>
              <div className="container-2-columns">
                <div className="column">
                  <button className="buyer" value="true" id="buyer" onClick={(e) => {
                    e.preventDefault()
                    setBuyerValue(true)
                  }}>Comprador</button>
                </div>

                <div className="column">
                  <button className="avertiser" id="noBuyer" onClick={(e) => {
                    e.preventDefault()
                    setBuyerValue(false)
                  }} >Anunciante</button>
                </div>
              </div>
            </div>

            <label htmlFor="password">Senha</label>
            <input type="text" placeholder="Digitar senha" id="password" {...register("password")} />
            <p> {errors.password?.message}</p>
            <label htmlFor="confirm-password">Comfirmar senha</label>
            <input type="text" id="confirmPassword" placeholder="Digitar senha"  {...register("confirmPassword")} />
            <p> {errors.confirmPassword?.message}</p>
            <button className="submit" >Finalizar cadastro</button>
          </div>
        </form>
      </StyledRegister>
      <FooterHomePage />
    </>
  );
};

export default Register;
