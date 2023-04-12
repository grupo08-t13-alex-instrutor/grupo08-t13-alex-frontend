import Li from "./styled"

interface IcardData {
    src: string,
    marca: string,
    name: string;
    descricao: string,
    km: string,
    ano: string,
    preco: string,
}

const Cards = ({ src, marca, descricao, km, name, ano, preco }: IcardData) => {
    
    return (
        <Li>
            <div className="teste">
                <img src={src} alt="" />
            </div>

            <section>
                <h2 className="heading-7-600">{marca}</h2>

                <p>{descricao} </p>

            </section>

            <article>
                <article>{name[0].toUpperCase()}</article> <span>{name}</span>
            </article>

            <div>
                <div>
                    <div > {km}</div>
                    <div>{ano} </div>
                </div>
                <strong>{preco}</strong>
            </div>
        </Li>
    )
}

export default Cards