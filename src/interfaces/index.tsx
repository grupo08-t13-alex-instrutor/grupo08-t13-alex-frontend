import { ReactNode } from "react";


export interface IcardData {
    src: string,
    marca: string,
    name: string;
    descricao: string,
    km: string,
    ano: string,
    preco: string,
    children: ReactNode
}

export interface iAdvertisement {
    name: string
}

export interface iUser {
    name: string,
    description: string,
    advertisement: iAdvertisement[];
}

export interface iMenuProps {
    topPosition: string
}

export interface IcardAdData {
    src: string
}
