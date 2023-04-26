import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { IBodySession } from "../interfaces/session";
import { iAddressUpdate, iAdressRequest } from "../interfaces/adresses";
import { iUserInfoUserLogin, iUserRegisterReq } from "../interfaces/register";
import { useNavigate, useLocation } from "react-router-dom";
import instanceAxios from "../services";
import { iUserUpate } from "../interfaces/register";
import { IAdversamentsGet } from "../interfaces";

export interface iInfoUser {
    children: React.ReactNode;
}

export interface UserProviderData {
    registerUser: (data: iUserRegisterReq) => void,
    sessionUser: (data: IBodySession) => void,
    updateUser: (data: iUserUpate) => void,
    patchAdressUser: (data: iAddressUpdate) => Promise<any>,
    infoUserLogin: iUserInfoUserLogin | undefined,
    idUser: string,
    setIdUser: Dispatch<SetStateAction<string>>,
    idAdressUser: string,
    dataAdress: {},
    setDataAdress: Dispatch<SetStateAction<{}>>
}

export const User = createContext<UserProviderData>({} as UserProviderData);


function ContextDadosUser({ children }: iInfoUser) {


    const navigate = useNavigate();
    const [infoUserLogin, setInfoUserLogin] = useState<iUserInfoUserLogin>()
    const [idAdressUser, setIdAdressUser] = useState("")
    const [dataAdress, setDataAdress] = useState({})
    const [idUser, setIdUser] = useState<string>("")

    const sessionUser = async (data: IBodySession) => {

        const response = await instanceAxios.post("login", data);

        localStorage.removeItem("token")

        localStorage.setItem("token", response.data.token);

        navigate("/homepage")

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

    const updateUser = async (data: iUserUpate) => {
        if (token) {
            instanceAxios.defaults.headers.authorization = `Bearer ${token}`;
            const responseUser = await instanceAxios.patch(`user`, { ...infoUserLogin, ...data });
            setInfoUserLogin(responseUser.data)
        }
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
            const responseAdress = await instanceAxios.get(`adress/${idAdressUser}`);
            setDataAdress(responseAdress.data)
        }
    }

    const patchAdressUser = async (data: iAddressUpdate): Promise<any> => {
        if (token) {
            console.log(data)
            instanceAxios.defaults.headers.authorization = `Bearer ${token}`;
            const responseAdress = await instanceAxios.patch(`adress`, { ...dataAdress, ...data });
            console.log(responseAdress.data)

            return responseAdress.data
        }
    }

    useEffect(() => {

        if (token) {
            getUseInfoData();
            getIdAdressUser();
        }

    }, [token]);


    return (
        <User.Provider
            value={{
                sessionUser,
                registerUser,
                updateUser,
                infoUserLogin,
                idUser,
                setIdUser,
                idAdressUser,
                dataAdress,
                setDataAdress,
                patchAdressUser
            }}
        >
            {children}
        </User.Provider>
    );

}


export default ContextDadosUser