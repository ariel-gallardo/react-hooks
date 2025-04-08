import Chart from "./Chart"
import Product from "./Product"
import Store from "./Store"

export default interface StoreWithChart extends Store{
    currentProducts: Product[] | null
    chart: Chart | null
} 