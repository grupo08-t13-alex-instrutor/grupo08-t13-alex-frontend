import { User } from "../../context";
import instanceAxios from "../../services";
import { CardComment, Section } from "./styled";
import { useContext, useEffect, useState } from "react";


const Comment = () => {
    const { oneAd, setComments, comments } = useContext(User)

    const [commentData, setCommentData] = useState<any[]>()

    const getCommentsAboutAd = async () => {

        const res = await instanceAxios.get(`comments/${oneAd}`)
        setCommentData(res.data.comments)
        setComments(res.data.comments)


    }


    useEffect(() => {
        getCommentsAboutAd()
    }, [oneAd, localStorage.getItem("token")])

    return (
        <Section>
            <p className="heading-6-600">Comentários</p>
            {
                commentData ?
                    <>
                        <ul>
                            {
                                comments!.map((data: any) => {
                                    const { comment: { description, createdAt }, user: { name } } = data

                                    let siglaName = ""

                                    if (name.includes(" ")) {
                                        const siglaNameSplit = name.split(" ")
                                        siglaName = siglaNameSplit[0][0] + siglaNameSplit[1][0]
                                    } else {
                                        siglaName = name[0]
                                    }

                                    return (
                                        <CardComment bgcolor={"color"}>
                                            <div className="headerComment">
                                                <span className="img">{siglaName}</span>
                                                <p>{name}</p>
                                                <span className="time"> <strong>.</strong>{createdAt.substring(0, 10)}</span>
                                            </div>
                                            <div className="bodyComment">
                                                <p className="body-2-400">{description}</p>
                                            </div>
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
        </Section>
    )
};

export default Comment