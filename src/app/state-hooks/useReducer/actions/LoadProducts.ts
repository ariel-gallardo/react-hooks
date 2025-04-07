import Product from "@models/Product";

export class LoadProducts {
    constructor(data: Product[]) {
        this.data = data;
    }
    data: Product[]
}
export default (data: Product[]) => new LoadProducts(data);