import { User } from "../../context";
import instanceAxios from "../../services";
import { CardComment, Section } from "./styled";
import { useContext, useEffect, useState } from "react"; 

const timeComment = ( createdAt: string ) => {    
    const startData = new Date( createdAt.replace('T', " ").replace("Z",'') )
    const nowData = new Date()
    console.log({ startData: startData, nowData: nowData });
    
    const days = nowData.getDay() - startData.getDay()
    if( days && days >= 0 ){ return days > 1 ? `há ${days} dias` : `há ${days} dia` };
    
    const hours = nowData.getHours() - startData.getHours()
    if( hours && hours >= 0 ){ return hours > 1 ? `há ${hours} horas` : `há ${hours} hora` };
    
    const minutes = nowData.getMinutes() - startData.getMinutes()
    if( minutes && minutes >= 0 ){ return minutes > 1 ? `há ${minutes} minutos` : `há ${minutes} minuto` };
    
    const seconds = nowData.getSeconds() - startData.getSeconds()
    if( seconds && seconds >= 0){ return `há ${seconds} segundos` };
}

const Comment = () => {
    const { oneAd } = useContext(User)
    
    const [commentData, setCommentData] = useState<any[]>()

    const getCommentsAboutAd = async () => {
        const res = await instanceAxios.get(`comments/${oneAd}`)
        
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
                                    const { comment: { description, createdAt, id }, user: { name, email } } = data

                                    let siglaName = ""

                                    if (name.includes(" ")) {
                                        const siglaNameSplit = name.split(" ")
                                        siglaName = siglaNameSplit[0][0] + siglaNameSplit[1][0]
                                    } else {
                                        siglaName = name[0]
                                    }

                                    return (
                                        <CardComment bgcolor={"color"} key={id}>
                                            <div className="headerComment">
                                                <span className="img">{siglaName}</span>
                                                <p>{name}</p>
                                                <span className="time"> <strong>.</strong>{ timeComment( createdAt )}</span>
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