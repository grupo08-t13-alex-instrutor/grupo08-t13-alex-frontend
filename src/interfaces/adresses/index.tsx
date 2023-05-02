export interface iAdressRequest {
    cep: string;
    state: string;
    city: string;
    street: string;
    number: number;
    complement: string;
}

export interface iAddressResponse {
    data: {
        id: string;
        cep: string;
        state: string;
        city: string;
        street: string;
        number: string;
        complement: string;
    }
}

export interface iAddressUpdate {
    cep?: string;
    state?: string;
    city?: string;
    street?: string;
    number?: string;
    complement?: string;
}