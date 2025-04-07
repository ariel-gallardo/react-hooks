export class ActionRemoveFromChart{
    constructor(productId: number) {
        this.productId = productId;
    }
    productId: number
}
export default (productId: number) => new ActionRemoveFromChart(productId);