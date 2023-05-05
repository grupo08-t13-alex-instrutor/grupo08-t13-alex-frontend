import { User } from "../../context";
import instanceAxios from "../../services";
import { CardComment, Section } from "./styled";
import { useContext, useEffect, useState } from "react"; 
import moment from "moment"; 

const Comment = () => {
    const { oneAd } = useContext(User)
        
    const timeComment = ( createdAt: string ) => {
        const startData = moment( createdAt.split('T')[0] );
        const endData = moment();
        const duration = moment.duration( endData.diff( startData ));
        const { _data: { days, hours, minutes, seconds} }: any = duration;
        
        if( days ){ return days > 1 ? `há ${days} dias` : `há ${days} dia` };
        if( hours ){ return hours > 1 ? `há ${hours} horas` : `há ${hours} hora` };
        if( minutes ){ return minutes > 1 ? `há ${minutes} minutos` : `há ${minutes} minuto` };
        if( seconds ){ return `há ${seconds} segundos` };
    }
    const [commentData, setCommentData] = useState<any[]>()

    const getCommentsAboutAd = async () => {
        const res = await instanceAxios.get(`comments/${oneAd}`)
        console.log(res.data)
        setCommentData(res.data.comments)
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
                                commentData.map((data: any) => {
                                    const { comment: { description, createdAt }, user: { name, email } } = data

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