import Chart from "./Chart";
import Product from "./Product";
export default interface ProductStore extends Product{
    dispatch: any
    chart: Chart | null
}