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

export interface iUserInfoUserLogin {
    addressId: string,
    updatedAt: string,
    createdAt: string,
    buyer: boolean,
    description: string,
    date_of_birth: string,
    telephone: string,
    email: string,
    cpf: string,
    name: string,
    id: string
}

export interface iUserUpate {
    name?: string;
    cpf?: string;
    email?: string;
    telephone?: string;
    date_of_birth?: string;
    description?: string;
}



