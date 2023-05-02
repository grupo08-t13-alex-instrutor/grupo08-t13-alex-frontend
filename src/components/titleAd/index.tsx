import { useContext, useEffect, useState } from "react"
import { TitleAdContainer, Tag, ButtonBlue } from "./styled"
import { User } from "../../context"
import { useLocation } from "react-router-dom"

interface iCarInformation {
    name: string
    year: string
    mileage: string
    price: string
}

const TitleAd = () => {

    const { getAdsAmount, } = useContext(User)

    const [infoCar, setInfoCar] = useState({
        model: null,
        year: null,
        mileage: null,
        price: null
    })

    const location = useLocation()

    const callBAckGetAdAmount = async () => {
        const { model, year, mileage, price } = await getAdsAmount()
        setInfoCar({
                model: model,
                year: year,
                mileage: mileage,
                price: price
        })
    }

    if (location.pathname === "/ad") {
        useEffect(() => {
            callBAckGetAdAmount()
        }, [])
    }

    return (
        <TitleAdContainer className="TitleAdContainer">
            <div>
                <h2 className="heading-6-600">{infoCar.model}</h2>
                <div className="container">
                    <div>
                        <Tag>{infoCar.year}</Tag>
                        <Tag>{`${infoCar.mileage} KM`}</Tag>
                    </div>
                    <p>{`R$ ${infoCar.price}`}</p>
                </div>
            </div>
            <ButtonBlue>Comprar</ButtonBlue>
        </TitleAdContainer>
    )
}

export default TitleAd