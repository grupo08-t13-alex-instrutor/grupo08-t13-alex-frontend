import { IcardData } from "../../interfaces";
import Li from "./styled";

const Cards = ({ src, marca, descricao, km, name, ano, preco }: IcardData) => {
  return (
    <Li>
      <div className="teste">
        <img src={src} alt="" />
      </div>

      <section>
        <h2 className="heading-7-600">{marca}</h2>

        <p className="text-body-2">{descricao} </p>
      </section>

      <article>
        <article>{name[0].toUpperCase()}</article>{" "}
        <span className="text-body-2-500">{name}</span>
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
