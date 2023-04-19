import { Header } from "../../components";
import StyledRegister from "./styled";

const Register = () => {
  return (
    <>
      <Header />
      <StyledRegister>
        <form action="" className="register-form">
          <div className="form-header">
            <h5 className="subtitle">Cadastro</h5>
          </div>
          <div className="form-inputs">
            <span className="text-body-2-500">Informações pessoais</span>

            <label htmlFor="name">Nome</label>
            <input name="name" type="text" placeholder="Ex: Fulano Silva" />

            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Ex: fulano@email.com"
            />

            <label htmlFor="cpf">Cpf</label>
            <input name="cpf" type="text" placeholder="000.000.000-00" />

            <label htmlFor="telephone">Celular</label>
            <input
              name="telephone"
              type="text"
              placeholder="(DDD) 90000-0000"
            />

            <label htmlFor="birth">Data de nascimento</label>
            <input name="birth" type="text" placeholder="00/00/00" />

            <label htmlFor="description">Descrição</label>
            <textarea
              name="description"
              placeholder="Digitar descrição"
              maxLength={300}
            />

            <span>Informações de endereço</span>

            <label htmlFor="cep">Cep</label>
            <input name="cep" type="text" placeholder="00000-00" />

            <div className="container-2-columns">
              <div className="column">
                <label htmlFor="state">Estado</label>
                <input name="state" type="text" placeholder="Digitar estado" />
              </div>

              <div className="column">
                <label htmlFor="city">Cidade</label>
                <input name="city" type="text" placeholder="Digitar cidade" />
              </div>
            </div>

            <label htmlFor="street">Rua</label>
            <input name="street" type="text" placeholder="Digitar rua" />

            <div className="container-2-columns">
              <div className="column">
                <label htmlFor="number">Número</label>
                <input name="number" type="text" placeholder="Digitar número" />
              </div>

              <div className="column">
                <label htmlFor="complement">Complemento</label>
                <input
                  name="complement"
                  type="text"
                  placeholder="Ex: apart 307"
                />
              </div>
            </div>

            <div className="account-type">
              <span>Tipo de conta</span>
              <div className="container-2-columns">
                <div className="column">
                  <button className="buyer">Comprador</button>
                </div>

                <div className="column">
                  <button className="avertiser">Anunciante</button>
                </div>
              </div>
            </div>

            <label htmlFor="password">Senha</label>
            <input type="text" placeholder="Digitar senha" />

            <label htmlFor="confirm-password">Nome</label>
            <input name="password" type="text" placeholder="Digitar senha" />

            <button className="submit">Finalizar cadastro</button>
          </div>
        </form>
      </StyledRegister>
    </>
  );
};

export default Register;
