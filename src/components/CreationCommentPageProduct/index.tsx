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
import { timeComment } from "../Comment"

export const descriptionSchema = yup.object({
    description: yup.string().max(300).required()
})

interface comment {
    description: string
}

const CreationCommentPageProduct = () => {

    const location = useLocation()
    const { getUseInfoData, setComments, comments, oneAd, setOneAd } = useContext(User)
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
        if (localStorage.getItem("token")) {
            const res = await instanceAxios.get(`user/${localStorage.getItem("id")}`)

            const result = await siglaNameUtils(res.data.name)
            setName(res.data.name)
            setSigla(result)
        }
    }

    const onSubmitFunctionCreateComment = async (data: comment) => {

        if (localStorage.getItem("token")) {
            const res = await instanceAxios.post(`comments/${localStorage.getItem("idAds")}`, data)
            setComments([...comments!, { comment: { id: res.data.id, description: res.data.description, createdAt: res.data.createdAt }, user: { name: res.data.user.name, id: res.data.user.id }, advertisement: { id: res.data.advertisement.id } }])
            reset();
        }
    };


    if (location.pathname === "/ad") {
        useEffect(() => {
            callBackSiglaNameUtils()
            if (localStorage.getItem("token")) {
                getUseInfoData()
            }

        }, [])
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