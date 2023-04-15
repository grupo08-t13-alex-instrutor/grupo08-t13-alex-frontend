export interface IcardData {
    src: string,
    marca: string,
    name: string;
    descricao: string,
    km: string,
    ano: string,
    preco: string,
}

export interface iAdvertisement {
    name: string
}

export interface iUser {
    name: string,
    description: string,
    advertisement: iAdvertisement[];
}
