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
