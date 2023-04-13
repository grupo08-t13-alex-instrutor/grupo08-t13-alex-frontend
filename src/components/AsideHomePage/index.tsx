import { useState } from "react";
import Aside from "./styled";

const AsideHomePage = () => {
  const [filter, setfilter] = useState<string[]>([]);

  const handleClick = (e: React.MouseEvent) => {
    const spanText: string = (e.target as HTMLElement).innerText;

    setfilter([...filter, spanText]);
  };

  return (
    <Aside>
      <h4>Marca</h4>
      <div>
        <span onClick={handleClick} className="heading-6-600">
          General Motors
        </span>
        <span onClick={handleClick} className="heading-6-600">
          Fiat
        </span>
        <span onClick={handleClick} className="heading-6-600">
          Ford
        </span>
        <span onClick={handleClick} className="heading-6-600">
          Honda
        </span>
        <span onClick={handleClick} className="heading-6-600">
          Porsche
        </span>
        <span onClick={handleClick} className="heading-6-600">
          Volswagen
        </span>
      </div>

      <h4>Modelo</h4>
      <div>
        <span onClick={handleClick} className="heading-6-600">
          Civic
        </span>
        <span onClick={handleClick} className="heading-6-600">
          Corolla
        </span>
        <span onClick={handleClick} className="heading-6-600">
          Cruze
        </span>
        <span onClick={handleClick} className="heading-6-600">
          Fit
        </span>
        <span onClick={handleClick} className="heading-6-600">
          Gol
        </span>
        <span onClick={handleClick} className="heading-6-600">
          Ka
        </span>
        <span onClick={handleClick} className="heading-6-600">
          Onix
        </span>
        <span onClick={handleClick} className="heading-6-600">
          Porsche 718
        </span>
      </div>

      <h4>Cor</h4>
      <div>
        <span onClick={handleClick} className="heading-6-600">
          Azul
        </span>
        <span onClick={handleClick} className="heading-6-600">
          Branca
        </span>
        <span onClick={handleClick} className="heading-6-600">
          Cinza
        </span>
        <span onClick={handleClick} className="heading-6-600">
          Prata
        </span>
        <span onClick={handleClick} className="heading-6-600">
          Preta
        </span>
        <span onClick={handleClick} className="heading-6-600">
          Verde
        </span>
      </div>

      <h4>Ano</h4>
      <div>
        <span onClick={handleClick} className="heading-6-600">
          2022
        </span>
        <span onClick={handleClick} className="heading-6-600">
          2021
        </span>
        <span onClick={handleClick} className="heading-6-600">
          2018
        </span>
        <span onClick={handleClick} className="heading-6-600">
          2015
        </span>
        <span onClick={handleClick} className="heading-6-600">
          2013
        </span>
        <span onClick={handleClick} className="heading-6-600">
          2012
        </span>
        <span onClick={handleClick} className="heading-6-600">
          2010
        </span>
      </div>

      <h4>Combustível</h4>
      <div>
        <span onClick={handleClick} className="heading-6-600">
          Disel
        </span>
        <span onClick={handleClick} className="heading-6-600">
          Etanol
        </span>
        <span onClick={handleClick} className="heading-6-600">
          Gasolina
        </span>
        <span onClick={handleClick} className="heading-6-600">
          Flex
        </span>
      </div>

      <h4>Km</h4>
      <div className="km">
        <button>Mínima</button>
        <button className="max">Máxima</button>
      </div>

      <h4>Preço</h4>
      <div className="price">
        <button>Mínima</button>
        <button className="max">Máxima</button>
      </div>

      {filter.length ? (
        <button id="cleanFilter" onClick={() => setfilter([])}>
          Limpar Filtros
        </button>
      ) : null}
    </Aside>
  );
};

export default AsideHomePage;
