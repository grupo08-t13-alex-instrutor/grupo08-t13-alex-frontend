import { CardComment, Section } from "./styled";
import { useState } from "react";

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