import { iImageRequest } from "../image"

export interface iAdRequest {
    brand: string
    model: string
    year: string
    fuel: string
    mileage: number
    color: string
    price: number
    description: string
    images: iImageRequest[]
}
