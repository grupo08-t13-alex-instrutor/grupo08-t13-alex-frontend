import { useContext, useEffect, useState } from "react"
import { TitleAdContainer, Tag, ButtonBlue } from "./styled"
import { IAdResponse, User } from "../../context"
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom"
import { iUserInfoUserLogin } from "../../interfaces/register/index"
import { iCarInformation } from "../../interfaces/ads"

const buyer = async ( 
    getAdsAmount: () => Promise<IAdResponse>, 
    infoUserLogin: iUserInfoUserLogin | undefined,
    navigate: NavigateFunction
) => {
    return infoUserLogin ?
        await getAdsAmount()
            .then( ({ user: { telephone } }) => {
                const phoneAd = telephone.replace(/[()-]/g, "")
                return window.open(`https://api.whatsapp.com/send?1=pt_BR&phone=${phoneAd}`)
            })
            .catch( err => console.log( err ))
    :
        navigate('/login')
}

const TitleAd = () => {
    const { getAdsAmount, infoUserLogin } = useContext(User)
    const navigate = useNavigate();

    const [infoCar, setInfoCar] = useState<iCarInformation>({
        model: '',
        year: '',
        mileage: 0,
        price: 0
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
            <ButtonBlue onClick={ () => buyer( getAdsAmount, infoUserLogin, navigate ) }>Comprar</ButtonBlue>
        </TitleAdContainer>
    )
}

export default TitleAd