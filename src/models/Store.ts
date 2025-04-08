import Product from "@models/Product"

export default interface Store{
    page: number | null
    nextPage: number | null
    prevPage: number | null
    products: Product[] | null
}