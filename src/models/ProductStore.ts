import Chart from "./Chart";
import Product from "./Product";
export default interface ProductStore extends Product{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: any
    chart: Chart | null
}