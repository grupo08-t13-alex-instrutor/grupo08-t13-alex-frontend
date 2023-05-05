import { useContext, useEffect, useState } from "react"
import { ButtonBlue } from "../titleAd/styled"
import { ButtonGrey, SectionComment } from "./styled"
import { User } from "../../context"
import { siglaNameUtils } from "../../utils"
import instanceAxios from "../../services"
import { useLocation } from "react-router-dom"

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

export const descriptionSchema = yup.object({
    description: yup.string().max(300).required()
})

interface comment {
    description: string
}

const CreationCommentPageProduct = () => {

    const location = useLocation()
    const { getUseInfoData, setComments, comments, oneAd } = useContext(User)
    const [sigla, setSigla] = useState<string>()
    const [name, setName] = useState<string>()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<comment>({
        resolver: yupResolver(descriptionSchema),
    });

    const callBackSiglaNameUtils = async () => {
        const res = await instanceAxios.get(`user/${localStorage.getItem("id")}`)

        const result = await siglaNameUtils(res.data.name)
        setName(res.data.name)
        setSigla(result)
    }

    const onSubmitFunctionCreateComment = async (data: comment) => {

        if (localStorage.getItem("token")) {
            console.log(data)
            const res = await instanceAxios.post(`comments/${oneAd}`, data)

            setComments([...comments!, { comment: { description: res.data.description, createdAt: res.data.createdAt }, user: { name: res.data.user.name } }])

            reset();
        }

    };

    if (location.pathname === "/ad") {
        useEffect(() => {
            callBackSiglaNameUtils()
            if (localStorage.getItem("token")) {
                getUseInfoData()
            }

        }, [location.pathname])
    }

    return (
        <>
            <SectionComment className="createComment">
                <article>
                    <article>{sigla}</article> <span>{name}</span>
                </article>

                <form action="" onSubmit={handleSubmit(onSubmitFunctionCreateComment)} >
                    <textarea placeholder="Digite seu comentário" id="description"  {...register("description")}></textarea>
                    <ButtonBlue type="submit" >Comentar</ButtonBlue>
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