import { ButtonBlue } from "../titleAd/styled"
import { ButtonGrey, SectionComment } from "./styled"

const CreationCommentPageProduct = () => {
    return (
        <>
            <SectionComment className="createComment">
                <article>
                    <article>S</article> <span>Samuel</span>
                </article>

                <form action="">
                    <textarea >asdkjjfjasdjflasdjlfajds askldjdfflajsd alsldjdflkajsdlkfjça sdslkkfjalksdja çssdkfljadsk</textarea>
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