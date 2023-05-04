import { CardComment, Section } from "./styled";
import { useState } from "react";
import moment from "moment";

interface iData {
    img: string,
    name: string,
    comment: string,
    time: string,
    color: string
}

const Comment = () => {
    let data: iData[] = [
        {
            img: "JL",
            name: "Julia Lima",
            comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            time: "há 3 dias",
            color: "#E34D8C",
        },
        {
            img: "MA",
            name: "Marcos Antôno",
            comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            time: "há 7 dias",
            color: "#7000FF",
        },
        {
            img: "CS",
            name: "Camila Silva",
            comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            time: "há 1 mês",
            color: "#153D2E",
        }
    ];

    const [commentData, setCommentData] = useState<iData[]>(data)
    
    const timeComment = () => {
        const startData = moment( "2023-04-27T19:17:08.597Z".split('T')[0] );
        const endData = moment();
        const duration = moment.duration( endData.diff( startData ));
        const { _data: { days, hours, minutes, seconds} }: any = duration;
        
        if( days ){ return days > 1 ? `há ${days} dias` : `há ${days} dia` };
        if( hours ){ return hours > 1 ? `há ${hours} horas` : `há ${hours} hora` };
        if( minutes ){ return minutes > 1 ? `há ${minutes} minutos` : `há ${minutes} minuto` };
        if( seconds ){ return `há ${seconds} segundos` };
    }

    return(
        <Section>
            <p className="heading-6-600">Comentários</p>
            {
                commentData.length > 0 ?
                    <>
                        <ul>
                            {
                                commentData.map( data => {
                                    const { img, name, comment, time, color } = data

                                    return(
                                        <CardComment bgcolor={color}>
                                            <div className="headerComment">
                                                <span className="img">{ img }</span>
                                                <p>{ name }</p>
                                                <span className="time">{ time }</span>
                                            </div>
                                            <div className="bodyComment">
                                                <p className="body-2-400">{ comment }</p>
                                            </div>
                                        </CardComment>
                                    )
                                } )
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