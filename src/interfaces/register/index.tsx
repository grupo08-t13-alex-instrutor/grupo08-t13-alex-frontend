import { iAdressRequest } from "../adresses";

export interface iUserRegisterValidatedReq {
    name: string;
    cpf: string;
    email: string;
    password: string;
    telephone: string;
    date_of_birth: string;
    description: string;
    buyer?: boolean;
    cep: string;
    state: string;
    city: string;
    street: string;
    number: number;
    complement: string;
    confirmPassword: string;

}


export interface iUserRegisterReq {
    name: string;
    cpf: string;
    email: string;
    password: string;
    telephone: string;
    date_of_birth: string;
    description: string;
    buyer?: boolean;
    cep: string;
    state: string;
    city: string;
    street: string;
    number: number;
    complement: string;
}



