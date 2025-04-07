import Product from "@models/Product"
import Chart from "./Chart"

export default interface Store{
    page: number | null
    nextPage: number | null
    prevPage: number | null
    products: Product[] | null
    currentProducts: Product[] | null
    chart: Chart | null
}