import { useContext, useEffect, useState } from "react"
import { User } from "../../context"
import instanceAxios from "../../services"
import { siglaNameUtils } from "../../utils"
import StyledAdvertiserCard from "./styled"
import { useNavigate } from "react-router-dom"


export const AdvertiserCard = () => {
    const { oneAd, setIdUser } = useContext(User)
    const [sigla, setSigla] = useState<string>()
    const [name, setName] = useState<string>()
    const [description, setDescription] = useState<string>()
    const [idAmount, setIdAmmount] = useState<string>()
    const navigate = useNavigate()

    const callBackSiglaNameUtils = async () => {
        const res = await instanceAxios.get(`ads/${oneAd}`)

        const result = await siglaNameUtils(res.data.user.name)
        setName(res.data.user.name)
        setDescription(res.data.user.description)
        setIdAmmount(res.data.user.id)
        setSigla(result)
        sessionStorage.setItem('sigla', result);
        sessionStorage.setItem('name', res.data.user.name);
        sessionStorage.setItem('description', res.data.user.description);

    }

    useEffect(() => {
        callBackSiglaNameUtils()
    }, [sessionStorage.getItem('sigla'), sessionStorage.getItem('name'), sessionStorage.getItem('description')])


    return (
        <StyledAdvertiserCard>
            <div className="container">
                <div className="userIdent">
                    <div className="userReference">
                        <h2>{sessionStorage.getItem('sigla')}</h2>
                    </div>
                    <h4>{sessionStorage.getItem('name')}</h4>
                </div>

                <p>{sessionStorage.getItem('description')}</p>
                <button className="buttonAds" onClick={() => {
                    if (location.pathname === "/ad") {
                        navigate("/profile/user")
                        const valor: string | undefined = idAmount;
                        setIdUser(valor ? valor : "");

                    }
                }}>Ver todos os anúncios</button>
            </div>
        </StyledAdvertiserCard>
    )

}