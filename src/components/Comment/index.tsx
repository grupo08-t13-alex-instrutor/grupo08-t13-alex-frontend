import { User } from "../../context";
import instanceAxios from "../../services";
import { CardComment, Section } from "./styled";
import { useContext, useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Remove from "../../assets/svg/x.svg";
import { ModalContainer } from "../Header/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import * as  yup from "yup"
import { useForm } from "react-hook-form";

export const timeComment = (createdAt: string): string => {
    const startData = new Date(createdAt.replace('T', " ").replace("Z", ''))
    const nowData = new Date()

    const days = nowData.getDay() - startData.getDay()
    if (days && days >= 0) { return days > 1 ? `há ${days} dias ` : `há {days} dia` };

    const hours = nowData.getHours() - startData.getHours()
    if (hours && hours >= 0) { return hours > 1 ? `há ${hours} horas` : `há ${hours} hora` };

    const minutes = nowData.getMinutes() - startData.getMinutes()
    if (minutes && minutes >= 0) { return minutes > 1 ? `há ${minutes} minutos` : `há ${minutes} minuto ` };

    const seconds = nowData.getSeconds() - startData.getSeconds()
    if (seconds && seconds >= 0) { return `há ${seconds} segundos` };

    return `há 1 segundo`
}

export const description = yup.object().shape({
    description: yup.string().max(300)


});


const Comment = () => {

    const { oneAd, setComments, comments, setOneAd } = useContext(User)
    const [modelEdistdescription, setModelEdistdescription] = useState(false)
    const [idCommentValue, setIdCommentVAlue] = useState("")

    const getCommentsAboutAd = async () => {
        const res = await instanceAxios.get(`comments/${oneAd}`)
        setComments(res.data.comments)
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<any>({
        resolver: yupResolver(description),
    });

    const onSubmitFunction = async (data: any) => {
        if (localStorage.getItem("token")) {
            const commentsReq = await instanceAxios.patch(`comments/${idCommentValue}`, data)
            const filterComment = comments!.filter(e => e.comment.id !== idCommentValue);

            setComments([...filterComment, { comment: { id: commentsReq.data.id, description: commentsReq.data.description, createdAt: await commentsReq.data.createdAt }, user: { name: commentsReq.data.user.name, id: commentsReq.data.user.id } }])

            setModelEdistdescription(false)

            reset();

        }

    };

    useEffect(() => {
        getCommentsAboutAd()
    }, [timeComment])

    return (
        <Section>
            {modelEdistdescription ?
                <ModalContainer id="modal">
                    <>
                        <form action="" onSubmit={handleSubmit(onSubmitFunction)}  >
                            <div>
                                <span>Editar de anuncio</span>
                                <img src={Remove} onClick={() => setModelEdistdescription(false)} />
                            </div>

                            <label htmlFor="">Atualizar comentário</label>
                            <input type="text" id="description" {...register("description")} />
                            <>{errors.description?.message}</>

                            <button> atualizar</button>
                        </form>
                    </>

                </ModalContainer> : null

            }
            <p className="heading-6-600">Comentários</p>
            {
                comments ?
                    <>
                        <ul>
                            {

                                comments!.map((data: any) => {
                                    const { comment: { description, createdAt, id: idComment }, user: { name, id } } = data
                                    let siglaName = ""


                                    if (name.includes(" ")) {
                                        const siglaNameSplit = name.split(" ")
                                        siglaName = siglaNameSplit[0][0] + siglaNameSplit[1][0]
                                    } else {
                                        siglaName = name[0]
                                    }

                                    return (
                                        <CardComment bgcolor={"color"} key={data.id!}>
                                            <div className="headerComment">
                                                <span className="img">{siglaName}</span>
                                                <p>{name}</p>
                                                <span className="time"> <strong>.</strong>{timeComment(createdAt)}</span>
                                            </div>
                                            <div className="bodyComment">
                                                <p className="body-2-400">{description}</p>
                                            </div>
                                            {localStorage.getItem("id") === id && localStorage.getItem("token")
                                                ?
                                                <p>
                                                    <AiFillDelete className="removeComment" onClick={async () => {
                                                        await instanceAxios.delete(`comments/${idComment}`)
                                                        const newComments = comments.filter(e => e.comment.id !== idComment)
                                                        setComments(newComments)
                                                    }}
                                                    />

                                                    <AiFillEdit className="edit" onClick={() => {
                                                        setIdCommentVAlue(idComment)
                                                        setModelEdistdescription(true)
                                                    }} />
                                                </p>
                                                :
                                                null
                                            }
                                        </CardComment>
                                    )
                                })
                            }
                        </ul>
                    </>
                    :
                    <>
                        <p className="body-2-400">Nenhum cometário até o momento! Seja o primeiro a deixar o seu feedback.</p>
                    </>
            }
        </Section >
    )
};

export default Comment