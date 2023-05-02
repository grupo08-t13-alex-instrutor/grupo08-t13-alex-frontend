import { ReactNode } from "react";


export interface IcardData {
    src: string,
    marca: string,
    name: string;
    descricao: string,
    km: string,
    ano: string,
    preco: string,
    siglaNanme: string,
    children: ReactNode,
    idAmount?: string,
    idAds?: string,
    onClick?: () => void,
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

interface img {
    id: string,
    link: string
}

export interface IAdversamentsGet {
    user: {
        buyer: boolean,
        description: boolean,
        date_of_birth: boolean,
        telephone: boolean,
        email: boolean,
        cpf: boolean,
        name: boolean,
        id: boolean,
    },
    images: img[],
    createdAt: string,
    published: boolean,
    description: string,
    price: number,
    color: string,
    mileage: number,
    fuel: number,
    year: string,
    model: string,
    brand: string,
    id: string
}
