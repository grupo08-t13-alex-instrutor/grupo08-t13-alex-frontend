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
export interface iRecoveriPasswordSendEmail {
    email: string
}
export interface iRecoverPasswordUpdatePassword {
    password: string
}

export interface UserProviderData {
    registerUser: (data: iUserRegisterReq) => void,
    sessionUser: (data: IBodySession) => void,
    updateUser: (data: iUserUpate) => void,
    patchAdressUser: (data: iAddressUpdate) => Promise<any>,
    setIdUser: Dispatch<SetStateAction<string>>,
    setTokenRecoverPassword: Dispatch<SetStateAction<string>>,
    setInfoUserLogin: Dispatch<SetStateAction<iUserInfoUserLogin | undefined>>,
    deleteUser: () => void,
    recoverPasswordUpdatePassword: (data: iRecoverPasswordUpdatePassword) => void,
    recoverPasswordSendEmail: (data: iRecoveriPasswordSendEmail) => void,
    infoUserLogin: iUserInfoUserLogin | undefined,
    idUser: string,
    idAdressUser: string,
    tokenRecoverPassword: string
}

export const User = createContext<UserProviderData>({} as UserProviderData);


function ContextDadosUser({ children }: iInfoUser) {


    const navigate = useNavigate();
    const [infoUserLogin, setInfoUserLogin] = useState<iUserInfoUserLogin>()
    const [idAdressUser, setIdAdressUser] = useState("")
    const [dataAdress, setDataAdress] = useState({})
    const [tokenRecoverPassword, setTokenRecoverPassword] = useState("")
    const [idUser, setIdUser] = useState<string>("")

    const sessionUser = async (data: IBodySession) => {

        const response = await instanceAxios.post("login", data);

        localStorage.removeItem("token")

        localStorage.setItem("token", response.data.token);

        instanceAxios.defaults.headers.authorization = `Bearer ${response.data.token}`;

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

            const responseUser = await instanceAxios.patch(`user`, { ...infoUserLogin, ...data });
            setInfoUserLogin(responseUser.data)
        }
    }

    const getUseInfoData = async () => {
        if (token) {

            const responseUser = await instanceAxios.get("user");
            setInfoUserLogin(responseUser.data)
            setIdAdressUser(responseUser.data.addressId)
        }
    }

    const getIdAdressUser = async () => {
        if (token && idAdressUser !== "") {
            const responseAdress = await instanceAxios.get(`adress/${idAdressUser}`);
            setDataAdress(responseAdress.data)
        }
    }

    const patchAdressUser = async (data: iAddressUpdate): Promise<any> => {
        if (token) {
            const responseAdress = await instanceAxios.patch(`adress`, { ...dataAdress, ...data });

            return responseAdress.data
        }
    }

    const deleteUser = async () => {
        if (token) {
            await instanceAxios.delete(`user`);
        }
    }

    const recoverPasswordSendEmail = async (emailData: iRecoveriPasswordSendEmail) => {
        const responseToeknRecoverPassword = await instanceAxios.post(`forgot/pass`, emailData);

        setTokenRecoverPassword(responseToeknRecoverPassword.data.token)
    }

    const recoverPasswordUpdatePassword = async (passwordData: iRecoverPasswordUpdatePassword) => {
        await instanceAxios.patch(`forgot/pass/${tokenRecoverPassword}`, passwordData);
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
                setInfoUserLogin,
                idAdressUser,
                patchAdressUser,
                deleteUser,
                tokenRecoverPassword,
                setTokenRecoverPassword,
                recoverPasswordSendEmail,
                recoverPasswordUpdatePassword
            }}
        >
            {children}
        </User.Provider>
    );

}


export default ContextDadosUser