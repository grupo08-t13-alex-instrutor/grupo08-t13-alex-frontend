import SectionComment from "./styled"

SectionComment

const CreationCommentPageProduct = () => {


    return (
        <>
            <SectionComment className="createComment">
                <article>
                    <article>S</article> <span>Samuel</span>
                </article>

                <form action="">
                    <textarea ></textarea>
                    <div>
                        <button>
                            Comentar
                        </button>
                    </div>
                </form>

                <div>
                    <button id="gosteiMuito">Gostei muito!</button>
                    <button id="incrivel">Incrível</button>
                    <button id="recomendarei">Recomendarei para meus amigos!</button>
                </div>
            </SectionComment>
        </>
    )


}

export default CreationCommentPageProduct