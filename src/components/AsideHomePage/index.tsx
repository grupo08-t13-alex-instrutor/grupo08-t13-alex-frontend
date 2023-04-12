import { useState } from "react";
import Aside from "./styled"

const AsideHomePage = () => {

    const [filter, setfilter] = useState<string[]>([])

    const handleClick = (e: React.MouseEvent) => {

        const spanText: string = (e.target as HTMLElement).innerText;

        setfilter([...filter, spanText])

    };

    return (
        <Aside>
            <h4>Marca</h4>
            <div>
                <span onClick={handleClick}>General Motors</span>
                <span onClick={handleClick}>Fiat</span>
                <span onClick={handleClick}>Ford</span>
                <span onClick={handleClick}>Honda</span>
                <span onClick={handleClick}>Porsche</span>
                <span onClick={handleClick}>Volswagen</span>
            </div>

            <h4>Modelo</h4>
            <div>
                <span onClick={handleClick}>Civic</span>
                <span onClick={handleClick}>Corolla</span>
                <span onClick={handleClick}>Cruze</span>
                <span onClick={handleClick}>Fit</span>
                <span onClick={handleClick}>Gol</span>
                <span onClick={handleClick}>Ka</span>
                <span onClick={handleClick}>Onix</span>
                <span onClick={handleClick}>Porsche 718</span>
            </div>

            <h4>Cor</h4>
            <div>
                <span onClick={handleClick}>Azul</span>
                <span onClick={handleClick}>Branca</span>
                <span onClick={handleClick}>Cinza</span>
                <span onClick={handleClick}>Prata</span>
                <span onClick={handleClick}>Preta</span>
                <span onClick={handleClick}>Verde</span>
            </div>

            <h4>Ano</h4>
            <div>
                <span onClick={handleClick}>2022</span>
                <span onClick={handleClick}>2021</span>
                <span onClick={handleClick}>2018</span>
                <span onClick={handleClick}>2015</span>
                <span onClick={handleClick}>2013</span>
                <span onClick={handleClick}>2012</span>
                <span onClick={handleClick}>2010</span>
            </div>

            <h4>Combustível</h4>
            <div>
                <span onClick={handleClick}>Disel</span>
                <span onClick={handleClick}>Etanol</span>
                <span onClick={handleClick}>Gasolina</span>
                <span onClick={handleClick}>Flex</span>
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

            {filter.length ? <button id="cleanFilter" onClick={() => setfilter([])}>Limpar Filtros</button> : null}

        </Aside>
    )
}

export default AsideHomePage