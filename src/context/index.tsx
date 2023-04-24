import { createContext, useEffect, useState } from "react";
import { IBodySession } from "../interfaces/session";
import { iAdressRequest } from "../interfaces/adresses";
import { iUserRegisterReq } from "../interfaces/register";
import { useNavigate } from "react-router-dom";
import instanceAxios from "../services";

export interface iInfoUser {
    children: React.ReactNode;
}

export interface UserProviderData {
    registerUser: (data: iUserRegisterReq) => void,
    sessionUser: (data: IBodySession) => void,
}


export const User = createContext<UserProviderData>({} as UserProviderData);


function ContextDadosUser({ children }: iInfoUser) {

    const navigate = useNavigate();
    const [infoUserLogin, setInfoUserLogin] = useState({})
    const [idAdressUser, setIdAdressUser] = useState("")

    const sessionUser = async (data: IBodySession) => {

        const response = await instanceAxios.post("login", data);

        localStorage.removeItem("token")

        localStorage.setItem("token", response.data.token);
    }

    const token = localStorage.getItem("token");

    const registerUser = async (data: iUserRegisterReq) => {
        const {
            cep,
            state,
            city,
            street,
            number,
            complement,
            name,
            cpf,
            email,
            password,
            telephone,
            date_of_birth,
            description,
            buyer,
        } = data

        const registerAdress = {
            "cep": cep,
            "state": state,
            "city": city,
            "street": street,
            "number": number,
            "complement": complement
        }

        const responseAdress = await instanceAxios.post("adress", registerAdress);

        const registerUser = {
            "name": name,
            "cpf": cpf,
            "email": email,
            "password": password,
            "telephone": telephone,
            "date_of_birth": date_of_birth,
            "description": description,
            "buyer": buyer,
            "addressId": responseAdress.data.id
        }

        await instanceAxios.post("user", registerUser);

        navigate("/login")
    }

    const getUseInfoData = async () => {
        if (token) {
            instanceAxios.defaults.headers.authorization = `Bearer ${token}`;
            const responseUser = await instanceAxios.get("user");
            setInfoUserLogin(responseUser.data)
            setIdAdressUser(responseUser.data.addressId)
        }
    }

    const getIdAdressUser = async () => {
        if (token && idAdressUser !== "") {
            instanceAxios.defaults.headers.authorization = `Bearer ${token}`;
            const adressData = await instanceAxios.get(`adress/${idAdressUser}`);
            console.log(adressData.data)
        }
    }

    if (token) {
        useEffect(() => {
            getUseInfoData();
            getIdAdressUser();
        }, [token]);

    }

    return (
        <User.Provider
            value={{
                sessionUser,
                registerUser
            }}
        >
            {children}
        </User.Provider>
    );

}


export default ContextDadosUser