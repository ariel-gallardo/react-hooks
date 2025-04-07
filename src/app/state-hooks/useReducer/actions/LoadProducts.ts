import Product from "@models/Product";

export class LoadProducts {
    constructor(data: Product[]) {
        this.data = data;
    }
    data: Product[]
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (data: Product[]) => new LoadProducts(data);