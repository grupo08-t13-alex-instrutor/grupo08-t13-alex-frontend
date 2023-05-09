import { iImageRequest } from "../image"

export interface iAdRequest {
    brand: string
    model: string
    year: string
    fuel: string
    mileage: string
    color: string
    price: string
    description: string
    images: iImageRequest[]
}

export interface iCarInformation {
    model: string
    year: string
    mileage: number
    price: number
}