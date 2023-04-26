import { useContext } from "react";
import { User } from "../../context";
import { IcardData } from "../../interfaces";
import Li from "./styled";
import { useLocation, useNavigate } from "react-router-dom";

const Cards = ({ children, src, marca, descricao, km, name, ano, preco, siglaNanme, onClick, idAmount }: IcardData) => {

  const { setIdUser } = useContext(User)
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <Li
      key={idAmount}
    >
      {children}

      <div className="teste">
        <img className="imgCard" src={src} alt="" onClick={() => {
          console.log("clikou")
        }} />
      </div>
      <section>
        <h2 className="heading-7-600">{marca}</h2>

        <p>{descricao} </p>
      </section>

      <article>
        <article>{siglaNanme}</article>
        <span id="nameUser"
          onClick={() => {
            onClick
            if (location.pathname === "/homepage") {
              navigate("/profile/user")
              const valor: string | undefined = idAmount;
              setIdUser(valor ? valor : "");

            }
          }}
        >{name}</span>
      </article>

      <div>
        <div>
          <div> {km} KM</div>
          <div>{ano} </div>
        </div>
        <strong>R$ {preco}</strong>
      </div>
    </Li>
  );
};

export default Cards;
