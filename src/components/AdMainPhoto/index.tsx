import { useContext, useEffect, useState } from "react";
import MainPhotoAdDiv from "./styled";
import { User } from "../../context";
import { useLocation } from "react-router-dom";


const MainPhotoAdComponent = () => {

    const { getAdsAmount, } = useContext(User)
    const [linkImage, setLinkImage] = useState("")
    const location = useLocation()

    const callBAckGetAdAmount = async () => {
        const response = await getAdsAmount()
        setLinkImage(response.images[0].link)
    }

    if (location.pathname === "/ad") {
        useEffect(() => {
            callBAckGetAdAmount()
        }, [])
    }

    return (
        <>
            <MainPhotoAdDiv>

                <img
                    src={linkImage}
                    alt="car-image"
                />


            </MainPhotoAdDiv>
        </>
    );
};
export default MainPhotoAdComponent;
