import { useContext, useEffect, useState } from "react";
import AsideAdCards from "../AsideAdPhotos";
import { ContainerAsidePhotos, UlAdAside } from "../AsideAdPhotos/styled";
import AsideAdPageStyled from "./styled";
import { User } from "../../context";
import instanceAxios from "../../services";

const AsideAdPage = () => {

    const { oneAd } = useContext(User)

    const [images, setImages] = useState<any[]>()

    const getImagesAd = async () => {

        const res = await instanceAxios.get(`ads/${oneAd}`)
        setImages(res.data.images)
    }

    useEffect(() => {
        getImagesAd()
    }, [oneAd])

    return (
        <AsideAdPageStyled>
            <>
                <ContainerAsidePhotos>
                    <h5>Fotos</h5>
                    <UlAdAside>
                        {
                            images ?
                                images.map((e: any) => { return <AsideAdCards src={e.link} /> })
                                :
                                <p id="aviso">Esse anúncio não possui mais fotos</p>
                        }
                    </UlAdAside>
                </ContainerAsidePhotos>
            </>
        </AsideAdPageStyled>
    );
};

export default AsideAdPage;
