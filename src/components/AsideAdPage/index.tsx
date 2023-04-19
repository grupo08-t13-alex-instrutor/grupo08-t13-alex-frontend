import AsideAdCards from "../AsideAdPhotos";
import { ContainerAsidePhotos, UlAdAside } from "../AsideAdPhotos/styled";
import AsideAdPageStyled from "./styled";

const AsideAdPage = () => {
    return (
        <AsideAdPageStyled>
            <>
                <ContainerAsidePhotos>
                    <h5>Fotos</h5>
                    <UlAdAside>
                        <AsideAdCards
                            src={
                                "https://th.bing.com/th/id/OIP.WqbR7g86tUvTYeXVQFbqkAHaHa?w=153&h=180&c=7&r=0&o=5&pid=1.7"
                            }
                        />
                        <AsideAdCards
                            src={
                                "https://th.bing.com/th/id/OIP.WqbR7g86tUvTYeXVQFbqkAHaHa?w=153&h=180&c=7&r=0&o=5&pid=1.7"
                            }
                        />
                        <AsideAdCards
                            src={
                                "https://th.bing.com/th/id/OIP.WqbR7g86tUvTYeXVQFbqkAHaHa?w=153&h=180&c=7&r=0&o=5&pid=1.7"
                            }
                        />
                        <AsideAdCards
                            src={
                                "https://th.bing.com/th/id/OIP.WqbR7g86tUvTYeXVQFbqkAHaHa?w=153&h=180&c=7&r=0&o=5&pid=1.7"
                            }
                        />
                        <AsideAdCards
                            src={
                                "https://th.bing.com/th/id/OIP.WqbR7g86tUvTYeXVQFbqkAHaHa?w=153&h=180&c=7&r=0&o=5&pid=1.7"
                            }
                        />
                        <AsideAdCards
                            src={
                                "https://th.bing.com/th/id/OIP.WqbR7g86tUvTYeXVQFbqkAHaHa?w=153&h=180&c=7&r=0&o=5&pid=1.7"
                            }
                        />
                    </UlAdAside>
                </ContainerAsidePhotos>
            </>
        </AsideAdPageStyled>
    );
};

export default AsideAdPage;
