import { TitleAdContainer, Tag, ButtonBlue } from "./styled"

interface iCarInformation {
    name: string
    year: string
    mileage: string
    price: string
}

const TitleAd = () => {
    let carInformation: iCarInformation = {
        name: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 ",
        year: "2013",
        mileage: "0",
        price: "00.000,00"
    }

    const { name, year, mileage, price } = carInformation;

    return (
        <TitleAdContainer className="TitleAdContainer">
            <div>
                <h2 className="heading-6-600">{name}</h2>
                <div className="container">
                    <div>
                        <Tag>{year}</Tag>
                        <Tag>{`${mileage} KM`}</Tag>
                    </div>
                    <p>{`R$ ${price}`}</p>
                </div>
            </div>
            <ButtonBlue>Comprar</ButtonBlue>
        </TitleAdContainer>
    )
}

export default TitleAd