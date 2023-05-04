import { useContext, useEffect, useState } from "react"
import { ButtonBlue } from "../titleAd/styled"
import { ButtonGrey, SectionComment } from "./styled"
import { User } from "../../context"
import { siglaNameUtils } from "../../utils"
import instanceAxios from "../../services"
import { useLocation } from "react-router-dom"

const CreationCommentPageProduct = () => {

    const location = useLocation()
    const { infoUserLogin } = useContext(User)
    const [sigla, setSigla] = useState<string>()
    const [name, setName] = useState<string>()


    const callBackSiglaNameUtils = async () => {
        const res = await instanceAxios.get(`user/${infoUserLogin!.id}`)

        const result = await siglaNameUtils(res.data.name)
        setName(res.data.name)
        setSigla(result)
    }

    if (location.pathname === "/ad") {
        useEffect(() => {
            callBackSiglaNameUtils()

        }, [location.pathname])
    }

    return (
        <>
            <SectionComment className="createComment">
                <article>
                    <article>{sigla}</article> <span>{name}</span>
                </article>

                <form action="">
                    <textarea placeholder="Digite seu comentário"></textarea>
                    <ButtonBlue>Comentar</ButtonBlue>
                </form>

                <div>
                    <ButtonGrey>Gostei muito!</ButtonGrey>
                    <ButtonGrey>Incrível</ButtonGrey>
                    <ButtonGrey>Recomendarei para meus amigos!</ButtonGrey>
                </div>
            </SectionComment>
        </>
    )
}

export default CreationCommentPageProduct