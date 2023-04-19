import StyledAdvertiserCard from "./styled"
export const AdvertiserCard = () => {
    return (
        <StyledAdvertiserCard>
            <div className="container">
                <div className="userIdent">
                    <div className="userReference">
                        <h2>SL</h2>
                    </div>
                    <h4>Samuel Leão</h4>
                </div>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae repudiandae delectus eveniet esse est veritatis iure quam natus hic laudantium, harum minus eum ducimus suscipit, corporis dolores error quas praesentium?</p>
                <button className="buttonAds">Ver todos os anúncios</button>
            </div>
        </StyledAdvertiserCard>
    )

}